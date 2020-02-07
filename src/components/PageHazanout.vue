<template>
    <div id="page-hazanout">
        <slot name="page-content">
            <div class="page-title-container">
                <figure v-if="pageBanner" :style="{ 'background-image': 'url(' + pageBanner + ')' }"></figure>
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
export default {
    name: 'PageHazanout',
    data() {
        return {
            dataEntryId: '',
            pageTitle: '',
            pageContent: '',
            pageBanner: ''
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
                this.pageBanner = pageContent.mainImage[0].url;
            })
            .catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));
        }
    }
};
</script>
