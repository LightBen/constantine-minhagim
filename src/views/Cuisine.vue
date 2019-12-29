<template>
    <div id="cuisine">
        <div class="container">
            <h1>Cuisine</h1>
            <div class="lorem" id="cuisineContent">
                <div class="recipes">
                    <div class="recipe card" v-for="recipe in recipes">
                        <figure class="card-content" tabindex="0">
                            <!-- <div class="card-img" style="background-image: url(&quot;https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg&quot;);"></div> -->
                            <div class="card-img" :style="{ 'background-image': 'url(' + recipe.mainImage[0].file + ')' }"></div>
                            <div class="card-img"></div>
                            <figcaption class="card-text">
                                <div class="card-title mdc-typography mdc-typography--headline6">{{ recipe.title }}</div>
                                <div class="card-author">{{ recipe.author }}</div>
                                <div class="card-desc">{{ recipe.description }}</div>
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
.recipes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: var(--spacing);
    .recipe {
        .card-img {
            background-image: url('../assets/img/makroud.jpg');
        }
    }
}
</style>

<script>
    export default {
        name: "Cuisine",
        data() {
            return { recipes: [] }
        },
        created() {
            this.$flamelinkApp.content.get({
                    schemaKey: 'recipes',
                    fields: ['title', 'author', 'description', 'mainImage'],
                    populate: ['mainImage']
                })
                .then(recipes => {
                    this.recipes = recipes;
                    console.log('All the recipes:', recipes);
                })
        }
    }
</script>