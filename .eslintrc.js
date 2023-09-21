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
				'i18next/no-literal-string': ['error', {markupOnly: true}],
			},
			files: [
				'*.ts',
				'*.tsx',
			],
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

