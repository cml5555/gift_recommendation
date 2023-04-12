import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login'
import Main from '../components/main'
import Register from "@/views/Register.vue";

Vue.use(VueRouter)

//避免重复点击的警告，报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
        children: [
            {
                path: '/',
                name: 'Home',
                component: () => import('@/views/Home/Home.vue'),
            }, {
                path: '/orders',
                name: 'Order',
                component: () => import('@/views/Orders/Orders.vue'),
            },
            {
                path: '/login',
                name: 'Login',
                component: Login
            },
            {
                path: '/register',
                name: 'Register',
                component: Register
            },
            {
                path: '/detail',
                name: 'detail',
                component: () => import('@/views/Goods/Detail.vue'),
            },
            {
                path: '/cart',
                name: 'cart',
                component: () => import('@/views/Cart/Cart.vue'),
            },
            {
                path: '/paySuccess',
                name: 'paySuccess',
                component: () => import('@/views/PaySuccess/PaySuccess.vue'),
            },
        ]
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
