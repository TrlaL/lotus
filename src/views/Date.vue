<template>
  <main class="date">
    <section class="date__wrapper">
      <section class="date__text">
        введите свою дату для раскрытия цифрового лотоса жизни
      </section>
      <ui-input
        inputmode="numeric"
        mask="##.##.####"
        placeholder="ДД.ММ.ГГГГ"
        v-model="date"
        @keydown.enter="push"
      ></ui-input>
      <ui-link name="Lotus" :query="{ date }">
        <ui-button :disabled="!parsedDate.isValid">
          Сделать расчет
        </ui-button>
      </ui-link>
    </section>
  </main>
</template>

<script>
export default {
  data () {
    return {
      date: null
    }
  },

  computed: {
    parsedDate () {
      if (this.date) {
        return this.$luxon.DateTime.fromFormat(this.date, 'dd.MM.yyyy')
      } else {
        return { isValid: false }
      }
    }
  },

  methods: {
    push () {
      this.$router.push({ name: 'Lotus', query: { date: this.date }})
    }
  }
}
</script>

<style lang="scss">
.date {
  align-items: safe center;
  color: #FFF;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 40px 20px;

  &__wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: clamp(50px, 10vh, 100px);
    justify-content: center;
    max-width: 500px;
  }

  &__text {
    font-size: clamp(25px, 2dvw, 35px);
    line-height: clamp(30px, 3dvw, 40px);
    text-align: center;
  }
}
</style>