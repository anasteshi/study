import js from "@eslint/js"
import globals from "globals"
import {defineConfig} from "eslint/config"

export default defineConfig([
	{
		files: ["**/*.{js,mjs,cjs}"],
		plugins: {js},
		extends: ["js/recommended"],
		rules: {
			"arrow-body-style": ["error", "as-needed"],
			"no-unused-vars": "off",
			quotes: ["warn", "double"],
			"no-constant-binary-expression": ["off"],
			"no-redeclare": "warn",
		},
	},
	{
		files: ["**/*.{js,mjs,cjs}"],
		languageOptions: {globals: globals.browser},
	},
])
