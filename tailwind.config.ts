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
                sans: ['var(--font-manrope)', 'Manrope', 'system-ui', 'sans-serif'],
                mono: ['var(--font-mono)', 'JetBrains Mono', 'Fira Code', 'monospace'],
                display: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
            },
            colors: {
                brand: {
                    black: '#0A0A0B',
                    dark: '#18181B',
                    gray: '#F4F4F5',
                    white: '#FAFAFA',
                    accent: '#3B82F6',
                    text: '#52525B',
                    muted: '#A1A1AA'
                }
            },
            letterSpacing: {
                'tighter': '-0.04em',
                'tight': '-0.02em',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 3s infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
};

export default config;
