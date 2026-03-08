import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { PAPER, INK, INK_LOW, SAGE, RULE } from "../../utils/tokens";

const CtaCell = ({ onContact, onDownload }) => (
  <Box
    sx={{
      py: "28px",
      pl: { xs: 0, md: "32px" },
      borderLeft: { md: `1px solid ${RULE}` },
      borderTop: { xs: `1px solid ${RULE}`, md: "none" },
      gridColumn: { xs: "1 / -1", md: "auto" },
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "12px",
    }}
  >
    {/* Primary CTA */}
    <Box
      role="button"
      component={motion.div}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.15 }}
      onClick={onContact}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        background: INK,
        color: PAPER,
        fontFamily: "'DM Mono', monospace",
        fontSize: "10px",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        padding: "13px 22px",
        cursor: "pointer",
        width: "fit-content",
        userSelect: "none",
        transition: "background 0.25s",
        "&:hover": { background: SAGE },
      }}
    >
      Get in touch →
    </Box>

    {/* Secondary: Download CV */}
    <Box
      role="button"
      component={motion.div}
      whileHover={{ x: 2 }}
      transition={{ duration: 0.15 }}
      onClick={onDownload}
      sx={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "10px",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: INK_LOW,
        borderBottom: `1px solid ${RULE}`,
        paddingBottom: "3px",
        width: "fit-content",
        cursor: "pointer",
        userSelect: "none",
        transition: "color 0.2s, border-color 0.2s",
        "&:hover": { color: INK, borderColor: INK },
      }}
    >
      ↓ Download CV
    </Box>
  </Box>
);

export default CtaCell;