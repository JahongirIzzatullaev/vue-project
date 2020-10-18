import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: "/login",
        name: "login",
        meta: {layout: "empty"},
        component: () => import("../views/Login")
    }, {
        path: "/registr",
        name: "registr",
        meta: {layout: "empty"},
        component: () => import("../views/Register.vue")
    }, {
        path: '/',
        name: 'Home',
        meta: {layout: "main"},
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    }, {
        path: "/categories",
        name: "categories",
        meta: {layout: "main"},
        component: () => import("../views/Categories")
    },
    {
        path: "/record",
        name: "record",
        meta: {layout: "main"},
        component: () => import("../views/Record")
    }, {
        path: "/profile",
        name: "profile",
        meta: {layout: "main"},
        component: () => import("../views/Profile")
    }, {
        path: "/planning",
        name: "planning",
        meta: {layout: "main"},
        component: () => import("../views/Planning")
    }, {
        path: "/history",
        name: "history",
        meta: {layout: "main"},
        component: () => import("../views/History")
    }, {
        path: "/detail-record",
        name: "detail-record",
        meta: {layout: "main"},
        component: () => import("../views/Detail-record")
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
})

export default router
