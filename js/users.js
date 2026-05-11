// Wait for the DOM to fully load before executing scripts 
document.addEventListener("DOMContentLoaded", function () {

    //  Login/Register Toggle Logic


    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    const showLoginBtn = document.getElementById("showLoginBtn");
    const showRegisterBtn = document.getElementById("showRegisterBtn");
    const showRegisterTextBtn = document.getElementById("showRegisterTextBtn");
    const showLoginTextBtn = document.getElementById("showLoginTextBtn");

    function showLogin() {
        loginForm.classList.remove("hidden");
        registerForm.classList.add("hidden");

        showLoginBtn.classList.add("active-tab");
        showRegisterBtn.classList.remove("active-tab");
    }

    function showRegister() {
        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden");

        showRegisterBtn.classList.add("active-tab");
        showLoginBtn.classList.remove("active-tab");
    }

    if (showLoginBtn) {
        showLoginBtn.addEventListener("click", showLogin);
    }

    if (showRegisterBtn) {
        showRegisterBtn.addEventListener("click", showRegister);
    }

    if (showRegisterTextBtn) {
        showRegisterTextBtn.addEventListener("click", showRegister);
    }

    if (showLoginTextBtn) {
        showLoginTextBtn.addEventListener("click", showLogin);
    }

    // Login Implementation

    const loginMessage = document.getElementById("loginMessage");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("loginUsername").value.trim();
            const password = document.getElementById("loginPassword").value;

            const users = JSON.parse(localStorage.getItem("users")) || [];

            const foundUser = users.find(function (user) {
                return user.username === username && user.password === password;
            });

            loginMessage.textContent = "";
            loginMessage.className = "form-message";

            if (!foundUser) {
                loginMessage.textContent = "שם משתמש או סיסמה שגויים";
                loginMessage.classList.add("error");
                return;
            }

            localStorage.setItem("currentUser", JSON.stringify(foundUser));

            window.location.href = "home.html";
        });
    }

    // Registration Implementation

    const registerMessage = document.getElementById("registerMessage");

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const fullName = document.getElementById("registerFullName").value.trim();
            const username = document.getElementById("registerUsername").value.trim();
            const password = document.getElementById("registerPassword").value;
            const confirmPassword = document.getElementById("registerConfirmPassword").value;

            const users = JSON.parse(localStorage.getItem("users")) || [];

            registerMessage.textContent = "";
            registerMessage.className = "form-message";

            if (fullName === "") {
                registerMessage.textContent = "יש להזין שם מלא";
                registerMessage.classList.add("error");
                return;
            }

            if (username.length < 3) {
                registerMessage.textContent = "שם המשתמש חייב להכיל לפחות 3 תווים";
                registerMessage.classList.add("error");
                return;
            }

            if (password.length < 6) {
                registerMessage.textContent = "הסיסמה חייבת להכיל לפחות 6 תווים";
                registerMessage.classList.add("error");
                return;
            }

            if (password !== confirmPassword) {
                registerMessage.textContent = "הסיסמאות לא תואמות";
                registerMessage.classList.add("error");
                return;
            }

            const userAlreadyExists = users.some(function (user) {
                return user.username === username;
            });

            if (userAlreadyExists) {
                registerMessage.textContent = "שם המשתמש כבר קיים במערכת";
                registerMessage.classList.add("error");
                return;
            }

            // Create user object with empty preference placeholders 
            const newUser = {
                fullName: fullName,
                username: username,
                password: password,
                preferences: {
                    dietTypes: [],
                    allergies: [],
                    sensitivities: []
                }
            };

            users.push(newUser);

            localStorage.setItem("users", JSON.stringify(users));

            registerMessage.textContent = "נרשמת בהצלחה! עכשיו אפשר להתחבר";
            registerMessage.classList.add("success");

            registerForm.reset();

            // Automatic redirect to login after successful registration 
            setTimeout(function () {
                showLogin();
            }, 1200);
        });
    }

});