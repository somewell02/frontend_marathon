<template>
    <div class="board_wrap">
        <div class="container" id="board">
            <div
                v-for="square in SQUARES_COUNT"
                :key="square"
                @mouseenter="setColor"
                @mouseleave="removeColor"
                class="square"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BoardView",

    setup() {
        const SQUARES_COUNT = 500;

        const getRandomColor = () => {
            const randomNumber = () => Math.floor(Math.random() * 256);
            return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
        }

        const setColor = event => {
            const element = event.target;
            const color = getRandomColor();
            element.style.background = color;
            element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
        }

        const removeColor = event => {
            const element = event.target;
            element.style.background = "#1d1d1d";
            element.style.boxShadow = "0 0 2px #000";
        }

        return {
            SQUARES_COUNT,
            setColor,
            removeColor,
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