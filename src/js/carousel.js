"use strict";

// DOM Selections
const elem_prev = document.querySelectorAll(".prev");
const elem_next = document.querySelectorAll(".next");

// Event Listeners.
elem_next.forEach((elem) => {
    elem.addEventListener("click", () => {
        const carousel = elem.parentElement;
        const slides = carousel.querySelectorAll(".slide");
        const activeSlide = carousel.querySelector(".active");
        const nextActiveSlide =
            slides[
                [...slides].indexOf(activeSlide) + 1 == slides.length
                    ? 0
                    : [...slides].indexOf(activeSlide) + 1
            ];

        activeSlide.classList.remove("active");
        nextActiveSlide.classList.add("active");
    });
});

elem_prev.forEach((elem) => {
    elem.addEventListener("click", () => {
        const carousel = elem.parentElement;
        const slides = carousel.querySelectorAll(".slide");
        const activeSlide = carousel.querySelector(".active");
        const nextActiveSlide =
            slides[
                [...slides].indexOf(activeSlide) - 1 < 0
                    ? slides.length - 1
                    : [...slides].indexOf(activeSlide) - 1
            ];

        activeSlide.classList.remove("active");
        nextActiveSlide.classList.add("active");
    });
});
