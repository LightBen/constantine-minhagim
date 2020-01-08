<template>
    <div id="page-hazanout">
        <slot name="page-content">
            <div class="page-title-container">
                <div class="container">
                    <h1 id="page-title" v-html="pageTitle"></h1>
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
            pageContent: ''
        }
    },
    props: ['entryId'],
    mounted() {
        this.dataEntryId = this.entryId;
        if (!this.dataEntryId) {
            this.dataEntryId = this.$route.params.hazanout_url
        }
        this.getContent();
    },
    methods: {
        getContent() {
            this.$flamelinkApp.content.get({
                schemaKey: 'hazanout',
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
