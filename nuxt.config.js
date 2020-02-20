let env = require('dotenv').config()

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel :'stylesheet', href : 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700,800|Nunito:300,400,600,700,800|Rubik:300,400,500,700,900&display=swap'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  '@/assets/styles/app.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  '~/plugins/algolia'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth'
    ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL : env.parsed.API_URL
  },

  auth :  {
    strategies : {
      local : {
        endpoints : {
          login: { url: 'auth/login', method: 'post', propertyName: 'data.token' },
          logout: { url: 'auth/logout', method: 'post' },
          user: { url: 'auth/me', method: 'get', propertyName: 'data' }
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    transpile : [
    'vue-instantsearch',
    'instantsearch.js/es'
    ],
    postcss : {
      plugins : {
        tailwindcss : './tailwind.config.js'
      }
    }
  }
}
