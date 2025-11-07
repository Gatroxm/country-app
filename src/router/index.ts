import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import CountryList from '@/views/CountryList'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: CountryList
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('@/views/CountryDetail')
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router
