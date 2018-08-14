// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import { sync } from 'vuex-router-sync'
import VueLocalStorage from 'vue-ls'
import { createStore } from './store'
import { initAPI } from './api'
import 'iview/dist/styles/iview.css'
import Cookies from 'universal-cookie'
import config from 'config'

Vue.config.productionTip = false
Vue.use(VueLocalStorage, { namespace: 'coll_project' })

Vue.mixin({
  data() {
    return {
      pageAnimated: false
    }
  },
  mounted() {
    this.pageAnimated = true
  }
})

//前置守卫
const cookies = new Cookies();
router.beforeEach((to, from, next) => {
  const token = cookies.get(config.cookie_namespace)
  const userid = localStorage.getItem("userid")

  if(to.path=='/'){
    if(token != 'null' && token != null){
      next('/index') // 如果有token就转向todolist不返回登录页
    }
    next(); // 否则跳转回登录页
    
  }else{
    if(token!='null'&&token!=null){
      next()
    }else{
      next('/')
    }
  }


})

/* eslint-disable no-new */
const store = createStore()

sync(store, router);
initAPI(router)
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  store: store
})


Vue.use(iView)
