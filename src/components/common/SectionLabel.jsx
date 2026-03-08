import { Box, Typography } from "@mui/material";
import { INK_LOW, RULE } from "../../utils/tokens";
const SectionLabel = ({ number, title, sx = {} }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: "20px",
      mb: "64px",
      ...sx,
    }}
  >
    <Typography
      sx={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "10px",
        color: INK_LOW,
        letterSpacing: "0.16em",
        flexShrink: 0,
      }}
    >
      {number}
    </Typography>

    <Box sx={{ flex: 1, height: "1px", background: RULE }} />

    <Typography
      sx={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "10px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: INK_LOW,
        flexShrink: 0,
      }}
    >
      {title}
    </Typography>
  </Box>
);

export default SectionLabel;