import defaultTheme from 'tailwindcss/defaultTheme';
import typographyPlugin from '@tailwindcss/typography';

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                serif: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
            },
        },
    },
    plugins: [typographyPlugin],
    darkMode: 'class',
};
