<template>
    <div id="fab-menu">
        <div id="fab-menu-speed-dial"></div>
        <button class="mdc-fab" aria-label="Menu" id="mainMenuFab">
            <span class="mdc-fab__icon material-icons">apps</span>
        </button>
    </div>
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
#fab-menu {
    position: fixed;
    bottom: calc(var(--footerHeight) + var(--spacing));
    right: var(--spacing);
    animation-name: fabAppear;
    animation-duration: var(--transitionTime2);
    transition-timing-function: var(--transitionEase);
    animation-fill-mode: forwards;
    opacity: 0;
}
#mainMenuFab {
    color: var(--txtColor);
    background-color: var(--primaryColor);
    .material-icons { color: #fff; }
}

.dark {
    #mainMenuFab {
        background-color: var(--bgColor);
    }
}

.is-homepage {
    #fab-menu {
        bottom: var(--spacing);
    }
}
</style>
