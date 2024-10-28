<template>
  <v-container fluid class="login-layout">
    <!-- App Bar (Header) -->
    <v-app-bar color="primary" dark flat>
      <v-toolbar-title>Welcome to My App</v-toolbar-title>
    </v-app-bar>

    <!-- Main Content Area -->
    <v-main>
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12" md="4">
          <router-view />
        </v-col>
      </v-row>
    </v-main>

    <!-- Footer -->
    <v-footer color="grey lighten-4" padless>
      <v-row align="center" justify="center" class="text-center">
        <v-col cols="12">
          <span>&copy; 2023 My Application</span>
        </v-col>
      </v-row>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: 'LoginLayout',
};
</script>

<style scoped>
.login-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.fill-height {
  flex: 1;
}
</style>
