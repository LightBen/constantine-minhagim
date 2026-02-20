<template>
    <div class="page-category" :id="pageId">
        <transition name="fade">
            <Loading v-if="loading" />
        </transition>
        <div class="page-title-container">
            <div class="container">
                <h1 id="page-title">
                    <span class="lang-fr" v-html="pageTitle"></span>
                    <span class="lang-he" v-html="pageTitleHe"></span>
                </h1>
            </div>
        </div>
        <div class="container">
            <div class="grid-container">
                <router-link class="grid-element card" v-for="(element, key) in elements" :key="key" :to="{ name: urlName, params: {entryId: key, urlName: key} }">
                    <figure class="card-content" tabindex="0">
                        <div class="card-img" v-if="element.thumbnail && element.thumbnail.length" :style="{ 'background-image': 'url(' + element.thumbnail + ')' }"></div>
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
    name: 'PageCategory',
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
            dataEntryId: '',
            loading: true
        }
    },
    props: {
        pageId: {
            type: String
        },
        pageTitle: {
            type: String
        },
        pageTitleHe: {
            type: String
        },
        urlName: {
            type: String
        },
        fields: {
            type: Array
        },
        populate: {
            type: Array
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
                schemaKey: this.schemaKey,
                fields: this.fields,
                populate: this.populate,
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