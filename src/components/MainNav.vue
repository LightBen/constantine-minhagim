<template>
<aside class="mdc-drawer mdc-drawer--modal" id="mainNav">
    <div class="aside-close drawer-toggle"><i class="material-icons">close</i></div>
    <div class="mdc-drawer__content">
        <nav class="mdc-list">
            <router-link class="mdc-list-item drawer-toggle" :to="{ name: 'Home' }" aria-current="page">
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

<style lang="scss">
#mainNav {
    font-family: var(--font-family);
    display: block;
    opacity: 0;
    transition: all 0.4s ease;
    height: calc(100vh - var(--headerHeight));
    border: none;
    background: #fff no-repeat center/cover;
    width: 100vw;
    height: 100vh;
    top: 100vh;
    left: 0;
    visibility: hidden;

    .aside-close { 
        padding: var(--spacingSm); cursor: pointer; position: absolute; top: 0; right: 0;

        i, svg { font-size: 50px; color: var(--primaryColor); }
    }

    .mdc-drawer__content {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .mdc-list {
        padding: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        a {
            margin: 0;
            border-radius: 0;
            min-height: 80px; width: 100%; text-align: center; display: flex; justify-content: center;
            // padding-inline-start: var(--spacing);

            i, svg {
                margin-inline-end: var(--spacing);
                color: var(--primaryColor);
                fill: var(--primaryColor);
                display: none;
            }

            span {
                color: var(--primaryColor); font-size: 30px; font-weight: 300; line-height: 1.4;
            }
        }

        .mdc-list-item__text {
            font-family: var(--font-family);
        }
    }
}

html[lang="he"] {
    #mainNav {
        .aside-close { right: auto; left: 0; }
    }
}

html[data-theme="dark"] {
    #mainNav {
        background: #222 no-repeat center/cover;

        .aside-close { 
            i, svg { color: var(--logo-color-2); }
        }

        .mdc-list {
            a {
                i, svg {
                    color: #fff;
                    fill: #fff;
                }

                span {
                    color: #fff; font-size: 20px; font-weight: 300;
                }
            }
        }

    }
}

.drawer-opened {
    height: 100vh; overflow: hidden;

    #mainNav {
        opacity: 1; visibility: visible; top: 0;
    }
}

</style>
