<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
    <v-form @submit.prevent="handleLogin">
      <v-text-field v-model="username" label="Username" required />
      <v-text-field v-model="password" label="Password" type="password" required />
      <v-btn type="submit" color="primary">Login</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return { username: "", password: "" }
  },
  methods: {
    ...mapActions("auth", ["login"]),
    async handleLogin() {
      try {
        await this.login({ username: this.username, password: this.password });
        this.$router.push('/');
      } catch (error) {
        alert("login failed");
      }
    }
  }
}
</script>