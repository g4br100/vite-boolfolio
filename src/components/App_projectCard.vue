<script>
import axios from 'axios'

export default {
    name: 'App_projectCard',
    data() {
        return {
            api_path: 'http://127.0.0.1:8000/api/projects',
            loading: false,
            projects: []
        }
    },
    mounted() {
        this.getProjects();
    }, methods: {
        getProjects() {
            this.loading = true;
            axios.get('http://127.0.0.1:8000/api/projects').then(response => {
                console.log(response.data.results);
                this.projects = response.data.results.data;
                console.log(this.projects)
            this.loading = false;

            })
        }
    }

}

</script>

<template>
    <h1>Projects</h1>
    <div v-if="this.loading">caricamento</div>
    <div class="card mt-3 p-2" v-for="project in projects">
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <p>{{ project.type.type }}</p>
    <p v-if="project.technologies.length > 0">Tecnologie: {{project.technologies}}</p>
    </div>
</template>

<style scoped>



</style>