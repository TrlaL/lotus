<template>
  <perfect-scrollbar
    class="ui-scrollbar"
    ref="ui-scrollbar"
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
    tag: { default: 'main', type: String },
    tick: { default: 0, type: Number }
  },

  watch: {
    tick () {
      this.setScrollTop(0)
    }
  },

  methods: {
    setScrollTop (scrollTop) {
      this.$refs['ui-scrollbar'].$el.scrollTop = scrollTop
    }
  }
}
</script>

<style lang="scss">
@use 'vue3-perfect-scrollbar/style.css';

.ui-scrollbar {
  overflow: hidden;
}
</style>