import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css' 
// 导入字体图标
import './assets/fonts/iconfont.css' 
Vue.config.productionTip = false

import axios from 'axios'
//配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios //挂载到vue的原型对象上

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
