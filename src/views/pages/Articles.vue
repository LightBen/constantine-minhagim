<template>
    <div id="articles">
        <div class="container">
            <h1>Articles</h1>
            <div class="lorem" id="cuisineContent">
                <div class="articles">
                    <div class="article card" v-for="article in articles">
                        <figure class="card-content" tabindex="0">
                            <!-- <div class="card-img" style="background-image: url(&quot;https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg&quot;);"></div> -->
                            <!-- <div class="card-img" :style="{ 'background-image': 'url(' + article.mainImage.path.path + ')' }"></div> -->
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
.articles {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: var(--spacing);
    .article {
        .card-img {
            background-image: url(../../assets/img/makroud.jpg);
        }
    }
}
</style>

<script>
    export default {
        name: "Articles",
        data() {
            return { articles: [] }
        },
        created() {
            this.$flamelinkApp.content.get({
                    schemaKey: 'articles',
                    fields: ['title', 'author', 'description', 'mainImage']
                })
                .then(articles => {
                    this.articles = articles;
                    console.log('All the articles:', articles);
                })
        }
    }
</script>