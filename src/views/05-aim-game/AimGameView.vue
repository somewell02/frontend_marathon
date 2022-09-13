<template>
    <div class="aim_game_wrap">
        <div class="screen">
            <h1>Aim Training</h1>
            <a href="#" class="start" id="start">Начать игру</a>
        </div>

        <div class="screen">
            <h1>Выберите время</h1>
            <ul class="time-list" id="time-list">
                <li>
                    <button class="time-btn" data-time="10">
                        10 сек
                    </button>
                </li>
                <li>
                    <button class="time-btn" data-time="20">
                        20 сек
                    </button>
                </li>
                <li>
                    <button class="time-btn" data-time="30">
                        30 сек
                    </button>
                </li>
                <li>
                    <button class="time-btn" data-time="60">
                        60 сек
                    </button>
                </li>
            </ul>
        </div>

        <div class="screen">
            <h3>Осталось <span id="time">00:00</span></h3>
            <div class="board" id="board"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AimGameView",

    mounted() {
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
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Khula&display=swap');
.aim_game_wrap {
    color: #fff;
    font-family: 'Khula', sans-serif;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    text-align: center;

    .start {
        color: #fff;
        text-decoration: none;
        font-size: 1.5rem;
    }

    .start:hover {
        color: #16D9E3;
    }

    h1 {
        line-height: 1.4;
        font-size: 4rem;
    }

    .screen {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        transition: margin 0.5s ease-out;
        background: linear-gradient(90deg, #29323C 0%, #485563 100%);
    }

    .screen.up {
        margin-top: -100vh;
    }

    .time-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        list-style: none;
        padding: 0;
    }

    .time-list li {
        margin: 10px;
    }

    .time-btn {
        background-color: transparent;
        border: 2px solid #C0C0C0;
        color: #fff;
        cursor: pointer;
        font-family: inherit;
        padding: .5rem 1rem;
        font-size: 1.5rem;
    }

    .time-btn:hover {
        border: 2px solid #16D9E3;
        color: #16D9E3;
    }

    .hide {
        opacity: 0;
    }

    .primary {
        color: #16D9E3;
    }

    .board {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 500px;
        height: 500px;
        background: linear-gradient(118.38deg, #29323C -4.6%, #485563 200.44%);
        box-shadow: -8px -8px 20px #2A333D, 10px 7px 20px #475462;
        border-radius: 30px;
        overflow: hidden;
    }

    .circle {
        background: linear-gradient(90deg, #16D9E3 0%, #30C7EC 47%, #46AEF7 100%);
        position: absolute;
        border-radius: 50%;
        cursor: pointer;
    }
}
</style>