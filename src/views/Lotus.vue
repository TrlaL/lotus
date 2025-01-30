<template>
  <main class="lotus">
    <section class="lotus__wrapper">
      <lotus-flower :numbers="numbers"></lotus-flower>
      <ui-link name="Revelation" :query="$route.query">
        <ui-button>
          <section>посмотреть поэтапное</section>
          <section>раскрытие циклов жизни</section>
        </ui-button>
      </ui-link>
    </section>
  </main>
  <calculations-common
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
  ></calculations-common>
</template>

<script>
import CalculationsCommon from '@/common/CalculationsCommon'
import LotusFlower from '@/components/Lotus/LotusFlower'

export default {
  components: {
    CalculationsCommon,
    LotusFlower
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
      this.$router.replace({ name: 'Date' })
    }
  }
}
</script>

<style lang="scss">
.lotus {
  align-items: safe center;
  display: flex;
  height: 100%;
  gap: 10px;
  justify-content: center;
  margin: 40px 20px;

  &__wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
}
</style>