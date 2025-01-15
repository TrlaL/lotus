<template>
  <main class="ui-input">
    <input
      class="ui-input__inner"
      v-maska="{ mask }"
      :placeholder="placeholder"
      @maska="onMaska"
    >
  </main>
</template>

<script>
import { vMaska } from 'maska/vue'

export default {
  directives: {
    maska: vMaska
  },

  props: {
    mask: { default: null },
    modelValue: { required: true },
    placeholder: { default: null }
  },

  methods: {
    onMaska (event) {
      this.$emit('update:model-value', event.target.value)
    }
  }
}
</script>

<style lang="scss">
.ui-input {
  background: #F3EFE3;
  border-radius: 3px;
  color: #544540;
  max-width: 100%;
  padding: 30px 50px;

  &__inner {
    background: none;
    border: none;
    border-bottom: 2.5px solid #544540;
    color: inherit;
    font-family: inherit;
    font-size: 25px;
    outline: none;
    padding: 10px 0;
    text-align: center;
    width: 100%;

    &::placeholder {
      color: #544540a9;
    }
  }
}
</style>