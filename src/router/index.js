// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/about-me',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'AboutMe',
        component: () => import(/* webpackChunkName: "home" */ '@/views/AboutMe.vue'),
      },
    ],
  },
  {
    path: '/projects',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Projects',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Project.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
