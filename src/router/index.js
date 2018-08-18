import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index'
import login from '@/pages/login'
import logOut from '@/components/log-out'

Vue.use(Router)

export default new Router({
  routes: [

    // {
    //   path: '/login',
    //   name: 'login',
    //   component: login
    // },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/logout',
      name: 'logOut',
      component: logOut
    }

  ]
})
