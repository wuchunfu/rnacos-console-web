import {routes} from './routes'

import {createRouter,createWebHistory,createWebHashHistory} from 'vue-router'

const getRouteTitle = function(route){
    return route && route.meta && route.meta.title || "";
}

const setRouteTitle = function(route){
    window.document.title = getRouteTitle(route);
}

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.afterEach((to,from) => {
    setRouteTitle(to)
})

export default router


