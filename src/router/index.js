import {createRouter, createWebHistory} from 'vue-router'
import routes from '~pages'
//import About from '../pages/about/index.vue'
//import Home from '../pages/home/index.vue'
//import User from '../pages/user/index.vue'

/*const routes = [
    { 
        path: '/', 
        component: Home 
    },
    { 
        path: '/about', 
        component: About 
    },
    { 
        path: '/user', 
        component: User 
    }
]*/


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;