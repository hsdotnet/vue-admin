import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import elementUI from 'element-ui';
//import i18n from '@/locale'
import config from '@/config'
import installPlugin from '@/plugin'

import '@/element-theme/orange/index.css'
import '@/styles/aui-orange.css'

// 实际打包时应该不引入mock
/* eslint-disable */
if (process.env.NODE_ENV !== 'production') require('@/mock')
/*
Vue.use(elementUI, {
  i18n: (key, value) => i18n.t(key, value)
})*/
Vue.use(elementUI)
/**
 * @description 注册admin内置插件
 */
installPlugin(Vue)
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //i18n,
  store,
  render: h => h(App)
})
