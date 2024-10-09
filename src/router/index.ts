import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Profile from '../components/Profile.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/profile', component: Profile },
  { path: '/login/callback', component: Profile },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router