// core
import { createApp } from 'vue'
import { createRouter } from '@/router'
import App from '@/App'

// modules
import VueLazyLoad from 'vue3-lazyload'
import { plugin as vueTransitionsPlugin } from '@morev/vue-transitions'
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar'

// plugins
import lodash from '@/plugins/lodash'
import luxon from '@/plugins/luxon'
import tools from '@/plugins/tools'
import ui from '@/plugins/ui'

const app = createApp(App)
const router = createRouter()

app.use(router)
app.use(VueLazyLoad)
app.use(vueTransitionsPlugin({}))
app.use(PerfectScrollbarPlugin)
app.use(lodash)
app.use(luxon)
app.use(tools)
app.use(ui)

app.mount('#app')
