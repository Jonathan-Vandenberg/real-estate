/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif;',
    },
    colors: {
      transparent: "transparent",
      background: "rgb(0, 2, 18)",
      white: "#fff",
      "off-white": "#edf0f0", // text
      "transparent-white": "rgba(255,255,255,0.08)", // Borders and secondary icon background
      gray: "#858699",
      "gray-dark": "#222326",
      "primary-text": "#b4bcd0",
      black: "rgb(0,0,0)",
    },
    fontSize: {
      xs: "1.3rem",
      sm: "1.4rem",
      md: "1.6rem",
      lg: ["1.8rem", "1.4"],
      xl: ["2.2rem", "1.3"],
      "2xl": ["2.6rem", "0.95"],
      "3xl": ["3.2rem", "0.98"],
      "4xl": ["4rem", "1"],
      "5xl": ["4.4rem", "0.98"],
      "6xl": ["4.8rem", "1"],
      "7xl": ["8rem", "1"],
    },
    spacing: {
      0: "0",
      1: "0.4rem",
      2: "0.8rem",
      3: "1.2rem",
      4: "1.6rem",
      5: "2rem",
      6: "2.4rem",
      7: "2.8rem",
      8: "3.2rem",
      9: "3.6rem",
      10: "4rem",
      11: "4.4rem",
      12: "4.8rem",
      13: "5.2rem",
      14: "5.6rem",
      "navigation-height": "var(--navigation-height)",
    },
    backgroundImage: {
      "primary-gradient":
        "linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)",
      "red-gradient":
        "linear-gradient(90deg, rgba(222,37,37,1) 11%, rgba(246,66,66,1) 38%, rgba(255,101,101,1) 100%)",
      "orange-gradient":
        "linear-gradient(90deg, rgba(251,130,0,1) 0%, rgba(251,130,0,1) 50%, rgba(251,130,0,1) 100%)",
      "green-gradient":
        "linear-gradient(90deg, rgba(44,222,55,1) 0%, rgba(24,208,47,1) 10%, rgba(24,208,47,1) 50%, rgba(24,208,47,1) 90%, rgba(44,222,55,1) 100%)",
      "background-gradient":
        "radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3),transparent)",
      "hero-gradient":
        "radial-gradient(ellipse 50% 80% at 20% 40%,rgba(93,52,221,0.1),transparent), radial-gradient(ellipse 50% 80% at 80% 50%,rgba(120,119,198,0.15),transparent)",
      "hero-glow":
        "conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg)",
      "glow-lines":
        "linear-gradient(var(--direction),#9d9bf2 0.43%,#7877c6 14.11%,rgba(120,119,198,0) 62.95%)",
      "radial-faded":
        "radial-gradient(circle at bottom center,var(--color),transparent 70%)",
      "glass-gradient":
        "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
    },
    boxShadow: {
      primary: "rgb(80 63 205 / 50%) 0px 1px 20px",
    },
    keyframes: {
      "fade-in": {
        from: { opacity: 0, transform: "translateY(-10px)" },
        to: { opacity: 1, transform: "none" },
      },
      "image-rotate": {
        "0%": { transform: "rotateX(25deg)" },
        "25%": { transform: "rotateX(25deg) scale(0.9)" },
        "60%": { transform: "none" },
        "100%": { transform: "none" },
      },
      "image-glow": {
        "0%": {
          opacity: 0,
          "animation-timing-function": "cubic-bezier(0.74, 0.25, 0.76, 1)",
        },
        "10%": {
          opacity: 1,
          "animation-timing-function": "cubic-bezier(0.12, 0.01, 0.08, 0.99)",
        },
        "100%": {
          opacity: 0.2,
        },
      },
      "sketch-lines": {
        "0%": { "stroke-dashoffset": 1 },
        "50%": { "stroke-dashoffset": 0 },
        "99%": { "stroke-dashoffset": 0 },
        "100%": { visibility: "hidden" },
      },
      "glow-lines-horizontal": {
        "0%": { opacity: 0, transform: "translateX(0)" },
        "5%": { opacity: 1, transform: "translateX(0)" },
        "90%": { opacity: 1 },
        "100%": {
          opacity: 0,
          transform: "translateX(50rem)",
        },
      },
      "glow-lines-vertical": {
        "0%": { opacity: 0, transform: "translateY(0)" },
        "5%": { opacity: 1, transform: "translateY(0)" },
        "90%": { opacity: 1 },
        "100%": {
          opacity: 0,
          transform: "translateY(30rem)",
        },
      },
      zap: {
        "0%, 9%, 11%, 100%": {
          fill: "transparent",
        },
        "10%": {
          fill: "rgb(255, 255, 255)",
        },
      },
      blink: {
        "0%": {
          opacity: 1,
        },
        "50%": {
          opacity: 0,
        },
        "100%": {
          opacity: 1,
        },
      },
    },
    animation: {
      "fade-in": "fade-in 1000ms var(--animation-delay, 0ms) ease forwards", // "forwards" stops at the end of the animation state
      "image-rotate": "image-rotate 1400ms ease forwards",
      "image-glow": "image-glow 4100ms 600ms ease-out forwards",
      "sketch-lines": "sketch-lines 1200ms ease-out forwards",
      "glow-lines-horizontal":
        "glow-lines-horizontal var(--animation-duration) ease-in forwards",
      "glow-lines-vertical":
        "glow-lines-vertical var(--animation-duration) ease-in forwards",
      zap: "zap 1250ms 20ms ease-in-out infinite",
      blink: "blink 1s ease-in-out infinite",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
