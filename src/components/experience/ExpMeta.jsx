import { Box, Typography } from "@mui/material";
import { INK, INK_LOW, SAGE, RULE } from "../../utils/tokens";

const ExpMeta = ({ period, location, company, link }) => (
  <Box
    sx={{
      pr: { md: "40px" },
      mb: { xs: "16px", md: 0 },
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      borderRight: { md: `1px solid ${RULE}` },
    }}
  >
    {/* Period + location */}
    <Box>
      <Typography sx={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "11px", color: SAGE,
        lineHeight: 1.9, letterSpacing: "0.03em",
      }}>
        {period}
      </Typography>
      <Typography sx={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "10px", letterSpacing: "0.1em",
        textTransform: "uppercase", color: INK_LOW, mt: "4px",
      }}>
        {location}
      </Typography>
    </Box>

    {/* Company badge — link if href, plain div otherwise */}
    <Box
      component={link ? "a" : "div"}
      href={link || undefined}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      sx={{
        mt: "20px",
        display: "inline-block",
        width: "fit-content",
        fontFamily: "'DM Mono', monospace",
        fontSize: "10px", letterSpacing: "0.14em",
        textTransform: "uppercase", color: INK,
        textDecoration: "none",
        borderBottom: `1px solid ${INK}`,
        paddingBottom: "2px",
        transition: "color 0.2s, border-color 0.2s",
        ...(link && { "&:hover": { color: SAGE, borderColor: SAGE } }),
      }}
    >
      {company}
      {link && <Box component="span" sx={{ ml: "4px", opacity: 0.5 }}>↗</Box>}
    </Box>
  </Box>
);

export default ExpMeta;