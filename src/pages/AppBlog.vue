<script>
import {store} from '../store.js' 
import axios from 'axios'
import ProjectCard from '../components/ProjectCard.vue'

export default {
    name: 'AppBlog',
    components: {
        ProjectCard,
    },
    data(){
        return{
            store,
            projects:[],
            currentPage:1,
            lastPage:null,
        }
    },
    created(){
        this.getProjects()
    },
    methods:{
        getProjects(page_num){
            axios.get(`${this.store.apiUrl}/api/projects`,{
                params:{
                    page: page_num
                }
            }).then((response) =>{
                console.log(response.data.results)
                this.projects = response.data.results.data
                this.currentPage = response.data.results.current_page
                this.lastPage = response.data.results.last_page
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
            <div class="col-12">
                <div class="d-flex justify-content-center my-3">
                    <button :class="currentPage == 1 ? 'disabled' : ''" class='btn btn-info' @click="getProjects(currentPage - 1)">Precedente</button>
                    <button :class="currentPage == lastPage ? 'disabled' : ''" class='btn btn-info' @click="getProjects(currentPage + 1)">Successivo</button>
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="">
    
</style>