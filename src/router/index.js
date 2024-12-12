// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Portfolio from "../pages/Portfolio.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/blog',
        name: 'Blog',
        component: About,
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
