document.addEventListener("DOMContentLoaded", function () {

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) { // If no user is logged in, redirect to the login page
        window.location.href = "index.html";
        return;
    }

    const restaurantPreferencesTitle = document.getElementById("restaurantPreferencesTitle");
    if (restaurantPreferencesTitle) {
        restaurantPreferencesTitle.textContent = "העדפות של " + currentUser.fullName;
    }
// Get the main HTML elements used on the restaurants page    const citySelect = document.getElementById("citySelect");
    const locationForm = document.getElementById("locationForm");
    const locationMessage = document.getElementById("locationMessage");
    const restaurantsList = document.getElementById("restaurantsList");
    const restaurantsSection = document.getElementById("restaurantsSection");
    const resultsTitle = document.getElementById("resultsTitle");
    const resultsSubtitle = document.getElementById("resultsSubtitle");

    if (!citySelect || !locationForm || !restaurantsList) {
        return;
    }

    const cityNames = { // Translate city keys into Hebrew city names for display
        "beer-sheva": "באר שבע",
        "haifa": "חיפה",
        "ashdod": "אשדוד",
        "tel-aviv": "תל אביב"
    };

    const userPreferences = getUserPreferences(); // Load the user's saved preferences and display them on the page
    renderUserPreferencesBox();

    locationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const selectedCity = citySelect.value; // Get the city selected by the user

        if (!selectedCity) { // Show an error message if the user did not select a city
            restaurantsList.innerHTML = `
                <div class="empty-state">
                    <span>⌖</span>
                    <h3>לא נבחרה עיר</h3>
                    <p>בחרו עיר מהרשימה כדי לראות מסעדות.</p>
                </div>
            `;

            locationMessage.textContent = "צריך לבחור עיר כדי להציג מסעדות.";
            return;
        }

        localStorage.setItem("selectedCity", selectedCity); // Save the selected city so the menu page can use it later
// Filter restaurants that are available in the selected city
        const filteredRestaurants = restaurantsData.filter(function (restaurant) {
            return restaurant.cities.includes(selectedCity);
        });

        renderRestaurants(filteredRestaurants, selectedCity);

        restaurantsSection.scrollIntoView({ // Scroll down to the restaurants results section
            behavior: "smooth",
            block: "start"
        });
    });
// Return the saved preferences of the logged-in user
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
// Combine all user preference types into one list
    function getAllUserPreferenceKeys() {
        return [
            ...userPreferences.dietary,
            ...userPreferences.allergens,
            ...userPreferences.dislikes
        ];
    }
// Build the list of allergens that should be checked for this user
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
// Count how many dishes match the user's preferences
    function countRelevantDishes(menu) {
        return menu.filter(function (dish) {
            return isDishRelevant(dish);
        }).length;
    }

/*Check whether a dish is relevant to the user's preferences:
A dish is relevant only if it matches the user's dietary preferences,
does not contain problematic allergens,
and does not contain disliked ingredients,
unless there is a customization note explaining that the ingredient can be removed or replaced.*/
function isDishRelevant(dish) {
        const userKeys = getAllUserPreferenceKeys();
        if (userKeys.length === 0) {
            return true;
        }

// Check dietary preferences
        const dietaryIsOk = userPreferences.dietary.every(function (preference) {
            return dish.dietary.includes(preference) || hasNoteForPreference(dish, preference);
        });


// Check allergens
        const allergenKeys = getRelevantAllergenKeys();

        const allergensAreOk = allergenKeys.every(function (allergen) {
            const dishHasAllergen = dish.allergens.includes(allergen);

            if (!dishHasAllergen) {
                return true;
            }

            return hasNoteForPreference(dish, allergen);
        });

// Check disliked ingredients
        const dislikesAreOk = userPreferences.dislikes.every(function (dislike) {
            const dishHasDislike = dish.ingredients.includes(dislike);

            if (!dishHasDislike) {
                return true;
            }

            return hasNoteForPreference(dish, dislike);
        });

        return dietaryIsOk && allergensAreOk && dislikesAreOk;
    }
// Check if the dish has a customization note for a specific preference
    function hasNoteForPreference(dish, preferenceKey) {
        return dish.customization.notes.some(function (note) {
            const noteKeys = note.slice(1);

            return noteKeys.includes(preferenceKey);
        });
    }
// Render the restaurant cards for the selected city
    function renderRestaurants(restaurants, city) {
        restaurantsList.innerHTML = "";

        resultsTitle.textContent = "מסעדות ב" + cityNames[city];
        resultsSubtitle.textContent = "בחרו מסעדה כדי לראות את התפריט שלה.";
        locationMessage.textContent =
            "נמצאו " + restaurants.length + " מסעדות באזור שבחרתם.";

        if (restaurants.length === 0) {
            restaurantsList.innerHTML = `
                <div class="empty-state">
                    <span>⌖</span>
                    <h3>לא נמצאו מסעדות</h3>
                    <p>כרגע אין מסעדות זמינות בעיר שבחרתם.</p>
                </div>
            `;
            return;
        }

        restaurants.forEach(function (restaurant) {
            const relevantDishesCount = countRelevantDishes(restaurant.menu);
            const restaurantAddress = restaurant.address[city] || "כתובת לא זמינה";

            const card = document.createElement("article");
            card.className = "restaurant-card";

            card.innerHTML = `
                <img src="${restaurant.logo}" alt="לוגו של ${restaurant.name}" onerror="this.src='images/logo.png'">

                <div>
                    <h3>${restaurant.name}</h3>
                    <p>${restaurant.description}</p>

                    <div class="restaurant-meta">
                        <span class="meta-pill">${restaurantAddress}</span>
                        <span class="meta-pill">${restaurant.cuisine}</span>
                        <span class="meta-pill relevant-count-pill">${relevantDishesCount} מנות רלוונטיות בתפריט</span>
                    </div>
                </div>

                <button class="choose-restaurant-btn" type="button">
                    הצג תפריט
                </button>
            `;

            const button = card.querySelector(".choose-restaurant-btn");

            button.addEventListener("click", function () {
                localStorage.setItem("selectedRestaurantId", restaurant.id);
                localStorage.setItem("selectedCity", city);
                window.location.href = "menu.html";
            });

            restaurantsList.appendChild(card);
        });
    }
    // Display the user's saved preferences in the side panel
        function renderUserPreferencesBox() {
        const preferencesBox = document.getElementById("restaurantUserPreferences");
        const preferencesText = document.getElementById("restaurantPreferencesText");
        const preferencesLink = document.getElementById("restaurantPreferencesLink");

        if (!preferencesBox) {
            return;
        }

        const preferencesLabels = {
            "vegetarian": "צמחוני",
            "vegan": "טבעוני",
            "gluten-free": "ללא גלוטן",
            "lactose-free": "ללא לקטוז",
            "kosher": "כשר",

            "peanuts": "בוטנים",
            "milk": "חלב",
            "egg": "ביצים",
            "soy": "סויה",
            "sesame": "שומשום",
            "tree-nuts": "אגוזים",
            "fish": "דגים",

            "cilantro": "כוסברה",
            "tomato": "עגבנייה",
            "onion": "בצל",
            "garlic": "שום",
            "mushrooms": "פטריות",
            "eggplant": "חציל",
            "olives": "זיתים",
            "hot-pepper": "פלפל חריף",
            "bell-pepper": "פלפל אדום / גמבה",
            "cucumber": "מלפפון",
            "corn": "תירס",
            "peas": "אפונה",
            "mayonnaise": "מיונז",
            "mustard": "חרדל",
            "tuna": "טונה",
            "cinnamon": "קינמון",
            "dill": "שמיר",
            "parsley": "פטרוזיליה",
            "broccoli": "ברוקולי"
        };

        const allPreferences = [
            ...userPreferences.dietary,
            ...userPreferences.allergens,
            ...userPreferences.dislikes
        ];

        preferencesBox.innerHTML = "";

        if (allPreferences.length === 0) {
            preferencesBox.innerHTML = `
                <p class="empty-preferences-message">
                    עדיין לא הוגדרו העדפות.
                </p>
            `;

            if (preferencesText) {
                preferencesText.textContent = "כדי שנוכל להתאים לך מסעדות ומנות, מומלץ לעדכן את ההעדפות שלך.";
            }

            if (preferencesLink) {
                preferencesLink.innerHTML = `
                    מעבר לעמוד ההעדפות
                    <span>←</span>
                `;
            }

            return;
        }

        allPreferences.forEach(function (preference) {
            const tag = document.createElement("span");
            tag.classList.add("tag");

            if (preferencesLabels[preference]) {
                tag.textContent = preferencesLabels[preference];
            } else {
                tag.textContent = preference;
            }

            preferencesBox.appendChild(tag);
        });

        if (preferencesText) {
            preferencesText.textContent = "ההעדפות האלו משמשות לסינון ולהצגת הערות התאמה רלוונטיות בלבד.";
        }

        if (preferencesLink) {
            preferencesLink.innerHTML = `
                לעדכון העדפות
                <span>←</span>
            `;
        }
    }
});