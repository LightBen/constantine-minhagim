<!-- <template>
    <page-category 
        :pageId="pageId" 
        :pageTitle="pageTitle"
    />
</template>

<script>
    export default {
        name: "Articles",
        data() {
            return {
                pageId: "about",
                pageTitle: "Articles",
                pageTitleHe: "מאמרים",
                urlName: "articles-url",
                populate: ['thumbnail']
            }
        },
    };
</script> -->

<template>
    <div id="articles" class="page-category" :class="[ (this.grid) ? 'grid' : 'list' ]">
        <transition name="fade">
            <Loading v-if="loading" />
        </transition>
        <div class="page-title-container">
            <div class="container">
                <h1 id="page-title">
                    <span class="lang-fr">Articles</span>
                    <span class="lang-he">מאמרים</span>
                </h1>
            </div>
        </div>
        <div class="container">
            <div id="search-container">
                <div id="search-filter">
                    <input type="text" required @input="filterSearch">
                    <label class="lang-fr">Rechercher</label>
                    <label class="lang-he">לחפש</label>
                </div>
                <div class="display-switch-container">
                    <div class="display-switch">
                        <div class="display-choice display-grid" @click="grid = true">
                            <svg class="icon-grid">
                                <use xlink:href="#icon-grid" href="#icon-grid" />
                            </svg>
                            <div class="display-label">
                                <span class="lang-fr">Grille</span>
                                <span class="lang-he">רשת</span>
                            </div>
                        </div>
                        <div class="display-choice display-list" @click="grid = false">
                            <svg class="icon-list">
                                <use xlink:href="#icon-list" href="#icon-list" />
                            </svg>
                            <div class="display-label">
                                <span class="lang-fr">Liste</span>
                                <span class="lang-he">רשימה</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="articlesContent" class="grid-container">
                <router-link class="grid-element card" v-for="(element, key) in elements" :key="key" :to="{ name: 'articles-url', params: {entryId: key, articles_url: key} }">
                    <figure class="card-content" tabindex="0">
                        <div class="card-img" v-if="grid === true && element.thumbnail && element.thumbnail.length" :style="{ 'background-image': 'url(' + element.thumbnail + ')' }"></div>
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
        name: "Articles",
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
                pageTitle: 'Articles',
                pageTitleHe: 'מאמרים',
                loading: true,
                grid: true,
                entries: []
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
                    schemaKey: 'articles',
                    fields: ['title', 'url', 'author', 'description', 'thumbnail']
                })
                .then(elements => {
                    this.elements = elements;
                    this.loading = false;
                    setTimeout(() => {
                        this.entries = document.querySelectorAll('.grid-element')
                    }, 100);
                })
            },
            setPageTitle() {
                this.$flamelinkApp.settings.getLocale()
                .then(locale => {
                    if (locale === 'he') {
                        this.pageTitle = this.pageTitleHe
                    }
                })
            },
            filterSearch(event) {
                let value = event.target.value;
                for (var i=0, l=this.entries.length; i<l; i++) {
                    var entryText = this.entries[i].getElementsByClassName('card-title')[0].innerHTML;
                    if (entryText.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().indexOf(value.toLowerCase()) != -1) this.entries[i].classList.remove("card-hidden"); // add toLowerCase method to ignore case
                    else this.entries[i].classList.add("card-hidden");
                }
            }
        }
    };
</script>
