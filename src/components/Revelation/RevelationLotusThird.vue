<template>
  <main class="revelation-lotus-third">
    <ui-image
      class="revelation-lotus-third__image"
      src="/assets/images/png/25-33.png"
    ></ui-image>
    <transition-scale
      class="revelation-lotus-third__numbers"
      group
      tag="section">
      <section
        class="revelation-lotus-third__number"
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

.revelation-lotus-third {
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
      left: 0%;
      top: 33%;
    }

    &[data-key=b] {
      left: -1%;
      top: 56%;
    }

    &[data-key=z] {
      left: 15%;
      top: 82%;
    }

    &[data-key=p] {
      left: 14%;
      top: 49%;
    }
    
    &[data-key=k] {
      left: 17%;
      top: 67%;
    }

    &[data-key=zf] {
      left: 23%;
      top: 52%;
    }
  }
}
</style>