import Tools from '@/classes/Tools'

export default {
  install (app) {
    app.config.globalProperties.$tools = new Tools()
  }
}