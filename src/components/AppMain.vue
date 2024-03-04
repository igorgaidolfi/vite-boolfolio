<script>
import {store} from '../store.js' 
import axios from 'axios'
import ProjectCard from './ProjectCard.vue'

export default {
    name: 'AppMain',
    components: {
        ProjectCard,
    },
    data(){
        return{
            store,
            projects:[]
        }
    },
    created(){
        this.getProjects()
    },
    methods:{
        getProjects(){
            axios.get(`${this.store.apiUrl}/api/projects`).then((response) =>{
                console.log(response.data.results)
                this.projects = response.data.results
            })
        }
    }
}
</script>
<template lang="">
    <main>
        <div class="container">
            <div class="row">
                <ProjectCard v-for="(project, index) in this.projects" :key="index" :project="project"/>
            </div>
        </div>
    </main>
</template>
<style lang="">
    
</style>