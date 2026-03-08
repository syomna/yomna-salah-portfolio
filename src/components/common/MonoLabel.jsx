import { Typography } from "@mui/material";
import { INK_LOW } from "../../utils/tokens";
const MonoLabel = ({ children, color = INK_LOW, sx = {} }) => (
  <Typography
    sx={{
      fontFamily: "'DM Mono', monospace",
      fontSize: "10px",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color,
      ...sx,
    }}
  >
    {children}
  </Typography>
);

export default MonoLabel;