import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { PAPER, INK, INK_LOW, SAGE, RULE } from "../../utils/tokens";
import { reveal } from "../../utils/animations";

const SkillBlock = ({ category, delay = 0 }) => (
  <Box component={motion.div} {...reveal(delay)}>
    <Typography sx={{
      fontFamily: "'DM Mono', monospace",
      fontSize: "9px", letterSpacing: "0.22em",
      textTransform: "uppercase", color: SAGE,
      mb: "20px", pb: "14px",
      borderBottom: `1px solid ${RULE}`,
    }}>
      {category.title}
    </Typography>

    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {category.skills.map((skill) => (
        <Box
          key={skill}
          sx={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "10px", padding: "6px 14px",
            border: `1px solid ${RULE}`,
            color: INK_LOW, letterSpacing: "0.04em",
            cursor: "default", transition: "all 0.2s",
            "&:hover": { background: INK, color: PAPER, borderColor: INK },
          }}
        >
          {skill}
        </Box>
      ))}
    </Box>
  </Box>
);

export default SkillBlock;