import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TheGallery from '@/components/TheGallery.vue'
import Login from '@/components/TheLogin.vue'
import TheRegister from '@/components/TheRegister.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import DashboardView from '@/views/DashboardView.vue'


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
    //layouts
    {
      path: '/HomeLayout',
      name: 'HomeLayout',
      component: DefaultLayout,
    },
    {
      path: '/AdminLayout',
      component: AdminLayout,
      children: [{ path: '', component: DashboardView }]
    }
  ],
})

export default router
