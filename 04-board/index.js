const board = document.querySelector("#board");
const SQUARES_COUNT = 500;

for (let i = 0; i < SQUARES_COUNT; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseenter", () => setColor(square));
    square.addEventListener("mouseleave", () => removeColor(square));

    board.append(square);
}

const setColor = element => {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

const removeColor = element => {
    element.style.background = "#1d1d1d";
    element.style.boxShadow = "0 0 2px #000";
}

const getRandomColor = () => {
    const randomNumber = () => Math.floor(Math.random() * 256);
    return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}

