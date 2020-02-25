<template>
<footer id="footer">
    <div id="footerTabs">
        <div class="mdc-tab-bar" role="tablist">
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
            </button>
            <button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" @click="$router.push({ name: 'Hazanout' })">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__icon" aria-hidden="true">
                        <svg class="icon-perso">
                            <use xlink:href="#icon-music-1" href="#icon-music-1" />
                        </svg>
                    </span>
                    <span class="mdc-tab__text-label">
                        <span class="lang-fr">'Hazanout</span>
                        <span class="lang-he">חזנות</span>
                    </span>
                </span>
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
            </button>
            <button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" @click="$router.push({ name: 'Articles' })">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__icon" aria-hidden="true">
                        <svg class="icon-perso">
                            <use xlink:href="#icon-document" href="#icon-document" />
                        </svg>
                    </span>
                    <span class="mdc-tab__text-label">
                        <span class="lang-fr">Articles</span>
                        <span class="lang-he">מאמרים</span>
                    </span>
                </span>
            </button>
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
