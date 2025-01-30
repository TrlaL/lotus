<template>
  <main class="revelation">
    <section class="revelation__wrapper">
      <section class="revelation__group">
        <section class="revelation__group-title">
          С 0 ДО 18 ЛЕТ
        </section>
        <section class="revelation__group-description">
          ЛОТОС ЖИЗНИ ЗАКРЫТЫЙ, ТАК КАК ЧЕЛОВЕК НАХОДИТСЯ ПО КАРМОЙ СВОИХ РОДИТЕЛЕЙ
        </section>
        <section class="revelation__group-body">
          <revelation-lotus-first
            :numbers="$lodash.pick(numbers, ['b', 'c', 'a', 'y', 'x'])"
          ></revelation-lotus-first>
        </section>
      </section>
      <section class="revelation__group">
        <section class="revelation__group-title">
          С 18 ДО 25 ЛЕТ
        </section>
        <section class="revelation__group-description">
          У ЧЕЛОВЕКА ПОЯВЛЯЕТСЯ ДОСТУП К ЕГО ПЕРВОМУ ЖИЗНЕННОМУ ЦИКЛУ И ОН ИМЕННУЕТСЯ КАК "ЦИКЛ ЛИЧНОСТНОГО РОСТА"
        </section>
        <section class="revelation__group-body">
          <revelation-lotus-second
            :numbers="$lodash.pick(numbers, ['z', 'n', 'zm', 'a', 'm', 'm1'])"
          ></revelation-lotus-second>
        </section>
      </section>
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
import RevelationLotusFirst from '@/components/Revelation/RevelationLotusFirst'
import RevelationLotusSecond from '@/components/Revelation/RevelationLotusSecond'

export default {
  components: {
    CalculationsCommon,
    RevelationLotusFirst,
    RevelationLotusSecond
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
.revelation {
  align-items: safe center;
  display: flex;
  height: 100%;
  gap: 10px;
  justify-content: center;
  margin: 10px;

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 100px;
    max-width: 800px;
  }

  &__group {
    color: #F3EFE3;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__group-title {
    font-size: clamp(25px, 2dvw, 35px);
    line-height: clamp(30px, 3dvw, 40px);
    text-align: center;
  }

  &__group-description {
    font-size: clamp(25px, 2dvw, 35px);
    line-height: clamp(30px, 3dvw, 40px);
    text-align: center;
  }
}
</style>