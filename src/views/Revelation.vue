<template>
  <main class="revelation">
    <section class="revelation__wrapper">
      <section class="revelation__group">
        <section class="revelation__group-title">
         с 0 до 18 лет
        </section>
        <section class="revelation__group-description">
          лотос жизни закрытый, так как человек находится под кармой своих родителей
        </section>
        <section class="revelation__group-body">
          <revelation-lotus-first
            :numbers="$lodash.pick(numbers, ['b', 'c', 'a', 'y', 'x'])"
          ></revelation-lotus-first>
        </section>
      </section>
      <section class="revelation__group">
        <section class="revelation__group-title">
          с 18 до 25 лет
        </section>
        <section class="revelation__group-description">
          у человека открывается доступ к его первому жизненному циклу и он наименуется как "цикл личностного роста"
        </section>
        <section class="revelation__group-body">
          <revelation-lotus-second
            :numbers="$lodash.pick(numbers, ['z', 'n', 'zm', 'a', 'm', 'm1'])"
          ></revelation-lotus-second>
        </section>
      </section>
      <section class="revelation__group">
        <section class="revelation__group-title">
          с 25 до 33 лет
        </section>
        <section class="revelation__group-description">
          у человека открывается доступ к его первому жизненному циклу и он наименуется как "цикл духовного обогощения"
        </section>
        <section class="revelation__group-body">
          <revelation-lotus-third
            :numbers="$lodash.pick(numbers, ['f', 'b', 'z', 'p', 'k', 'zf'])"
          ></revelation-lotus-third>
        </section>
      </section>
      <section class="revelation__group">
        <section class="revelation__group-title">
          с 33 до 40 лет
        </section>
        <section class="revelation__group-description">
          у человека открывается доступ к его третьему жизненному циклу, наименуется как "цикл финансового обогощения"
        </section>
        <section class="revelation__group-body">
          <revelation-lotus-fourth
            :numbers="$lodash.pick(numbers, ['f', 'c', 'h', 'w', 'fh', 's'])"
          ></revelation-lotus-fourth>
        </section>
      </section>
      <section class="revelation__group">
        <section class="revelation__group-title">
          с 40 до 45 лет
        </section>
        <section class="revelation__group-description">
          у человека открывается доступ к его четвертому жизненному циклу, наименуется как "цикл любовных отношений"
        </section>
        <section class="revelation__group-body">
          <revelation-lotus-fifth
            :numbers="$lodash.pick(numbers, ['h', 'y', 'g', 'o', 'hg', 'e'])"
          ></revelation-lotus-fifth>
        </section>
      </section>
      <section class="revelation__group">
        <section class="revelation__group-title">
          с 45 лет
        </section>
        <section class="revelation__group-description">
          у человека открывается доступ к его пятому жизненному циклу, наименуется как "цикл гармонии и долголетия"
        </section>
        <section class="revelation__group-body">
          <revelation-lotus-sixth
            :numbers="$lodash.pick(numbers, ['g', 'x', 'm', 'gm', 'x1', 'x2'])"
          ></revelation-lotus-sixth>
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
import RevelationLotusThird from '@/components/Revelation/RevelationLotusThird'
import RevelationLotusFourth from '@/components/Revelation/RevelationLotusFourth'
import RevelationLotusFifth from '@/components/Revelation/RevelationLotusFifth'
import RevelationLotusSixth from '@/components/Revelation/RevelationLotusSixth'

export default {
  components: {
    CalculationsCommon,
    RevelationLotusFirst,
    RevelationLotusSecond,
    RevelationLotusThird,
    RevelationLotusFourth,
    RevelationLotusFifth,
    RevelationLotusSixth
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
  display: flex;
  height: 100%;
  gap: 10px;
  justify-content: center;
  margin: 40px 20px;

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
    font-size: clamp(25px, 3dvw, 45px);
    line-height: clamp(30px, 3.5dvw, 50px);
    text-align: center;
  }

  &__group-description {
    font-size: clamp(25px, 3dvw, 45px);
    line-height: clamp(30px, 3.5dvw, 50px);
    text-align: center;
  }

  &__group-body {
    display: flex;
    justify-content: center;
  }
}
</style>