<template>
    <div id="page-hazanout" class="page-page">
        <transition name="fade">
            <Loading v-if="loading" />
        </transition>
        <slot name="page-content">
            <div class="page-title-container">
                <figure v-if="pageBanner && pageBanner.length && pageBanner[0].url" :style="{ 'background-image': 'url(' + pageBanner[0].url + ')' }"></figure>
                <div class="container">
                    <h1 id="page-title">
                        <span class="lang" v-html="pageTitle"></span>
                    </h1>
                </div>
            </div>
            <div class="container">
                <div id="page-content" v-html="pageContent"></div>
            </div>
        </slot>
    </div>
</template>

<script>
import Loading from '@/components/Loading'
export default {
    name: 'PageHazanout',
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
            pageTitle: '',
            pageContent: '',
            pageBanner: '',
            loading: true
        }
    },
    props: ['entryId'],
    mounted() {
        this.dataEntryId = this.entryId;
        if (!this.dataEntryId) {
            this.dataEntryId = this.$route.params.hazanout_url
        }
        this.getContent();
        this.$root.$on('langChanged', this.getContent);
    },
    methods: {
        getContent() {
            this.$flamelinkApp.content.get({
                schemaKey: 'hazanout',
                entryId: this.dataEntryId,
                populate: ['mainImage']
            })
            .then(pageContent => {
                this.pageTitle = pageContent.title;
                this.pageContent = pageContent.content;
                this.pageBanner = pageContent.mainImage;
                this.loading = false;
            })
            .catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));
        }
    }
};
</script>
