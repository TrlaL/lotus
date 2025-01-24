<template>
  <perfect-scrollbar
    class="ui-scrollbar"
    :options="options"
    :tag="tag"
  >
    <slot></slot>
  </perfect-scrollbar>
</template>

<script>
export default {
  props: {
    options: { default: null, type: Object },
    tag: { default: 'main', type: String }
  }
}
</script>

<style lang="scss">
@use 'vue3-perfect-scrollbar/style.css';

.ui-scrollbar {
  overflow: hidden;
}
</style>