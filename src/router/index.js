import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import FirebaseAuth from '@/components/FirebaseAuth'
import Signup2 from '@/components/SignupValidate'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
import Bookmark from '@/components/Bookmark'
import About from '@/components/About'

Vue.use(VueResource)
Vue.use(Router)
Vue.use(VeeValidate);

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signup2',
      name: 'Signup2',
      component: Signup2
    },
    {
      path: '*', 
      redirect: { name: 'Login'}
    },
    {
      path: '/firebaseauth',
      name: 'Auth',
      component: FirebaseAuth
    },
    {
      path: '/bookmark',
      name: 'Bookmark',
      component: Bookmark
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ],

})



