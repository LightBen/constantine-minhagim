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
    component: () => import("./views/category/Minhag.vue")
  },
  {
    path: '/minhag/:minhag_url',
    name: 'minhag-url',
    component: () => import("./components/PageMinhag.vue"),
    props: true
  },
  {
    path: "/hazanout",
    name: "Hazanout",
    component: () => import("./views/category/Hazanout.vue")
  },
  {
    path: '/hazanout/:hazanout_url',
    name: 'hazanout-url',
    component: () => import("./components/PageHazanout.vue"),
    props: true
  },
  {
    path: "/cuisine",
    name: "Cuisine",
    component: () => import("./views/category/Cuisine.vue")
  },
  {
    path: '/cuisine/:cuisine_url',
    name: 'cuisine-url',
    component: () => import("./components/PageCuisine.vue"),
    props: true
  },
  {
    path: "/articles",
    name: "Articles",
    component: () => import("./views/category/Articles.vue")
  },
  {
    path: '/articles/:articles_url',
    name: 'articles-url',
    component: () => import("./components/PageArticles.vue"),
    props: true
  },
  {
    path: "/siddour",
    name: "Siddour",
    component: () => import("./views/siddur/Siddour.vue")
  },
  {
    path: "/print",
    name: "Printouts",
    component: () => import("./views/pages/Printouts.vue"),
    meta: {
      entryId: 'xTDjpC1FBEF5NUxHgVAs'
    }
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("./views/pages/Contact.vue"),
    meta: {
      entryId: 'gEyCCPwRxH7Me3OrQG4S'
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
    path: "/rabbanim",
    name: "Rabbanim",
    component: () => import("./views/pages/Rabbanim.vue"),
    meta: {
      entryId: 'l2daIjO7N1UNOfyh04KN'
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
