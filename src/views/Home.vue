<template>
  <div class="home text-center bg-dark">
    <b-alert variant="light" show>{{ success }}</b-alert>
    <img src="@/assets/img/bonk.gif" alt="Bonk Gif" width="350px" />
    <b-button variant="danger" @click="logout()" class="mt-4">Log Out</b-button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["success"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style>
.home {
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  align-content: center;
}
</style>
