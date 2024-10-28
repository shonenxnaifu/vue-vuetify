import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/styles.css";
import vuetify from "./plugins/vuetify";

import axios from "axios";

axios.interceptors.request.use((config) => {
  const token = store.state.auth.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

createApp(App).use(vuetify).use(store).use(router).mount("#app");
