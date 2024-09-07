/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-dark": "#111620",
				"secondary-dark-1": "#171D29",
				"secondary-dark-2": "#131928",
				"tertiary-pink": "#FA3059",
				"tertiary-purple": "#8224CB",
				"tertiary-orange": "#FE985D",
				"tertiary-yellow": "#FDC830",
				"offwhite": "#F3F3F3",
			},
			backgroundImage: {
				'gradient-pink-purple': 'linear-gradient(45deg, #FA3059, #8224CB)',
				'gradient-orange-pink': 'linear-gradient(45deg, #FE985D, #FA3059)',
				'gradient-yellow-orange': 'linear-gradient(45deg, #FDC830, #F37335)',
				'gradient-yellow-pink': 'linear-gradient(45deg, #FDC830, #FA3059)',
				// Add more gradients as needed
			  },
		},
	},
	// eslint-disable-next-line no-undef
	plugins: [require("daisyui"),
		require('@tailwindcss/forms')
	],
	
};
