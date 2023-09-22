module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'xo',
		'plugin:react/recommended',
		'plugin:import/recommended',

	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
				tsconfigRootDir: __dirname,

			},
		},
		{
			extends: [
				'xo-typescript',
			],
			rules: {
				'@typescript-eslint/object-curly-spacing': [2, 'always'],
				'react/react-in-jsx-scope': 'off',
				'@typescript-eslint/no-floating-promises': 'off',
				'@typescript-eslint/prefer-nullish-coalescing': 'off',
				'@typescript-eslint/naming-convention': 'off',
				'react/no-deprecated': 'off',
				'import/no-unresolved': 'off',
				'i18next/no-literal-string': ['error', {markupOnly: true, ignoreAttribute: ['data-testid']}],
				'@typescript-eslint/indent': 'off',
				'@typescript-eslint/member-ordering': ['warn'],

			},
			files: [
				'*.ts',
				'*.tsx',
			],
		},
		{
			files: ['**/src/**/*test.{ts,tsx}'],
			rules: {
				'i18next/no-literal-string': 'off',
			},
		},
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'i18next',
	],
};

