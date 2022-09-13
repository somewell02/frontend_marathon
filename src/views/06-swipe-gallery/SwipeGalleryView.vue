<template>
    <div class="swipe_gallery_wrap">
        <gallery-layout/>
    </div>
</template>

<script>
import GalleryLayout from "@/views/06-swipe-gallery/components/GalleryLayout";

export default {
    name: "SwipeGalleryView",
    components: { GalleryLayout },
}
</script>

<style lang="sass" scoped>
.swipe_gallery_wrap
    width: 100vw
    height: 100vh
    overflow: hidden
    background: #171717
</style>