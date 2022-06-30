/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./analytics/ratings/**/*.{js,ts,jsx,tsx}",
    "./analytics/reviews/**/*.{js,ts,jsx,tsx}",
    "./analytics/common/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
      boxShadow: {
        "box-content": "0px 1px 2px rgba(0, 0, 0, 0.05)",
      },
      dropShadow: {
        "box-content": "0px 1px 2px rgba(0, 0, 0, 0.05)",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        green: "#61BD4F",
        secondary: {
          pink: "#E84778",
          black: "#2B2B2B",
        },
        primary: {
          black: "#11283C",
          hover: "#CF3B68",
        },
        error: "#E53700",
        warning: "#EDAB00",
        white: "#FFFFFF",
        lightBlue: "#68C8E7",
        grey: {
          20: "#F5F5F7",
          40: "#E6E6E8",
          60: "#949494",
          70: "#9E9EA0",
          75: "#C4C4C4",
          80: "#747478",
          90: "#6F7283",
        },
        blue: "#5EBEDD",
        body: "#E5E5E5",
      },
    },
  },
  plugins: [],
};
