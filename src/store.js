import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'http://127.0.0.1:8000',
    menuItems: [
        {
            name: 'home',
            label: 'Home'
        },
        {
            name: 'blog',
            label: 'Blog'
        },
        {
            name: 'contacts',
            label: 'Contatti'
        },
    ]
})
