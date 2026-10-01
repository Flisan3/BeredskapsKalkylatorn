document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    if (!form) return;

    const name = document.getElementById("Kalkylator_Name");
    const email = document.getElementById("Kalkylator_Email");
    const tips = document.getElementById("Kalkylator_Tips");

    const nameRegex = /^[A-Za-zÅÄÖåäöÉéÜü]+ [A-Za-zÅÄÖåäöÉéÜü]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    name.addEventListener("input", function () {
        validateName();
    });

    email.addEventListener("input", function () {
        validateEmail();
    });

    tips.addEventListener("input", function () {
        validateTips();
    });

    form.addEventListener("submit", function (event) {

        const nameValid = validateName();
        const emailValid = validateEmail();
        const tipsValid = validateTips();

        if (!nameValid || !emailValid || !tipsValid) {
            event.preventDefault();
        }
    });

    function validateName() {

        removeError(name);

        if (name.value.trim() === "") {
            showError(name, "Namn måste fyllas i.");
            return false;
        }

        if (!nameRegex.test(name.value.trim())) {
            showError(name, "Ange både förnamn och efternamn.");
            return false;
        }

        return true;
    }

    function validateEmail() {

        removeError(email);

        if (email.value.trim() === "") {
            showError(email, "Email måste fyllas i.");
            return false;
        }

        if (!emailRegex.test(email.value.trim())) {
            showError(email, "Ange en giltig e-postadress.");
            return false;
        }

        return true;
    }

    function validateTips() {

        removeError(tips);

        if (tips.value.trim() === "") {
            showError(tips, "Du måste skriva ett beredskapstips.");
            return false;
        }

        if (tips.value.length > 500) {
            showError(tips, "Tips får vara högst 500 tecken.");
            return false;
        }

        return true;
    }

    function showError(input, message) {

        const error = document.createElement("div");

        error.className = "custom-error text-danger";
        error.textContent = message;

        input.parentElement.appendChild(error);
    }

    function removeError(input) {

        const error = input.parentElement.querySelector(".custom-error");

        if (error) {
            error.remove();
        }
    }
});