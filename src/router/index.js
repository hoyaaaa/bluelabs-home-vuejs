import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MaintananceView from '../views/MaintananceView.vue'

Vue.use(VueRouter)

// eslint-disable-next-line
const routes = (process.env.NODE_ENV === 'maintanance') ? [
  {
    path: '/',
    name: 'maintanance',
    component: MaintananceView
  }
] : [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
