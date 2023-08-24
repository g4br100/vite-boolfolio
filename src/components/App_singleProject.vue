<script>
import axios from 'axios';


export default {
    name: 'App_singleProject',
    data() {
        return {
            loading: false,
            project: [],
            api_path: 'http://127.0.0.1:8000/api/projects/',
        }
    }, methods: {
        singleProject(id) {
            this.loading = true;
            axios.get(this.api_path + id).then(response => {
                this.project = response.data.results;
                this.loading = false;
                console.log(project)
                this.result_Page = response.data.results.current_page;
            }).catch(err => {
                this.loading = false;
            })

        },
    },
    mounted() {
        this.singleProject(this.$route.params.id)
    }
}

</script>

<template>
    <div class="container-lg mt-5">
        <h1 class="mb-3">{{ project.title }}</h1>
        <h3 class="mb-3">{{ project.description }}</h3>
        <p>{{ project.type }}</p>
        <p>{{ project.technologies }}</p>
    </div>
</template>