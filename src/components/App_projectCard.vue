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
                this.projects = response.data.results;
                console.log(this.projects);
                this.loading = false;
            }).catch(err => {
                this.loading = false;
            })
        }
    }

}

</script>

<template>
    <div class="contentContainer">
        <h1>Projects</h1>
        <div v-if="this.loading">caricamento</div>
    </div>
    <div class="contentContainer d-flex flex-wrap justify-content-between">
        <div class="card mt-3 p-2" v-for="project in projects.data">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <p>Categoria: {{ project.type.type }}</p>
            <template v-if="project.technologies.length > 0">
                <p>Tecnologie: <span class="badge bg-primary me-2" v-for="technology in project.technologies">{{
                    technology.name }}</span></p>
            </template>
        </div>
    </div>
    <div class="contentContainer">
        <div class="btn btn-primary mt-4 me-2" v-for="page in projects.last_page ">{{ page }}</div>
    </div>
</template>

<style scoped>
.contentContainer {
    width: 1400px;
    margin: 0 auto;
}

.card {
    width: 330px;
    height: 300px;
}
</style>