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
    display: none;
    position: fixed;
    bottom: calc(var(--footerHeight) + var(--spacing));
    right: var(--spacing);
    animation-name: fabAppear;
    animation-duration: var(--transition-time2);
    transition-timing-function: var(--transition-ease);
    animation-fill-mode: forwards;
    opacity: 0;
}
#mainMenuFab {
    color: var(--color-font);
    background-color: var(--logo-color-1);
    .material-icons { color: #fff; }
}

html[data-theme="dark"]{
    #mainMenuFab {
        background-color: var(--logo-color-2);
    }
}

.is-homepage {
    #fab-menu {
        bottom: var(--spacing);
    }
}
</style>
