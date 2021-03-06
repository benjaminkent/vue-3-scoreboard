import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home as Vue.VueConstructor,
  },
  {
    path: '/scoreboard',
    name: 'Scoreboard',
    component: () =>
      import(/* webpackChunkName: "scoreboard" */ '@/views/Scoreboard.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
