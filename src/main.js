// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import { sync } from 'vuex-router-sync'
import { createStore } from './store'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
const store=createStore()
sync(store, router)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store: store
})


Vue.use(iView)