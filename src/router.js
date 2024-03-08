import { createRouter, createWebHistory } from 'vue-router'
import AppHome from './pages/AppHome.vue'
import AppBlog from './pages/AppBlog.vue'
import AppNotFound  from './pages/AppNotFound.vue'
import SingleProject  from './pages/SingleProject.vue'
import AppContact  from './pages/AppContact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/blog',
            name: 'blog',
            component: AppBlog
        },
        {
            path: '/blog/:slug',
            name: 'single-project',
            component: SingleProject
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContact
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: AppNotFound
        },

    ]
})

export { router}