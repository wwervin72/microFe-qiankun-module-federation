import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            component: () => import('./home.vue'),
        },
        {
            path: '/test2',
            component: () => import('./test1.vue'),
        },
        {
            path: '/test1',
            component: () => import('./test1.vue'),
        },
        {
            path: '/multiple',
            component: () => import('./multiple.vue'),
        },
    ]
})