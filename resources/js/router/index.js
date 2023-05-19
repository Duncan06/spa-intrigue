import { createRouter, createWebHistory } from 'vue-router';
import Logo from '../components/Logo.vue';
import LogoSymbol from '../components/LogoSymbol.vue';
import Colors from '../components/Colors.vue';
import Typography from '../components/Typography.vue';
import Mascot from '../components/Mascot.vue';
import Illustrations from '../components/Illustrations.vue';
import Wallpapers from '../components/Wallpapers.vue';
import NotFound from '../components/NotFound.vue';
import SiteStats from '../components/SiteStats.vue';

let LoadersAndAnimations = () => import('../components/LoadersAndAnimations.vue');

const linkActiveClass = 'font-bold';

const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFound
    },
    {
        path: '/',
        name: 'logo',
        component: Logo 
    },

    {
        path: '/logo-symbol',
        name: 'logoSymbol',
        component: LogoSymbol
    },

    {
        path: '/colors',
        name: 'colors',
        component: Colors
    },

    {
        path: '/typography',
        name: 'typography',
        component: Typography
    },

    {
        path: '/mascot',
        name: 'mascot',
        component: Mascot
    },

    {
        path: '/illustrations',
        name: 'illustrations',
        component: Illustrations
    },

    {
        path: '/loaders-and-animations',
        name: 'loadersAndAnimations',
        component: LoadersAndAnimations
    },
    
    {
        path: '/wallpapers',
        name: 'wallpapers',
        component: Wallpapers 
    },
    {
        path: '/site-stats',
        name: 'siteStats',
        component: SiteStats
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass,
    routes
});

export default router;