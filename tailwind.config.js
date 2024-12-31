/** @type {import('tailwindcss').Config} */

console.log("Tailwind config loaded!");

export default {
  content: [
    "./index.html",
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        backgroundDark: '#121212', // Dark grey
        darkBlue: "#1A2A4B",
        neonPurple: '#9B59B6', // Neon purple 
        neonPink: '#FF00FF',    // Neon pink
        neonCyan: '#00FFFF',    // Neon cyan
        neonBlue: '#3498DB',    // Bright blue
        neonGreen: '#2ECC71',   // Bright green
        neonYellow: '#FFEB3B',  // Neon yellow
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'], // You can add more fonts or use your custom ones
      },
      keyframes: {
        neonGlow: {
          '0%': {
            textShadow: '0 0 5px #FF00FF, 0 0 10px #FF00FF, 0 0 15px #FF00FF, 0 0 20px #FF00FF',
          },
          '50%': {
            textShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF, 0 0 40px #00FFFF',
          },
          '100%': {
            textShadow: '0 0 5px #FF00FF, 0 0 10px #FF00FF, 0 0 15px #FF00FF, 0 0 20px #FF00FF',
          },
        },
      },
      animation: {
        neonGlow: 'neonGlow 1.5s ease-in-out infinite alternate', // Neon glow animation
      },
      spacing: {
        128: '32rem', // Custom spacing for larger layout elements
      },
      boxShadow: {
        neon: '0 0 15px rgba(255, 0, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.7)', // Neon shadow effect
      },
    },
  },

  plugins: [],
  darkMode: 'selector'
}

