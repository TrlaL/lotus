<template>
  <a
    class="ui-link"
    :href="href || resolve.href"
    :target="target"
    @click="onClick"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    href: { default: null },
    name: { default: null },
    params: { default: null },
    path: { default: null },
    query: { default: null },
    target: { default: null }
  },

  computed: {
    resolve () {
      return this.$router.resolve({
        name: this.name,
        params: this.params,
        path: this.path,
        query: this.query
      })
    }
  },

  methods: {
    onClick (event) {
      if (!this.href && this.target !== '_blank') {
        this.$router.push(this.resolve.href)
        return event.preventDefault()
      }
    }
  }
}
</script>

<style lang="scss">
.ui-link {
  color: currentColor;
  text-decoration: none;

  &:hover {
    color: currentColor;
  }
}
</style>