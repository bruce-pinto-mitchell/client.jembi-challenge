import Vue from 'vue';
import VueRouter from 'vue-router';

import Landing from './components/Landing.vue';
import Create from './components/Create.vue';
import Search from './components/Search.vue';


const routes = [
    { path: '/', component: Landing },
    { path: '/landing', component: Landing },
    { path: '/create', component: Create },
    { path: '/search', component: Search }
];

Vue.use(VueRouter);

export default new VueRouter({
    routes: routes
});
