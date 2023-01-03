/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html ,js}", "./*.html"],
  prefix: "tw-",
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        "light-green": "#37E6C6",
        "faded-white": {
          100: "#ffffff1a",
          200: "#ffffff0d",
        },
        "bg-dark": {
          200: "#191B1D",
          300: "#060707",
        },
      },
    },
  },
  daisyui: {
    themes: false,
    themes: [
      {
        mytheme: {
          primary: "#37e6c6",
          warning: "#FBBD23",
          secondary: "#D926A9",

          accent: "#1FB2A6",

          neutral: "#191D24",

          "base-100": "#2A303C",
          ghost: "#fff0",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
