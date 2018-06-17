<template>
  <ul>
    <li v-if="mail">
      <a v-html="mail.label" v-bind:href="mail.ref" />
    </li>
    <li v-if="contact.tel">
      <a :href="'tel:' + contact.tel.value" v-html="contact.tel.label.split(' ').join('&#8239;')" />
    </li>
  </ul>
</template>

<script>
  // v0.0.1
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState([
        'contact'
      ]),
      mail: function () {
        if (this.contact.mail) {
          const adr = [this.contact.mail.name, '@', this.contact.mail.host].join('')
          return {
            label: adr,
            ref: 'mailto:' + adr
          }
        } else {
          return false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
