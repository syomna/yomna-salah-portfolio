import { Box, Typography } from "@mui/material";
import { SAGE, RULE } from "../utils/tokens";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        px: { xs: 3, md: "60px" },
        py: "24px",
        borderTop: `1px solid ${RULE}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "8px",
        background: "#1a1916",
      }}
    >
      <Typography sx={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "10px",
        color: "rgba(255,255,255,0.22)",
        letterSpacing: "0.08em",
      }}>
        © {year}{" "}
        <Box component="em" sx={{ fontStyle: "normal", color: SAGE }}>
          Yomna Salah
        </Box>
      </Typography>

      <Typography sx={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "10px",
        color: "rgba(255,255,255,0.22)",
        letterSpacing: "0.08em",
      }}>
        Built with{" "}
        <Box component="em" sx={{ fontStyle: "normal", color: SAGE }}>
          React · MUI · Framer Motion
        </Box>
      </Typography>
    </Box>
  );
};

export default Footer;