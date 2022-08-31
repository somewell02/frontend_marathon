const slides = document.querySelectorAll(".slide");

const clearActiveSlides = () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    })
}

slides.forEach((slide) => {
    slide.addEventListener("click", () => {
        clearActiveSlides();
        slide.classList.add("active");
    })
})