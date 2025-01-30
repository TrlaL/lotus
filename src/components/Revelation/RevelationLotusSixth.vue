<template>
  <main class="revelation-lotus-sixth">
    <ui-image
      class="revelation-lotus-sixth__image"
      src="/assets/images/png/45-99.png"
    ></ui-image>
    <transition-scale
      class="revelation-lotus-sixth__numbers"
      group
      tag="section">
      <section
        class="revelation-lotus-sixth__number"
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

.revelation-lotus-sixth {
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

    &[data-key=g] {
      right: 4%;
      top: 35%;
    }

    &[data-key=x] {
      right: 3%;
      top: 56%;
    }

    &[data-key=m] {
      right: 18%;
      top: 81%;
    }

    &[data-key=gm] {
      right: 25%;
      top: 54%;
    }

    &[data-key=x1] {
      right: 17%;
      top: 51%;
    }

    &[data-key=x2] {
      right: 21%;
      top: 68%;
    }
  }
}
</style>