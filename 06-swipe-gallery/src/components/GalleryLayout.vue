<template>
    <div class="gallery_wrapper">
        <div
            class="gallery_layout"
            :style="{
                gridTemplateColumns: `repeat(${gridSize}, 70vw)`,
                gridTemplateRows: `repeat(${gridSize}, 70vh)`,
                transform: `translateX(calc(15vw - ${pos.X * 70}vw - ${pos.X * 10}vmin)) translateY(calc(15vh - ${pos.Y * 70}vh - ${pos.Y * 10}vmin))`
            }"
        >
            <gallery-card
                v-for="item in items"
                :key="item.id"
                :src="item.src"
                :class="{
                    active: item.id === activeIndex
                }"
            />
        </div>
    </div>
</template>

<script>
import GalleryCard from "@/components/GalleryCard";
import {useSwipeGallery} from "@/use/swipeGallery";

export default {
    name: "GalleryLayout",
    components: {GalleryCard},

    setup() {
        const items = [
            {id: 1, src: "1.webp"},
            {id: 2, src: "2.webp"},
            {id: 3, src: "3.webp"},
            {id: 4, src: "4.webp"},
            {id: 5, src: "5.webp"},
            {id: 6, src: "6.webp"},
            {id: 7, src: "7.webp"},
            {id: 8, src: "8.webp"},
            {id: 9, src: "9.webp"},
        ];

        const {
            gridSize,
            pos,
            activeIndex
        } = useSwipeGallery({items});

        return {
            items,
            gridSize,
            pos,
            activeIndex
        }
    }
};
</script>

<style lang="sass" scoped>
.gallery_wrapper
    width: 100%
    position: relative
    &:after
        content: ""
        position: fixed
        width: 70vw
        height: 70vh
        border-radius: 3vmin
        left: 50%
        top: 50%
        transform: translate(-50%, -50%)
        box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.7)
    .gallery_layout
        width: 100%
        display: grid
        grid-gap: 10vmin
        transition: all .3s
</style>