//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
import vueResource from 'vue-resource'
//关闭Vue的生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(vueResource)

// Vue.directive('xshi',{
// 	bind(element,binding){
// 		// console.log(element)

// 		element.innerHTML = binding.value *10
// 	},
// 	inserted(element,binding){
// 		// console.log(element.text)

// 	},
// 	update(element,binding){
// 		console.log(element,binding)
// 		element.innerHTML = binding.value *10
		
// 	}
// })

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this
	}
})