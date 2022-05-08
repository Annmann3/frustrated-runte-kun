import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '../components/TheHome.vue'
import TheGame from '../components/TheGame.vue'
import TheResult from '../components/TheResult.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: TheHome
  },
  {
    path: '/game',
    name: 'game',
    component: TheGame
  },
  {
    path: '/result',
    name: 'result',
    component: TheResult
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
