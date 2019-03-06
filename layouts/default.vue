<template>
  <div class="page">
    <Header />
    <Navigation />
    <Aside />
    <main class="page-content" role="main">
      <nuxt/>
    </main>
    <Footer />
  </div>
</template>

<script>
  import Header from '~/components/Header.vue'
  import Navigation from '~/components/Navigation.vue'
  import Aside from '~/components/Aside.vue'
  import Footer from '~/components/Footer.vue'

  export default {
    components: {
      Header,
      Navigation,
      Aside,
      Footer
    }
  }
</script>

<style lang="scss">

</style>
