<template>
<header id="header" class=" mdc-top-app-bar mdc-top-app-bar--fixed">
    <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <button class="mdc-icon-button material-icons mdc-top-app-bar__navigation-icon--unbounded drawer-toggle" id="mainMenuBtn">menu</button>
            <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Torah Sheli" @click="$router.push({ name: 'Home' })">home</button>
            <span class="mdc-top-app-bar__title">
                <router-link to="/">CM</router-link>
            </span>
        </section>
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
            <!-- <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Search">search</button> -->
            <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Contact">email</button>
            <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded theme-toggle" aria-label="Change Light Mode">wb_sunny</button>
            <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Change language" @click="displayModalLang()">language</button>
            <!-- <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Choose language">g_translate</button> -->
        </section>
    </div>
    <ModalLang />
</header>
</template>

<style src="./header.scss" lang="scss" scoped></style>

<script>
import ModalLang from "@/components/ModalLang";
export default {
    name: 'Header',
    components: {
        ModalLang
    },
    data() {
        return {
            //
        }
    },
    methods: {
        displayModalLang() {
            document.getElementById('modalLang').classList.add('modal-show');
            console.log(document.getElementById('modalLang'))
        }
    }
}
</script>
