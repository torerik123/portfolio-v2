import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@/styles/main.scss'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
	theme: {
		defaultTheme: 'dark',
		themes: {
			dark: {
				dark: true,
				colors: {
					primary: "#e255a1",
				}
			}
		}
	},

  })

  nuxtApp.vueApp.use(vuetify)
})