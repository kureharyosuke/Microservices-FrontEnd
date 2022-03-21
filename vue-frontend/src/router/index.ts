import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Main from "@/pages/Main.vue"; // 1. default import

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Main, // 2. default import
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/pages/admin/Admin.vue"),
    children: [{ path: "products", component: () => import("@/pages/admin/Products.vue") }],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
