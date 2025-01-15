import * as luxon from 'luxon'

export default {
  install (app) {
    app.config.globalProperties.$luxon = luxon
  }
}