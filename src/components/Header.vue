<template>
<header id="header" class=" mdc-top-app-bar mdc-top-app-bar--fixed">
    <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <button class="mdc-icon-button material-icons mdc-top-app-bar__navigation-icon--unbounded drawer-toggle" id="mainMenuBtn">menu</button>
            <button class="mdc-icon-button" aria-label="Constantine Minhagim" @click="$router.push({ name: 'Home' })">
                <svg class="icon-perso">
                    <use xlink:href="#icon-logo-cm-fff" href="#icon-logo-cm-fff" />
                </svg>
            </button>
            <span class="mdc-top-app-bar__title">
                <router-link to="/" v-html="siteTitle"></router-link>
            </span>
        </section>
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
            <!-- <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Search">search</button> -->
            <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Contact">email</button>
            <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded theme-toggle" aria-label="Change Light Mode">wb_sunny</button>
            <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded lang-toggle" aria-label="Change language" @click="changeLang">language</button>
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
            siteTitle: '',
            lang: ''
        }
    },
    mounted() {
        this.lang = localStorage.getItem('lang') || 'fr';
        this.getLang();
        this.getSiteTitle();
    },
    methods: {
        getSiteTitle() {
            this.$flamelinkApp.content.get({
                schemaKey: 'general',
                entryId: '56Mopx0dRrhGql4KrFQX',
            })
            .then(siteTitle => {
                this.siteTitle = siteTitle.title;
            })
            .catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));
        },
        getLang() {
            this.$flamelinkApp.settings.setLocale(this.lang)
                .then(locale => {
                    document.documentElement.setAttribute('lang', locale);
                    this.getSiteTitle();
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
