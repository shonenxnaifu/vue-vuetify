<template>
  <v-app>
    <component :is="layoutComponent">
      <router-view />
    </component>
  </v-app>
</template>

<script>
// import LoginLayout from './layouts/LoginLayout.vue';
// import AdminLayout from './layouts/AdminLayout.vue';

export default {
  name: 'App',
  // components: {
  //   LoginLayout,
  //   AdminLayout,
  // },
  computed: {
    layoutComponent() {
      // Dynamically return the layout component based on the route meta property
      // const layout = this.$route.meta.layout;
      // return layout === 'LoginLayout' ?  LoginLayout : AdminLayout;
      return "LoginLayout"
    },
  },
};
</script>
