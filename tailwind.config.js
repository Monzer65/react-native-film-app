/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // primary: "#030014",
        // secondary: "#151312",
        // light: {
        //   100: "#D6C7FF",
        //   200: "#A8B5DB",
        //   300: "#9CA4AB",
        // },
        // dark: {
        //   100: "#221F3D",
        //   200: "#0F0D23",
        // },
        // accent: "#AB8BFF",
        // 🎬 Cinematic Core
        primary: "#2D3447", // dark light for dominant text and headers and bg
        "reel-gold-dark": "#A37C12",
        "reel-gold-light": "#F4C542",
        secondary: "#E50914", // Netflix-red for striking highlights and CTA buttons
        accent: "#FFD700", // Gold shimmer for ratings, icons, and badges

        // 🌌 Background & Layers
        background: {
          100: "#141414", // Deep charcoal for main backgrounds
          200: "#1F1F1F", // Slightly lighter dark for cards
          300: "#292929", // For elevated panels and containers
        },

        // 🌠 Light UI Elements
        light: {
          100: "#FFFFFF", // Pure white for high contrast text
          200: "#F4F4F4", // Soft light gray for form fields and borders
          300: "#D1D5DB", // Medium gray for tooltips or secondary text
        },

        // 💫 Shadows & Depth
        dark: {
          100: "#212121", // Soft black for overlays
          200: "#161616", // For modals and dropdowns
          300: "#0D0D0D", // Ultimate depth for footers or video walls
        },

        // 🍿 Feedback Statuses
        info: "#3B82F6", // Cool blue for general information
        success: "#10B981", // Green for successful interactions
        warning: "#FBBF24", // Vibrant amber for warnings
        error: "#EF4444", // Red for errors or alert banners

        // 🎭 Extra Emotion
        emotion: {
          romance: "#DB2777", // Rosy pink for love-themed content
          thriller: "#7C3AED", // Electric purple for suspense
          comedy: "#FACC15", // Bright yellow for playful vibes
        },
      },
    },
  },
  plugins: [],
};
