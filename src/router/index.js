import { createRouter, createWebHistory } from 'vue-router'
import ViewDashboardGeral from '../views/ViewDashboardGeral.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: ViewDashboardGeral
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewDashboardGeral.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/ViewLogin.vue')
    },
    {
      path: '/gestao-geral',
      name: 'gestao-geral',
      component: () => import('../views/ViewGestaoGeral.vue')
    },
    {
      path: '/usuario',
      name: 'usuario',
      component: () => import('../views/ViewGestaoDadosUsuario.vue')
    }
  ]
})

export default router
