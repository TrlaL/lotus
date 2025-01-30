<template>
  <main class="revelation-lotus-first">
    <ui-image
      class="revelation-lotus-first__image"
      src="/assets/images/png/0-18.png"
    ></ui-image>
    <transition-scale
      class="revelation-lotus-first__numbers"
      group
      tag="section">
      <section
        class="revelation-lotus-first__number"
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

.revelation-lotus-first {
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
    border-radius: 100px;
    color: #FFF;
    display: flex;
    font-size: calc($size * 0.6);
    height: $size;
    justify-content: center;
    position: absolute;
    width: $size;

    &[data-key=a] {
      left: calc(50% - #{$size / 2});
      top: -1%;
    }

    &[data-key=b] {
      left: -1%;
      top: 62%;
    }

    &[data-key=c] {
      left: 14%;
      top: 30%;
    }

    &[data-key=y] {
      right: 14%;
      top: 30%;
    }

    &[data-key=x] {
      right: -1%;
      top: 62%;
    }
  }
}
</style>