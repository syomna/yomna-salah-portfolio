import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { INK, SAGE } from "../../utils/tokens";

const NameDisplay = () => (
  <>
    {/* Line 1 */}
    <Typography
      component="h1"
      sx={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: { xs: "17vw", sm: "14vw", md: "13vw", lg: "190px" },
        fontWeight: 600,
        lineHeight: 0.88,
        letterSpacing: "-0.025em",
        color: INK,
      }}
    >
      Yomna
    </Typography>

    {/* Line 2 — italic + animated underline */}
    <Box sx={{ position: "relative", width: "fit-content" }}>
      <Typography
        component="h1"
        sx={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: { xs: "17vw", sm: "14vw", md: "13vw", lg: "190px" },
          fontWeight: 600,
          lineHeight: 0.88,
          letterSpacing: "-0.025em",
          fontStyle: "italic",
          color: SAGE,
          position: "relative",
          zIndex: 1,
        }}
      >
        Salah.
      </Typography>

      <Box
        component={motion.div}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.85 }}
        sx={{
          position: "absolute",
          bottom: { xs: "6px", md: "10px" },
          left: 0,
          width: "100%",
          height: { xs: "8px", md: "18px" },
          background: SAGE,
          opacity: 0.18,
          transformOrigin: "left",
          zIndex: 0,
        }}
      />
    </Box>
  </>
);

export default NameDisplay;