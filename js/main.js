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