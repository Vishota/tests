import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import MainView from '../views/MainView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/tests/:file',
    name: 'test',
    component: () => import('../views/TestView.vue')
  },
  {
    path: '/results/:data',
    name: 'data',
    component: () => import('../views/ResultsView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
