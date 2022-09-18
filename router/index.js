import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

// const routerPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//     return routerPush.call(this, location).catch(error => error)
// }
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../views/Main.vue'),
        redirect: '/home',
        children: [
            // {
            //     path: '/home',
            //     name: 'home',
            //     component: () => import('../views/home')
            // },
            // {
            //     path: '/user',
            //     name: 'user',
            //     component: () => import('../views/User')
            // },
            // {
            //     path: '/mall',
            //     name: 'mall',
            //     component: () => import('../views/mall')
            // },
            // {
            //     path: '/page1',
            //     name: 'page1',
            //     component: () => import('../views/other/pageOne.vue')
            // },
            // {
            //     path: '/page2',
            //     name: 'page2',
            //     component: () => import('../views/other/pageTwo.vue')
            // },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login/login.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router