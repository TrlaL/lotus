<template>
  <main class="revelation-lotus-second">
    <ui-image
      class="revelation-lotus-second__image"
      src="/assets/images/png/18-25.png"
    ></ui-image>
    <transition-scale
      class="revelation-lotus-second__numbers"
      group
      tag="section">
      <section
        class="revelation-lotus-second__number"
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

.revelation-lotus-second {
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

    &[data-key=z] {
      left: -1%;
      top: 86%;
    }

    &[data-key=n] {
      left: 31%;
      top: 77%;
    }

    &[data-key=m1] {
      right: 31%;
      top: 77%;
    }

    &[data-key=zm] {
      left: calc(50% - #{$size / 2});
      top: 70%;
    }

    &[data-key=a] {
      bottom: 0;
      left: calc(50% - #{$size / 2});
    }

    &[data-key=m] {
      right: -1%;
      top: 86%;
    }
  }
}
</style>