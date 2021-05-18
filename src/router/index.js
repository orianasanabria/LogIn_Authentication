import Vue from 'vue'
import VueRouter from 'vue-router'
import Firebase from 'firebase'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/login',
  },
  {
    path: '*',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import( /* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      login: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let user = Firebase.auth().currentUser;
  let authRequired = to.matched.some((route) => route.meta.login);
  if (!user && authRequired) {
    next("login");
  } else if (user && !authRequired) {
    next("home");
  } else {
    next();
  }
});

export default router