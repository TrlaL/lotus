import { defineAsyncComponent } from 'vue'

export default {
  install (app) {
    app.component('ui-image', defineAsyncComponent(() => import('@/ui/UIImage')))
    app.component('ui-meter', defineAsyncComponent(() => import('@/ui/UIMeter')))
  }
}