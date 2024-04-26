// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
	'vuetify/lib/styles/main.sass', 
	'@mdi/font/css/materialdesignicons.min.css', 
	"@/styles/main.scss"
],

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },

  modules: ["@nuxt/fonts"]
})