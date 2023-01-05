import { createRouter, createWebHistory } from 'vue-router'
import { stringifyQuery } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Game from '../views/Game.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  stringifyQuery: (query) => stringifyQuery(query),
  routes: [
    // {
    //     path: '/',
    //     redirect: {
    //         name: "login"
    //     }
    // },
    {
        path: "/",
        name: "Accueil",
        component: Accueil
    },
    {
        path: "/:id",
        name: "game",
        component: Game
    }
  ]
})

export default router
