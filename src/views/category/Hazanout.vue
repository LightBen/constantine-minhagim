<template>
    <div id="hazanout" class="page-category">
        <transition name="fade">
            <Loading v-if="loading" />
        </transition>
        <div class="page-title-container">
            <div class="container">
                <h1 id="page-title">
                    <span class="lang-fr">'Hazanout</span>
                    <span class="lang-he">חזנות</span>
                </h1>
            </div>
        </div>
        <div class="container">
            <div id="hazanoutContent" class="grid-container">
                <router-link class="grid-element card" v-for="(element, key) in elements" :key="key" :to="{ name: 'hazanout-url', params: {entryId: key, hazanout_url: key} }">
                    <figure class="card-content" tabindex="0">
                        <div class="card-img" v-if="element.thumbnail && element.thumbnail.length && element.thumbnail[0].url" :style="{ 'background-image': 'url(' + element.thumbnail[0].url + ')' }"></div>
                        <div class="card-img" v-else></div>
                        <figcaption class="card-text">
                            <div class="card-title mdc-typography mdc-typography--headline6">{{ element.title }}</div>
                        </figcaption>
                    </figure>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
</style>

<script>
    import Loading from '@/components/Loading'
    export default {
        name: "Hazanout",
        components: {
            Loading
        },
        metaInfo() {
            return {
                title: this.pageTitle,
            }
        },
        data() {
            return { 
                elements: [],
                pageTitle: '\'Hazanout',
                pageTitleHe: 'חזנות',
                loading: true
            }
        },
        mounted() {
             this.$root.$on('langChanged', this.getContent);
             this.setPageTitle();
        },
        created() {
            this.getContent()
        },
        methods: {
            getContent() {
                this.$flamelinkApp.content.get({
                    schemaKey: 'hazanout',
                    fields: ['title', 'url', 'author', 'description', 'thumbnail'],
                    populate: ['thumbnail'],
                })
                .then(elements => {
                    this.elements = elements;
                    this.loading = false;
                    // console.log('All the elements:', elements);
                })
            },
            setPageTitle() {
                this.$flamelinkApp.settings.getLocale()
                .then(locale => {
                    if (locale === 'he') {
                        this.pageTitle = this.pageTitleHe
                    }
                })
            }
        }
    };
</script>
