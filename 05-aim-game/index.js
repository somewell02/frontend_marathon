const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timeElement = document.querySelector("#time");
const board = document.querySelector("#board");

let time = 20;
let score = 0;

startBtn.addEventListener("click", e => {
    e.preventDefault();
    screens[0].classList.add("up");
})

timeList.addEventListener("click", e => {
    if (e.target.classList.contains("time-btn")) {
        time = parseInt(e.target.dataset.time);
        screens[1].classList.add("up");
        startGame();
    }
})

board.addEventListener("click", e => {
    if (e.target.classList.contains("circle")) {
        score++;
        e.target.remove();
        createRandomCircle();
    }
})

const setTime = v => timeElement.innerHTML = `00:${v}`;

const startGame = () => {
    setTime(time);
    createRandomCircle();
    setInterval(decreaseTime, 1000);
}

const decreaseTime = () => {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;
        if (current < 10) current = `0${current}`;
        setTime(current);

    }
}

const finishGame = () => {
    timeElement.parentNode.classList.add("hide");
    board.innerHTML = `<h1> Счет: <span class="primary">${score}</span> </h1>`;
}

const createRandomCircle = () => {
    const circle = document.createElement("div");
    circle.classList.add("circle");

    const size = getRandomNumber(10, 30);
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`

    const { width: maxPosX, height: maxPosY } = board.getBoundingClientRect();
    circle.style.top = `${getRandomNumber(0, maxPosY - size)}px`;
    circle.style.left = `${getRandomNumber(0, maxPosX - size)}px`;

    circle.style.background = `rgb(${getRandomNumber(0, 256)}, ${getRandomNumber(0, 256)}, ${getRandomNumber(0, 256)})`;

    board.append(circle);
}

const getRandomNumber = (min, max) => Math.floor(min + Math.random() * (max - min));