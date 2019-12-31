<template>
<button class="mdc-fab drawer-toggle" aria-label="Menu" id="mainMenuFab">
    <span class="mdc-fab__icon material-icons">apps</span>
</button>
</template>

<script>
export default {
    name: 'fabBtn',
    data() {
        return {
            //
        }
    }
};
</script>

<style lang="scss" scoped>
#mainMenuFab {
    position: fixed;
    opacity: 0;
    animation-name: fabAppear;
    animation-duration: var(--transitionTime2);
    transition-timing-function: var(--transitionEase);
    animation-fill-mode: forwards;
    bottom: calc(var(--footerHeight) + var(--spacing));
    right: var(--spacing);
    color: var(--txtColor);
    background-color: var(--primaryColor);
    .material-icons { color: #fff; }

    @media (min-width: $sm) {
        display: none;
    }
}

.dark {
    #mainMenuFab {
        background-color: var(--bgColor2);
    }
}

.is-homepage {
    #mainMenuFab {
        bottom: var(--spacing);
    }
}
</style>
