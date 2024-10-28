<template>
  <v-app>
    <component :is="layoutComponent">
      <router-view />
    </component>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  computed: {
    layoutComponent() {
      const layout = this.$route.meta.layout;
      return layout === "LoginLayout" ? "LoginLayout" : "AdminLayout";
    },
  },
};
</script>
