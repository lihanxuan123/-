import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

const router=new Router({
  routes,
  mode:'history'
});


export default new Router({
  routes
})

