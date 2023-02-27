import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Product from '../views/Product.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import SuccessPage from '../views/Success.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/product/:id',
    props: true,
    name: 'productShayna',
    component: Product
  },
  {
    path: '/shopping-cart',
    name: 'shoppingCart',
    component: ShoppingCart
  },
  {
    path: '/success',
    name: 'successPage',
    component: SuccessPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
