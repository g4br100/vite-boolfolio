<script>
import axios from 'axios'

export default {
    name: 'App_projects',
    data() {
        return {
            api_path: 'http://127.0.0.1:8000/api/projects',
            loading: false,
            projects: [],
            result_Page: 0,
            total_pages: 3,
        }
    },
    mounted() {
        this.getProjects();
    }, methods: {

        getProjects(pageNumber) {
            let config = {
                params: {
                    page: pageNumber,
                }
            };
            this.loading = true;
            axios.get('http://127.0.0.1:8000/api/projects', config).then(response => {
                this.projects = response.data.results;
                console.log(this.projects);
                this.loading = false;
                this.result_Page = response.data.results.current_page;
                console.log(this.result_Page);
            }).catch(err => {
                this.loading = false;
            })
        },
        nextPage() {

            let config = { params: { page: this.result_Page + 1 } };

            if (this.result_Page < this.total_pages) {
                this.loading = true;
                axios.get('http://127.0.0.1:8000/api/projects', config).then(response => {
                    this.projects = response.data.results;
                    console.log(this.projects);
                    this.loading = false;
                    this.result_Page = response.data.results.current_page;
                    console.log(this.result_Page);
                }).catch(err => {
                    this.loading = false;
                })
            }
        },
        prevPage() {

            let config = { params: { page: this.result_Page - 1 } };
            if (this.result_Page > 0) {
                this.loading = true;
                axios.get('http://127.0.0.1:8000/api/projects', config).then(response => {
                    this.projects = response.data.results;
                    console.log(this.projects);
                    this.loading = false;
                    this.result_Page = response.data.results.current_page;
                    console.log(this.result_Page);
                }).catch(err => {
                    this.loading = false;
                })
            }
        },
    }

}

</script>

<template>
    <div class="contentContainer">
        <h1 class="mt-5">Projects</h1>
        <div v-if="this.loading">caricamento</div>
    </div>
    <div class="contentContainer d-flex flex-wrap justify-content-between">
        <div class="card mt-3 p-2" v-for="project in projects.data">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <p>Categoria: {{ project.type.type }}</p>
            <template v-if="project.technologies.length > 0">
                <p>Tecnologie: <br><span class="badge bg-primary me-2" v-for="technology in project.technologies">{{
                    technology.name }}</span></p>
            </template>
        </div>
    </div>
    <div class="contentContainer">
        <div class="btn btn-primary mt-4 me-2" @click="this.prevPage()">Precedente</div>
        <div class="btn btn-primary mt-4 me-2" @click="this.getProjects(pageNumber)"
            v-for="pageNumber in projects.last_page ">{{ pageNumber }}</div>
        <div class="btn btn-primary mt-4 me-2" @click="this.nextPage()">Successiva</div>
    </div>
</template>

<style scoped>
.contentContainer {
    width: 1400px;
    margin: 0 auto;
}

.card {
    width: 250px;
    min-height: 250px;
}
</style>