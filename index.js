import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Ev from '../views/Ev.vue'
import Giyim from '../views/Giyim.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ev',
      name: 'ev',
      component: Ev
    },
    {
      path: '/giyim',
      name: 'giyim',
      component: Giyim
    },
    {
      path: '/about',
      name: 'about',

      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
