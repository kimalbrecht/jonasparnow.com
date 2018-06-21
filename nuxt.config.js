const { seo } = require('./assets/js/seo.js')
const { favicon, msapplication } = require('./assets/js/favicon.js')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Jonas Parnow',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...msapplication(),
      seo()
    ],
    link: [
      { rel: 'stylesheet', href: 'https://use.typekit.net/dzh0sgg.js' },
      ...favicon()
    ],
    script: [
      { innerHTML: 'try{Typekit.load({ async: true });}catch(e){}', type: 'text/javascript', charset: 'utf-8'}
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
  loading: { color: '#3B8070' },
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
