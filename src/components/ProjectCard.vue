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
}
</script>
<template lang="">
    ciao
        <div class="col-12">
            <div class="card">
                <img :src="`${store.apiUrl}/storage/${project.img}`" alt="{{project.title}}" class="card-img-top">
                <div class="card-body">
                    <h3>
                        {{project.title}}
                    </h3>
                </div>
            </div>
        </div>
</template>
<style lang="">
    
</style>