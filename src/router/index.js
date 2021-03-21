import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginHome',
    component: Login
  },
  {
    path: '/addbanner',
    name: 'AddBanner',
    component: () => import('../views/AddBanner.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/banners',
    name: 'Banner',
    component: () => import('../views/Banner.vue')
  },
  {
    path: '/addproduct',
    name: 'AddProduct',
    component: () => import('../views/AddProduct.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/dashboard/:id/edit',
    name: 'Edit',
    component: () => import('../views/EditProduct.vue')
  },
  {
    path: '/banners/:id/edit',
    name: 'EditBanner',
    component: () => import('../views/EditBanner.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.access_token) {
    if (to.name === 'Dashboard' || to.name === 'Home' || to.name === 'AddProduct' || to.name === 'Banner' || to.name === 'AddBanner' || to.name === 'Edit' || to.name === 'EditBanner') {
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
