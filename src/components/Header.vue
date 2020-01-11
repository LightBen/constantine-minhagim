<template>
<header id="header" class=" mdc-top-app-bar mdc-top-app-bar--fixed">
    <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <button class="mdc-icon-button material-icons mdc-top-app-bar__navigation-icon--unbounded drawer-toggle" id="mainMenuBtn">menu</button>
            <button class="mdc-icon-button" aria-label="Constantine Minhagim" @click="$router.push({ name: 'Home' })">
                <svg class="icon-perso">
                    <use xlink:href="#icon-logo-cm" href="#icon-logo-cm" />
                </svg>
            </button>
            <span class="mdc-top-app-bar__title">
                <router-link to="/">
                    <span id="siteTitle1" v-html="siteTitle1"></span>
                    <span id="siteTitle2" v-html="siteTitle2"></span>
                </router-link>
            </span>
        </section>
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
            <!-- <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Search">search</button> -->
            <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Donation">monetization_on</button>
            <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Contact">email</button>
            <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded theme-toggle" aria-label="Change Light Mode">wb_sunny</button>
            <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded lang-toggle" aria-label="Change language" @click="changeLang">language</button>
            <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded lang-toggle lang-name" aria-label="Change language" @click="changeLang"></button>
            <!-- <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Choose language">g_translate</button> -->
        </section>
    </div>
    <!-- <ModalLang /> -->
</header>
</template>

<style src="./header.scss" lang="scss" scoped></style>

<script>
// import ModalLang from "@/components/ModalLang";
export default {
    name: 'Header',
    components: {},
    data() {
        return {
            siteTitle1: '',
            siteTitle2: '',
            lang: ''
        }
    },
    mounted() {
        this.lang = localStorage.getItem('lang') || 'fr';
        this.getLang();
        this.getContent();
    },
    methods: {
        getContent() {
            this.$flamelinkApp.content.get({
                schemaKey: 'general',
            })
            .then(data => {
                // console.log('data: ', data);
                this.pageTitle = data['56Mopx0dRrhGql4KrFQX'].title;
                this.siteTitle1 = data['hWHhdCrUx34iDIsPZokP'].title;
                this.siteTitle2 = data['crXGbshLALxsrrmX0APz'].title;
            })
            .catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));
        },
        getLang() {
            this.$flamelinkApp.settings.setLocale(this.lang)
                .then(locale => {
                    document.documentElement.setAttribute('lang', locale);
                    this.getContent();
                    this.$root.$emit('langChanged', locale);
                })
                .catch(error => console.error('Something went wrong while setting the locale. Details:', error));
        },
        changeLang() {
            this.lang = this.lang === 'fr' ? 'he' : 'fr';
            localStorage.setItem('lang', this.lang);
            this.getLang();
        }
        // displayModalLang() {
        //     document.getElementById('modalLang').classList.add('modal-show');
        //     // console.log(document.getElementById('modalLang'))
        // }
    },
};
</script>
