<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Admin Dashboard</v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
        <v-menu activator="parent">
          <v-list>
            <v-list-item>
              <v-list-item-title>username</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item @click="logout">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app permanent>
      <v-list>
        <v-list-item-group>
          <v-list-item to="/dashboard">Dashboard</v-list-item>
          <v-list-item to="/users">List Users</v-list-item>
          <v-list-item to="/users/create">Create User</v-list-item>
          <v-list-item to="/change-password">Change Password</v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'AdminLayout',
  mounted() {
    console.log('AdminLayout mounted'); // Check if the layout is mounted
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login'); // Redirect to login after logout
    },
  },
};
</script>

<style scoped>
/* Add any additional styling needed for the layout */
</style>
