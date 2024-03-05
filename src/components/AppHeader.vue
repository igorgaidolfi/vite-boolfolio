<script>
import {store} from '../store.js' 
export default {
    data(){
        return{
            store,
        }
    }
}
</script>
<template lang="">
    <header class="bg-secondary">
        <div class="container">
            <div class="row">
                <div class="col-8 py-3">
                    <h1>Boolfolio</h1>
                </div>
                <div class="col-4">
                    <ul class='list-unstyled d-flex'>
                        <li v-for="item, index in store.menuItems" :key="index">
                            <router-link :to="{ name: item.name}">{{item.label}}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="">
</style>