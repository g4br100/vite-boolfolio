<script>

import App_projects from './components/App_projects.vue';
import App_Header from './components/App_Header.vue';
import App_home from './components/App_home.vue';
import App_singleProject from './components/App_singleProject.vue';

import axios from 'axios'


export default {
  data() {
    return {
      APIpath: 'http://127.0.0.1:8000/api/projects',
    };
  },
  components: {
    App_projects,
    App_Header,
    App_home,
    App_singleProject
  }, 
  
  }

</script>

<template>
  
  <App_Header></App_Header>
  <router-view>
    
  </router-view>
</template>


