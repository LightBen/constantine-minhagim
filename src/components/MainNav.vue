<template>
<aside class="mdc-drawer mdc-drawer--modal" id="mainNav">
    <div class="mdc-drawer__content">
        <nav class="mdc-list">
            <router-link class="mdc-list-item mdc-list-item--activated" to="/" aria-current="page">
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">home</i>
                <span class="mdc-list-item__text">Home</span>
            </router-link>
            <router-link class="mdc-list-item" to="/">
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">description</i>
                <span class="mdc-list-item__text">À propos</span>
            </router-link>
            <router-link class="mdc-list-item" to="/a-propos">
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">credit_card</i>
                <span class="mdc-list-item__text">Dons</span>
            </router-link>
            <router-link class="mdc-list-item" to="/">
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">info</i>
                <span class="mdc-list-item__text">Articles</span>
            </router-link>
            <router-link class="mdc-list-item" to="/">
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">info</i>
                <span class="mdc-list-item__text">Equipe et Rabbins</span>
            </router-link>
            <router-link class="mdc-list-item" to="/">
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">info</i>
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
    height: calc(100vh - var(--headerHeight) - var(--footerHeight));
    border: none;
    background: linear-gradient(to bottom, rgba(#fff, 1), rgba(#fff, 0.7)), url(../assets/img/jlm-bg-1-sm.jpg) no-repeat center/cover;

    .mdc-list {
        padding: 0;

        a {
            margin: 0;
            border-radius: 0;
            height: 60px;
            padding-left: var(--spacing);

            i {
                margin-right: var(--spacing);
                color: var(--txtColor);
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
