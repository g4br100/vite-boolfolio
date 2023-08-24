import { createRouter, createWebHistory } from 'vue-router';
import App_home from './components/App_home.vue';
import App_projects from './components/App_projects.vue';
import App_singleProject from './components/App_singleProject.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: App_home
  },
  {
    path: '/projects',
    name: 'projects',
    component: App_projects
  },
  {
    path: '/projects/:id',
    name: 'project',
    component: App_singleProject
  },

]

const router = createRouter({
  history: createWebHistory(), routes
})

export default router