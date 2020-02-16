<template>
    <div id="siddour" class="page-page">
        <div class="page-title-container">
            <div class="container">
                <h1 id="page-title">
                    <span class="lang-fr">Bientot...</span>
                    <span class="lang-he">בקרוב</span>
                </h1>
            </div>
        </div>
        <div class="container">
            <h1 id="page-title"></h1>
            <div id="page-content"></div>
        </div>
    </div>
</template>

<style lang="scss">
    #siddour {
        
    }
</style>

<script>
export default {
    name: 'Siddour',
    metaInfo() {
        return {
            title: this.pageTitle            
        }
    },
    data() {
        return { 
            elements: [],
            pageTitle: 'Siddour',
            pageTitleHe: 'סידור'
        }
    },
    created() {
        this.getContent()
        this.setPageTitle()
    },
    mounted() {
         this.$root.$on('langChanged', this.getContent);
    },
    methods: {
        getContent() {
            this.$flamelinkApp.content.get({
                schemaKey: 'pages',
                entryId: this.$route.meta.entryId
            })
            .then(pageContent => {
                // document.getElementById('page-title').innerText = pageContent.title;
                document.getElementById('page-content').innerHTML = pageContent.content;
            })
            .catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));
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