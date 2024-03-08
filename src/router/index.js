import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LogIn.vue'

const routes = [
  {
    path: '/',
    name: 'LogIn',
    component: LoginPage
  },
  {
    path: '/homepage',
    name: 'homepage',
    meta: { requiresAuth: true },
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/add-product',
    name: 'add_oroduct',
    meta: { requiresAuth: true },
    component: () => import('../views/AddProduct.vue')
  },
  {
    path: '/product-list',
    name: 'product-list',
    meta: { requiresAuth: true },
    component: () => import('../views/ProductList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
