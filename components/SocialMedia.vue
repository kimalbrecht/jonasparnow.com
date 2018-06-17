<template>
  <ul>
    <li v-for="item in items">
      <a :href="item.url">{{ item.label }}</a>
    </li>
  </ul>
</template>

<script>
  // v0.0.1
  import { mapState } from 'vuex'

  export default {
    data: function () {
      return {
        meta: {
          scholar: {
            label: 'Google Scholar',
            url: 'https://scholar.google.com/citations?user='
          },
          researchgate: {
            label: 'Research Gate',
            url: 'https://www.researchgate.net/profile/'
          },
          twitter: {
            label: 'Twitter',
            url: 'https://twitter.com/'
          },
          github: {
            label: 'Github',
            url: 'https://github.com/'
          },
          facebook: {
            label: 'Facebook',
            url: 'https://www.facebook.com/'
          }
        }
      }
    },
    computed: {
      ...mapState([
        'contact'
      ]),
      items: function () {
        const arr = this.contact.social
        const keys = Object.keys(arr).filter(key => arr[key])
        return keys.map(key => {
          return {
            label: this.meta[key].label,
            url: this.meta[key].url + arr[key]
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
