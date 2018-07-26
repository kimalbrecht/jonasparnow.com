<template>
  <header class="page-header sidebar">
    <hgroup class="page-logo" role="banner">
      <nuxt-link to="/">
        <h1 v-html="page.title.main" />
        <h2 v-html="page.title.subtitle" />
      </nuxt-link>
    </hgroup>
  </header>
</template>

<script>
  // v0.0.1
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState([
        'page'
      ])
    }
  }
</script>

<style lang="scss" scoped>

</style>
