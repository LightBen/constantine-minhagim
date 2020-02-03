<template>
    <div id="page-minhag">
        <slot name="page-content">
            <div class="page-title-container">
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
    name: 'PageMinhag',
    data() {
        return {
            dataEntryId: '',
            pageTitle: '',
            pageContent: ''
        }
    },
    props: ['entryId'],
    mounted() {
        this.dataEntryId = this.entryId;
        if (!this.dataEntryId) {
            this.dataEntryId = this.$route.params.minhag_url
        }
        this.getContent();
        this.$root.$on('langChanged', this.getContent);
    },
    methods: {
        getContent() {
            this.$flamelinkApp.content.get({
                schemaKey: 'minhag',
                entryId: this.dataEntryId
            })
            .then(pageContent => {
                this.pageTitle = pageContent.title;
                this.pageContent = pageContent.content;
            })
            .catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));
        }
    }
};
</script>
