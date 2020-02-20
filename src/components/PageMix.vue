<template>
    <div class="page-mix page-page">
        <transition name="fade">
            <Loading v-if="loading" />
        </transition>
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
import Loading from '@/components/Loading'
export default {
    name: 'PageMix',
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
            loading: true
        }
    },
    mounted() {
        this.dataEntryId = this.entryId;
        if (!this.dataEntryId) {
            this.dataEntryId = this.$route.meta.entryId
        }
        this.getContent();
        this.$root.$on('langChanged', this.getContent);
    },
    methods: {
        getContent() {
            this.$flamelinkApp.content.get({
                schemaKey: 'pages',
                entryId: this.dataEntryId
            })
            .then(pageContent => {
                this.pageTitle = pageContent.title;
                this.pageContent = pageContent.content;
                this.loading = false;
            })
            .catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));
        }
    }
};
</script>