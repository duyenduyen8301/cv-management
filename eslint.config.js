module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: [],
	rules: {
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-unused-vars": "off",
		"react-hooks/rules-of-hooks": "off",
		"react-hooks/exhaustive-deps": "off",
	},
};
