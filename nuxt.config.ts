// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	future: { compatibilityVersion: 5 },
	experimental: {
		inlineRouteRules: true
	},
	modules: [
		'@nuxt/fonts',
		'@nuxtjs/i18n',
		// 'nuxt-studio', //have to configure it first, becuase vitest does fails to run without propper configuration of nuxt-studio ... annoying
		'@nuxt/content',
		'@nuxt/eslint',
		'@nuxt/test-utils'
	],
	devtools: {
		enabled: true,
		timeline: {
			enabled: true
		}
	},
	css: ['~/assets/css/main.css'],
	content: {
		experimental: { nativeSqlite: true }
	},
	features: {
		// Turn off rendering of Nuxt scripts 
		// https://nuxt.com/docs/4.x/guide/going-further/features#noscripts
		// is set to 'true' or 'production' will break playwright tests as 
		// 'waitUntil: 'hydration'' will not fire
		//
		// can ge configured granularly within `routeRules`
		noScripts: false // a.k.a true | 'all' | false
	},

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