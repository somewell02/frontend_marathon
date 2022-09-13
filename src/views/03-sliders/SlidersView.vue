<template>
    <div class="sliders_wrap">
        <div class="container">
            <div class="sidebar">
                <div style="background: linear-gradient(229.99deg, #0055bf -26%, #062f59 145%);">
                    <h1>Lada</h1>
                    <p>ВАЗ-2106</p>
                </div>
                <div style="background: linear-gradient(215.32deg, #fc8809 -1%, #983d00 124%);">
                    <h1>Lamborghini</h1>
                    <p>Lamborghini huracan</p>
                </div>
                <div style="background: linear-gradient(221.87deg, #fd1502 1%, #800001 128%);">
                    <h1>Ferrari</h1>
                    <p>Ferrari f8</p>
                </div>
                <div style="background: linear-gradient(220.16deg, #2a373d -8%, #020d0f 138%);">
                    <h1>Porsche</h1>
                    <p>Porsche panamera turbo S</p>
                </div>
            </div>
            <div class="main-slide">
                <div
                    style="
            background-image: url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
          "
                ></div>
                <div
                    style="
            background-image: url('https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
          "
                ></div>
                <div
                    style="
            background-image: url('https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
          "
                ></div>
                <div
                    style="
            background-image: url('https://images.unsplash.com/photo-1633077065063-fc23b4e95fdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
          "
                ></div>
            </div>
            <div class="controls">
                <button class="down-button">
                    <i class="fas fa-arrow-down"></i>
                </button>
                <button class="up-button">
                    <i class="fas fa-arrow-up"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SlidersView",
    mounted() {
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