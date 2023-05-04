import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router'
import LoginVue from '@/views/Login.vue'
import { useSession } from '@/model/session'
import HomeView from '@/views/HomeView.vue'
import ActivityView from '../views/ActivityView.vue'
import FriendsActivity from '@/views/FriendsActivity.vue'
import PeopleSearch from '@/views/PeopleSearch.vue'
import User from '../views/Users.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/home', name: 'home', component: HomeView, beforeEnter: secureRouter },
    { path: '/activity', name: 'activity', component: ActivityView, beforeEnter: secureRouter },
    { path: '/', name: 'login', component: LoginVue },
    { path: '/friends-activity', name: 'friends-activity', component: FriendsActivity, beforeEnter: secureRouter },
    { path: '/people-search', name: 'people-search', component: PeopleSearch },
    { path: '/users', name: 'users', component: User },
  ]
})

export default router

function secureRouter(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  const session = useSession();
  if (session.user) {
    next()
  } else {
    next('/next')
  }
}