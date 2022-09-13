<template>
    <div class="board_wrap">
        <div class="container" id="board"></div>
    </div>
</template>

<script>
export default {
    name: "BoardView",
    mounted() {
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
    }
}
</script>

<style lang="scss">
.board_wrap {
    background-color: #111;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    margin: 0;

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        max-width: 400px;
    }

    .square {
        width: 16px;
        height: 16px;
        background: #1d1d1d;
        margin: 2px;
        box-shadow: 0 0 2px #000;
        transition: 2s ease;
    }

    .square:hover {
        transition-duration: 0s;
    }
}
</style>