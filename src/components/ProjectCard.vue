<script>
import {store} from '../store.js' 

export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    data(){
        return{
            store,
        }
    },
    methods:{
        getImg(){
            let img
            if(this.project.img != null)
                img = '/storage/' + this.project.img
            else
                img = '/img/aaaa.jpg'
            return `${this.store.apiUrl}${img}`
        }
    }
}
</script>
<template lang="">
        <div class="col-3">
            <router-link :to="{ name: 'single-project', params: {slug: project.slug} }">
                <div class="card">
                    <img :src="getImg()" alt="" class="card-img-top">
                    <div class="card-body">
                        <h3>
                            {{project.title}}
                        </h3>
                    </div>
                </div>
            </router-link>
        </div>
</template>
<style lang="">
    
</style>