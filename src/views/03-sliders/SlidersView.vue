<template>
    <div class="sliders_wrap">
        <div class="container">
            <div
                class="sidebar"
                :style="{
                    transform: `translateY(${activeSlide * 100}vh)`,
                    top: `-${(itemsLength - 1) * 100}vh`
                }"
            >
                <div
                    v-for="item in items"
                    :key="item.id"
                    :style="{ background: item.color }"
                >
                    <h1>{{ item.title }}</h1>
                    <p>{{ item.model }}</p>
                </div>
            </div>
            <div
                class="main-slide"
                :style="{ transform: `translateY(-${activeSlide * 100}vh)` }"
            >
                <div
                    v-for="item in reversedItems"
                    :key="`img_${item.id}`"
                    :style="{ 'background-image': `url(${item.image})` }"
                ></div>
            </div>
            <div class="controls">
                <button class="down-button" @click="changeSlideDown">
                    <i class="fas fa-arrow-down"></i>
                </button>
                <button class="up-button" @click="changeSlideUp">
                    <i class="fas fa-arrow-up"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {computed, onMounted, onUnmounted, ref} from "vue";

export default {
    name: "SlidersView",
    setup() {
        const items = [
            {
                id: 1,
                title: "Lada",
                model: "ВАЗ-2106",
                color: "linear-gradient(229.99deg, #0055bf -26%, #062f59 145%)",
                image: "https://images.unsplash.com/photo-1633077065063-fc23b4e95fdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            },
            {
                id: 2,
                title: "Lamborghini",
                model: "Lamborghini huracan",
                color: "linear-gradient(215.32deg, #fc8809 -1%, #983d00 124%)",
                image: "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            },
            {
                id: 3,
                title: "Ferrari",
                model: "Ferrari f8",
                color: "linear-gradient(221.87deg, #fd1502 1%, #800001 128%)",
                image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            },
            {
                id: 4,
                title: "Porsche",
                model: "Porsche panamera turbo S",
                color: "linear-gradient(220.16deg, #2a373d -8%, #020d0f 138%)",
                image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
        ];

        const itemsLength = computed(() => items.length);
        const reversedItems = computed(() => [...items].reverse())

        const activeSlide = ref(0);

        const changeSlide = direction => {
            switch (direction) {
                case "up":
                    activeSlide.value === itemsLength.value - 1
                        ? activeSlide.value = 0
                        : activeSlide.value += 1;
                    break;
                case "down":
                    activeSlide.value === 0
                        ? activeSlide.value = itemsLength.value - 1
                        : activeSlide.value -= 1;
                    break;
            }
        }

        const changeSlideUp = () => changeSlide("up");
        const changeSlideDown = () => changeSlide("down");

        onMounted(() => {
            setInterval(() => {
                document.addEventListener(
                    "wheel",
                    (e) => e.deltaY > 0 ? changeSlideDown() : changeSlideUp(),
                    {once: true}
                );
            }, 1000);
        })

        onUnmounted(() => {
            clearInterval();
        })

        return {
            items,
            itemsLength,
            reversedItems,
            activeSlide,
            changeSlideUp,
            changeSlideDown,
        }
    },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

.sliders_wrap {
    font-family: 'Roboto', sans-serif;
    height: 100vh;

    .container {
        position: relative;
        overflow: hidden;
        width: 100vw;
        height: 100vh;
    }

    .sidebar {
        height: 100%;
        width: 35%;
        position: absolute;
        top: 0;
        left: 0;
        transition: transform 0.5s ease-in-out;
    }

    .sidebar > div {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #fff;
    }

    .sidebar h1 {
        font-size: 40px;
        margin-bottom: 10px;
        margin-top: -30px;
    }

    .main-slide {
        height: 100%;
        position: absolute;
        top: 0;
        left: 35%;
        width: 65%;
        transition: transform 0.5s ease-in-out;
    }

    .main-slide > div {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        height: 100%;
        width: 100%;
    }

    button {
        background-color: #fff;
        border: none;
        color: #aaa;
        cursor: pointer;
        font-size: 16px;
        padding: 15px;
    }

    button:hover {
        color: #222;
    }

    button:focus {
        outline: none;
    }

    .container .controls button {
        position: absolute;
        left: 35%;
        top: 50%;
        z-index: 100;
    }

    .container .controls .down-button {
        transform: translateX(-100%);
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    .container .controls .up-button {
        transform: translateY(-100%);
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
}
</style>