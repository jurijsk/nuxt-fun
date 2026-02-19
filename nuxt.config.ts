// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/fonts', '@nuxtjs/i18n', 'nuxt-studio', '@nuxt/content', '@nuxt/eslint'],
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	content: {
		experimental: { nativeSqlite: true }
	},
	features: {
		noScripts: 'production' // true | 'all' | false
	},
	compatibilityDate: '2025-07-15',
	// nuxt offers to have the eslint for stylistic here
	// but they all the rest if it should go to `eslint.config.mjs`
	// which is strange, so I think is tis the best to move everything to
	// `eslint.config.mjs` right away.
	fonts: {
		families: [
			// this font is used on /fonts page.
			{ name: 'Whole Earth', provider: 'local', src: '/fonts/Shift-Bold.otf' }
		]
		// You can enable support for processing CSS variables for font family names.
		// Default value is "font-prefixed-only"
		// Setting it to `true` can lead to performance hitt
		// processCSSVariables: 'font-prefixed-only'
	},
	i18n: {
		defaultLocale: 'en',
		locales: [
			{ code: 'de', name: 'Deutsch', file: 'de.json' },
			{ code: 'en', name: 'English', file: 'en.json' },
			{ code: 'da', name: 'Dansk', file: 'da.json' }
		]
	}
});
