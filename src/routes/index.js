import VueRouter from "vue-router";
import Vue from "vue";
import Dashboard from "../layouts/Dashboard";
import dashboardRoutes from "./dashboard";
import Auth from "../layouts/Auth";
import authRoutes from "./auth";

Vue.use(VueRouter);

const routes = [
    {path: '/', redirect: '/dashboard'},
    {path: '/dashboard', component: Dashboard, children: dashboardRoutes},
    {name: 'auth', path: '/auth', component: Auth, children: authRoutes},

]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router;