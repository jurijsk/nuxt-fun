[repo location](https://github.com/jurijsk/nuxt-fun)


[x] checkout https://fonts.nuxt.com/get-started/configuration#processcssvariables and playground for basic css

[ ] try using Layout

[ ] try using useHead

[ ] try using https://nuxt.com/docs/4.x/api/utils/define-page-meta and understand the difference.

[ ] understand how to use `@nuxtjs/i18n`

__________________________________________________________________________________________________________
# Changes
 ### 20.01.2026
  * Learned how `@nuxtjs/fonts` modile's `processCSSVariables` to specify font names indirectly via CSS variables, as apposed to direct `font-family` attribute in CSS classes. CSS variables must be prefixed with `font-`
  * Configured formatter for *.vue files. This can be done from vscode command palette
	```
	"[vue]": {
		"editor.defaultFormatter": "Vue.volar"
	}
	```


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
