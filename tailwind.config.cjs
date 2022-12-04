/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: "Roboto, sans-serif",
			},
			gridTemplateColumns: {
				main: "256px 1fr",
			},
			colors: {
				red: {
					500: "#f75a68",
				},
				green: {
					300: "#00B37E",
					500: "#00875f",
				},
				gray: {
					100: "#e1e1e6",
					300: "#c4c4cc",
					400: "#8d8d99",
					600: "#323238",
					700: "#29292e",
					800: "#202024",
					900: "#121214",
				},
			},
		},
	},
	plugins: [],
};
