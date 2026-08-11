import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        investidorBg: '#F8FAFC',
        investidorCard: '#FFFFFF',
        investidorBorder: '#E2E8F0',
        investidorDark: '#0F172A',
        investidorGray: '#475569',
        investidorLightGray: '#64748B',
        investidorBlue: '#2563EB',
        investidorBlueHover: '#1D4ED8',
        investidorGreen: '#16A34A',
        investidorRed: '#DC2626',
      },
      fontFamily: {
        main: ['Plus Jakarta Sans', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
