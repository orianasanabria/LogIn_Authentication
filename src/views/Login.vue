<template>
  <div class="login">
    <b-container fluid>
      <b-row class="rows" align-v="center">
        <b-col cols="12" md="6" class="my-5">
          <b-form class="mx-auto text-center form">
            <h1 class="font-weight-normal display-3 mb-5 text-primary">
              Log In
            </h1>
            <b-form-group>
              <b-form-input
                v-model="email"
                type="email"
                placeholder="Email Address"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-input
                v-model="password"
                type="password"
                placeholder="Password"
                required
              ></b-form-input>
            </b-form-group>
            <b-button variant="primary" @click="login()" class="mt-4 btn-block"
              >Log In</b-button
            >
            <b-alert variant="danger" class="mt-4" v-if="error" show>{{
              error
            }}</b-alert>
            <b-alert variant="success" class="mt-4" v-if="success" show>{{
              success
            }}</b-alert>
          </b-form>
        </b-col>
        <b-col cols="12" md="6" class="bg rows">
          <img
            src="../assets/img/auth.svg"
            alt="Authentication Illustration"
            width="90%"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["error", "success"]),
    email: {
      get() {
        return this.$store.state.user;
      },
      set(v) {
        this.$store.commit("getUser", v);
      },
    },
    password: {
      get() {
        return this.$store.state.pass;
      },
      set(v) {
        this.$store.commit("getPass", v);
      },
    },
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>

<style>
.rows {
  height: 100vh;
}
.form {
  max-width: 70%;
}
.bg {
  background-color: #dde9f5;
  display: grid;
  place-items: center;
}
</style>
