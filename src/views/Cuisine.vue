<template>
    <div id="cuisine">
        <div class="page-title-container">
            <div class="container">
                <h1 id="page-title">
                    <span class="lang-fr">Cuisine</span>
                    <span class="lang-he">מתכונים</span>
                </h1>
            </div>
        </div>
        <div v-if="loading">
            <!-- Of course, you can decide what content to show/hide based on your new loading value -->
            <span>I AM LOADING CONTENT AT THE MOMENT</span>            
        </div>
        <div class="container" v-if="!loading">
            <div id="cuisineContent" class="grid-container">
                <router-link class="grid-element card" v-for="(element, key) in elements" :key="key" :to="{ name: 'cuisine-url', params: {entryId: key, cuisine_url: key} }">
                    <figure class="card-content" tabindex="0">
                        <!--<div class="card-img" v-if="element.thumbnail" :style="{ 'background-image': 'url(' + element.thumbnail[0].url + ')' }"></div>
                        <div class="card-img" v-else></div>-->
                        <div class="card-img"></div>
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
    export default {
        name: "Cuisine",
        metaInfo() {
            return {
                title: this.pageTitle            
            }
        },
        data() {
            return { 
                elements: [],
                pageTitle: 'Cuisine',
                pageTitleHe: 'מתכונים',
                loading: true, //the component will be loading by default
            }
        },
        mounted() {
             this.$root.$on('langChanged', this.getContent);
             this.setPageTitle();
        },
        created() {
            //we can either handle the loading state at the time we call the getContent method, 
            // or we can handle it inside of the acatual get content method, which is what i'll do here. 
            //For illustration, i'll comment out the alternative way
            this.getContent()
            
            //Or use the promise where we call get content, 
            // in case don dont want to always show the loading when getContent is called from other places
            
            this.loading = true //just make sure loading is set to true, even though we defaulted it to true in the data object
            this.getContent().then((elements) => {
                //when the "then" callback if fired, we know that the data has loaded
                // since getContent now returns the promise with the `elements`, we can access it here, if we want.
                this.loading = false
            })
            
        },
        methods: {
            /**
            * Make sure this returns the Promise object 
            * so that callers of this method know when it's completed
            * @returns Promise<void>
            */
            getContent() {
                return this.$flamelinkApp.content.get({
                    schemaKey: 'cuisine',
                    fields: ['title', 'url', 'author', 'description', 'thumbnail'],
                    populate: ['thumbnail'],
                })
                .then(elements => {                    
                    this.elements = elements;
                    this.loading = false; //optional, since we are handling the loading state in the `onCreate` method above
                    console.log('All the elements:', elements);
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
