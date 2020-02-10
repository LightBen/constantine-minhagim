<template>
    <div id="minhag">
        <div class="page-title-container">
            <div class="container">
                <h1 id="page-title">
                    <span class="lang-fr">Minhag</span>
                    <span class="lang-he">מנהג</span>
                </h1>
            </div>
        </div>
        <div class="container">
            <div id="minhagContent" class="grid-container">
                <router-link class="grid-element card" v-for="(element, key) in elements" :key="key" :to="{ name: 'minhag-url', params: {entryId: key, minhag_url: key} }">
                    <figure class="card-content" tabindex="0">
                        <div class="card-img" v-if="element.mainImage[0]" :style="{ 'background-image': 'url(' + element.mainImage[0].url + ')' }"></div>
                        <div class="card-img" v-else></div>
                        <figcaption class="card-text">
                            <div class="card-title mdc-typography mdc-typography--headline6">{{ element.title }}</div>
                            <!-- <div class="card-author">{{ element.author }}</div> -->
                            <!-- <div class="card-desc">{{ element.description }}</div> -->
                            <div class="imageMain"></div>
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
    export default {
        name: "Minhag",
        metaInfo() {
            return {
                title: this.pageTitle            
            }
        },
        data() {
            return { 
                elements: [],
                pageTitle: 'Minhag',
                pageTitleHe: 'מנהג'
            }
        },
        mounted() {
             this.$root.$on('langChanged', this.getContent);
        },
        created() {
            this.getContent()
        },
        methods: {
            getContent() {
                this.$flamelinkApp.content.get({
                    schemaKey: 'minhag',
                    fields: ['title', 'url', 'author', 'description', 'mainImage'],
                    populate: ['mainImage'],
                })
                .then(elements => {
                    this.elements = elements;
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
