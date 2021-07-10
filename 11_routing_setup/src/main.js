import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Users from './Users.vue'
import Home from './Home.vue'
import Contact from './Contact.vue'


Vue.use(VueRouter);

const routes = [
  { path:'/'       , component: Home    },
  { path:'/users'  , component: Users   },
  { path:'/contact', component: Contact },
]

const router = new VueRouter({
  routes,  // routes: routes 
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router, //  router = router
})
