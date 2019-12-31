<template>
    <div id="minhag">
        <div class="page-title-container">
            <div class="container">
                <h1 id="page-title">Minhag</h1>
            </div>
        </div>
        <div class="container">
            <div id="minhagContent" class="grid-container">
                <router-link class="grid-element card" v-for="(element, key) in elements" :key="key" :to="{ name: 'minhag-url', params: {entryId: key, minhag_url: key} }">
                    <figure class="card-content" tabindex="0">
                        <div class="card-img"></div>
                        <figcaption class="card-text">
                            <div class="card-title mdc-typography mdc-typography--headline6">{{ element.title }}</div>
                            <div class="card-author">{{ element.author }}</div>
                            <!-- <div class="card-desc">{{ element.description }}</div> -->
                            <div class="imageMain"></div>
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
        name: "Minhag",
        data() {
            return { elements: [] }
        },
        created() {
            this.$flamelinkApp.content.get({
                schemaKey: 'minhag',
                fields: ['title', 'url', 'author', 'description', 'mainImage'],
                populate: ['mainImage'],
            })
            .then(elements => {
                this.elements = elements;
                console.log('All the elements:', elements);
            })
        }
    };
</script>
