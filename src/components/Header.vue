<template>
    <header id="header">
        <div class="mdc-top-app-bar mdc-top-app-bar--fixed" id="headerMain">
            <div class="mdc-top-app-bar__row d-flex">
                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start" id="header-logo">
                    <div class="logo-icon-container" aria-label="Constantine Minhagim" @click="$router.push({ name: 'Home' })">
                        <svg class="icon-perso">
                            <use xlink:href="#icon-logo-cm" href="#icon-logo-cm" />
                        </svg>
                    </div>
                    <span class="mdc-top-app-bar__title">
                        <router-link to="/" class="link-design">
                            <span id="siteTitle1">
                                <span class="lang-fr">Constantine</span>
                                <span class="lang-he">קונסטנטין</span>
                            </span>
                            <span id="siteTitle2">
                                <span class="lang-fr">Minhagim</span>
                                <span class="lang-he">מנהגים</span>
                            </span>
                        </router-link>
                    </span>
                </section>
                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" id="header-menu">
                    <router-link class="header-btn" id="header-donation" :to="{ name: 'Donate' }" aria-label="Donations">
                        <svg class="icon-menu">
                            <use xlink:href="#icon-donate" href="#icon-donate" />
                        </svg>
                    </router-link>
                    <div class="header-btn drawer-toggle" id="mainMenuBtn">
                        <svg class="icon-menu">
                            <use xlink:href="#icon-menu" href="#icon-menu" />
                        </svg>
                    </div>
                </section>
            </div>

            <!-- <ModalLang /> -->

            <aside class="mdc-drawer mdc-drawer--modal" id="mainNav">
                <div id="menu-top-bar">
                    <div id="menu-home" class="menu-top-icon drawer-toggle" @click="$router.push({ name: 'Home' })">
                        <svg class="icon-perso">
                            <use xlink:href="#icon-logo-cm" href="#icon-logo-cm" />
                        </svg>
                    </div>
                    <div id="menu-top-middle">
                        <div id="menu-lang" class="menu-top-icon lang-toggle drawer-toggle" @click="changeLang">
                            <svg class="icon-lang">
                                <use xlink:href="#icon-lang" href="#icon-lang" />
                            </svg>
                            <label>
                                <span class="lang-fr">עברית</span>
                                <span class="lang-he">Français</span>
                            </label>
                        </div>
                        <div id="menu-theme" class="menu-top-icon theme-toggle drawer-toggle">
                            <svg class="icon-theme">
                                <use xlink:href="#icon-theme" href="#icon-theme" />
                            </svg>
                            <label>
                                <span class="lang-fr">Thème</span>
                                <span class="lang-he">תֵמָה</span>
                            </label>
                        </div>
                    </div>
                    <div id="menu-close" class="menu-top-icon drawer-toggle">
                        <svg class="icon-menu">
                            <use xlink:href="#icon-menu" href="#icon-menu" />
                        </svg>
                    </div>
                </div>
                <div class="mdc-drawer__content">
                    <nav class="nav-grid">
                        <router-link class="nav-grid-item drawer-toggle" :to="{ name: 'About' }">
                            <svg>
                                <use xlink:href="#icon-info" href="#icon-info" />
                            </svg>
                            <span class="mdc-list-item__text lang-fr">À propos</span>
                            <span class="mdc-list-item__text lang-he">אודות</span>
                        </router-link>
                        <router-link class="nav-grid-item drawer-toggle" :to="{ name: 'Donate' }">
                            <svg>
                                <use xlink:href="#icon-donate" href="#icon-donate" />
                            </svg>
                            <span class="mdc-list-item__text lang-fr">Dons</span>
                            <span class="mdc-list-item__text lang-he">תרומות</span>
                        </router-link>
                        <router-link class="nav-grid-item drawer-toggle" :to="{ name: 'Contact' }">
                            <svg>
                                <use xlink:href="#icon-contact" href="#icon-contact" />
                            </svg>
                            <span class="mdc-list-item__text lang-fr">Contact</span>
                            <span class="mdc-list-item__text lang-he">צור קשר</span>
                        </router-link>
                        <router-link class="nav-grid-item drawer-toggle" :to="{ name: 'Rabbanim' }">
                            <svg>
                                <use xlink:href="#icon-david-thin" href="#icon-david-thin" />
                            </svg>
                            <span class="mdc-list-item__text lang-fr">Rabbins</span>
                            <span class="mdc-list-item__text lang-he">רבנים</span>
                        </router-link>
                        <router-link class="nav-grid-item drawer-toggle" :to="{ name: 'English' }">
                            <svg>
                                <use xlink:href="#icon-uk" href="#icon-uk" />
                            </svg>
                            <span class="mdc-list-item__text">English</span>
                        </router-link>
                        <router-link class="nav-grid-item drawer-toggle" :to="{ name: 'Printouts' }">
                            <svg>
                                <use xlink:href="#icon-print" href="#icon-print" />
                            </svg>
                            <span class="mdc-list-item__text lang-fr">Affiches</span>
                            <span class="mdc-list-item__text lang-he">גליונות</span>
                        </router-link>
                        <a href="https://drive.google.com/drive/folders/0BzlEWQTUwxa6YnRYYkJFU0NWalE?usp=sharing" target="_blank" rel="noopener" class="drive">
                            <svg>
                                <use xlink:href="#icon-drive" href="#icon-drive" />
                            </svg>
                            <span class="mdc-list-item__text lang-fr">Drive</span>
                            <span class="mdc-list-item__text lang-he">דרייב</span>
                        </a>
                        <router-link class="nav-grid-item drawer-toggle menu-siddour nav-grid-item-disabled" :to="{ name: 'Home' }">
                            <svg>
                                <use xlink:href="#icon-book" href="#icon-book" />
                            </svg>
                            <span class="mdc-list-item__text lang-fr">Bientôt...</span>
                            <span class="mdc-list-item__text lang-he">בקרוב</span>
                        </router-link>
                    </nav>
                </div>
            </aside>
        </div>
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
        this.lang = localStorage.getItem('lang');
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
                // this.pageTitle = data['56Mopx0dRrhGql4KrFQX'].title;
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
