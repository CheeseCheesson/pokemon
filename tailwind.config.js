module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      default: ["Montserrat", "sans-serif"]
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      h1: "5rem"
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      normal: "#A8A77A",
      fire: "#EE8130",
      water: "#6390F0",
      electric: "#F7D02C",
      grass: "#7AC74C",
      ice: "#96D9D6",
      fighting: "#C22E28",
      poison: "#A33EA1",
      ground: "#E2BF65",
      flying: "#A98FF3",
      psychic: "#F95587",
      bug: "#A6B91A",
      rock: "#B6A136",
      ghost: "#735797",
      dragon: "#6F35FC",
      dark: "#705746",
      steel: "#B7B7CE",
      fairy: "#D685AD"
    },
    align: {
      left: "left",
      center: "center",
      right: "right",
      justify: "justify",
      inherit: "inherit"
    },
    screens: {
      xl: { max: "1365px" }, // 1024+
      lg: { max: "1023px" }, // 768+
      md: { max: "767px" }, // 576+
      sm: { max: "575px" }, // 375+
      xs: { max: "374px" } // 320+
    },
    extend: {
      maxWidth: {
        container: "1440px"
      }
    }
  },
  plugins: []
}
