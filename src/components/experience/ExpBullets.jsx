import { Box, Typography } from "@mui/material";
import { INK, INK_MID, SAGE } from "../../utils/tokens";

const ExpBullets = ({ role, description }) => (
  <Box sx={{ pl: { md: "44px" } }}>
    {/* Role title */}
    <Typography sx={{
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: { xs: "20px", md: "26px" },
      fontWeight: 500, color: INK,
      letterSpacing: "-0.015em",
      lineHeight: 1.2, mb: "20px",
    }}>
      {role}
    </Typography>

    {/* Bullet list */}
    <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
      {description.map((bullet, i) => (
        <Box
          key={i}
          component="li"
          sx={{
            fontFamily: "'Lora', Georgia, serif",
            fontSize: "14px", lineHeight: 1.95,
            color: INK_MID, fontWeight: 400,
            py: "3px", pl: "18px",
            position: "relative",
            "&::before": {
              content: '"—"',
              position: "absolute",
              left: 0, color: SAGE, fontSize: "13px",
            },
          }}
        >
          {bullet}
        </Box>
      ))}
    </Box>
  </Box>
);

export default ExpBullets;