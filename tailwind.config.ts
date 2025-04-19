import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1400px',
			}
		},
		extend: {
			fontFamily: {
				sans: ["'DM Sans'", ...defaultTheme.fontFamily.sans],
				serif: ["'Fraunces'", ...defaultTheme.fontFamily.serif],
				display: ["'Cormorant'", ...defaultTheme.fontFamily.serif],
				mono: ["'JetBrains Mono'", ...defaultTheme.fontFamily.mono],
				accent: ["'Cormorant'", ...defaultTheme.fontFamily.serif],
			},
			fontSize: {
				'display-lg': ["clamp(4rem, 10vw, 6.5rem)", { lineHeight: "1" }],
				'display-md': ["clamp(3rem, 7vw, 5rem)", { lineHeight: "1.1" }],
				'display-sm': ["clamp(2.5rem, 5vw, 3.5rem)", { lineHeight: "1.1" }],
				'display-1': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
				'display-2': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
				'heading-1': ["clamp(2.5rem, 5vw, 3.5rem)", { lineHeight: "1.2", letterSpacing: '-0.01em', fontWeight: '700' }],
				'heading-2': ["clamp(2rem, 4vw, 2.5rem)", { lineHeight: "1.2", letterSpacing: '-0.01em', fontWeight: '700' }],
				'heading-3': ["clamp(1.5rem, 3vw, 2rem)", { lineHeight: "1.3", letterSpacing: '0', fontWeight: '600' }],
				'heading-4': ["clamp(1.25rem, 2.5vw, 1.5rem)", { lineHeight: "1.4", letterSpacing: '0', fontWeight: '600' }],
				'body-xl': ['1.25rem', { lineHeight: '1.6', fontWeight: '400' }],
				'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
				'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
				'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
				'body-xs': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],
				'body-base': ["1rem", { lineHeight: "1.5" }],
				'overline': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.1em', fontWeight: '600' }],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				'athena-cream': '#EBE7D9',
				'athena-navy': '#192d34',
				'elite-teal': '#192d34',
				'athena-green': '#4AE7C3',
				'athena-teal': '#4AE7C3',
				'athena-blue': '#4A9BE7',
				'athena-purple': '#9E4AE7',
				'athena-gold': '#E7C34A',
				'sage': {
					50: '#f4f7f1',
					100: '#e6ede0',
					200: '#d0dcc4',
					300: '#b2c5a0',
					400: '#92ab77',
					500: '#7a9359',
					600: '#5f7546',
					700: '#4b5c39',
					800: '#404c33',
					900: '#374230',
					950: '#1b231a',
				},
				'mint': {
					50: '#f0fdf7',
					100: '#dcfcef',
					200: '#baf8e0',
					300: '#83f1ca',
					400: '#4AE7C3',
					500: '#16c996',
					600: '#08a17d',
					700: '#088467',
					800: '#096854',
					900: '#095647',
					950: '#033127',
				},
				'athena-gray': {
					DEFAULT: '#1A1A1A',
					50: '#fafafa',
					100: '#f5f5f5',
					200: '#e5e5e5',
					300: '#d4d4d4',
					400: '#a3a3a3',
					500: '#737373',
					600: '#525252',
					700: '#404040',
					800: '#262626',
					900: '#171717',
					950: '#0a0a0a',
				}
			},
			borderRadius: {
				'2lg': 'var(--radius)',
				lg: 'calc(var(--radius) - 2px)',
				md: 'calc(var(--radius) - 4px)',
				sm: 'calc(var(--radius) - 6px)',
			},
			boxShadow: {
				'relume-sm': '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
				'relume-md': '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)', 
				'relume-lg': '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
				'relume-xl': '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
				'relume-2xl': '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
				'relume-inner': 'inset 0px 2px 4px 0px rgba(0, 0, 0, 0.06)',
				'relume-highlight': '0 0 0 3px rgba(74, 231, 195, 0.5)',
				'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
				'glass-sm': '0 2px 8px 0 rgba(0, 0, 0, 0.05)',
				'subtle': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
				'crisp': '0 1px 3px rgba(0, 0, 0, 0.1), 0 10px 15px -5px rgba(0, 0, 0, 0.04)',
				'soft': '0 5px 30px -10px rgba(0, 0, 0, 0.1)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-down': {
					'0%': { opacity: '0', transform: 'translateY(-20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-left': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				'fade-right': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				'zoom-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' },
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' },
				},
				'shimmer': {
					'0%': { backgroundPosition: '-1000px 0' },
					'100%': { backgroundPosition: '1000px 0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-up': 'fade-up 0.6s ease-out forwards',
				'fade-down': 'fade-down 0.6s ease-out forwards',
				'fade-left': 'fade-left 0.6s ease-out forwards',
				'fade-right': 'fade-right 0.6s ease-out forwards',
				'zoom-in': 'zoom-in 0.5s ease-out forwards',
				'fade-up-delayed': 'fade-up 0.5s ease-out 0.3s forwards',
				'fade-up-more-delayed': 'fade-up 0.5s ease-out 0.6s forwards',
				'spin-slow': 'spin-slow 15s linear infinite',
				'float': 'float 5s ease-in-out infinite',
				'float-slow': 'float 8s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
				'shimmer': 'shimmer 2.5s linear infinite',
			},
			transitionTimingFunction: {
				'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
				'elastic': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
				'smooth': 'cubic-bezier(0.65, 0, 0.35, 1)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-soft': 'linear-gradient(to right, var(--tw-gradient-stops))',
				'texture-dots': 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'1\' cy=\'1\' r=\'1\' fill=\'%23000000\' fill-opacity=\'0.05\'/%3E%3C/svg%3E")',
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'104': '26rem',
				'120': '30rem',
			},
			height: {
				'screen-small': '70vh',
				'screen-large': '85vh',
			},
			maxWidth: {
				'8xl': '88rem',
				'9xl': '96rem',
				'prose-narrow': '45ch',
				'prose-wide': '80ch',
			},
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		plugin(function({ addUtilities }) {
			addUtilities({
				'.text-wrap-balance': {
					'text-wrap': 'balance',
				},
				'.text-wrap-pretty': {
					'text-wrap': 'pretty',
				},
				'.mask-linear-gradient-to-b': {
					'mask-image': 'linear-gradient(to bottom, black 0%, transparent 100%)',
				},
				'.backdrop-blur-xs': {
					'backdrop-filter': 'blur(2px)',
				},
				'.backdrop-blur-4xl': {
					'backdrop-filter': 'blur(60px)',
				},
				'.transform-style-3d': {
					'transform-style': 'preserve-3d',
				},
				'.backface-hidden': {
					'backface-visibility': 'hidden',
				},
				'.rotate-y-180': {
					'transform': 'rotateY(180deg)',
				},
				'.perspective': {
					'perspective': '1000px',
				},
				'.perspective-xl': {
					'perspective': '2000px',
				},
				'.perspective-2xl': {
					'perspective': '3000px',
				},
			});
		}),
	],
} satisfies Config;
