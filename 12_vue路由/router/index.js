import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router)

 const routes = [
    {
        path:'/users',
        component: ()=>import('@/components/User.vue'),
        children:[
            {
                path:'home',
                component:()=>import('@/components/UserHome.vue')
            },
            {
                path:'profile',
                name:'profile',
                component: ()=>import('@/components/UserProfile.vue')
            },
            {
                path:'posts',
                component: ()=>import('@/components/UserPosts.vue')
            }
        ]
    },
    
]

export default new Router({
    routes
})