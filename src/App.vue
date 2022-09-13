<template>
    <main class="app">
        <router-view />
    </main>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="sass">
html
    box-sizing: border-box
*
    margin: 0
    padding: 0
    box-sizing: inherit
</style>