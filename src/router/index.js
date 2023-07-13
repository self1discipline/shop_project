import Vue from 'vue'
import VueRouter from 'vue-router'
import mallLogin from '../views/mall/login.vue'
import mall_index from '../views/mall/index.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:"mall_login",
    component: mallLogin
  },
  {
    path: '/mall/login',
    name:"mall_login",
    component: mallLogin
  },
  {
    path: '/index',
    name:"mall_index",
    component: mall_index
  },

  // {
  //   path: '/mall/login',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */mallLogin)
  // }
]

const router = new VueRouter({
  routes
})

export default router
