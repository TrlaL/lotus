import * as vueRouter from 'vue-router'
import routes from './routes'

export function createRouter () {
  return vueRouter.createRouter({
    history: vueRouter.createWebHashHistory(),
    routes: routes
  })
}