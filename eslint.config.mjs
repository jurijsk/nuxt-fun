// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt([
	{
		rules: {
			'semi': ['error', 'always'],
			'indent': ['error', 'tab'],
			'quotes': ['error', 'single'],
			'comma-dangle': ['error', 'never'],
			'no-debugger': 'off',
			'vue/no-multiple-template-root': 'warn'
		}
	}
]);

/*
see https://eslint.nuxt.com/ and https://eslint.nuxt.com/packages/module for mode details on ESLink plugin for nuxt
Few things to know.
ESLint takes over formatting of files based on @stylistic/* rules.
Some rules are configured (overridden) here.
The take over of formatting is configured in `.vscode/setting.json`: "editor.codeActionsOnSave"."source.fixAll.eslint": "always". You have to have ESLint plugin installed for it to work.

When you change this config always check right away if formatting still work and monitor errors in ESLint Output (palette: `ESLint: Show Output Channel)

*/
