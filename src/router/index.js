import { createRouter, createWebHistory } from 'vue-router'

// import AuthenticationPage from '@/views/authentication/AuthenticationPage.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('@/views/Index.vue') },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router