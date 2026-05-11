document.addEventListener("DOMContentLoaded", function () {


    // Check if the user is logged in
    const currentUser = JSON.parse(localStorage.getItem("currentUser")); // Get the currently logged-in user from localStorage

    if (!currentUser) { // If no user is logged in, redirect to the login page
        window.location.href = "index.html";
        return;
    }
    // Get the main preference form elements from the page
    const preferencesForm = document.getElementById("preferencesForm");
    const preferencesMessage = document.getElementById("preferencesMessage");
    const clearPreferencesBtn = document.getElementById("clearPreferencesBtn");

    if (!preferencesForm) { // Stop the script if the preferences form does not exist on this page
        return;
    }
    loadSavedPreferences();


    // Save user preferences
    preferencesForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Collect all checked values from each preference group
        const dietary = getCheckedValues("dietary");
        const allergens = getCheckedValues("allergens");
        const dislikes = getCheckedValues("dislikes");

        const userPreferences = { // Create one object that contains all user preferences
            dietary: dietary,
            allergens: allergens,
            dislikes: dislikes
        };

        savePreferencesToCurrentUser(userPreferences);

        preferencesMessage.textContent = "ההעדפות נשמרו בהצלחה. מעבירים אותך לעמוד המסעדות...";
        preferencesMessage.className = "preferences-message success-message";

        setTimeout(function () {
            window.location.href = "restaurants.html";
        }, 900);
    });

    // Clear selected preferences
    if (clearPreferencesBtn) {
        clearPreferencesBtn.addEventListener("click", function () {
            const allCheckboxes = preferencesForm.querySelectorAll("input[type='checkbox']");

            allCheckboxes.forEach(function (checkbox) {
                checkbox.checked = false;
            });

            const emptyPreferences = {
                dietary: [],
                allergens: [],
                dislikes: []
            };

            savePreferencesToCurrentUser(emptyPreferences);

            preferencesMessage.textContent = "הבחירות נוקו בהצלחה.";
            preferencesMessage.className = "preferences-message clear-message";
        });
    }


    // Get all checked values by input name
    function getCheckedValues(groupName) {
        const checkedInputs = document.querySelectorAll("input[name='" + groupName + "']:checked"); // Find all checked inputs that belong to the requested group
        const values = []; // Store the selected values in an array

        checkedInputs.forEach(function (input) {
            values.push(input.value);
        });

        return values;
    }


    // Save preferences inside the logged-in user object
    function savePreferencesToCurrentUser(userPreferences) {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const userIndex = users.findIndex(function (user) { // Find the logged-in user inside the users array
            return user.username === currentUser.username;
        });

        if (userIndex === -1) { // Show an error message if the logged-in user was not found
            preferencesMessage.textContent = "לא נמצא משתמש מחובר במערכת.";
            preferencesMessage.className = "preferences-message clear-message";
            return;
        }

        users[userIndex].preferences = userPreferences;

        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(users[userIndex]));
    }

    // Load existing preferences of the logged-in user
    function loadSavedPreferences() {
        const userPreferences = currentUser.preferences;

        if (!userPreferences) {
            return;
        }

        markSavedValues("dietary", userPreferences.dietary);
        markSavedValues("allergens", userPreferences.allergens);
        markSavedValues("dislikes", userPreferences.dislikes);
    }


    // Mark checkboxes according to saved values
    function markSavedValues(groupName, valuesArray) {
        if (!valuesArray) {
            return;
        }

        valuesArray.forEach(function (value) { // Go over each saved value and find its matching checkbox
            const checkbox = document.querySelector(
                "input[name='" + groupName + "'][value='" + value + "']"
            );

            if (checkbox) { // If the matching checkbox exists, mark it as checked
                checkbox.checked = true;
            }
        });
    }

});