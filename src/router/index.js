import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/todo-list',
    name: 'TodoList',
    component: () => import('../views/TodoList/TodoList.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
