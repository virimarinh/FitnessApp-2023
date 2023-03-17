import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router'
import LoginVue from '@/views/Login.vue'
import { useSession } from '@/model/session'
import ActivityView from '../views/ActivityView.vue'
import StatisticsVue from '../views/Statistics.vue'
import FriendsActivity from '../views/FriendsActivity'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/activity', name: 'activity', component: ActivityView},
    { path: '/login', name: 'login', component: LoginVue},
    { path: '/friends-activity', name: 'friends-activity', component: FriendsActivity},
    {
      path: '/statistics',
      name: 'statistics',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Statistics.vue')
    },

  ]
})

export default router

function secureRouter (to : RouteLocationNormalized, from: RouteLocationNormalized, next : NavigationGuardNext) {
  const session = useSession();
  if (session.user){
    next()
  } else {
    next('/next')
  }
}
