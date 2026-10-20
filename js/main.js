"use strict";

// Hämtar mobilmenyn och knappen.
const menuToggle = document.getElementById("menu-toggle");
const mainNavigation = document.getElementById("main-navigation")

// Öppnar eller stänger menyn när knappen klickas.
if (menuToggle && mainNavigation) {
    menuToggle.addEventListener("click", function () {
        const isOpen = mainNavigation.classList.toggle("is-open");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Stäng menyn" : "Öppna menyn"
        );
    });
}

/* Validering av kontaktformuläret */
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");
    const formStatus = document.getElementById("form-status");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Töm tidigare felmeddelanden.
        document.querySelectorAll(".error-message").forEach(function (error) {
            error.textContent = "";
        });

        formStatus.textContent = "";

        let isValid = true;

        // Kontrollera namn.
        if (nameInput.value.trim() === "") {
            document.getElementById("name-error").textContent =
            "Vänligen fyll i ditt namn.";
            isValid = false;
        }

        // Kontrollera e-post.
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailInput.value.trim())) {
            document.getElementById("email-error").textContent =
            "Ange en giltig e-postadress.";
            isValid = false;
        }

        // KOntrollera ämne.
        if (subjectInput.value.trim() === "") {
            document.getElementById("subject-error").textContent =
            "Vänligen ange ett ämne";
            isValid = false;
        }

        // Kontrollera meddelande.
        if (messageInput.value.trim() ==="") {
            document.getElementById("message-error").textContent =
            "Vänligen skriv ett meddelande.";
            isValid = false;
        }

        // Visa Resultatet.
        if (isValid) {
            formStatus.textContent =
            "Tack för ditt meddelande!";
            contactForm.reset();
        }
    });
}