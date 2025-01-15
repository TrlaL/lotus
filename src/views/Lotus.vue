<template>
  <main class="lotus">
    <section class="lotus__wrapper">
      <section class="lotus__container">
        <ui-image
          class="lotus__image"
          src="/assets/images/svg/lotus.svg"
        ></ui-image>
        <transition-scale
          class="lotus__numbers"
          group
          tag="section">
          <section
            class="lotus__number"
            v-for="number, key in numbers"
            :data-key="key"
          >
            {{ number }}
          </section>
        </transition-scale>
      </section>
    </section>
    <lotus-calculations
      v-if="isCalculationsEnabled"
      v-model:a="numbers.a"
      v-model:b="numbers.b"
      v-model:c="numbers.c"
      v-model:y="numbers.y"
      v-model:x="numbers.x"
      v-model:z="numbers.z"
      v-model:f="numbers.f"
      v-model:h="numbers.h"
      v-model:g="numbers.g"
      v-model:m="numbers.m"
      v-model:n="numbers.n"
      v-model:k="numbers.k"
      v-model:p="numbers.p"
      v-model:w="numbers.w"
      v-model:s="numbers.s"
      v-model:o="numbers.o"
      v-model:e="numbers.e"
      v-model:x1="numbers.x1"
      v-model:x2="numbers.x2"
      v-model:m1="numbers.m1"
      v-model:zm="numbers.zm"
      v-model:zf="numbers.zf"
      v-model:fh="numbers.fh"
      v-model:hg="numbers.hg"
      v-model:gm="numbers.gm"
      :parsed-date="parsedDate"
    ></lotus-calculations>
  </main>
</template>

<script>
import LotusCalculations from '@/components/Lotus/LotusCalculations'

export default {
  components: {
    LotusCalculations
  },

  data () {
    return {
      isCalculationsEnabled: false,
      numbers: {}
    }
  },

  computed: {
    date () {
      return this.$route.query.date
    },
    parsedDate () {
      return this.$luxon.DateTime.fromISO(this.date)
    }
  },

  mounted () {
    this.$lodash.delay(() => {
      this.isCalculationsEnabled = true
    }, 500)
  }
}
</script>

<style lang="scss">
$size: clamp(20px, 4dvw, 45px);

.lotus {
  &__wrapper {
    display: flex;
    justify-content: center;
  }

  &__container {
    position: relative;
  }

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
      bottom: 5%;
      left: calc(50% - #{$size / 2});
    }

    &[data-key=b] {
      left: 9%;
      top: 60%;
    }

    &[data-key=c] {
      left: 22%;
      top: 32%;
    }

    &[data-key=y] {
      right: 22%;
      top: 32%;
    }

    &[data-key=x] {
      right: 9%;
      top: 60%;
    }

    &[data-key=z] {
      left: 20%;
      top: 81%;
    }

    &[data-key=f] {
      left: 9%;
      top: 42%;
    }

    &[data-key=h] {
      left: calc(50% - #{$size} / 2);
      top: 15%;
    }

    &[data-key=g] {
      right: 9%;
      top: 42%;
    }

    &[data-key=m] {
      right: 20%;
      top: 81%;
    }

    &[data-key=n] {
      left: 39%;
      top: 74%;
    }

    &[data-key=k] {
      left: 25%;
      top: 68%;
    }

    &[data-key=p] {
      left: 22%;
      top: 54%;
    }

    &[data-key=w] {
      left: 24%;
      top: 43%;
    }

    &[data-key=s] {
      left: 37%;
      top: 40%;
    }

    &[data-key=o] {
      right: 37%;
      top: 40%;
    }

    &[data-key=e] {
      right: 24%;
      top: 43%;
    }

    &[data-key=x1] {
      right: 22%;
      top: 54%;
    }

    &[data-key=x2] {
      right: 25%;
      top: 68%;
    }

    &[data-key=m1] {
      right: 39%;
      top: 74%;
    }

    &[data-key=zm] {
      left: calc(50% - #{$size} / 2);
      top: 65%;
    }

    &[data-key=zf] {
      left: 30%;
      top: 56%;
    }

    &[data-key=fh] {
      left: 32%;
      top: 44%;
    }

    &[data-key=hg] {
      right: 32%;
      top: 44%;
    }

    &[data-key=gm] {
      right: 30%;
      top: 56%;
    }
  }
}
</style>