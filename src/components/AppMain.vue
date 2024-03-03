<script>
import {store} from '../store.js' 
import axios from 'axios'

export default {
    name: 'AppMain',
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
            })
        }
    }
}
</script>
<template lang="">
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="">
    
</style>