import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Import Firebase and FirebaseConfig (docs)
import firebase from 'firebase'
import config from '../config/firebase'
// Import Bootstrap Vue
import {
  BootstrapVue
} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Initialize Firebase!
firebase.initializeApp(config)

Vue.config.productionTip = false

// Tell vue to use Bootstrap
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')