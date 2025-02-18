import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TheGallery from '@/components/TheGallery.vue'
import Login from '@/components/TheLogin.vue'
import TheRegister from '@/components/TheRegister.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/Gallery',
      name: 'gallery',
      component: TheGallery,
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: TheRegister,
    },
  ],
})

export default router
