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
        // Paleta principal - Azul moderno y profesional
        primary: {
          50: '#f0f7ff',   // Fondo más claro
          100: '#e0f0ff',  // Fondo claro
          200: '#bae0ff',  // Bordes suaves
          300: '#7cc5ff',  // Elementos interactivos
          400: '#36a9ff',  // Acentos secundarios
          500: '#0088ff',  // Acentos principales
          600: '#0066cc',  // Enlaces
          700: '#004c99',  // Texto secundario
          800: '#003366',  // Texto principal
          900: '#002244',  // Títulos
          950: '#001122',  // Máximo contraste
        },
        // Paleta secundaria - Gris moderno
        neutral: {
          50: '#fafafa',   // Fondo alternativo
          100: '#f5f5f5',  // Bordes
          200: '#e5e5e5',  // Separadores
          300: '#d4d4d4',  // Elementos deshabilitados
          400: '#a3a3a3',  // Texto secundario
          500: '#737373',  // Texto principal
          600: '#525252',  // Títulos secundarios
          700: '#404040',  // Títulos principales
          800: '#262626',  // Énfasis
          900: '#171717',  // Máximo contraste
          950: '#0a0a0a',  // Máximo contraste
        },
        // Paleta de acentos - Verde moderno
        accent: {
          50: '#f0fdf6',   // Fondo destacado
          100: '#dcfce9',  // Elementos interactivos
          200: '#bbf7d6',  // Bordes destacados
          300: '#86efb8',  // Acentos suaves
          400: '#4ade8c',  // Acentos medios
          500: '#22c55e',  // Acentos principales
          600: '#16a34a',  // Enlaces destacados
          700: '#15803d',  // Texto destacado
          800: '#166534',  // Énfasis
          900: '#14532d',  // Máximo contraste
        },
        // Paleta de éxito - Verde profesional
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // Paleta de advertencia - Naranja profesional
        warning: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
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
      backgroundImage: {
        'grid-white': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0V0zm1 1h18v18H1V1z'/%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
} 