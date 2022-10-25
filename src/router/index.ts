import { createRouter, createWebHashHistory, RouteRecordRaw, } from "vue-router"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/Home',
        name: 'Home',
        component: () => import('../views/Home.vue')
        ,
    }, {
        path: '/',
        name: 'login',
        component: () => import('../views/Login.vue')

    }]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router