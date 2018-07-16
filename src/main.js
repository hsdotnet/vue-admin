import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '@/assets/icons/iconfont.css'
import '@/styles/index.css'
import '@/styles/themes/black.less'
import '@/styles/themes/blue.less'
import '@/styles/themes/green.less'
import '@/styles/themes/purple.less'
import '@/styles/themes/red.less'
import '@/styles/themes/yellow.less'

Vue.use(iView)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
