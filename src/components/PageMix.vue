<template>
    <div class="page-mix">
        <slot name="page-content">
            <div class="container">
                <h1 id="page-title"></h1>
                <div id="page-content"></div>
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
    name: 'PageMix',
    created() {
        this.$flamelinkApp.content.get({
            schemaKey: 'pages',
            entryId: this.entryId
        })
        .then(pageContent => {
            document.getElementById('page-title').innerText = pageContent.title;
            document.getElementById('page-content').innerHTML = pageContent.content;
        })
        .catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));
    }
};
</script>