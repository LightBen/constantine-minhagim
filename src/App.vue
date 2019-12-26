<template>
<div id="app">
    <div class="site-container">
        <Header />
        <main>
            <div class="page-container">
                <transition name="fade">
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
    created() {
        const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
        const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
          return new MDCRipple(el);
        });
    }
};
</script>

<style src="./app.scss" lang="scss"></style>
