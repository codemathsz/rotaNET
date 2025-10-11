/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}" ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',   // Azul muito claro
          100: '#e0f2fe',  // Azul claro
          200: '#bae6fd',  // Azul suave
          300: '#7dd3fc',  // Azul médio
          400: '#38bdf8',  // Azul vibrante
          500: '#0ea5e9',  // Azul principal
          600: '#0284c7',  // Azul escuro
          700: '#0369a1',  // Azul mais escuro
          800: '#075985',  // Azul escuro profundo
          900: '#0c4a6e',  // Azul muito escuro
        },
        
        neutral: {
          25: '#fdfdfd',   // Quase branco
          50: '#fafafa',   // Branco suave para background
          100: '#f5f5f5',  // Cinza muito claro
          200: '#e5e5e5',  // Cinza claro
          300: '#d4d4d4',  // Cinza médio claro
          400: '#a3a3a3',  // Cinza médio
          500: '#737373',  // Cinza
          600: '#525252',  // Cinza escuro
          700: '#404040',  // Cinza mais escuro
          800: '#262626',  // Cinza muito escuro
          900: '#171717',  // Quase preto
        },
        
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
        
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        
        background: {
          primary: '#fdfdfd',    // Background principal (quase branco)
          secondary: '#fafafa',  // Background secundário (branco suave)
          card: '#ffffff',       // Background dos cards (branco puro)
        },
        
        text: {
          primary: '#171717',    // Texto principal (escuro)
          secondary: '#525252',  // Texto secundário
          muted: '#a3a3a3',     // Texto suave/desabilitado
          inverse: '#ffffff',    // Texto inverso (para fundos escuros)
        },
        
        border: {
          light: '#f5f5f5',     // Borda muito clara
          default: '#e5e5e5',   // Borda padrão
          medium: '#d4d4d4',    // Borda média
        }
      },
      
      boxShadow: {
        'soft': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'elevated': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
      },
      
      borderRadius: {
        'card': '12px',
        'button': '8px',
        'input': '6px',
      }
    },
  },
  plugins: [],
}

