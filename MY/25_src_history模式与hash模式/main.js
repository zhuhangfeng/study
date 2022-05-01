import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/router'

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router,
  beforeCreate(){
    Vue.prototype.$bus = this//全局事件总线
  }
}).$mount('#app')
