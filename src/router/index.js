import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutPage.vue')
    },
    {
        path: "/hints",
        name: "hints",
        component: () =>
            import ("../views/HintPage.vue")
    },
    {
        path: '/teams',
        name: 'teams',
        component: () =>
            import ('../views/TeamBuilding.vue')
    },
    {
        path: '/intro',
        name: 'intro',
        component: () =>
            import ('../views/IntroOne.vue')
    },
    {
        path: '/intro2',
        name: 'intro2',
        component: () =>
            import ('../views/IntoTwo.vue')
    },
    {
        path: '/intro3',
        name: 'intro3',
        component: () =>
            import ('../views/IntroThree.vue')

    },
    {
        path: '/intro4',
        name: 'intro4',
        component: () =>
            import ('../views/IntroFour.vue')
    },
    {
        path: '/intro5',
        name: 'intro5',
        component: () =>
            import ('../views/IntroFive.vue')
    },
    {
        path: '/laser',
        name: 'laser',
        component: () =>
            import ('../views/LaserMaze.vue')
    },
    {
        path: '/voices',
        name: 'voices',
        component: () =>
            import ('../views/HearVoices.vue')
    },
    {
        path: '/mastermind',
        name: 'mastermind',
        component: () =>
            import ('../views/MasterMind.vue')
    },
    {
        path: '/portal-gun',
        name: 'portal-gun',
        component: () =>
            import ('../views/PortalGun.vue')
    },
    {
        path: '/portal-gun-2',
        name: 'portal-gun-2',
        component: () =>
            import ('../views/PortalGun2.vue')
    },
    {
        path: '/portal-gun-3',
        name: 'portal-gun-3',
        component: () =>
            import ('../views/PortalGun3.vue')
    },
    {
        path: '/leaderboard',
        name: 'leaderboard',
        component: () =>
            import ('../views/LeaderBoard.vue')
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router