<template>
    <div class="cards_wrap">
        <div class="container">
            <div
                class="slide active"
                style="background-image: url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');"
            >
                <h3>New York</h3>
            </div>
            <div
                class="slide"
                style="
          background-image: url('https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
        "
            >
                <h3>Madrid</h3>
            </div>
            <div
                class="slide"
                style="
          background-image: url('https://images.unsplash.com/photo-1520986606214-8b456906c813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
        "
            >
                <h3>London</h3>
            </div>
            <div
                class="slide"
                style="
          background-image: url('https://images.unsplash.com/photo-1576413326475-ea6c788332fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80');
        "
            >
                <h3>Moscow</h3>
            </div>
            <div
                class="slide"
                style="
          background-image: url('https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
        "
            >
                <h3>Paris</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardsView",
    mounted() {
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
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

.cards_wrap {
    font-family: 'Muli', sans-serif;
    overflow: hidden;
    margin: 0;
    background: #003431;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .container {
        width: 100%;
        display: flex;
        padding: 0 20px;
    }

    .slide {
        height: 80vh;
        border-radius: 20px;
        margin: 10px;
        cursor: pointer;
        color: white;
        flex: 1;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        transition: all 0.5s ease-in-out;
    }

    .slide.active {
        flex: 10;
    }

    .slide h3 {
        position: absolute;
        font-size: 20px;
        bottom: 20px;
        left: 20px;
        margin: 0;
        opacity: 0;
    }

    .slide.active h3 {
        opacity: 1;
        transition: opacity 0.3s ease-in 0.4s;
    }
}
</style>