import { createRouter, createWebHistory } from 'vue-router';
import App_home from './components/App_home.vue';
import App_projects from './components/App_projects.vue'

const routes = [
    { path: '/', component: App_home, name: 'home' },
     { path: '/projects', component: App_projects, name: 'projects' },
    /* {path: '/user', component: User, name: 'user_page', children:[
      {path: 'profilo', component: Profilo, name: 'profilo'}
    ] }  */
  ]

const router = createRouter({
    history:createWebHistory(),routes
})

export default router