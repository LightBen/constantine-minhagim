<template>
    <div id="hazanout">
        <div class="container">
            <h1>Hazanout</h1>
            <div class="lorem" id="cuisineContent">
                <div class="articles-hazanout">
                    <div class="article-hazanout card" v-for="article in articles">
                        <figure class="card-content" tabindex="0">
                            <div class="card-img" :style="{ 'background-image': 'url(' + article.mainImage[0].file + ')' }"></div>
                            <div class="card-img"></div>
                            <figcaption class="card-text">
                                <div class="card-title mdc-typography mdc-typography--headline6">{{ article.title }}</div>
                                <div class="card-author">{{ article.author }}</div>
                                <div class="card-desc">{{ article.description }}</div>
                                <div class="imageMain"></div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.articles-hazanout {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: var(--spacing);
    .article-hazanout {
        .card-img {
            background-image: url('../assets/img/makroud.jpg');
        }
    }
}
</style>

<script>
    export default {
        name: "Hazanout",
        data() {
            return { articles: [] }
        },
        created() {
            this.$flamelinkApp.content.get({
                    schemaKey: 'hazanout',
                    fields: ['title', 'author', 'description', 'mainImage'],
                    populate: ['mainImage']
                })
                .then(articles => {
                    this.articles = articles;
                    console.log('All the articles:', articles);
                })
        }
    }
</script>