import { Box } from "@mui/material";
import { INK_LOW, INK } from "../../utils/tokens";
const LinkIcon = ({ href, icon, label }) => (
  <Box
    component="a"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={label}
    sx={{
      display: "flex", alignItems: "center", gap: "6px",
      color: INK_LOW, textDecoration: "none",
      fontFamily: "'DM Mono', monospace",
      fontSize: "9px", letterSpacing: "0.1em",
      textTransform: "uppercase",
      transition: "color 0.2s",
      "&:hover": { color: INK },
    }}
  >
    {icon}
    <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>{label}</Box>
  </Box>
);

export default LinkIcon;

