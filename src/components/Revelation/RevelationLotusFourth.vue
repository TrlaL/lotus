<template>
  <main class="revelation-lotus-fourth">
    <ui-image
      class="revelation-lotus-fourth__image"
      src="/assets/images/png/33-40.png"
    ></ui-image>
    <transition-scale
      class="revelation-lotus-fourth__numbers"
      group
      tag="section">
      <section
        class="revelation-lotus-fourth__number"
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

.revelation-lotus-fourth {
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

    &[data-key=f] {
      left: 4%;
      top: 33%;
    }

    &[data-key=c] {
      left: 18%;
      top: 20%;
    }

    &[data-key=h] {
      left: calc(50% - #{$size / 2});
      top: 2%;
    }

    &[data-key=w] {
      left: 20%;
      top: 34%;
    }

    &[data-key=fh] {
      left: 28%;
      top: 34%;
    }

    &[data-key=s] {
      left: 35%;
      top: 31%;
    }
  }
}
</style>