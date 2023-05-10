import { createRouter, createWebHistory } from 'vue-router'
import ViewDashboardGeral from '../views/ViewDashboardGeral.vue'
import ViewGestaoGeral from '../views/ViewGestaoGeral.vue'
import ViewGestaoDadosUsuario from '../views/ViewGestaoDadosUsuario.vue'

const routes = [
  {
    path: '/',
    name: '',
    component: ViewDashboardGeral
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ViewLogin.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: ViewDashboardGeral
  },
  {
    path: '/gestao-geral',
    name: 'gestao-geral',
    component: ViewGestaoGeral
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: ViewGestaoDadosUsuario
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
