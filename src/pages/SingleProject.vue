<script>
import {store} from '../store.js'
import axios from 'axios'
export default {
    name: 'SingleProject',
    data(){
        return{
            store,
            project:null,
        }
    },
    created(){
        this.getProjectData()
    },
    methods: {
        getProjectData(){
            axios.get(`${this.store.apiUrl}/api/projects/${this.$route.params.slug}`).then((response) =>{
                console.log(this.$route)
                console.log(response.data.project)
                this.project = response.data.project
            })
        }
    },
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12 my-2">
                <h1>{{project.title}}</h1>
                <img :src="`${this.store.apiUrl}/storage/${project.img}`" alt="project.title" width="350">
                <p>Tipologia: {{project.type.name}}</p>
                <ul class='list-unstyled'>
                    <li v-for="tech,index in project.technologies" :key="index" class='rounded-pill badge text-bg-info me-3'>
                        {{tech.name}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>