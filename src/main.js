import '@babel/polyfill'
import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import "./registerServiceWorker"
import firebase from "firebase/app"
import "firebase/firestore"
import FlamelinkPlugin from "./plugins/flamelink";

import PageMix from '@/components/PageMix.vue'
Vue.component('page-mix', PageMix);
import PageMinhagim from '@/components/PageMinhagim.vue'
Vue.component('page-minhagim', PageMinhagim);

const firebaseConfig = {
    apiKey: process.env.VUE_APP_FLAMELINK_API_KEY,
    authDomain: process.env.VUE_APP_FLAMELINK_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FLAMELINK_DB_URL,
    projectId: process.env.VUE_APP_FLAMELINK_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FLAMELINK_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FLAMELINK_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FLAMELINK_APP_ID,
    measurementId: process.env.VUE_APP_FLAMELINK_MEASUREMENT_ID
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

Vue.use(FlamelinkPlugin, {
    firebaseApp,
    env: 'production',
    locale: 'en-US', // fr, en-US, he
    dbType: 'cf'
})
// console.log({firebaseConfig});


Vue.config.productionTip = false;
Vue.config.devtools = true

new Vue({
    router,
    render: h => h(App)
}).$mount("#app")



/* CUSTOM FUNCTIONS */

// let footerStatic = document.querySelector('.page-container > *:first-child');
// console.log(footerStatic);
// footerStatic.innerHTML = "yo";

// let footerStatic = document.querySelector('#footerStaticContent:after');
// footerStatic.style.content = 'yo';

// let footerStatic = window.getComputedStyle(document.querySelector('#footerStaticContent'), ':after').getPropertyValue('content');
// footerStatic = "yo"

/* Custom properties */
let root = document.documentElement;
let bodyEl = document.body;
let headerHeight = document.querySelector('header').offsetHeight;
let footerHeight = document.getElementById('footerTabs').offsetHeight;
root.style.setProperty('--headerHeight', headerHeight + "px");
root.style.setProperty('--footerHeight', footerHeight + "px");
/* END Custom properties */

/* Theme switch */
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', (event) => {
    bodyEl.classList.toggle('dark');
})
/* END Theme switch */

/* Scroll appear/disappear bars */
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        bodyEl.classList.remove("scrolling-down");
    } else {
        bodyEl.classList.add("scrolling-down");
    }
    prevScrollpos = currentScrollPos;
}
/* END Scroll appear/disappear bars */

/* Open/Close Drawer */
const drawerToggle = document.querySelectorAll('.drawer-toggle');
const menuIconTop = document.querySelector('#mainMenuBtn');
const menuIconFab = document.querySelector('#mainMenuFab > span');
for (let i = 0; i < drawerToggle.length; i++) {
    drawerToggle[i].addEventListener('click', (event) => {
        bodyEl.classList.toggle('drawer-opened');
        if (menuIconTop.innerHTML === "menu") {
            menuIconTop.innerHTML = "close"
        } else {
            menuIconTop.innerHTML = "menu"
        }
        if (menuIconFab.innerHTML === "apps") {
            menuIconFab.innerHTML = "close"
        } else {
            menuIconFab.innerHTML = "apps"
        }
    });
};
/* END Open/Close Drawer */

/* Changing design depending on day time */
function dayTimeCss() {
    let currentTime = new Date().getHours();
    let appEl = document.getElementById('app');
    if (0 <= currentTime && currentTime < 5) {
        appEl.classList.add('night');
    }
    if (5 <= currentTime && currentTime < 11) {
        appEl.classList.add('morning');
    }
    if (11 <= currentTime && currentTime < 16) {
        appEl.classList.add('day');
    }
    if (16 <= currentTime && currentTime < 19) {
        appEl.classList.add('evening');
    }
    if (19 <= currentTime && currentTime < 24) {
        appEl.classList.add('night');
    }
}
dayTimeCss();
/* END Changing design depending on day time */
