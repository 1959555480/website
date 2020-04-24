import Vue from 'vue'
import Router from 'vue-router'
import About from '@/pages/about'
import Future from '@/pages/future'
import Index from '@/pages/index'
import News from '@/pages/news'
import PogBuild from '@/pages/pogBuild'
import WhyChange from '@/pages/whyChange'
import NewDetails from '@/pages/newDetails'
import PogDetails from '@/pages/pogDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/pogBuild',
      name: 'pogBuild',
      component: PogBuild
    },
    {
      path: '/future',
      name: 'future',
      component: Future
    },
    {
      path: '/news',
      name: 'news',
      component: News,
    },
    {
      path: '/whyChange',
      name: 'whyChange',
      component: WhyChange
    },
    {
      path: '/newDetails',
      name: 'newDetails',
      component: NewDetails
    },
    {
      path: '/pogDetails',
      name: 'pogDetails',
      component: PogDetails
    }
  ]
})
