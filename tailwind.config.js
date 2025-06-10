/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Sistema de colores profesional y académico
      colors: {
        // Paleta principal - Azul académico
        primary: {
          50: '#f0f9ff',   // Fondo más claro
          100: '#e0f2fe',  // Fondo claro
          200: '#bae6fd',  // Bordes suaves
          300: '#7dd3fc',  // Elementos interactivos
          400: '#38bdf8',  // Acentos secundarios
          500: '#0ea5e9',  // Acentos principales
          600: '#0284c7',  // Enlaces
          700: '#0369a1',  // Texto secundario
          800: '#075985',  // Texto principal
          900: '#0c4a6e',  // Títulos
          950: '#082f49',  // Máximo contraste
        },
        // Paleta secundaria - Gris neutro
        neutral: {
          50: '#f8fafc',   // Fondo alternativo
          100: '#f1f5f9',  // Bordes
          200: '#e2e8f0',  // Separadores
          300: '#cbd5e1',  // Elementos deshabilitados
          400: '#94a3b8',  // Texto secundario
          500: '#64748b',  // Texto principal
          600: '#475569',  // Títulos secundarios
          700: '#334155',  // Títulos principales
          800: '#1e293b',  // Énfasis
          900: '#0f172a',  // Máximo contraste
          950: '#020617',  // Máximo contraste
        },
        // Paleta de acentos - Verde académico
        accent: {
          50: '#f0fdf4',   // Fondo destacado
          100: '#dcfce7',  // Elementos interactivos
          200: '#bbf7d0',  // Bordes destacados
          300: '#86efac',  // Acentos suaves
          400: '#4ade80',  // Acentos medios
          500: '#22c55e',  // Acentos principales
          600: '#16a34a',  // Enlaces destacados
          700: '#15803d',  // Texto destacado
          800: '#166534',  // Énfasis
          900: '#14532d',  // Máximo contraste
        },
      },
      // Sistema tipográfico profesional
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-source-sans)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      // Sistema de espaciado y tamaños
      spacing: {
        '18': '4.5rem',
        '112': '28rem',
        '128': '32rem',
      },
      // Sistema de anchos máximos para contenido
      maxWidth: {
        'content': '65ch',      // Ancho óptimo para lectura
        'content-wide': '85ch', // Ancho para contenido con imágenes
        'container': '80rem',   // Ancho máximo del contenedor
      },
      // Sistema de contenedores
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      // Sistema de tipografía para contenido
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--tw-prose-neutral-700)',
            '--tw-prose-headings': 'var(--tw-prose-neutral-900)',
            '--tw-prose-links': 'var(--tw-prose-primary-600)',
            '--tw-prose-bold': 'var(--tw-prose-neutral-900)',
            '--tw-prose-counters': 'var(--tw-prose-neutral-500)',
            '--tw-prose-bullets': 'var(--tw-prose-neutral-500)',
            '--tw-prose-hr': 'var(--tw-prose-neutral-200)',
            '--tw-prose-quotes': 'var(--tw-prose-neutral-700)',
            '--tw-prose-quote-borders': 'var(--tw-prose-primary-500)',
            '--tw-prose-captions': 'var(--tw-prose-neutral-500)',
            '--tw-prose-code': 'var(--tw-prose-accent-700)',
            '--tw-prose-pre-code': 'var(--tw-prose-neutral-700)',
            '--tw-prose-pre-bg': 'var(--tw-prose-neutral-50)',
            '--tw-prose-pre-border': 'var(--tw-prose-neutral-200)',
            '--tw-prose-th-borders': 'var(--tw-prose-neutral-200)',
            '--tw-prose-td-borders': 'var(--tw-prose-neutral-200)',
            maxWidth: '65ch',
            color: 'rgb(51, 65, 85)',
            '[class~="lead"]': {
              color: 'var(--tw-prose-neutral-600)',
              fontSize: '1.25em',
              lineHeight: '1.6',
              marginTop: '2em',
              marginBottom: '2em',
            },
            a: {
              color: 'rgb(2, 132, 199)',
              textDecoration: 'underline',
              fontWeight: '500',
              '&:hover': {
                color: 'rgb(3, 105, 161)',
              },
            },
            strong: {
              color: 'var(--tw-prose-bold)',
              fontWeight: '600',
            },
            'ol > li::marker': {
              color: 'var(--tw-prose-counters)',
              fontWeight: '500',
            },
            'ul > li::marker': {
              color: 'var(--tw-prose-bullets)',
            },
            hr: {
              borderColor: 'var(--tw-prose-hr)',
              borderTopWidth: 1,
              marginTop: '3em',
              marginBottom: '3em',
            },
            blockquote: {
              color: 'var(--tw-prose-quotes)',
              borderLeftColor: 'var(--tw-prose-quote-borders)',
              borderLeftWidth: '0.25rem',
              fontStyle: 'italic',
              marginTop: '1.6em',
              marginBottom: '1.6em',
              paddingLeft: '1em',
            },
            'h1, h2, h3, h4': {
              color: 'rgb(30, 41, 59)',
              fontWeight: '600',
            },
            code: {
              color: 'var(--tw-prose-code)',
              backgroundColor: 'var(--tw-prose-neutral-50)',
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontWeight: '500',
              fontSize: '0.875em',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: 'var(--tw-prose-pre-bg)',
              color: 'var(--tw-prose-pre-code)',
              border: '1px solid var(--tw-prose-pre-border)',
              borderRadius: '0.5rem',
              padding: '1.25rem 1.5rem',
              overflowX: 'auto',
              fontSize: '0.875em',
              lineHeight: '1.7142857',
              marginTop: '1.7142857em',
              marginBottom: '1.7142857em',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              borderRadius: '0',
              color: 'inherit',
              fontSize: 'inherit',
              fontWeight: 'inherit',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
} 