const { favicon, msapplication } = require('./assets/js/favicon.js')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Jonas Parnow – designer for information and data based in Berlin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Jonas Parnow works as a research associate at the Urban Complexity Lab. He co-runs the design Studio Karat and works as a free­lancer in Berlin.' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@zeto' },
      { name: 'twitter:creator', content: '@zeto' },
      { name: 'twitter:title', content: 'Jonas Parnow – designer for information and data based in Berlin' },
      { name: 'twitter:description', content: 'Jonas Parnow works as a research associate at the Urban Complexity Lab. He co-runs the interface and information design Studio Karat and works as a free­lancer in Berlin.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Jonas Parnow – designer for information and data based in Berlin' },
      { property: 'og:description', content: 'Jonas Parnow works as a research associate at the Urban Complexity Lab. He co-runs the interface and information design Studio Karat and works as a free­lancer in Berlin.' },
      { property: 'og:site_name', content: 'Jonas Parnow – designer for information and data based in Berlin' },
      ...msapplication()
    ],
    link: [
      ...favicon()
    ]
  },
  css: [
    // Load a node module directly (here it's a SASS file)
    'normalize-scss',
    // CSS file in the project
    '@/assets/style/base.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  resolve: {
    alias: {
      style: 'assets/style'
    }
  },
  loading: { color: '#5F74E7' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isServer) {
        config.externals = [
          require('webpack-node-externals')({
            whitelist: [/^vue-slick/]
          })
        ]
      }
    }
  }
}
