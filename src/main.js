import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/routers'
import * as echarts from 'echarts'
import normalTheme from './chart/theme/normalTheme'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/base/css/zui/zui.css'
import '@/assets/base/css/pages/global.css'
import '@/assets/scss/index.scss'

Vue.prototype.$echarts = echarts
echarts.registerTheme('normal', normalTheme)

Vue.use(Element)
Vue.use(VueRouter)

import App from './App.vue'

//初始化路由
export const router = new VueRouter({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: routes,
  linkActiveClass: 'cur',
})


new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')
