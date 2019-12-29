import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./views/Home.vue"),
      alias: '/'
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
      path: "/fiches-a-imprimer",
      name: "Printouts",
      component: () =>
        import("./views/Printouts.vue")
    },
    {
      path: "/about",
      name: "About",
      component: () => import("./views/pages/About.vue"),
      meta: {
        entryId: 'EJPLGthI0WMQ0tlrqPsA'
      }
    },
    {
      path: "/donate",
      name: "Donations",
      component: () =>
        import("./views/pages/Donations.vue")
    },
    {
      path: "/articles",
      name: "Articles",
      component: () =>
        import("./views/pages/Articles.vue")
    },
    {
      path: "/rabbanim",
      name: "Rabbanim",
      component: () =>
        import("./views/pages/Rabbanim.vue")
    },
    {
      path: "/english",
      name: "English",
      component: () =>
        import("./views/pages/English.vue")
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
