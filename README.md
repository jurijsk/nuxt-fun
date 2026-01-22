[repo location](https://github.com/jurijsk/nuxt-fun)


[x] checkout https://fonts.nuxt.com/get-started/configuration#processcssvariables and playground for basic css

[x] try using useHead. See/useHead

[x] understand how to use `@nuxtjs/i18n`
	[x] The prefix_except_default i18n strategy (used by default) needs defaultLocale to be set. 

[x] exploring /shared/ folder https://nuxt.com/docs/4.x/directory-structure/shared

[x] explore prerendering
[x] explore noScripts property 

[ ] explore nuxt content
	[ ] find a way to fallback to the content from default locale if localizaed content does not exist. See /first-content and switch to /de or /da
	[ ] check how it works with prerender

[ ] implement content loading based on the locale



[ ] deploy to github static pages: https://nuxt.com/deploy/github-pages

---

[x] try using https://nuxt.com/docs/4.x/api/utils/define-page-meta and understand the difference.

[ ] explore config.features.inlineStyles

[ ] explore config.features.inlineStyles

[ ] try using Layout


# Changes
 ### 21.01.2026
 * Learned how to use auto-import from `/shared/types/` and `/shared/types`. vs code with show error that somethig can not ve resolved untill you run dev server.
 * Prerendering. It looks like simple `npx nuxt geenrate` works well enough to render all pages with all locales. 
   * Initially I has some problems with duplicated content on initial load, but I've changed something, so it does not happen anymore.
   * Changeing from `NuxtPage` to `LazyNuxtPage` with `hydrate-never` make the app ot react to locale changes.
   * Using `PageName.server.vue` does nor change much in the behaviour of the page when it is geenrated with `npx nuxt generate`
   * *To explore* [noScript](https://nuxt.com/docs/4.x/guide/concepts/rendering#deploying-a-static-client-rendered-app:~:text=as%20static%20assets-,noScripts,-%3A%20boolean)


 ### 20.01.2026
  * Learned how `@nuxtjs/fonts` modile's `processCSSVariables` to specify font names indirectly via CSS variables, as apposed to direct `font-family` attribute in CSS classes. CSS variables must be prefixed with `font-`
  * Configured formatter for *.vue files. This can be done from vscode command palette
	```
	"[vue]": {
		"editor.defaultFormatter": "Vue.volar"
	}
	```
 * `useHead` allows to set page title, meta attibutes, and load links and run scripts.
 * `definePageMeta` in not about meta tags one defines in page's head. It allows to define Nuxt specific parameters. For example you can specify which layout to use for the page (default is 'default'), and (re)define the path and seth path aliases. Needs further study.



# Hydration and mismatch

read on:
https://dev.to/ahmed_niazy/how-to-fix-vue-hydration-mismatch-1dl
https://ryanclements.dev/posts/fixing-nuxt-hydration-mismatches-in-the-real-world
https://vuejs.org/guide/scaling-up/ssr#hydration-mismatch

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
