import Vue from 'vue'
import VueRouter from 'vue-router'

import Homes from '../components/Home.vue'
import Index from '../components/Index.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/home', component: Homes },
  { path: '/index', component: Index }
]

const router = new VueRouter({
  routes
})

export default router
