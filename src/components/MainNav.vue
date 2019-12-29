<template>
<aside class="mdc-drawer mdc-drawer--modal" id="mainNav">
    <div class="mdc-drawer__content">
        <nav class="mdc-list">
            <router-link class="mdc-list-item mdc-list-item--activated drawer-toggle" :to="{ name: 'Home' }" aria-current="page">
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">home</i>
                <span class="mdc-list-item__text">Home</span>
            </router-link>
            <router-link class="mdc-list-item drawer-toggle" :to="{ name: 'About' }">
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">info</i>
                <span class="mdc-list-item__text">À propos</span>
            </router-link>
            <router-link class="mdc-list-item drawer-toggle" :to="{ name: 'Donate' }">
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">credit_card</i>
                <span class="mdc-list-item__text">Dons</span>
            </router-link>
            <router-link class="mdc-list-item drawer-toggle" :to="{ name: 'Articles' }">
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">description</i>
                <span class="mdc-list-item__text">Articles</span>
            </router-link>
            <router-link class="mdc-list-item drawer-toggle" :to="{ name: 'Rabbanim' }">
                <svg class="icon-perso">
                    <use xlink:href="#icon-star-david" href="#icon-star-david" />
                </svg>
                <span class="mdc-list-item__text">Rabbins</span>
            </router-link>
            <router-link class="mdc-list-item drawer-toggle" :to="{ name: 'English' }">
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">language</i>
                <span class="mdc-list-item__text">English</span>
            </router-link>
        </nav>
    </div>
</aside>
</template>

<script>
export default {
    name: "MainNav",
    data() {
        return {

        };
    },
    mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
#mainNav {
    display: block;
    left: -260px;
    top: var(--headerHeight);
    opacity: 0;
    transition: all var(--transitionTime) var(--transitionEase);
    height: calc(100vh - var(--headerHeight));
    border: none;
    background: linear-gradient(to bottom, rgba(#fff, 1), rgba(#fff, 0.7)), url(../assets/img/jlm-bg-1-sm.jpg) no-repeat center/cover;

    .mdc-list {
        padding: 0;

        a {
            margin: 0;
            border-radius: 0;
            height: 60px;
            padding-left: var(--spacing);

            i, svg {
                margin-right: var(--spacing);
                color: var(--txtColor);
                fill: var(--txtColor);
            }

            span {
                line-height: 1;
                color: var(--txtColor);
            }
        }
    }
}

.dark {
    #mainNav {
        background: linear-gradient(rgba(#111, 1), rgba(#111, 0.6)), url(../assets/img/jlm-night-sm.jpg) no-repeat center/cover;
    }
}
</style>
