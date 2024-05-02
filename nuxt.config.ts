import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  css: [
	'vuetify/lib/styles/main.sass', 
	'@mdi/font/css/materialdesignicons.min.css', 
	"@/styles/main.scss"
],

  build: {
    transpile: ['vuetify'],
  },

  modules: [
	"@nuxt/fonts",
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],

  vite: {
	define: {
		'process.env.DEBUG': false,
	},
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})