import { createRouter, createWebHistory } from 'vue-router'

import * as Public from '@/views/public'

import * as Admin from '@/views/admin'

import * as Auth from '@/views/auth'

import * as Articles from '@/views/public/articles'

import { authGuard } from '@/_helpers/auth-guard.js'

//Creation du router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',//Chemin principal du site
      name: 'publicLayout',
      component: Public.PublicLayout, //Le composent PublicLayout encapsule les routes contenu dans le tableau children(enfant)
      children: [ //Les routes enfant sont par tous
        {path: '/', name: 'home', component: Public.HomeView},
        {path: '/articles', name: 'articles', component: Public.Articles},
        
        {path: '/articles/bread/:id(\\d+)', name: 'breadById', component: Articles.breadById, props: true},
        {path: '/articles/breakfastPastry/:id(\\d+)', name: 'breakfastPastryById', component: Articles.breakfastPastryById, props: true},
        {path: '/articles/pastrie/:id(\\d+)', name: 'pastrieById', component: Articles.pastrieById, props: true},
        {path: '/articles/saltySide/:id(\\d+)', name: 'saltySideById', component: Articles.saltySideById, props: true},

        {path: '/ourBakerys', name: 'ourBakerys', component: Public.OurBakerys},
        {path: '/ourBakerys/:id(\\d+)', name: 'ourBakerysById', component: Public.ourBakeryById, props: true},

        {path: '/signIn', name: 'signIn', component: Auth.SignIn },
        {path: '/signUp', name: 'signUp', component: Auth.SignUp},

        { path: '/:pathMatch(.*)*', redirect: '/' },
        
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin.AdminLayout, //Le composent AdminLayout encapsule les routes contenu dans le tableau children(enfant)
      children: [ //Les routes enfant sont accessible en étant authenfier dans administrateur
        { path: 'dashboard', name: 'dashboard', component: Admin.Dashboard },

        { path: 'users/index', name: 'userIndex', component: Admin.UserIndex },
        { path: 'users/edit/:id(\\d+)', name: 'userEdit', component: Admin.UserEdit, props: true },
        { path: 'users/add', name: 'userAdd', component: Admin.UserAdd },

        { path: 'breads/index', name: 'breadsIndex', component: Admin.BreadsIndex },
        { path: 'breads/edit/:id(\\d+)', name: 'breadsEdit', component: Admin.BreadsEdit, props: true },

        { path: 'breakfastPastrys/index', name: 'breakFastPastrysIndex', component: Admin.BreakFastPastrysIndex },
        { path: 'breakfastPastrys/edit/:id(\\d+)', name: 'breakFastPastrysEdit', component: Admin.BreakFastPastrysEdit, props: true },

        { path: 'ourBakerys/index', name: 'ourBakerysIndex', component: Admin.OurBakerysIndex },
        { path: 'ourBakerys/edit/:id(\\d+)', name: 'ourBakerysEdit', component: Admin.OurBakerysEdit, props: true },

        { path: 'pastries/index', name: 'pastriesIndex', component: Admin.PastriesIndex },
        { path: 'pastries/edit/:id(\\d+)', name: 'pastriesEdit', component: Admin.PastriesEdit, props: true },

        { path: 'saltySides/index', name: 'saltySidesIndex', component: Admin.SaltySidesIndex },
        { path: 'saltySides/edit/:id(\\d+)', name: 'saltySidesEdit', component: Admin.SaltySidesEdit, props: true },

        { path: '/:pathMatch(.*)*', redirect: '/admin/dashboard' },



      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched[0].name == 'admin'){//Pour les routes donc le nom match avec admin
    authGuard()//On verifie grace a la fonction authGuard que le role est bien admin sinon pas d'acces
  }
  next()
})

export default router
