import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeLayout from '@/layouts/HomeLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      { path: '/',
        name: 'home',
        component: HomeView,
        meta: { layout: HomeLayout },
      },

  ],
});

export default router;
