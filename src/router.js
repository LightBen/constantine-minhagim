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
      path: "/minhag",
      name: "Minhag",
      component: () => import("./views/Minhag.vue")
    },
    {
      path: "/hazanout",
      name: "Hazanout",
      component: () => import("./views/Hazanout.vue")
    },
    {
      path: "/cuisine",
      name: "Cuisine",
      component: () => import("./views/Cuisine.vue")
    },
    {
      path: "/fiches-a-imprimer",
      name: "Printouts",
      component: () => import("./views/Printouts.vue"),
      meta: {
        entryId: 'xTDjpC1FBEF5NUxHgVAs'
      }
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
      name: "Donate",
      component: () => import("./views/pages/Donate.vue"),
      meta: {
        entryId: 'Wq67TbsRbgWtNjkZdE6T'
      }
    },
    {
      path: "/articles",
      name: "Articles",
      component: () => import("./views/pages/Articles.vue"),
      meta: {
        entryId: 'EJPLGthI0WMQ0tlrqPsA'
      }
    },
    {
      path: "/rabbanim",
      name: "Rabbanim",
      component: () => import("./views/pages/Rabbanim.vue"),
      meta: {
        entryId: 'l2daIjO7N1UNOfyh04KN'
      }
    },
    {
      path: "/hazanout-files",
      name: "HazanoutMain",
      component: () => import("./views/hazanout/hazanout-main.vue"),
      meta: {
        entryId: 'B9qDnvHC9Yivh7GRVUiR'
      }
    },
    {
      path: "/prononciation",
      name: "Prononciation",
      component: () => import("./views/minhagim/Prononciation.vue"),
      meta: {
        entryId: 't4V63U2aex3a310rs3du'
      }
    },
    {
      path: "/mizrahim-yalkout-yossef",
      name: "MizrahimYalkoutYossef",
      component: () => import("./views/minhagim/MizrahimYalkoutYossef.vue"),
      meta: {
        entryId: 'hxJik707EDdzdRTDJKCa'
      }
    },
    {
      path: "/english",
      name: "English",
      component: () => import("./views/pages/English.vue"),
      meta: {
        entryId: 'JCRJHKAJiBAu49wYynl0'
      }
    },
    {
      path: '/404-not-found',
      name: 'not-found',
      component: () => import("./views/notFound.vue")
    },
    {
      path: '*',
      redirect: '/404-not-found',
    }
  ]
});
