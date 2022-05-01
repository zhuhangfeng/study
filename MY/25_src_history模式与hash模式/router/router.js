// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
const router = new VueRouter({
	routes: [{
			name: 'guanyu',
			path: '/about',
			component: About,
			meta: {
				isAuth:true,
				title: '关于'
			}
		},
		{
			name: 'zhuye',
			path: '/home',
			component: Home,
			meta: {
				title: '主页'
			},
			children: [{
					name: 'xinwen',
					path: 'news',
					component: News,
					meta: {
						isAuth: true,
						title: '新闻'
					},
					// beforeEnter(to,from,next){
					// 	if (to.meta.isAuth) {
					// 				if (localStorage.getItem('school') === 'zhf') {
					// 					next()
							
					// 				} else {
					// 					alert('权限不够，请联系管理员！！！')
					// 				}
					// 			} else {
					// 				next()
					// 			}
					// }
				},
				{
					name: 'xiaoxi',
					path: 'message',
					component: Message,
					meta: {
						isAuth: false,
						title: '消息'
					},
					children: [{
						name: 'xiangqing',
						path: 'detail',
						component: Detail,
						meta: {
							title: '详情'
						},
						//props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
						// props:{a:1,b:'hello'}

						//props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
						// props:true

						//props的第三种写法，值为函数
						props($route) {
							return {
								id: $route.query.id,
								title: $route.query.title,
								a: 1,
								b: 'hello'
							}
						}

					}]
				}
			]
		}
	]
});

//全局前置路由守卫 --- 初始化的时候被调用，每次路由切换之前被调用
// router.beforeEach((to, from, next) => {
// 	console.log('to', to)
// 	console.log('from', from)
// 	//第一种写法

// 	// if(to.fullPath === "/home/news" || to.fullPath === "/home/message"){
// 	// 	if(localStorage.getItem('school') === 'zhf'){
// 	// 		next()

// 	// 	}else{
// 	// 		alert('权限不够，请联系管理员！！！')
// 	// 	}
// 	// }else {
// 	// 	next()
// 	// }

// 	//第二种写法
// 	if (to.meta.isAuth) {
// 		if (localStorage.getItem('school') === 'zhf') {
// 			next()

// 		} else {
// 			alert('权限不够，请联系管理员！！！')
// 		}
// 	} else {
// 		next()
// 	}
// });

router.afterEach((to,from)=>{
	document.title = to.meta.title || 'zhf'
})

export default router