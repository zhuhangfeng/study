import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  beforeCreate(){
    Vue.prototype.$bus = this//全局事件总线
  }
}).$mount('#app')
