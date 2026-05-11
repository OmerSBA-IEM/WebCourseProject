document.addEventListener("DOMContentLoaded", function () {

    // Check authentication and redirect if user is not logged in 
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
        window.location.href = "index.html";
        return;
    }
    // DOM Element References 
    const restaurantName = document.getElementById("restaurantName");
    const restaurantDescription = document.getElementById("restaurantDescription");
    const selectedRestaurantName = document.getElementById("selectedRestaurantName");
    const selectedRestaurantAddress = document.getElementById("selectedRestaurantAddress");
    const menuResults = document.getElementById("menuResults");
    const menuSubtitle = document.getElementById("menuSubtitle");

    const selectedRestaurantId = localStorage.getItem("selectedRestaurantId");
    const userPreferences = getUserPreferences();

    // Handle cases where no restaurant is selected 
    if (!selectedRestaurantId) {
        showNoRestaurantSelected();
        return;
    }

    const restaurant = restaurantsData.find(function (item) {
        return item.id === Number(selectedRestaurantId);
    });

    if (!restaurant) {
        showNoRestaurantSelected();
        return;
    }

    renderRestaurantDetails(restaurant);
    renderMenuDishes(restaurant.menu);

    // Retrieves user preferences from the session/localStorage. 
    function getUserPreferences() {
        if (currentUser.preferences) {
            return {
                dietary: currentUser.preferences.dietary || [],
                allergens: currentUser.preferences.allergens || [],
                dislikes: currentUser.preferences.dislikes || []
            };
        }

        return {
            dietary: [],
            allergens: [],
            dislikes: []
        };
    }

    function getAllUserPreferenceKeys() {
        return [
            ...userPreferences.dietary,
            ...userPreferences.allergens,
            ...userPreferences.dislikes
        ];
    }

    // Updates the UI with specific restaurant info and the count of relevant dishes.
    function renderRestaurantDetails(restaurant) {
        const selectedCity = localStorage.getItem("selectedCity");
        const restaurantAddress = restaurant.address[selectedCity] || "כתובת לא זמינה";

        restaurantName.textContent = restaurant.name;
        restaurantDescription.textContent = restaurant.description;

        selectedRestaurantName.textContent = restaurant.name;
        selectedRestaurantAddress.textContent = restaurantAddress;

        const relevantDishesCount = countRelevantDishes(restaurant.menu);

        menuSubtitle.textContent =
            "בתפריט של " + restaurant.name + " נמצאו " +
            relevantDishesCount + " מנות רלוונטיות עבורך.";
    }

    // Filters and renders the menu items based on the matching logic. 
    function renderMenuDishes(menu) {
        menuResults.innerHTML = "";

        const relevantDishes = menu.filter(function (dish) {
            return isDishRelevant(dish);
        });

        // Empty state view 
        if (relevantDishes.length === 0) {
            menuResults.innerHTML = `
            <div class="empty-state">
                <span>⌖</span>
                <h3>לא נמצאו מנות מתאימות</h3>
                <p>
                    לא נמצאו מנות שתואמות את ההעדפות שהגדרת.
                    אפשר לחזור לעמוד ההעדפות ולעדכן את הבחירות.
                </p>
                <a href="preferences.html" class="back-btn">עדכון העדפות</a>
            </div>
        `;
            return;
        }

        // Build dish cards 
        relevantDishes.forEach(function (dish) {
            const relevantNotes = getRelevantNotes(dish);
            const relevantAllergens = getRelevantAllergens(dish);

            const card = document.createElement("article");
            card.className = "dish-card";

            card.innerHTML = `
            <img src="${dish.image}" alt="תמונה של ${dish.name}" onerror="this.src='images/hero-food.jpg'">

            <div>
                <div class="dish-top-row">
                    <div>
                        <h3>${dish.name}</h3>
                        <p>${dish.description}</p>
                    </div>

                    <div class="dish-price">₪${dish.price}</div>
                </div>

                <div class="dish-meta">
                    <span class="meta-pill">${dish.category}</span>
                    ${createDietaryTags(dish.dietary)}
                </div>

                ${createDishInfoBox(relevantAllergens, relevantNotes)}
            </div>
        `;

            menuResults.appendChild(card);
        });
    }

    function countRelevantDishes(menu) {
        return menu.filter(function (dish) {
            return isDishRelevant(dish);
        }).length;
    }

    /* Core Constraint Engine:
     * Checks if a dish is suitable based on dietary needs, allergies, and dislikes.*/
    function isDishRelevant(dish) {
        const userKeys = getAllUserPreferenceKeys();

        // If no preferences are set, all dishes are considered relevant 
        if (userKeys.length === 0) {
            return true;
        }
        // 1. Dietary Check 
        const dietaryIsOk = userPreferences.dietary.every(function (preference) {
            return dish.dietary.includes(preference) || hasNoteForPreference(dish, preference);
        });

        // 2. Allergy Check 
        const allergenKeys = getRelevantAllergenKeys();

        const allergensAreOk = allergenKeys.every(function (allergen) {
            const dishHasAllergen = dish.allergens.includes(allergen);

            if (!dishHasAllergen) {
                return true;
            }

            return hasNoteForPreference(dish, allergen);
        });

        // 3. Disliked Ingredients Check 
        const dislikesAreOk = userPreferences.dislikes.every(function (dislike) {
            const dishHasDislike = dish.ingredients.includes(dislike);

            if (!dishHasDislike) {
                return true;
            }

            return hasNoteForPreference(dish, dislike);
        });

        return dietaryIsOk && allergensAreOk && dislikesAreOk;
    }

    // Helper: Checks if a dish has a customization note for a specific constraint 
    function hasNoteForPreference(dish, preferenceKey) {
        return dish.customization.notes.some(function (note) {
            const noteKeys = note.slice(1);

            return noteKeys.includes(preferenceKey);
        });
    }

    function getRelevantNotes(dish) {
        const userKeys = getAllUserPreferenceKeys();
        const relevantNotes = [];

        dish.customization.notes.forEach(function (note) {
            const noteText = note[0];
            const noteKeys = note.slice(1);

            const hasRelevantPreference = noteKeys.some(function (key) {
                return userKeys.includes(key);
            });

            if (hasRelevantPreference) {
                relevantNotes.push(noteText);
            }
        });

        return relevantNotes;
    }

    // Mapping user dietary preferences to core allergens 
    function getRelevantAllergens(dish) {
        const relevantAllergenKeys = getRelevantAllergenKeys();

        return dish.allergens.filter(function (allergen) {
            return relevantAllergenKeys.includes(allergen);
        });
    }

    function getRelevantAllergenKeys() {
        const userKeys = getAllUserPreferenceKeys();
        const relevantAllergens = [...userPreferences.allergens];

        if (userKeys.includes("lactose-free")) {
            relevantAllergens.push("milk");
        }

        if (userKeys.includes("gluten-free")) {
            relevantAllergens.push("gluten");
        }

        return relevantAllergens;
    }

    // UI Helper: Creates information boxes for allergen alerts or dietary notes.
    function createDishInfoBox(relevantAllergens, relevantNotes) {
        if (relevantNotes.length === 0) {
            return "";
        }

        let html = `<div class="dish-info-box">`;

        html += createRelevantNotesHtml(relevantNotes);

        html += `</div>`;

        return html;
    }

    function createRelevantNotesHtml(relevantNotes) {
        let html = `
            <div class="relevant-notes">
                <p><strong>התאמות רלוונטיות עבורך:</strong></p>
                <ul>
        `;

        relevantNotes.forEach(function (noteText) {
            html += `<li>${noteText}</li>`;
        });

        html += `
                </ul>
            </div>
        `;

        return html;
    }

    // UI Label Converters 
    function createDietaryTags(dietaryArray) {
        const labels = {
            "vegan": "טבעוני",
            "vegetarian": "צמחוני",
            "gluten-free": "ללא גלוטן",
            "lactose-free": "ללא לקטוז"
        };

        return dietaryArray.map(function (item) {
            return `<span class="meta-pill">${labels[item] || item}</span>`;
        }).join("");
    }

    function createAllergensText(allergensArray) {
        const labels = {
            "gluten": "גלוטן",
            "milk": "חלב",
            "egg": "ביצים",
            "soy": "סויה",
            "sesame": "שומשום",
            "tree-nuts": "אגוזים",
            "fish": "דגים",
            "peanuts": "בוטנים",
            "peas": "אפונה"
        };

        return allergensArray.map(function (item) {
            return labels[item] || item;
        }).join(", ");
    }

    // Error Handling View: User redirected to navigation if data is missing.
    function showNoRestaurantSelected() {
        restaurantName.textContent = "לא נבחרה מסעדה";
        restaurantDescription.textContent =
            "כדי לראות תפריט, חזרו לעמוד המסעדות ובחרו מסעדה.";

        selectedRestaurantName.textContent = "לא נבחרה מסעדה";
        selectedRestaurantAddress.textContent = "";

        menuSubtitle.textContent = "אין מסעדה להצגה.";

        menuResults.innerHTML = `
            <div class="empty-state">
                <span>⌖</span>
                <h3>אין מסעדה להצגה</h3>
                <p>חזרו לעמוד בחירת המסעדות ובחרו מסעדה מהרשימה.</p>
                <a href="restaurants.html" class="back-btn">חזרה לבחירת מסעדה</a>
            </div>
        `;
    }
});