document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    if (!form) return;

    const name = document.getElementById("Kalkylator_Name");
    const email = document.getElementById("Kalkylator_Email");

    const nameRegex = /^[A-Za-zÅÄÖåäöÉéÜü]+ [A-Za-zÅÄÖåäöÉéÜü]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener("submit", function (event) {

        let isValid = true;

        document.querySelectorAll(".custom-error").forEach(error => error.remove());

        if (!nameRegex.test(name.value.trim())) {
            showError(name, "Ange både förnamn och efternamn.");
            isValid = false;
        }

        if (!emailRegex.test(email.value.trim())) {
            showError(email, "Ange en giltig e-postadress.");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    function showError(input, message) {
        const error = document.createElement("div");

        error.className = "custom-error text-danger";
        error.textContent = message;

        input.parentElement.appendChild(error);
    }
});