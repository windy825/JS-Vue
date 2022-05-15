import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView'
import UserView from '@/views/UserView'
import LottoView from '@/views/LottoView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/user/:userId',
    name: 'user',
    component: UserView
  },
  {
    path: '/lotto/:lottoNum',
    name: 'lotto',
    component: LottoView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
