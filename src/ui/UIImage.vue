<template>
  <img
    class="ui-image"
    :src="src"
  >
</template>

<script>
export default {
  props: {
    src: { required: true }
  }
}
</script>