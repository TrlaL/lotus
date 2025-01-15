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
@import 'reset-css/sass/_reset.scss';
@import '@morev/vue-transitions/styles';

@font-face {
  font-family: FoglihtenNo06; 
  src: url('/assets/fonts/FoglihtenNo06.otf');
} 

.app {
  font-family: FoglihtenNo06;
  height: 100dvh;
  overflow: hidden;
  width: 100dvw;
}
</style>