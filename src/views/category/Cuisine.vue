<template>
    <div id="cuisine" class="page-category" :class="[ (this.grid) ? 'grid' : 'list' ]">
        <transition name="fade">
            <Loading v-if="loading" />
        </transition>
        <div class="page-title-container">
            <div class="container">
                <h1 id="page-title">
                    <span class="lang-fr">Cuisine</span>
                    <span class="lang-he">מתכונים</span>
                </h1>
            </div>
        </div>
        <div class="container">
            <div class="display-switch-container">
                <div class="display-switch">
                    <div class="display-choice display-grid" @click="grid = true">
                        <svg class="icon-grid">
                            <use xlink:href="#icon-grid" href="#icon-grid" />
                        </svg>
                    </div>
                    <div class="display-choice display-list" @click="grid = false">
                        <svg class="icon-list">
                            <use xlink:href="#icon-list" href="#icon-list" />
                        </svg>
                    </div>
                </div>
            </div>
            <div id="cuisineContent" class="grid-container">
                <router-link class="grid-element card" v-for="(element, key) in elements" :key="key" :to="{ name: 'cuisine-url', params: {entryId: key, cuisine_url: key} }">
                    <figure class="card-content" tabindex="0">
                        <div class="card-img" v-if="grid === true && element.thumbnail && element.thumbnail.length && element.thumbnail[0].url" :style="{ 'background-image': 'url(' + element.thumbnail[0].url + ')' }"></div>
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

<script>
    import Loading from '@/components/Loading'
    export default {
        name: "Cuisine",
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
                pageTitle: 'Cuisine',
                pageTitleHe: 'מתכונים',
                loading: true,
                grid: false
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
                    schemaKey: 'cuisine',
                    fields: ['title', 'url', 'author', 'description', 'thumbnail'],
                    populate: ['thumbnail']
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
            }/*,
            filteringResults(word) {
                const filteredItems = document.querySelectorAll('#cuisineContent .grid-element');
                filteredItems.forEach(function(item) {
                    if (item.includes(word)) {
                        item.classList.add('shown');
                    } else {
                        item.classList.remove('shown');
                    }
                });
            }*/
        }
    };
</script>
