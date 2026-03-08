import { createTheme } from "@mui/material";
import { PAPER, INK, INK_MID, INK_LOW, SAGE, RULE } from "./tokens";

const theme = createTheme({
  palette: {
    mode: "light",
    primary:   { main: SAGE },
    secondary: { main: INK },
    background: {
      default: PAPER,
      paper:   "#ffffff",
    },
    text: {
      primary:  INK,
      secondary: INK_MID,
      disabled: INK_LOW,
    },
    divider: RULE,
  },

  typography: {
    fontFamily: "'Lora', Georgia, serif",

    h1: { fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, letterSpacing: "-0.025em" },
    h2: { fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, letterSpacing: "-0.02em" },
    h3: { fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, letterSpacing: "-0.015em" },
    h4: { fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 },
    h5: { fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 },
    h6: { fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 },

    body1: { fontFamily: "'Lora', Georgia, serif", fontSize: "1rem",      lineHeight: 2,   color: INK_MID },
    body2: { fontFamily: "'Lora', Georgia, serif", fontSize: "0.875rem",  lineHeight: 1.9, color: INK_MID },

    caption: {
      fontFamily: "'DM Mono', monospace",
      fontSize: "0.625rem",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: INK_LOW,
    },
    overline: {
      fontFamily: "'DM Mono', monospace",
      fontSize: "0.625rem",
      letterSpacing: "0.2em",
      color: SAGE,
    },
    button: {
      fontFamily: "'DM Mono', monospace",
      textTransform: "uppercase",
      letterSpacing: "0.14em",
      fontWeight: 400,
    },
  },

  shape: { borderRadius: 0 }, // square edges — editorial feel

  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 0, boxShadow: "none", "&:hover": { boxShadow: "none" } },
        containedPrimary: {
          background: INK, color: PAPER,
          "&:hover": { background: SAGE },
        },
        outlinedPrimary: {
          borderColor: RULE, color: INK_MID,
          "&:hover": { borderColor: INK, background: "transparent", color: INK },
        },
      },
    },
    MuiDivider: {
      styleOverrides: { root: { borderColor: RULE } },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: "none", boxShadow: "none", border: `1px solid ${RULE}` },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.625rem",
          letterSpacing: "0.08em",
          height: 26,
          border: `1px solid ${RULE}`,
          background: "transparent",
          color: INK_LOW,
          "&:hover": { background: INK, color: PAPER, border: `1px solid ${INK}` },
        },
        label: { padding: "0 10px" },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 0,
            fontFamily: "'Lora', serif",
            "& fieldset": { borderColor: RULE },
            "&:hover fieldset": { borderColor: INK_MID },
            "&.Mui-focused fieldset": { borderColor: INK, borderWidth: 1 },
          },
          "& .MuiInputLabel-root": {
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: INK_LOW,
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Lora:ital,wght@0,400;0,500;1,400;1,500&family=DM+Mono:wght@300;400;500&display=swap');
      `,
    },
  },
});

export default theme;