// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: false },
	modules: ['@nuxt/fonts'], //see /fonts page
	fonts: {
		families: [
			// this font is used on /fonts page.
			{ name: 'Whole Earth', provider: 'local', src: '/fonts/Shift-Bold.otf' },
		]
	},
	css: ['~/assets/css/main.css']
});