<template>
<div id="app">
    <!-- <template v-if="!isProduction"> -->
        <div class="site-container">
            <Header />
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
            isProduction: process.env.NODE_ENV === 'production'
        }
    },
    created() {
        const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
        const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
          return new MDCRipple(el);
        });
    },
};
</script>

<style src="./app.scss" lang="scss"></style>
<style lang="scss">
    .page-title-container { 
        background-image: url(./assets/img/thumbnail-articles.jpg);
    }
    div[id*="minhag"] .page-title-container { background-image: url('./assets/img/thumbnail-minhag.jpg'); }
    div[id*="hazanout"] .page-title-container { background-image: url('./assets/img/thumbnail-hazanout.jpg'); }
    div[id*="cuisine"] .page-title-container { background-image: url('./assets/img/thumbnail-cuisine.jpg'); }
    div[id*="articles"] .page-title-container { background-image: url('./assets/img/thumbnail-articles.jpg'); }

    .dark {
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
