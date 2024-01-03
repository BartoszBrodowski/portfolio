import type { Config } from "tailwindcss"
import { nextui } from "@nextui-org/react"

const config = {
  important: true,
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'main-black': '#09090B',
        'main-green': '#80c679',
        'main-red': '#823038',
        'main-orange': '#BC6C25'
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
				'image-flow': {
					'0%, 100%': {
						'border-radius': '60% 40% 30% 70% / 60% 30% 70% 40%',
					},
					'50%': {
						'border-radius': '30% 60% 70% 40% / 50% 60% 30% 60%',
					},
        },
        'button-float': {
          '0%, 100%': {
            transform: 'scale(1)',
            boxShadow: '0 0 10 10 rgba(255, 255, 255)',
          },
          '50%': {
            transform: 'scale(1.5)',
            boxShadow: '10 10 10 10 rgba(255, 255, 255)',
          },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'image-flow': 'image-flow 8s ease-in-out infinite',
        'button-float': 'button-float 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), nextui()],
} satisfies Config

export default config