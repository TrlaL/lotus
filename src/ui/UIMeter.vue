<template>
  <main class="ui-meter" ref="ui-meter">
    <slot></slot>
  </main>
</template>

<script>
export default {
  props: {
    height: { required: true, type: Number },
    width: { required: true, type: Number }
  },

  data () {
    return {
      resizeObserver: null
    }
  },

  mounted () {
    this.createResizeObserver()
  },

  beforeUnmount () {
    this.destroyResizeObserver()
  },

  methods: {
    createResizeObserver () {
      this.resizeObserver = new ResizeObserver(this.onResize)
      this.resizeObserver.observe(this.$refs['ui-meter'])
    },
    destroyResizeObserver () {
      this.resizeObserver.disconnect()
      this.resizeObserver = null
    },
    onResize ([entry]) {
      this.$emit('update:height', entry.contentRect.height)
      this.$emit('update:width', entry.contentRect.width)
    }
  }
}
</script>