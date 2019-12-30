<template>
    <div class="minhagim-page">
        <slot name="page-content">
            <div class="container">
                <h1 id="page-title" v-html="pageTitle"></h1>
                <div id="page-content" v-html="pageContent"></div>
            </div>
        </slot>
    </div>
</template>

<style lang="scss">
    #page {
        
    }
</style>

<script>
export default {
    name: 'PageMinhagim',
    data: {
        pageTitle: '',
        pageContent: ''
    },
    methods: {
        getContent() {
            this.$flamelinkApp.content.get({
                schemaKey: 'minhag',
                entryId: this.$route.meta.entryId
            })
            .then(pageContent => {
                this.pageTitle = pageContent.title;
                this.pageContent = pageContent.content;
            })
            .catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));
        }
    },
    created() {
        setTimeout(this.getContent, 100)
    }
};
</script>
