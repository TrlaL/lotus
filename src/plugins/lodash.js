import lodash from 'lodash'

export default {
  install (app) {
    app.config.globalProperties.$lodash = lodash
  }
}