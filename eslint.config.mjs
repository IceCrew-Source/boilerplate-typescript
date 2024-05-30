import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginAdonis from 'eslint-plugin-adonis'

export default [
    {
        languageOptions: {
            globals: globals.browser,
        },
        ignores: [
            '!node_modules/',
            'node_modules/*',
            'pnpm-lock.yaml',
            'pnpm-workspace.yaml',
        ],
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
    eslintPluginAdonis,
]
