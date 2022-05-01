import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import HomeChildren from '../pages/HomeChildren'
import HomeChildren2 from '../pages/HomeChildren2'
import HomeChildren3 from '../pages/HomeChildren3'

export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'homechildren',
                    component:HomeChildren
                },
                {
                    path:'homechildren2',
                    component:HomeChildren2,
                    children:[
                    {
                        name:'haizi3',
                        path:'homechildren3',
                        component:HomeChildren3,
                        props(route){
                            return {
                                id:route.query.id,
                                name:route.query.name
                            }
                        }
                    }
                    ]
                }
            ]
        },
        {
            path:'/about',
            component:About
        }
    ]
})
