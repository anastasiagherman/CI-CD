import Products from "../components/pages/Products";
import Info from "../components/pages/Info";
import Contacts from "../components/pages/Contacts";
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    {path: '/', redirect: '/products'},
    {path: '/products', component: Products, props: (router) => ({link: router.query.link})},
    {path: '/info', component: Info},
    {path: '/contacts', component: Contacts},
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router;