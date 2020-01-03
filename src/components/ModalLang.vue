<template>
<div class="modal-container" id="modalLang">
    <div class="modal-overlay" @click="closeModalLang()"></div>
    <div class="modal">
        <div id="languages-choice">
            <div class="language lang-toggle">
                <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Change language">language</button>
                <div class="language-label">Français / עברית</div>
            </div>
            <!-- <div class="language lang-toggle">
                <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Change language">language</button>
                <div class="language-label">עברית</div>
            </div> -->
            <!-- <div class="language" @click="toggleLocale('en-US')">
                <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Change language">language</button>
                <div class="language-label">English</div>
            </div> -->
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
        }
    }
};
</script>
