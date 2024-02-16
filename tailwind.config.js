/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				Blue: '#4f7df3',
				'Pale-Blue': '#c2d3ff',
				'Light-Red': ' #ff5263',
				Gray: '#969696',
				'Very-Dark-Blue': '#151f29',
			},
		},
	},
	plugins: [],
};
