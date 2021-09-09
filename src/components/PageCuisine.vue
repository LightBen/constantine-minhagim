<template>
  <div id="page-cuisine" class="page-page">
    <transition name="fade">
      <Loading v-if="loading"/>
    </transition>
    <slot name="page-content">
      <div class="page-title-container">
        <figure v-if="pageBanner && pageBanner.length"
                :style="{ 'background-image': 'url(' + pageBanner + ')' }"></figure>
        <div class="container">
          <h1 id="page-title">
            <span class="lang" v-html="pageTitle"></span>
          </h1>
        </div>
      </div>
      <div class="container">
        <div id="page-details">
          <div id="page-author">
            <span class="lang-fr">Auteur : </span>
            <span class="lang-he">המחבר: </span>
            <span class="author-content" v-html="pageAuthor"></span>
          </div>
        </div>
        <div class="page-illustration">
          <img :src="pageBanner" alt="Illustration" class="" />
        </div>
        <div id="page-content" v-html="pageContent"></div>
      </div>
    </slot>
  </div>
</template>

<script>
import Loading from '@/components/Loading'

export default {
  name: 'PageCuisine',
  components: {
    Loading
  },
  metaInfo() {
    return {
      title: this.pageTitle,
    }
  },
  data() {
    return {
      dataEntryId: '',
      pageTitle: '',
      pageAuthor: '',
      pageContent: '',
      pageBanner: '',
      loading: true
    }
  },
  props: ['entryId'],
  mounted() {
    this.dataEntryId = this.entryId;
    if (!this.dataEntryId) {
      this.dataEntryId = this.$route.params.cuisine_url
    }
    this.getContent();
    this.$root.$on('langChanged', this.getContent);
  },
  methods: {
    getContent() {
      this.$flamelinkApp.content.get({
        schemaKey: 'cuisine',
        entryId: this.dataEntryId
      })
          .then(pageContent => {
            this.pageTitle = pageContent.title;
            this.pageAuthor = pageContent.author;
            this.pageContent = pageContent.content;
            this.pageBanner = pageContent.banner;
            this.loading = false;
          })
          .catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));
    }
  }
};
</script>
