<template>
  <main class="app">
    <default-layout></default-layout>
  </main>
</template>

<script>
import DefaultLayout from './layouts/DefaultLayout.vue'

export default {
  components: {
    DefaultLayout
  }
}
</script>

<style lang="scss">
@use 'reset-css/sass/_reset.scss';
@use '@morev/vue-transitions/styles';
@use '@/assets/styles/scss/app.scss';

.app {
  font-family: FoglihtenNo06, 'Times New Roman';
  height: 100dvh;
  overflow: hidden;
  width: 100dvw;
}
</style>