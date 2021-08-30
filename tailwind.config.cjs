// const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");

module.exports = {
	// mode: "jit", 
	purge: {
		content: [
			"./src/**/*.{html,js,svelte,ts}",
		],
	},
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
	],
};
