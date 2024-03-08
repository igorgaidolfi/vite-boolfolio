<script>
import {store} from '../store'
import axios from 'axios'
export default {
    name: 'AppContactForm',
    data(){
        return {
            store,
            name: '',
            surname: '',
            email: '',
            phone: '',
            message: '',
        }
    },
    methods:{
        sendForm(){
            const data ={
                name: this.name,
                surname: this.surname,
                email: this.email,
                phone: this.phone,
                message: this.message,
            }

            axios.post(`${this.store.apiUrl}/api/contacts`, data).then((response) =>{
                console.log(response.data)
            })
        }
    }
    
}
</script>
<template lang="">
    <div>
        <form @submit.prevent="sendForm()" method="post">
            <div class="row">
                <div class="col-6 ">
                    <label for="name" class="form-label">Nome</label>
                    <input type="text" placeholder="Nome" name="name" id="name" class="form-control my-2" v-model="name" required>
                </div>
                <div class="col-6 ">
                    <label for="surname" class="form-label">Cognome</label>
                    <input type="text" placeholder="Cognome" name="surname" id="surname" class="form-control my-2" v-model="surname" required>
                </div>
                <div class="col-6 ">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" placeholder="Email" name="email" id="email" class="form-control my-2" v-model="email" required>
                </div>
                <div class="col-6 ">
                    <label for="phone" class="form-label">Telefono</label>
                    <input type="text" placeholder="Telefono" name="phone" id="phone" class="form-control my-2" v-model="phone" required>
                </div>
                <div class="col-12">
                    <label for="message" class="form-label">Messaggio</label>
                    <textarea placeholder="Messaggio" name="message" cols="30" rows="10" id="message" class="form-control my-2" v-model="message"></textarea>
                </div>
                <div class="col-12">
                    <button class="btn btn-success my-2" type="submit">Invia</button>
                </div>
            </div>        
        </form>
    </div>
</template>
<style lang="">
    
</style>