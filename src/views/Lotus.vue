<template>
  <main class="lotus">
    <section class="lotus__wrapper">
      <section class="lotus__container">
        <ui-image
          class="lotus__image"
          src="/assets/images/png/lotus.png"
        ></ui-image>
        <transition-scale
          class="lotus__numbers"
          group
          tag="section">
          <section
            class="lotus__number"
            v-for="number, key in numbers"
            :data-key="key"
            :key="key"
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
      return this.$luxon.DateTime.fromFormat(this.date, 'dd.MM.yyyy')
    }
  },

  mounted () {
    if (this.parsedDate.isValid) {
      this.$lodash.delay(() => {
        this.isCalculationsEnabled = true
      }, 500)
    } else {
      // this.$router.replace({ name: 'Date' })
    }
  }
}
</script>

<style lang="scss">
$size: clamp(25px, 4dvw, 45px);

.lotus {
  align-items: safe center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 0 10px;

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