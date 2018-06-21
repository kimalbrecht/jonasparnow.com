<template>
  <div class="page">
    <header class="page-header sidebar">
      <hgroup class="page-logo" role="banner">
        <nuxt-link to="/">
          <h1 v-html="header.title" />
          <h2 v-html="header.subtitle" />
        </nuxt-link>
      </hgroup>
    </header>
    <nav class="page-navigation sidebar" role="navigation">
      <h4>My work</h4>
      <ul>
        <li><a href="#">visualising.systems</a></li>
        <li><a href="#">away.photos</a></li>
      </ul>
    </nav>
    <aside class="page-aside sidebar">
      <h4>Contact</h4>
      <ul>
        <li><a href="#">jonas@parnow.de</a></li>
        <li>pubkey: <a href="#">0x9283CFF6</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Github</a></li>
      </ul>
    </aside>
    <div class="page-content" role="main">
      <nuxt/>
    </div>
    <footer class="page-footer sidebar" role="contentinfo">
      <ul>
        <li><nuxt-link to="imprint">Imprint</nuxt-link></li>
        <li><nuxt-link to="privacy">Privacy</nuxt-link></li>
      </ul>
    </footer>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState([
        'header'
      ])
    },
    methods: {
    },
    directives: {
    },
    components: {
    }
  }
</script>

<style lang="scss">

</style>
