<template>
<footer id="footer">
    <div id="footerTabs">
        <div class="mdc-tab-bar" role="tablist">
            <div class="mdc-tab-scroller">
                <div class="mdc-tab-scroller__scroll-area">
                    <div class="mdc-tab-scroller__scroll-content">
                        <button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" @click="$router.push({ name: 'Minhag' })">
                            <span class="mdc-tab__content">
                                <span class="mdc-tab__icon" aria-hidden="true"><svg class="icon-perso">
                                    <use xlink:href="#icon-star-david" href="#icon-star-david" />
                                </svg></span>
                                <span class="mdc-tab__text-label">
                                    <span class="lang-fr">Minhag</span>
                                    <span class="lang-he">מנהג</span>
                                </span>
                            </span>
                            <span class="mdc-tab-indicator mdc-tab-indicator--active">
                                <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                            </span>
                            <span class="mdc-tab__ripple"></span>
                        </button>
                        <button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" @click="$router.push({ name: 'Hazanout' })">
                            <span class="mdc-tab__content">
                                <span class="mdc-tab__icon" aria-hidden="true"><svg class="icon-perso">
                                    <use xlink:href="#icon-music" href="#icon-music" />
                                </svg></span>
                                <span class="mdc-tab__text-label">
                                    <span class="lang-fr">'Hazanout</span>
                                    <span class="lang-he">חזנות</span>
                                </span>
                            </span>
                            <span class="mdc-tab-indicator mdc-tab-indicator--active">
                                <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                            </span>
                            <span class="mdc-tab__ripple"></span>
                        </button>
                        <button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" @click="$router.push({ name: 'Cuisine' })">
                            <span class="mdc-tab__content">
                                <span class="mdc-tab__icon" aria-hidden="true"><svg class="icon-perso">
                                    <use xlink:href="#icon-food-tray" href="#icon-food-tray" />
                                </svg></span>
                                <span class="mdc-tab__text-label">
                                    <span class="lang-fr">Cuisine</span>
                                    <span class="lang-he">מתכונים</span>
                                </span>
                            </span>
                            <span class="mdc-tab-indicator mdc-tab-indicator--active">
                                <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                            </span>
                            <span class="mdc-tab__ripple"></span>
                        </button>
                        <button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" @click="$router.push({ name: 'Printouts' })">
                            <span class="mdc-tab__content">
                                <span class="mdc-tab__icon" aria-hidden="true">
                                    <i class="material-icons" aria-hidden="true">assignment</i>
                                </span>
                                <span class="mdc-tab__text-label">
                                    <span class="lang-fr">Fiches</span>
                                    <span class="lang-he">גליונות</span>
                                </span>
                            </span>
                            <span class="mdc-tab-indicator mdc-tab-indicator--active">
                                <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                            </span>
                            <span class="mdc-tab__ripple"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>

<style src="./footer.scss" lang="scss" scoped></style>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            // chapters: ['Foo', 'Bar', 'Fizz', 'Buzz']
        }
    }
}
</script>
