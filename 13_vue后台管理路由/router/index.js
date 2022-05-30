import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
        path: '/',
        component: () => import('@/components/layout.vue'),
        redirect: '/appmain',
        children: [{
            path: 'appmain',
            component: () => import('@/view/appmain.vue')
        }]
    },
    {
        path: '/gunli',
        component: () => import('@/components/layout.vue'),
        children: [{
            path: 'pinpai',
            name: 'pinpai',
            component: () => import('@/view/pinpai.vue'),
        }]

    }

]

const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

export default new Router({
    routes
})