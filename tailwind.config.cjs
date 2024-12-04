module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all JSX/TSX files in the src directory
  ],
  safelist: [
    /^datatable-.*$/,  // Safelist dynamic datatable classes
    /^heroicon-.*/,    // Optional: Safelist dynamic Heroicon-related classes (if applicable)
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Custom font
      },
      colors: {
        background: "#f2f7fb", // Custom background color
        heroiconBlue: "#3b82f6", // Custom color for Heroicons if needed
      },
    },
  },
  plugins: [
    require("daisyui"),              // DaisyUI plugin for components
    require("flowbite/plugin")({     // Flowbite plugin with optional charts
      charts: true,
    }),
    require("tailwind-scrollbar"),   // Plugin for scrollbar styling
  ],
};
