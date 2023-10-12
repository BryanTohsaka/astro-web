/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"base-color": "#003341",
				"blue": "#00A5CF",
				"green-light": "#9FFFCB",
				"green-mid": "#25A18E",
				"green-base": "#7AE582",
			}
		},
	},
	plugins: [],
}
