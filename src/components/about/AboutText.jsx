import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { INK, INK_MID, SAGE, RULE } from "../../utils/tokens";
import { reveal } from "../../utils/animations";

const AboutText = () => (
  <Box>
    {/* Headline */}
    <Box component={motion.div} {...reveal(0)}>
      <Typography sx={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: { xs: "36px", md: "52px" },
        fontWeight: 500,
        letterSpacing: "-0.02em",
        lineHeight: 1.05,
        color: INK,
        mb: "40px",
      }}>
        I build apps<br />
        that{" "}
        <Box component="em" sx={{ fontStyle: "italic", color: SAGE }}>
          last.
        </Box>
      </Typography>
    </Box>

    {/* Paragraph 1 */}
    <Box component={motion.div} {...reveal(0.1)}>
      <Typography sx={{
        fontFamily: "'Lora', Georgia, serif",
        fontSize: "16px", lineHeight: 2.05,
        color: INK_MID, mb: "22px",
      }}>
        I'm <strong style={{ color: INK, fontWeight: 500 }}>Yomna Salah</strong> — a Mobile
        Engineer with over 3 years of experience building production-grade applications from the
        ground up. I specialise in{" "}
        <strong style={{ color: INK, fontWeight: 500 }}>Flutter</strong> with a non-negotiable
        commitment to{" "}
        <strong style={{ color: INK, fontWeight: 500 }}>Clean Architecture</strong>.
      </Typography>
    </Box>

    {/* Paragraph 2 */}
    <Box component={motion.div} {...reveal(0.18)}>
      <Typography sx={{
        fontFamily: "'Lora', Georgia, serif",
        fontSize: "16px", lineHeight: 2.05,
        color: INK_MID, mb: "36px",
      }}>
        My work spans clients in the{" "}
        <strong style={{ color: INK, fontWeight: 500 }}>US, UAE, France, South Africa, and beyond</strong> — from
        early-stage startups to fully shipped products on the App Store and Google Play. I own the
        full lifecycle: architecture, CI/CD automation, and App Store deployment. I treat every
        product as if it were my own.
      </Typography>
    </Box>

    {/* Now → strip */}
    <Box
      component={motion.div}
      {...reveal(0.25)}
      sx={{
        borderTop: `1px solid ${RULE}`,
        borderBottom: `1px solid ${RULE}`,
        py: "22px",
        display: "flex",
        gap: "20px",
        alignItems: "baseline",
      }}
    >
      <Typography sx={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "9px", letterSpacing: "0.18em",
        textTransform: "uppercase", color: SAGE, flexShrink: 0,
      }}>
        Now →
      </Typography>
      <Typography sx={{
        fontFamily: "'Lora', Georgia, serif",
        fontStyle: "italic", fontSize: "15px",
        color: INK_MID, lineHeight: 1.6,
      }}>
        Deepening native iOS with{" "}
        <strong style={{ fontStyle: "normal", color: INK, fontWeight: 500 }}>SwiftUI</strong>
        {" "}— because a great developer never stops growing.
      </Typography>
    </Box>
  </Box>
);

export default AboutText;