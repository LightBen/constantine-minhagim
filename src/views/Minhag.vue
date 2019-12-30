<template>
    <div id="minhag">
        <div class="container">
            <h1>Minhagei Halakha</h1>
            <div class="lorem" id="minhagContent">
                <div class="articles-minhag">
                    <router-link class="article-minhag card" v-for="article in articles" :to="{ path: '/minhag/' + article.url, params: {entryId: article.entryId } }">
                        <figure class="card-content" tabindex="0">
                            <div class="card-img"></div>
                            <figcaption class="card-text">
                                <div class="card-title mdc-typography mdc-typography--headline6">{{ article.title }}</div>
                                <div class="card-author">{{ article.author }}</div>
                                <div class="card-desc">{{ article.description }}</div>
                                <div class="imageMain"></div>
                            </figcaption>
                        </figure>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.articles-minhag {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: var(--spacing);
    .article-minhag {
        .card-img {
            background-image: url('../assets/img/makroud.jpg');
        }
    }
}
</style>

<script>
    export default {
        name: "Minhag",
        data() {
            return { articles: [] }
        },
        created() {
            this.$flamelinkApp.content.get({
                    schemaKey: 'minhag',
                    fields: ['title', 'url', 'author', 'description', 'mainImage'],
                    populate: ['mainImage']
                })
                .then(articles => {
                    this.articles = articles;
                    console.log('All the articles:', articles);
                })
        }
    }
</script>
