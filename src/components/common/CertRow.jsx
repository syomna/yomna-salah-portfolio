import { Box, Typography } from "@mui/material";
import { INK, INK_LOW, SAGE, SAGE_L, RULE } from "../../utils/tokens";

const CertRow = ({ label, sub, href }) => (
  <Box
    component="a"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      display: "flex",
      alignItems: "center",
      gap: "16px",
      padding: "16px 20px",
      border: `1px solid ${RULE}`,
      background: "#ffffff",
      textDecoration: "none",
      transition: "all 0.25s",
      "&:hover": { background: SAGE_L, borderColor: SAGE },
    }}
  >
    <Box
      sx={{
        width: "22px", height: "22px", flexShrink: 0,
        background: SAGE, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'DM Mono', monospace", fontSize: "11px",
      }}
    >
      ✓
    </Box>
    <Box>
      <Typography sx={{
        fontSize: "13px", fontWeight: 500,
        color: INK, fontFamily: "'Lora', serif",
      }}>
        {label}
      </Typography>
      <Typography sx={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "10px", color: INK_LOW,
        letterSpacing: "0.04em", mt: "3px",
      }}>
        {sub}
      </Typography>
    </Box>
  </Box>
);

export default CertRow;