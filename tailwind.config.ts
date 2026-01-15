import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-roboto)", "sans-serif"],
                serif: ["var(--font-playfair)", "serif"],
            },
            colors: {
                lumen: {
                    dark: "#1A237E",   // Primary Text (Dark Blue)
                    main: "#00838F",   // Primary Accent (Cyan/Teal)
                    energy: "#F7931E", // Secondary Accent (Orange)
                    black: "#212121",  // Deep Black/Charcoal
                    light: "#F5F5F5",  // Light Gray
                    white: "#FFFFFF",  // Pure White
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                'hero-glow': "radial-gradient(circle at 50% 50%, rgba(0, 131, 143, 0.08) 0%, rgba(245, 245, 245, 0) 50%)",
            },
            borderRadius: {
                'lg': '0.75rem',
                'xl': '1rem',
                '2xl': '1.5rem',
            }
        },
    },
    plugins: [],
};
export default config;
