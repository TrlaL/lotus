<template>
  <main class="lotus-flower">
    <ui-image
      class="lotus-flower__image"
      src="/assets/images/png/lotus.png"
    ></ui-image>
    <transition-scale
      class="lotus-flower__numbers"
      group
      tag="section">
      <section
        class="lotus-flower__number"
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

.lotus-flower {
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
      bottom: 0%;
      left: calc(50% - #{$size / 2});
    }

    &[data-key=b] {
      left: -1%;
      top: 57%;
    }

    &[data-key=c] {
      left: 15%;
      top: 19%;
    }

    &[data-key=y] {
      right: 15%;
      top: 19%;
    }

    &[data-key=x] {
      right: -1%;
      top: 57%;
    }

    &[data-key=z] {
      left: 15%;
      top: 84%;
    }

    &[data-key=f] {
      left: 0%;
      top: 34%;
    }

    &[data-key=h] {
      left: calc(50% - #{$size} / 2);
      top: 0;
    }

    &[data-key=g] {
      right: 0%;
      top: 34%;
    }

    &[data-key=m] {
      right: 15%;
      top: 84%;
    }

    &[data-key=n] {
      left: 37%;
      top: 74%;
    }

    &[data-key=k] {
      left: 18%;
      top: 69%;
    }

    &[data-key=p] {
      left: 15%;
      top: 50%;
    }

    &[data-key=w] {
      left: 18%;
      top: 35%;
    }

    &[data-key=s] {
      left: 35%;
      top: 32%;
    }

    &[data-key=o] {
      right: 35%;
      top: 32%;
    }

    &[data-key=e] {
      right: 18%;
      top: 35%;
    }

    &[data-key=x1] {
      right: 15%;
      top: 50%;
    }

    &[data-key=x2] {
      right: 18%;
      top: 69%;
    }

    &[data-key=m1] {
      right: 37%;
      top: 74%;
    }

    &[data-key=zm] {
      left: calc(50% - #{$size} / 2);
      top: 65%;
    }

    &[data-key=zf] {
      left: 25%;
      top: 52%;
    }

    &[data-key=fh] {
      left: 28%;
      top: 37%;
    }

    &[data-key=hg] {
      right: 28%;
      top: 37%;
    }

    &[data-key=gm] {
      right: 25%;
      top: 52%;
    }
  }
}
</style>