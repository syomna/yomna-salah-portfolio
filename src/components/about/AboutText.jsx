import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { INK, INK_MID, SAGE, RULE } from "../../utils/tokens";
import { reveal } from "../../utils/animations";

const AboutText = () => (
  <Box>
    {/* Headline */}
    <Box component={motion.div} {...reveal(0)}>
      <Typography
        sx={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: { xs: "36px", md: "52px" },
          fontWeight: 500,
          letterSpacing: "-0.02em",
          lineHeight: 1.05,
          color: INK,
          mb: "40px",
        }}
      >
        I build apps
        <br />
        that{" "}
        <Box
          component="em"
          sx={{ fontStyle: "italic", color: SAGE }}
        >
          last.
        </Box>
      </Typography>
    </Box>

    {/* Paragraph 1 */}
    <Box component={motion.div} {...reveal(0.1)}>
      <Typography
        sx={{
          fontFamily: "'Lora', Georgia, serif",
          fontSize: "16px",
          lineHeight: 2.05,
          color: INK_MID,
          mb: "22px",
        }}
      >
        I'm{" "}
        <strong style={{ color: INK, fontWeight: 500 }}>
          Yomna Salah
        </strong>{" "}
        — a Flutter Mobile Developer focused on building
        production-ready cross-platform applications. I’ve worked on
        freelance and startup projects involving payments,
        notifications, real-time updates, maps, and AI integrations
        using Flutter and Firebase.
      </Typography>
    </Box>

    {/* Paragraph 2 */}
    <Box component={motion.div} {...reveal(0.18)}>
      <Typography
        sx={{
          fontFamily: "'Lora', Georgia, serif",
          fontSize: "16px",
          lineHeight: 2.05,
          color: INK_MID,
          mb: "36px",
        }}
      >
        My experience includes app deployment, Firebase services,
        CI/CD workflows, and maintaining mobile applications for
        Android and iOS. I enjoy building clean, reliable products
        and collaborating closely with teams and clients.
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
      <Typography
        sx={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "9px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: SAGE,
          flexShrink: 0,
        }}
      >
        Now →
      </Typography>

      <Typography
        sx={{
          fontFamily: "'Lora', Georgia, serif",
          fontStyle: "italic",
          fontSize: "15px",
          color: INK_MID,
          lineHeight: 1.6,
        }}
      >
        Currently exploring native iOS development with{" "}
        <strong
          style={{
            fontStyle: "normal",
            color: INK,
            fontWeight: 500,
          }}
        >
          SwiftUI
        </strong>
        .
      </Typography>
    </Box>
  </Box>
);

export default AboutText;