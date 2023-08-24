<script>

export default {
    name: 'App_Header',
    data() {
        return {
            navLinks: [
                { label: 'Home', name: '/', params: "" },
                { label: 'Projects', name: 'projects', params: "" },
                { label: 'Project', name: '/projects/:id', params: {id: 1}},
            ],
        }
    }

}

</script>


<template>
    <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand text-white" href="#">MyProjects</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    
                        <li>
                            <router-link class="m-3" :to="{name: 'home'}">
                                Home
                            </router-link>
                        </li>
                        <li>
                            <router-link class="m-3" :to="{name: 'projects'}">
                                Projects
                            </router-link>
                        </li>
                        <!-- <li>
                            <router-link class="m-3" :to="{name: 'project', params: {id: 1}}">
                                Projects
                            </router-link>
                        </li> -->
                    
                    <!-- <li class="nav-item">
                        <router-link class="m-3" to="/projects">
                            Projects
                        </router-link>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
a {
    text-decoration: none;
    color: white;
}
</style>