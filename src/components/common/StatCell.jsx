import { Box, Typography } from "@mui/material";
import { INK, INK_LOW, RULE } from "../../utils/tokens";

const StatCell = ({ number, label, sx = {} }) => (
  <Box
    sx={{
        py: "28px",
        px: { xs: "24px", md: "32px" },
      pr: "32px",
      borderRight: `1px solid ${RULE}`,
      ...sx,
    }}
  >
    <Typography
      sx={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: { xs: "36px", md: "52px" },
        fontWeight: 500,
        color: INK,
        lineHeight: 1,
        letterSpacing: "-0.02em",
      }}
    >
      {number}
    </Typography>
    <Typography
      sx={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "10px",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: INK_LOW,
        mt: "10px",
      }}
    >
      {label}
    </Typography>
  </Box>
);

export default StatCell;