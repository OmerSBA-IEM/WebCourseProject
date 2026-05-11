document.addEventListener("DOMContentLoaded", function () {


// Check if the user is logged in
    const currentUser = JSON.parse(localStorage.getItem("currentUser")); // Get the currently logged-in user from localStorage

    if (!currentUser) { // If no user is logged in, redirect to the login page
        window.location.href = "index.html";
        return;
    }

    const welcomeUser = document.getElementById("welcomeUser"); // Display a personal welcome message on the home page

    if (welcomeUser) {
        welcomeUser.textContent = "ברוכה הבאה, " + currentUser.fullName;
    }


// Log out from the website
    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function (event) {
            event.preventDefault();

            localStorage.removeItem("currentUser"); // Remove the current user from localStorage and redirect to the login page
            window.location.href = "index.html";
        });
    }

// Display the user's saved preferences on the home page
const profilePreferencesText = document.getElementById("profilePreferencesText");
const profilePreferencesTags = document.getElementById("profilePreferencesTags");
const profilePreferencesNote = document.getElementById("profilePreferencesNote");
const profilePreferencesLink = document.getElementById("profilePreferencesLink");

// Translate saved preference values from English keys to Hebrew labels
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

if (profilePreferencesTags && currentUser) { // Check if the preferences section exists on the page

    const preferences = currentUser.preferences;

    const allPreferences = []; // Combine all preference types into one list

    if (preferences) {
        if (preferences.dietary) {
            allPreferences.push(...preferences.dietary);
        }

        if (preferences.allergens) {
            allPreferences.push(...preferences.allergens);
        }

        if (preferences.dislikes) {
            allPreferences.push(...preferences.dislikes);
        }
    }

    if (allPreferences.length === 0) { // If the user has not saved preferences yet, show an empty state message
        profilePreferencesText.textContent = "עדיין לא הוזנו העדפות תזונתיות.";

        profilePreferencesTags.innerHTML = `
            <p class="empty-preferences-message">
                עדיין לא הגדרת העדפות במערכת.
            </p>
        `;

        profilePreferencesNote.textContent = "כדי שנוכל להתאים לך מנות בצורה אישית, מומלץ לעדכן את ההעדפות שלך.";

        profilePreferencesLink.innerHTML = `
            מעבר לעמוד ההעדפות
            <span>←</span>
        `;
    } else {
        profilePreferencesText.textContent = "אלו ההעדפות שנשמרו בפרופיל שלך:";

        profilePreferencesTags.innerHTML = "";

        allPreferences.forEach(function (preference) {
            const tag = document.createElement("span");
            tag.classList.add("tag");

            if (preferencesLabels[preference]) {
                tag.textContent = preferencesLabels[preference];
            } else {
                tag.textContent = preference;
            }

            profilePreferencesTags.appendChild(tag);
        });

        profilePreferencesNote.textContent = "נשתמש בהעדפות האלו כדי לסנן רכיבים ומנות שלא מתאימים לך.";

        profilePreferencesLink.innerHTML = `
            צפייה בכל ההעדפות
            <span>←</span>
        `;
    }
}

// Home page image slider
    const heroImage = document.getElementById("heroSliderImage"); // Get the main slider image by its HTML id
    const dots = document.querySelectorAll(".dot");

// List of images used in the home page slider
    const images = [
        "images/home-slider/1.png",
        "images/home-slider/2.png",
        "images/home-slider/3.png",
        "images/home-slider/4.png",
        "images/home-slider/5.png",
        "images/home-slider/6.png",
        "images/home-slider/7.png",
        "images/home-slider/8.png"
    ];

// Save the index of the currently displayed image
    let currentImageIndex = 0;

// Function that switches to the next image
    function changeImage() {
        currentImageIndex++;
        if (currentImageIndex === images.length) {
            currentImageIndex = 0;
        }

        heroImage.classList.add("fade-out");
        setTimeout(function () { // Wait 300 milliseconds, then replace the image
            heroImage.src = images[currentImageIndex];
            updateDots();
            heroImage.classList.remove("fade-out");
        }, 300);
    }

// Function that updates the slider dots
    function updateDots() {
        dots.forEach(function (dot, index) {
            if (index === currentImageIndex) {
                dot.classList.add("active-dot");
            } else {
                dot.classList.remove("active-dot");
            }
        });
    }

    // Start the slider only if the slider image exists on the page (to avoid errors on pages that don't have the slider)
    if (heroImage) {
        setInterval(changeImage, 3000);
    }

});