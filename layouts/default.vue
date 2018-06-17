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
      <span>My work</span>
      <ul>
        <li>visualising.systems</li>
        <li>away.photos</li>
      </ul>
    </nav>
    <aside class="page-aside sidebar">
      <span>Contact</span>
      <ul>
        <li>jonas@parnow.de</li>
        <li>pubkey: 0x9283CFF6</li>
        <li><nuxt-link to="publications">Twitter</nuxt-link></li>
        <li><nuxt-link to="projects">Github</nuxt-link></li>
      </ul>
    </aside>
    <div class="page-content" role="main">
      <nuxt/>
    </div>
    <footer class="page-footer sidebar" role="contentinfo">
      <ul>
        <li><nuxt-link to="imprint">Imprint</nuxt-link></li>
        <li><nuxt-link to="privacy">Datenschutz</nuxt-link></li>
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
