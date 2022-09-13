<template>
    <div class="gallery_item">
        <img :src="getImgUrl(src)" alt="gallery item" class="gallery_item_img"/>
    </div>
</template>

<script>
export default {
    name: "GalleryCard",

    props: {
        src: {
            type: String,
            required: false,
            default: "1.jpg"
        },
    },

    methods: {
        getImgUrl(pic) {
            return require(`../assets/img/${pic}`);
        }
    }
};
</script>

<style lang="sass" scoped>
.gallery_item
    pointer-events: none
    user-select: none
    overflow: hidden
    border-radius: 3vmin
    .gallery_item_img
        width: 100%
        height: 100%
        object-fit: cover
        object-position: center
        pointer-events: none
        transition: .8s
    &.active .gallery_item_img
        transform: scale(1.2)
</style>
