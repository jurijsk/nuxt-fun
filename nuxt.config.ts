// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: false },
	features: {
		noScripts: 'production' //true | 'all' | false
	},
	modules: ['@nuxt/fonts', '@nuxtjs/i18n', 'nuxt-studio', '@nuxt/content'],
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
	i18n: {
		defaultLocale: 'en',
		locales: [
			{ code: 'de', name: 'Deutsch', file: 'de.json' },
			{ code: 'en', name: 'English', file: 'en.json' },
			{ code: 'da', name: 'Dansk', file: 'da.json' },
		]
	},
	content: {
		experimental: { nativeSqlite: true },
	},
	css: ['~/assets/css/main.css']
});