const routes = [
  {
    path: "",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/Homepage.vue") },
      {
        path: "/departments",
        component: () => import("pages/Departments.vue")
      },
      { path: "/aboutus", component: () => import("pages/Aboutus.vue") },
      { path: "/location", component: () => import("pages/Location.vue") }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
