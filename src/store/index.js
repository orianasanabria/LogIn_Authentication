import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase";
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: "",
    pass: "",
    error: "",
    success: ""
  },
  mutations: {
    loggedIn() {
      router.push("home")
    },
    loggedOut() {
      router.push("login")
    },
    reset(state) {
      state.user = ""
      state.pass = ""
      state.error = false
    },
    getUser(state, payload) {
      state.user = payload;
    },
    getPass(state, payload) {
      state.pass = payload;
    },
  },
  actions: {
    async login({
      state,
      commit
    }) {
      await firebase
        .auth()
        .signInWithEmailAndPassword(state.user, state.pass)
        .then(
          (accept) => {
            state.success = `Welcome back ${accept.user.email}`
            commit('loggedIn', accept)
          },
          (reject) => {
            state.error = reject.message
          }
        );
    },
    logout({
      commit
    }) {
      firebase.auth()
        .signOut()
        .then((accept) => {
          commit('loggedOut', accept)
          commit('reset')
        });
    },
  },
})