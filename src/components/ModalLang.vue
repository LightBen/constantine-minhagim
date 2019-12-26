<template>
<div class="modal-container" id="modalLang">
    <div class="modal-overlay" @click="closeModalLang()"></div>
    <div class="modal">
        <div id="languages-choice">
            <div class="language" @click="toggleLocale('fr')">
                <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Change language">language</button>
                <div class="language-label">Français</div>
            </div>
            <div class="language" @click="toggleLocale('he')">
                <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Change language">language</button>
                <div class="language-label">עברית</div>
            </div>
            <div class="language" @click="toggleLocale('en-US')">
                <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Change language">language</button>
                <div class="language-label">English</div>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.modal-container {
    position: fixed;
    z-index: 20;
    opacity: 0;
    visibility: hidden;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .2s ease-in-out;

    .modal-overlay {
        position: fixed;
        background-color: rgba(#000, 0.8);
        width: 100vw;
        height: 100vh;
        left: 0;
        top: 0;
    }

    &.modal-show {
        opacity: 1;
        visibility: visible;
    }
    .modal {
        position: relative; z-index: 1;
        background-color: rgba(var(--primaryColorRgb), 0.8);
        width: 100vw;
        max-width: 500px;
        padding: var(--spacing);
        margin-top: -60px;
    }
    #languages-choice {
        text-align: center;
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        justify-items: center;
        .language {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            cursor: pointer;
            .language-label {
                min-width: 70px;
                text-align: left;
            }
        }
    }
}
</style>

<script>
export default {
    name: 'ModalLang',
    methods: {
        closeModalLang() {
            document.getElementById('modalLang').classList.remove('modal-show')
        },
        toggleLocale(lang) {
            // First, remove existing language class
            document.body.classList.forEach(item => {
                if (/^lang/.test(item)) {
                    document.body.classList.remove(item);
                }
                document.body.classList.remove("rtl");
            })
            // Then add the current language class
            document.body.classList.add('lang-' + lang)
            if (lang === "he") {
                document.body.classList.add("rtl");
                document.documentElement.dir = "rtl"
            } else {
                document.body.classList.remove("rtl");
                document.documentElement.dir = "ltr"
            }
            // Change the HTML lang attribute
            document.documentElement.lang = lang
            // Finally set the locale
            this.$flamelinkApp.settings.setLocale(lang)
                .then(locale => console.log(`Your locale is set as "${locale}"`))
                .catch(error => console.error('Something went wrong while setting the locale. Details:', error));
            document.getElementById('modalLang').classList.remove('modal-show')
        }
    }
}
</script>
