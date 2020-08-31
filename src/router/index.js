import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

// 懒加载 动态导入
// 首页
const Home = () => import('../views/home/Home.vue')
// 分类
const Category = () => import('../views/category/Category')
//购物车
const Cart = () => import('../views/cart/Cart')
// 我的档案
const Profile = () => import('../views/profile/Profile')

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home

  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
