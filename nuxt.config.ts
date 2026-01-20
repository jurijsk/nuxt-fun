// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	modules: ['@nuxt/fonts'], //see /fonts page
	fonts: {
		families: [
			// this font is used on /fonts page.
			{ name: 'Whole Earth', provider: 'local', src: '/fonts/Shift-Bold.otf' },
		],
		// You can enable support for processing CSS variables for font family names.
		// Default value is "font-prefixed-only" 
		// Setting it to `true` can lead to performance hitt
		//processCSSVariables: 'font-prefixed-only'
	},
	css: ['~/assets/css/main.css']
});