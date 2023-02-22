/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		fontSize: {
			xs: "0.7rem",
			sm: "0.8rem",
			base: "1rem",
			xl: "1.25rem",
			"4xl": "1.4rem",
			"6xl": "1.6rem",
			"7xl": "1.7rem",
			"8xl": "1.8rem",
			"9xl": "1.9rem",
			"10xl": "2rem",
			title: "3rem",
			subtitle: "2rem",
			tabletitle: "30px",
			footertitle: "15px",
			footersubtitle: "14px",
			icon: "20px",
			headertitle: "4.5rem",
		},
		extend: {
			colors: {
				primary: "#08072A",
				purple: "#190B48",
				green: "#B8FF9E",
				red: "#FF6161",
			},
			height: {
				headerHeight: "70vh",
			},
			fontFamily: {
				display: ["var(--font-sf)", "system-ui", "sans-serif"],
				default: ["var(--font-inter)", "system-ui", "sans-serif"],
			},
			animation: {
				// Tooltip
				"slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
				"slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
			},
			keyframes: {
				// Tooltip
				"slide-up-fade": {
					"0%": { opacity: 0, transform: "translateY(6px)" },
					"100%": { opacity: 1, transform: "translateY(0)" },
				},
				"slide-down-fade": {
					"0%": { opacity: 0, transform: "translateY(-6px)" },
					"100%": { opacity: 1, transform: "translateY(0)" },
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/line-clamp"),
		plugin(({ addVariant }) => {
			addVariant("radix-side-top", '&[data-side="top"]');
			addVariant("radix-side-bottom", '&[data-side="bottom"]');
		}),
	],
};
