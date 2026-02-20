/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,ts,mdx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                brand: {
                    blue: '#1A4A8A',
                    'blue-mid': '#2E6DB4',
                    'blue-light': '#4A90D9',
                    'blue-pale': '#E8F0FA',
                    navy: '#0D1B2A',
                    white: '#F5F8FF',
                },
                gold: {
                    DEFAULT: '#C9A94A',
                    light: '#E8CC7A',
                    dark: '#9A7A28',
                }
            },
            fontFamily: {
                sans: ['"Montserrat"', '"Noto Sans"', 'system-ui', 'sans-serif'],
                hebrew: ['"Heebo"', '"Noto Sans Hebrew"', 'sans-serif'],
                hebrewSerif: ['"Shofar"', 'serif'],
                serif: ['"IM Fell English"', 'serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'tile-hover': 'tileHover 0.2s ease',
            },
            keyframes: {
                fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
                slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
            },
            screens: {
                'xs': '375px',
            }
        }
    },
    plugins: []
};
