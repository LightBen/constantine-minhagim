<template>
<div id="app">
    <!-- <template v-if="!isProduction"> -->
        <div class="site-container">
            <Header />
            <div id="status"></div>
            <button id="refresh-button" v-if="updateExists" @click="refreshApp">
                <span class="fr">Nouvelle version disponible, cliquer ici !</span>
                <span class="he">גרסה חדשה זמינה, לחצו כאן!</span>
            </button>
            <main>
                <div class="page-container">
                    <transition name="fade" mode="out-in">
                        <router-view />
                    </transition>
                    <!-- <FooterStatic /> -->
                </div>
            </main>
            <Footer />
        </div>
        <div class="overlay drawer-toggle"></div>
        <MainNav />
        <fabBtn />
        <Icons />
    <!-- </template>
    <template v-else>
        <div id="maintenance">
            <div id="maintenance-content">Constantine Minhagim<br>revient bientôt !</div>
        </div>
    </template> -->
</div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FooterStatic from '@/components/FooterStatic'
import MainNav from '@/components/MainNav'
import fabBtn from '@/components/fabBtn'
import Icons from '@/components/Icons'
import {MDCRipple} from '@material/ripple';

export default {
    name: 'App',
    components: {
        Header,
        Footer,
        FooterStatic,
        MainNav,
        fabBtn,
        Icons
    },
    data () {
        return {
            isProduction: process.env.NODE_ENV === 'production',
            refreshing: false,
            registration: null,
            updateExists: false
        }
    },
    methods: {
        hideMessage() {
            this.showMessage = false
        },
        showRefreshUI(e) {
            this.registration = e.detail
            this.updateExists = true  
        },
        refreshApp() {
            this.updateExists = false
            if (!this.registration || !this.registration.waiting) return
            // send message to SW to skip the waiting and activate the new SW
            this.registration.waiting.postMessage('skipWaiting')
        },
    },
    created() {
        const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
        const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
          return new MDCRipple(el);
        });

        // Custom code to let user update the app when a new service worker is available
        document.addEventListener('swUpdated', this.showRefreshUI, {once: true})
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (this.refreshing) return
            this.refreshing = true
            // Here the actual reload of the page occurs
            window.location.reload()
        })
    },
};
</script>

<style src="./app.scss" lang="scss"></style>
<style lang="scss">
    #refresh-button { position: fixed; z-index: 100; width: 100vw; left: 0; top: var(--headerHeight); background: #388e3cee; color: #fff; padding: 10px 5px; border: none; box-shadow: none; transition: var(--transitionAll); text-align: center; }
    .scrolling-down {
        #refresh-button, #status { top: 0; }
    }

    #status { 
        display: none; width: 100vw; position: fixed; top: var(--headerHeight); background-color: rgba(198, 40, 40, 0.95); line-height: 1.2; text-align: center; left: 0; padding: 10px; z-index: 200; color: #fff; transition: var(--transitionAll); direction: ltr;
        &.offlineLoad { 
            display: block; background-color: rgba(198, 40, 40, 0.95);
        }
        &.online { 
            display: block; background-color: rgba(#388E3C, 0.95); opacity: 0;
            animation-name: backOnline; animation-duration: 2s; animation-delay: 0; animation-fill-mode: forwards; ; 
        }
        &.offline { 
            display: block; background-color: rgba(198, 40, 40, 0.95); opacity: 0;
            animation-name: backOffline; animation-duration: 0.5s; animation-fill-mode: forwards; 
        }
    }
    @keyframes backOnline {
        0%   { opacity: 0; display: block; z-index: 1; }
        20%   { opacity: 1; }
        80%   { opacity: 1; }
        99% { display: block; z-index: 1; }
        100% { opacity: 0; display: none; z-index: -1; }
    }
    @keyframes onlineAppear {
        0%   { opacity: 0; }
        100% { opacity: 1; }
    }
    @keyframes backOffline {
        0%   { opacity: 0; }
        100% { opacity: 1; }
    }

    .page-title-container { 
        background-image: url(./assets/img/thumbnail-articles.jpg);
    }
    div[id*="minhag"] .page-title-container { background-image: url('./assets/img/thumbnail-minhag.jpg'); }
    div[id*="hazanout"] .page-title-container { background-image: url('./assets/img/thumbnail-hazanout.jpg'); }
    div[id*="cuisine"] .page-title-container { background-image: url('./assets/img/thumbnail-cuisine.jpg'); }
    div[id*="articles"] .page-title-container { background-image: url('./assets/img/thumbnail-articles.jpg'); }

    html[data-theme="dark"]{
        .page-title-container { 
            background-image: linear-gradient(to bottom, rgba(#222, 1) 70px, rgba(#222, 0.67) 100%), url(./assets/img/thumbnail-articles.jpg);
        }
        div[id*="minhag"] .page-title-container { background-image: url('./assets/img/thumbnail-minhag.jpg'); }
        div[id*="hazanout"] .page-title-container { background-image: url('./assets/img/thumbnail-hazanout.jpg'); }
        div[id*="cuisine"] .page-title-container { background-image: url('./assets/img/thumbnail-cuisine.jpg'); }
        div[id*="articles"] .page-title-container { background-image: url('./assets/img/thumbnail-articles.jpg'); }
    }

    .card-img { background-image: url('./assets/img/thumbnail-articles.jpg'); }
    #minhag .card-img { background-image: url('./assets/img/thumbnail-minhag.jpg'); }
    #hazanout .card-img { background-image: url('./assets/img/thumbnail-hazanout.jpg'); }
    #cuisine .card-img { background-image: url('./assets/img/thumbnail-cuisine.jpg'); }
    #articles .card-img { background-image: url('./assets/img/thumbnail-articles.jpg'); }
</style>
