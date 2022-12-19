import Vue from 'vue'
import VueRouter from 'vue-router'
import MaintananceView from '../views/MaintananceView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'maintanance',
    component: MaintananceView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
