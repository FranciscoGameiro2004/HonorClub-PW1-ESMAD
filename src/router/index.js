import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandingPageView from '../views/LandingPageView.vue'
import GamesView from '../views/GamesView.vue'
import GameDetailsView from '../views/GameDetailsView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import NewsView from '../views/NewsView.vue'
import RulesView from '../views/RulesView.vue'
import QuizView from '../views/QuizView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: LandingPageView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/games',
      name: 'games',
      component: GamesView,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/rules',
      name: 'rules',
      component: RulesView,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: QuizView,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/games/:id',
      name: 'gameDetails',
      component: GameDetailsView,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && sessionStorage.loggedUser == undefined) {
    next("/login")
  } else {
    next()
  }
})

export default router
