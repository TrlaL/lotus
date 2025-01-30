<template>
  <button
    class="ui-button"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: { default: false, type: Boolean }
  }
}
</script>

<style lang="scss">
.ui-button {
  background: #F3EFE3;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 51.0936px 20.4374px rgba(0, 0, 0, 0.01), 0px 29.1964px 17.5178px rgba(0, 0, 0, 0.05), 0px 13.1384px 13.1384px rgba(0, 0, 0, 0.09), 0px 2.91964px 7.29909px rgba(0, 0, 0, 0.1);
  color: #544540;
  cursor: pointer;
  font-family: inherit;
  font-size: clamp(25px, 2dvw, 45px);
  line-height: clamp(30px, 2.5dvw, 50px);
  outline: none;
  padding: 20px;

  &[disabled] {
    color: #54454088;
    cursor: not-allowed;
  }
}
</style>