<template>
<div id="home">
    <section class="section-full full-img" id="welcome">
        <div class="section-content">
            <div class="icon-home-main">
                <svg>
                    <use xlink:href="#icon-logo-cm-main" href="#icon-logo-cm-main" />
                </svg>
            </div>
            <h1>
                <span id="siteTitle1" v-html="siteTitle1"></span>
                <span id="siteTitle2" v-html="siteTitle2"></span>
            </h1>
            <div id="site-description">
                <span class="lang-fr">Minhagim constantinois <br>et d'Afrique du Nord</span>
                <span class="lang-he">מנהגי קונסטנטין <br>וצפון אפריקה</span>
            </div>
            <div id="welcome-sections">
                <router-link :to="{ name: 'Minhag' }" class="minhag">
                    <svg class="icon-home-section">
                        <use xlink:href="#icon-star-david" href="#icon-star-david" />
                    </svg>
                    <span class="home-section-title lang-fr">Minhag</span>
                    <span class="home-section-title lang-he">מנהג</span>
                </router-link>
                <router-link :to="{ name: 'Hazanout' }" class="hazanout">
                    <svg class="icon-home-section">
                        <use xlink:href="#icon-music-1" href="#icon-music-1" />
                    </svg>
                    <span class="home-section-title lang-fr">'Hazanout</span>
                    <span class="home-section-title lang-he">חזנות</span>
                </router-link>
                <router-link :to="{ name: 'Cuisine' }" class="cuisine">
                    <svg class="icon-home-section">
                        <use xlink:href="#icon-food-tray" href="#icon-food-tray" />
                    </svg>
                    <span class="home-section-title lang-fr">Cuisine</span>
                    <span class="home-section-title lang-he">מתכונים</span>
                </router-link>
                <router-link :to="{ name: 'Articles' }" class="articles">
                    <i class="material-icons icon-home-section" aria-hidden="true">description</i>
                    <span class="home-section-title lang-fr">Articles</span>
                    <span class="home-section-title lang-he">מאמרים</span>
                </router-link>
                <a href="https://drive.google.com/drive/folders/0BzlEWQTUwxa6YnRYYkJFU0NWalE?usp=sharing" target="_blank" class="drive">
                    <i class="material-icons icon-home-section" aria-hidden="true">storage</i>
                    <span class="home-section-title">
                        <span class="lang-fr">Drive</span>
                        <span class="lang-he">דרייב</span>
                        <i class="material-icons home-section-title-icon" aria-hidden="true">open_in_new</i>
                    </span>
                </a>
                <router-link :to="{ name: 'Home' }" class="siddour section-disabled">
                    <i class="material-icons icon-home-section" aria-hidden="true">menu_book</i>
                    <span class="home-section-title lang-fr">Bientôt...</span>
                    <span class="home-section-title lang-he">בקרוב</span>
                </router-link>
            </div>
        </div>
    </section>
</div>
</template>

<style src="./home.scss" lang="scss"></style>

<script>
export default {
    name: 'home',
    metaInfo: {
        title: 'Home'
    },
    data() {
        return {
            siteTitle1: '',
            siteTitle2: '',
        }
    },
    components: {},
    mounted() {
        this.getContent();
        this.$root.$on('langChanged', this.getContent);
    },
    methods: {
        getContent() {
            this.$flamelinkApp.content.get({
                schemaKey: 'general',
            })
            .then(data => {
                // console.log('data: ', data);;
                this.pageTitle = data['56Mopx0dRrhGql4KrFQX'].title;
                this.siteTitle1 = data['hWHhdCrUx34iDIsPZokP'].title;
                this.siteTitle2 = data['crXGbshLALxsrrmX0APz'].title;
            })
            .catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));
        }
    },
    beforeCreate: function() {
        document.body.classList.add('is-homepage');
    },
    beforeDestroy: function() {
        document.body.classList.remove('is-homepage');
    }
};
</script>
