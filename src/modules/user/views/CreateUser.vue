<template>
  <v-container>
    <v-form @submit.prevent="handleCreateUser">
      <v-text-field v-model="name" label="Name" required />
      <v-text-field v-model="email" label="Email" required type="email" />
      <v-btn type="submit" color="primary">Create User</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
    };
  },
  methods: {
    async handleCreateUser() {
      try {
        const newUser = {
          name: this.name,
          email: this.email,
        };
        await axios.post('https://jsonplaceholder.typicode.com/users', newUser, {
          headers: {
            Authorization: `Bearer ${this.$store.state.auth.token}`,
          },
        });
        this.$router.push('/admin/users');
      } catch (error) {
        alert('Failed to create user');
      }
    },
  },
};
</script>
