<script>

import App_projectCard from './components/App_projectCard.vue';
import axios from 'axios'


export default {
  data() {
    return {
      APIpath: 'http://127.0.0.1:8000/api/projects',
    };
  },
  components: {
    App_projectCard
  }, 
  
  }

</script>

<template>
  <App_projectCard></App_projectCard>
</template>

<style scoped></style>
