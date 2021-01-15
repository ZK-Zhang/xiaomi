import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from'vue-lazyload'
import App from './App.vue'
import router from './router'

// 接口跨域
axios.defaults.baseURL = '/api'
// 请求超时时间
axios.defaults.timeout = 8000
// 接口状态码拦截
axios.interceptors.response.use(function(response){
  let res = response.data
  if(res.status == 0){
    return res.data
  }else if(res.status == 10){
    window.location.href = '/#/login'
  }else{
    console.log('登陆失败')
  }
})

Vue.use(VueAxios,axios)
Vue.use(VueLazyload,{
  loading:'/imgs/loading-svg/loading-bubbles.svg'
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
