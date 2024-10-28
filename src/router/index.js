import { createRouter, createWebHistory } from "vue-router";
import Login from "@/modules/auth/views/Login.vue";
import LoginLayout from "@/layouts/LoginLayout.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";
import ListUsers from "@/modules/user/views/ListUsers.vue";
import CreateUser from "@/modules/user/views/CreateUser.vue";
import ChangePassword from "@/modules/user/views/ChangePassword.vue";
import Dashboard from "@/modules/dashboard/views/dashboard.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginLayout,
    meta: {
      layout: LoginLayout,
    },
    children: [
      {
        path: '',
        component: Login, // The Login component
      },
    ],
  },
  {
    path: "/",
    component: AdminLayout,
    meta: {
      // layout: "AdminLayout",
      requiresAuth: true,
    },
    children: [
      { path: "dashboard", component: Dashboard },
      { path: "users", component: ListUsers },
      { path: "users/create", component: CreateUser },
      { path: "change-password", component: ChangePassword },
      { path: '', redirect: 'dashboard' },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("token");
  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
