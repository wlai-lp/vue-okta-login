import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Profile from '../components/Profile.vue'
import JsonRender from '../components/JsonRender.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/profile', component: Profile },
  { path: '/login/callback', component: Profile },
  { path: '/json', component: JsonRender },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router