import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Login from '../views/Auth/Login.vue'
import Reset from '../views/Auth/ResetPassword.vue'
import Chat from '../views/Chat/Chat.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  meta: { requiresAuth: true }
},
{
  path: '/login',
  name: 'Login',
  component: Login,
  meta: { requiresVisitor: true }
},
{
  path: '/reset',
  name: 'Reset',
  component: Reset,
  meta: { requiresVisitor: true }
},
{
  path: '/chat',
  name: 'Chat',
  component: Chat,
  meta: { requiresAuth: true }
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
