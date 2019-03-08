import Vue from 'vue'
import Router from 'vue-router'
import Film from './views/Film'
import Detail from './views/Detail'
import Nowplaying from './views/film/Nowplaying'
import Comingsoon from './views/film/Comingsoon'
import Cinema from './views/Cinema'
import Center from './views/Center'
Vue.use(Router) // 注册这个路由模块

export default new Router({
  mode: 'hash', // mode hash /#/film  history /film 
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/film',
      name: 'film',
      component: Film,

      children:[
        {
          path:'nowplaying', // /film/
          component:Nowplaying
        },
        {
          path:'comingsoon',
          component:Comingsoon
        },
        {
          path:'',
          redirect:'/film/nowplaying'
        }
      ]
    },

    {
      path: '/cinema',
      component: Cinema
    },

    {
      path: '/center',
      component: Center
    },

    // query 
    // {
    //   name:"kerwindetail",
    //   path: '/detail',
    //   component: Detail
    // },

    // 动态路由写法
    {
      name:"kerwindetail",
      path: '/detail/:myid',
      component: Detail
    },

    {
      path: '*',
      redirect: '/film'
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
