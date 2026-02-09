// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
    [{
        rules: {
            'no-debugger': 'off',
            'vue/no-multiple-template-root': 'warn'
        }
    }]
)
    .overrideRules({
        '@stylistic/indent': 'error'
    });
