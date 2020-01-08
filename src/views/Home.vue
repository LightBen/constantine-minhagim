<template>
<div id="home">
    <section class="section-full full-img" id="welcome">
        <div class="section-content">
            <h1>
                <span id="siteTitle1" v-html="siteTitle1"></span>
                <span id="siteTitle2" v-html="siteTitle2"></span>
            </h1>
            <div class="welcome-sections">
                <router-link :to="{ name: 'Minhag' }" class="minhag">Minhag</router-link>
                <router-link :to="{ name: 'Hazanout' }" class="hazanout">'Hazanout</router-link>
                <router-link :to="{ name: 'Cuisine' }" class="cuisine">Cuisine</router-link>
                <router-link :to="{ name: 'Printouts' }" class="printouts">Fiches</router-link>
                <router-link :to="{ name: 'Home' }" class="drive">Drive</router-link>
            </div>
        </div>
    </section>
</div>
</template>

<style src="./home.scss" lang="scss"></style>

<script>
export default {
    name: 'home',
    data() {
        return {
            siteTitle1: '',
            siteTitle2: ''
        }
    },
    components: {},
    mounted() {
        this.getContent();
    },
    methods: {
        getContent() {
            this.$flamelinkApp.content.get({
                schemaKey: 'general',
                entryId: 'hWHhdCrUx34iDIsPZokP',
            })
            .then(pageTitle1 => {
                this.siteTitle1 = pageTitle1.title;
            })
            .catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));
            
            this.$flamelinkApp.content.get({
                schemaKey: 'general',
                entryId: 'crXGbshLALxsrrmX0APz'
            })
            .then(pageTitle2 => {
                this.siteTitle2 = pageTitle2.title;
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
    // created() {
    //     this.$flamelinkApp.content.get({
    //         schemaKey: 'general',
    //         entryId: 'aXPyDwZ20JsSYROQtoc7'
    //     })
    //     .then(siteTitleEl => {
    //         // this.pageTitle = homeData.title;
    //         document.getElementById('siteTitle').innerText = siteTitleEl.content;
    //         // console.log(siteTitleEl)
    //     })
    //     .catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));
    // }
};

    // created() {
    //     this.$flamelinkApp.content.subscribe({
    //         schemaKey: 'homepageSingletons',
    //         entryId: 'GuR67876KQ7wjTw2u7lH',
    //         callback(error, homepageSingletons) {
    //             if (error) {
    //                 return console.error('Something went wrong while retrieving all the content. Details:', error)
    //             }
    //             console.log('All the blog posts:', homepageSingletons)
    //         }
    //     })
    //     .then(siteTitleEl => {
    //         // this.pageTitle = homeData.title;
    //         document.getElementById('siteTitle').innerText = siteTitleEl.homepageSingletonContent;
    //         // console.log(siteTitleEl)
    //     })
    //     .catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));
    // }

</script>
