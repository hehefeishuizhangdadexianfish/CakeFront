import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/shop'
  },
  {
    path:'/shop',
    name:'shop',
    component:()=>import('../views/ShoppingFirst.vue')
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/LogIn.vue')
  },
  {
    path:'/DatilPage',
    name:'DatilPage',
    component:()=>import('../util/CommdityDatilPage.vue')
  },
  {
    path:'/Signup',
    name:'Signup',
    component:()=>import('../views/SignUp.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
