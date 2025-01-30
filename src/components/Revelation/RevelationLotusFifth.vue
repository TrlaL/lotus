<template>
  <main class="revelation-lotus-fifth">
    <ui-image
      class="revelation-lotus-fifth__image"
      src="/assets/images/png/40-45.png"
    ></ui-image>
    <transition-scale
      class="revelation-lotus-fifth__numbers"
      group
      tag="section">
      <section
        class="revelation-lotus-fifth__number"
        v-for="number, key in numbers"
        :data-key="key"
        :key="key"
      >
        {{ number }}
      </section>
    </transition-scale>
  </main>
</template>

<script>
export default {
  props: {
    numbers: { required: true, type: Array }
  }
}
</script>

<style lang="scss">
$size: clamp(20px, 4dvw, 45px);

.revelation-lotus-fifth {
  position: relative;

  &__image {
    height: 100%;
    width: 100%;
  }

  &__numbers {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  &__number {
    align-items: center;
    background: url('/assets/images/png/background.png'), #55443D;
    border: 1px solid #926857;
    border-radius: 100px;
    color: #FFF;
    display: flex;
    font-size: calc($size * 0.6);
    height: $size;
    justify-content: center;
    position: absolute;
    width: $size;

    &[data-key=h] {
      left: calc(50% - #{$size / 2});
      top: 1%;
    }

    &[data-key=y] {
      right: 16%;
      top: 21%;
    }
    
    &[data-key=g] {
      right: 1%;
      top: 34%;
    }

    &[data-key=e] {
      right: 19%;
      top: 36%;
    }

    &[data-key=hg] {
      right: 27%;
      top: 34%;
    }

    &[data-key=o] {
      right: 35%;
      top: 31%;
    }
  }
}
</style>