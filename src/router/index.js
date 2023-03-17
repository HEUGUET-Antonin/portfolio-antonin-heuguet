import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjetsView from '../views/ProjetsView.vue'
import AproposView from '../views/AproposView.vue'
import ContactView from '../views/ContactView.vue'
import troisfView from '../views/troisfView.vue'
import NewfestView from '../views/NewfestView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/projets',
      name: 'projets',
      component: ProjetsView
    },

    {
      path: '/apropos',
      name: 'apropos',
      component: AproposView
    },

    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },

    {
      path: '/troisf',
      name: 'troisf',
      component: troisfView
    },

    {
      path: '/newfest',
      name: 'newfest',
      component: NewfestView
    },
  ]
})

export default router
