module.exports = {
   mode: "jit",
   purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         fontFamily: {
            nunito: ["Nunito"],
            openSans: ["Open Sans"],
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [
      function ({ addUtilities }) {
         const newUtilities = {
            ".noScrollbar": {
               "::-webkit-scrollbar": "none",
               "scrollbar-width": "none",
               "-ms-overflow-style": "none",
            },
         };

         addUtilities(newUtilities);
      },
   ],
};
