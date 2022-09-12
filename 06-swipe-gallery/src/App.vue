<template>
    <main class="app">
        <gallery-layout/>
    </main>
</template>

<script>
import GalleryLayout from "@/components/GalleryLayout";

export default {
  name: "App",
  components: { GalleryLayout },
};
</script>

<style lang="sass">
html
    box-sizing: border-box
*
    margin: 0
    padding: 0
    box-sizing: inherit
.app
    width: 100vw
    height: 100vh
    overflow: hidden
    background: #171717
</style>