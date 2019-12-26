import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/index.html",
      name: "Home",
      component: () => import("./views/Home.vue"),
      alias: '/'
    },
    {
      path: "/about",
      name: "About",
      component: () =>
        import("./views/About.vue")
    },
    {
      path: "/torah",
      name: "Torah",
      component: () =>
        import("./views/Torah.vue")
    },
    {
      path: "/minhag",
      name: "Minhag",
      component: () =>
        import("./views/Minhag.vue")
    },
    {
      path: "/hazanout",
      name: "Hazanout",
      component: () =>
        import("./views/Hazanout.vue")
    },
    {
      path: "/cuisine",
      name: "Cuisine",
      component: () =>
        import("./views/Cuisine.vue")
    },
    {
      path: '/404-not-found',
      name: 'not-found',
      component: () =>
        import("./views/notFound.vue")
    },
    {
      path: '*',
      redirect: '/404-not-found',
    }
  ]
});
