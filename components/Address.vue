<template>
  <address class="vcard h-card">
    <span class="n p-name" v-if="contact.name && (contact.name.prefix || contact.name.given || contact.name.familiy)">
      <span class="honorific-suffix p-honorific-prefix" v-if="contact.name.prefix" v-html="contact.name.prefix" />
      <span class="given-name p-given-name" v-if="contact.name.given" v-html="contact.name.given" />
      <span class="family-name p-family-name" v-if="contact.name.family" v-html="contact.name.family" />
    </span><br />
    <span class="org" v-if="contact.org" v-html="contact.org.join('<br />')" /><br v-if="contact.org" />
    <div class="adr p-adr" v-if="contact.adr && (contact.adr.street || contact.adr.postal || contact.adr.city || contact.adr.country)">
      <span class="street-address p-street-address" v-if="contact.adr.street" v-html="contact.adr.street" /><br />
      <span class="postal-code" v-if="contact.adr.postal" v-html="contact.adr.postal" />
      <span class="locality p-locality" v-if="contact.adr.city" v-html="contact.adr.city" /><br />
      <span class="country-name p-country-name" v-if="contact.adr.country" v-html="contact.adr.country" />
    </div>
  </address>
</template>

<script>
  // v0.0.1
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState([
        'contact'
      ])
    }
  }
</script>

<style lang="scss" scoped>

</style>
