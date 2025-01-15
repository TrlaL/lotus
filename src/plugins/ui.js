import { defineAsyncComponent } from 'vue'

export default {
  install (app) {
    app.component('ui-button', defineAsyncComponent(() => import('@/ui/UIButton')))
    app.component('ui-image', defineAsyncComponent(() => import('@/ui/UIImage')))
    app.component('ui-input', defineAsyncComponent(() => import('@/ui/UIInput')))
    app.component('ui-link', defineAsyncComponent(() => import('@/ui/UILink')))
    app.component('ui-meter', defineAsyncComponent(() => import('@/ui/UIMeter')))
  }
}