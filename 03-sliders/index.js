const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");

const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

const changeSlide = (direction) => {
    switch (direction) {
        case "up":
            activeSlideIndex === slidesCount - 1
                ? activeSlideIndex = 0
                : activeSlideIndex += 1;
            break;
        case "down":
            activeSlideIndex === 0
                ? activeSlideIndex = slidesCount - 1
                : activeSlideIndex -= 1;
            break;
    }

    sidebar.style.transform = `translateY(${activeSlideIndex * 100}vh)`;
    mainSlide.style.transform = `translateY(-${activeSlideIndex * 100}vh)`;
}

const changeSlideUp = () => changeSlide("up");
const changeSlideDown = () => changeSlide("down");

upBtn.addEventListener("click", changeSlideUp);
downBtn.addEventListener("click", changeSlideDown);

setInterval(() => {
    document.addEventListener(
        "wheel",
        (e) => e.deltaY > 0 ? changeSlideDown() : changeSlideUp(),
        { once: true }
    );
}, 1000);