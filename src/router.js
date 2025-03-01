import { createRouter, createWebHistory } from "vue-router";

import ListMovie from "@/components/CRUD/Movies/ListComponent.vue";
import SaveMovie from "@/components/CRUD/Movies/SaveComponent.vue";
import ListCategory from "@/components/CRUD/Categories/ListComponent.vue";
import SaveCategory from "@/components/CRUD/Categories/SaveComponent.vue";
import Base from "./components/CRUD/Base.vue";

const routes = [
    {
        path: '/dashboard',
        component: Base,
        children: [
            {
                name: 'movie.list',
                path: 'movie',
                component: ListMovie
            },
            {
                name: 'movie.save',
                path: 'movie/save',
                component: SaveMovie
            },
            {
                name: 'save',
                path: 'movie/save/:id?',
                component: SaveMovie
            },
            {
                name: 'category.list',
                path: 'category',
                component: ListCategory
            },
            {
                name: 'category.save',
                path: 'category/save',
                component: SaveCategory
            },
            {
                name: 'category.save',
                path: 'category/save/:id?',
                component: SaveCategory
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        // component: ListCategory
        redirect: '/dashboard/movie'
    },
]
// const routes = [
//     {
//         name: 'list',
//         path:'/list',
//         component: ListMovie
//     },
//     {
//         name: 'save',
//         path:'/save',
//         component: SaveMovie
//     },
//     {
//         name: 'save',
//         path:'/save/:id?',
//         component: SaveMovie
//     },
//     {
//         name: 'category.list',
//         path:'/category',
//         component: ListCategory
//     },
//     {
//         name: 'category.save',
//         path:'/category/save',
//         component: SaveCategory
//     },
//     {
//         name: 'category.save',
//         path:'/category/save/:id?',
//         component: SaveCategory
//     }
// ]

const router = createRouter({
    history: createWebHistory(),
    // routes:routes
    routes
})

export default router;