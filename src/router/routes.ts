import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'arama', component: () => import('components/SearchBar.vue') },
      { path: 'header', component: () => import('components/TheHeader.vue') },
      { path: 'giris', component: () => import('components/LoginButton.vue') },
      {
        path: 'carousel',
        component: () => import('components/HomeCarousel.vue'),
      },
      { path: 'comp4', component: () => import('components/TheComp4.vue') },
      { path: 'comp5', component: () => import('components/TheComp5.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
