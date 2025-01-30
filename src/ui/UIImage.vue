<template>
  <img
    class="ui-image"
    v-lazy="src"
  >
</template>

<script>
export default {
  props: {
    src: { required: true }
  }
}
</script>

<style lang="scss">
.ui-image {
  transition-duration: 0.5s;

  &[lazy=loading] {
    opacity: 0;
  }

  &[lazy=loaded] {
    opacity: 1;
  }
}
</style>