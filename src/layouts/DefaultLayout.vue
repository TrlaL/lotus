<template>
  <ui-scrollbar class="default-layout" :tick="tick">
    <router-view v-slot="{ Component }">
      <transition-slide>
        <component :is="Component" />
      </transition-slide>
    </router-view>
  </ui-scrollbar>
</template>

<script>
export default {
  data () {
    return {
      tick: 0
    }
  },

  computed: {
    routeName () {
      return this.$route.name
    }
  },

  watch: {
    routeName () {
      this.tick += 1
    }
  }
}
</script>

<style lang="scss">
.default-layout {
  background: url('/assets/images/png/background.png'), linear-gradient(180deg, #A57865 -1.02%, #A47F6E 13.8%, #A38779 31.05%, #8B655A 64.99%, #55443D 95.21%);
  height: 100%;
  overflow: auto;
  width: 100%;
}
</style>