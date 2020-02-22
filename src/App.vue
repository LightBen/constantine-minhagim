<template>
<div id="app" :class="{ 'loaded': !loading }">
    <!-- <template v-if="!isProduction"> -->
        <div class="site-container">
            <Loading v-if="loading" />
            <Header />
            <div id="status">
                <div class="offline">
                    <span class="lang-fr char-latin">Pas d'internet :(</span>
                    <span class="lang-he">אין קליטה :(</span>
                </div>
                <div class="online">
                    <span class="lang-fr char-latin">Online! Rafraichir la page :)</span>
                    <span class="lang-he">יש קליטה! לרפרש :)</span>
                </div>
            </div>
            <button id="refresh-button" v-if="updateExists" @click="refreshApp">
                <span class="lang-fr">Nouvelle version disponible, cliquer ici !</span>
                <span class="lang-he">גרסה חדשה זמינה, לחצו כאן!</span>
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
import Loading from '@/components/Loading'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FooterStatic from '@/components/FooterStatic'
import fabBtn from '@/components/fabBtn'
import Icons from '@/components/Icons'
// import {MDCRipple} from '@material/ripple';

export default {
    name: 'App',
    components: {
        Loading,
        Header,
        Footer,
        FooterStatic,
        fabBtn,
        Icons
    },
    metaInfo: {
        titleTemplate: '%s | Constantine Minhagim'
    },
    data () {
        return {
            isProduction: process.env.NODE_ENV === 'production',
            refreshing: false,
            registration: null,
            updateExists: false,
            loading: true,
            connection: 'online'
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
        resClass() {
            if (screen.width < 824) {
                document.body.classList.add('mobile');
                document.body.classList.remove('desktop');
            } else {
                document.body.classList.add('desktop');
                document.body.classList.remove('mobile');
            }
        },
        connectionDetection() {
            /* Network detection and notification */
            window.addEventListener('load', function() {
                var status = document.getElementById("status");
                
                var condition = navigator.onLine ? "online" : "offline";
                if (condition === 'offline') {
                    status.className = 'offline';
                    this.connection = 'offline';
                }

                function updateOnlineStatus(event) {
                var condition = navigator.onLine ? "online" : "offline";
                    if (condition === 'online') {
                        status.classList.add('online');
                        status.classList.remove('offline');
                        this.connection = 'online';
                    } else if (condition === 'offline') {
                        status.classList.add('offline');
                        status.classList.remove('online');
                        this.connection = 'offline';
                    }
                }

                window.addEventListener('online',  updateOnlineStatus);
                window.addEventListener('offline', updateOnlineStatus);
            });
        }
    },
    created() {
        this.resClass();
        this.connectionDetection();

        // const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
        // const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
        //   return new MDCRipple(el);
        // });

        // Custom code to let user update the app when a new service worker is available
        document.addEventListener('swUpdated', this.showRefreshUI, {once: true})
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (this.refreshing) return
            this.refreshing = true
            // Here the actual reload of the page occurs
            window.location.reload()
        });
    },
    mounted() {
        this.$root.$on('loaded', this.loading = false);
    }
};
</script>

<style src="./app.scss" lang="scss"></style>

<style lang="scss">
    .page-category {
        .page-title-container { 
                background-image: url('./assets/img/banner/books-shelf.jpg');
            }
        &[id*="minhag"] .page-title-container { 
            background-image: url('./assets/img/banner/constantine-rabbins.jpg'); 
            background-position: center 50px;
            @media (min-width: $sm) {
                background-position: center top;
            }
            @media (min-width: $md) {
                background-position: center -30px;
            }
            @media (min-width: $lg) {
                background-position: center -130px;
            }
        }
        &[id*="hazanout"] .page-title-container { 
        background-image: url('./assets/img/banner/constantine-orchestre.jpg'); background-position: center; 
            @media (min-width: $md) {
                background-position: center -100px;
            }
            @media (min-width: $lg) {
                background-position: center -200px;
            }
            @media (min-width: $xl) {
                background-position: center -400px;
            }
        }
        &[id*="cuisine"] .page-title-container { background-image: url('./assets/img/banner/couscous.jpg'); }
        &[id*="articles"] .page-title-container { background-image: url('./assets/img/banner/books-shelf.jpg'); }
    }

    // Page "page" default before loading the banner
    .page-page .page-title-container { 
        background-image: url('./assets/img/banner/default-banner.jpg');
    }

    // html[data-theme="dark"]{
    //     .page-title-container { 
    //         background-image: linear-gradient(to bottom, rgba(#222, 1) 70px, rgba(#222, 0.67) 100%), url('./assets/img/books-shelf.jpg');
    //     }
    //     div[id*="minhag"] .page-title-container { background-image: url('./assets/img/constantine-rabbins.jpg'); }
    //     div[id*="hazanout"] .page-title-container { background-image: url('./assets/img/raymond.jpg'); }
    //     div[id*="cuisine"] .page-title-container { background-image: url('./assets/img/couscous.jpg'); }
    //     div[id*="articles"] .page-title-container { background-image: url('./assets/img/books-shelf.jpg'); }
    // }


    /* Default card images */
    .card-img { background-image: url('./assets/img/thumbnail/books-shelf.jpg'); }
    #minhag .card-img { background-image: url('./assets/img/thumbnail/constantine-rabbins.jpg'); }
    #hazanout .card-img { background-image: url('./assets/img/thumbnail/constantine-orchestre.jpg'); }
    #cuisine .card-img { background-image: url('./assets/img/thumbnail/default-thumbnail-logo.jpg'); }
    #articles .card-img { background-image: url('./assets/img/thumbnail/books-shelf.jpg'); }

    /* Hebrew fonts */
    @font-face {
        font-family: 'Taamey David';
        src: url('./assets/font/TaameyDavidCLM-Medium.ttf');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Taamey David';
        src: url('./assets/font/TaameyDavidCLM-MediumOblique.ttf');
        font-weight: normal;
        font-style: oblique;
    }

    @font-face {
        font-family: 'Taamey David';
        src: url('./assets/font/TaameyDavidCLM-Bold.ttf');
        font-weight: bold;
        font-style: normal;
    }
</style>
