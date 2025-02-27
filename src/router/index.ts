import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TheGallery from '@/components/TheGallery.vue';
import Login from '@/components/TheLogin.vue';
import TheRegister from '@/components/TheRegister.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';
import DashboardView from '@/views/DashboardView.vue';
import PixelArt from '@/components/pixelArt.vue';

const router = createRouter({
  history: createWebHistory(),
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
      path: '/gallery',
      name: 'gallery',
      component: TheGallery,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: TheRegister,
    },
    {
      path: '/pixel-art',
      name: 'pixel-art',
      component: PixelArt,
    },
    // Layouts
    {
      path: '/HomeLayout',
      name: 'HomeLayout',
      component: DefaultLayout,
    },
    {
      path: '/AdminLayout',
      component: AdminLayout,
      children: [{ path: '', component: DashboardView }],
    },
  ],
});

export default router;
