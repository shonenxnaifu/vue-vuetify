<template>
  <v-data-table :items="users" :server-items-length="totalUsers" :loading="loading" @update:options="fetchUsers">
  </v-data-table>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      totalUsers: 0,
      loading: false,
    };
  },
  methods: {
    async fetchUsers({ page, itemsPerPage }) {
      this.loading = true;
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users`, {
        params: {
          _page: page,
          _limit: itemsPerPage,
        },
        headers: {
          Authorization: `Bearer ${this.$store.state.auth.token}`,
        },
      });
      this.users = response.data;
      this.totalUsers = 100;  // assuming a fixed count for demo
      this.loading = false;
    },
  },
};
</script>
