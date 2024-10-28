<template>
  <v-container>
    <v-form @submit.prevent="handleChangePassword">
      <v-text-field v-model="username" label="Username" readonly />
      <v-text-field v-model="newPassword" label="New Password" type="password" required />
      <v-text-field v-model="confirmPassword" label="Confirm Password" type="password" required />
      <v-btn type="submit" color="primary">Change Password</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: this.$store.state.auth.user?.username || '',
      newPassword: '',
      confirmPassword: '',
    };
  },
  methods: {
    async handleChangePassword() {
      if (this.newPassword !== this.confirmPassword) {
        alert("Passwords don't match!");
        return;
      }

      try {
        // Simulating API call for password change
        await axios.put('/api/change-password', {
          username: this.username,
          password: this.newPassword,
        });
        alert('Password changed successfully');
      } catch (error) {
        alert('Failed to change password');
      }
    },
  },
};
</script>
