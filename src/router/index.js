import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import LoginInfoView from '../views/LoginInfoView.vue'
import MaintenanceView from '../views/MaintenanceView.vue'

Vue.use(VueRouter)

// eslint-disable-next-line
const rootPage = (process.env.NODE_ENV === 'maintenance') ? {
  path: '/',
  name: 'maintenance',
  component: MaintenanceView
} : {
  path: '/',
  name: 'home',
  component: HomeView
}

const routes = [
  rootPage,
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/login-info',
    name: 'login-info',
    component: LoginInfoView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
