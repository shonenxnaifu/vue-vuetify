// import axios from "axios";

export default {
  namespaced: true,
  state: {
    user: null,
    token: localStorage.getItem("token") || null,
    isLoggedIn: false,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.isLoggedIn = !!user;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async login({ commit }, { username, password }) {
      const dummyUser = { username: "admin", password: "1234" };
      if (username === dummyUser.username && password === dummyUser.password) {
        commit("setUser", dummyUser);
        commit("setToken", "jwt-token-1234");
        localStorage.setItem("token", "jwt-token-1234");
      } else {
        throw new Error("Invalid credentials");
      }
    },
    logout({ commit }) {
      commit("setUser", null)
      commit("setToken", null)
      localStorage.removeItem("token");
    }
  },
};
