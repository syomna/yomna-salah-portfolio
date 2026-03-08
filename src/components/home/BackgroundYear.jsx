import { Typography } from "@mui/material";

const BackgroundYear = ({ year = new Date().getFullYear() }) => (
  <Typography
    aria-hidden
    sx={{
      position: "absolute",
      fontFamily: "'Playfair Display', serif",
      fontSize: { xs: "180px", md: "420px" },
      fontWeight: 700,
      color: "transparent",
      WebkitTextStroke: "1px rgba(24,22,18,0.04)",
      right: { xs: "-20px", md: "-3vw" },
      bottom: { xs: "-20px", md: "-2vw" },
      lineHeight: 1,
      pointerEvents: "none",
      userSelect: "none",
      letterSpacing: "-0.04em",
      zIndex: 0,
    }}
  >
    {year}
  </Typography>
);

export default BackgroundYear;