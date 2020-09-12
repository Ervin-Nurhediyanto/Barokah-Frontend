import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Reset from '../views/reset.vue'
=======
import Home from '../views/Home/Home.vue'
import Login from '../views/Auth/Login.vue'
import Reset from '../views/Auth/ResetPassword.vue'
import Chat from '../views/Chat/Chat.vue'
>>>>>>> 0fedf24be7282975bc5ffd5f69f7085717d86fb4

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/login',
  name: 'Login',
  component: Login
},
{
  path: '/reset',
  name: 'Reset',
  component: Reset
<<<<<<< HEAD
=======
},
{
  path: '/chat',
  name: 'Chat',
  component: Chat
>>>>>>> 0fedf24be7282975bc5ffd5f69f7085717d86fb4
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
