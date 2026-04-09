import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import cv from "../assets/resume/Yomna_Salah_Flutter_Mobile_Engineer_CV.pdf";

import { INK_MID, RULE } from "../utils/tokens";
import { fadeUp } from "../utils/animations";

import BackgroundYear from "./home/BackgroundYear";
import NameDisplay    from "./home/NameDisplay";
import CtaCell        from "./home/CtaCell";
import MonoLabel      from "./common/MonoLabel";
import StatCell       from "./common/StatCell";

// ─── CONSTANTS ───────────────────────────────────────────────────────────────
const STATS = [
  { number: "4+",  label: "Years building" },
  { number: "15+", label: "Apps shipped"   },
  { number: "10+", label: "Happy clients"  },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const scrollToContact = () => {
  const el = document.getElementById("contact");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  // const el = document.getElementById("contact");
  // if (!el) return;
  // const top = el.getBoundingClientRect().top + window.pageYOffset - 70;
  // window.scrollTo({ top, behavior: "smooth" });
};

const downloadCV = () => {
  const link = document.createElement("a");
  link.download = "Yomna_Salah_Flutter_Mobile_Engineer_CV.pdf";
  link.href = cv;
  link.click();
};

// ─── HOME ────────────────────────────────────────────────────────────────────
const Home = () => (
  <Box
    id="home"
    component="section"
    sx={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      px: { xs: 3, md: "60px" },
      borderBottom: `1px solid ${RULE}`,
      position: "relative",
      overflow: "hidden",
    }}
  >
    <BackgroundYear />

    {/* Location + label */}
    <Box
      component={motion.div}
      {...fadeUp(0.1)}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        pt: "100px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <MonoLabel>Cairo · Egypt</MonoLabel>
      <MonoLabel>Portfolio — 2026</MonoLabel>
    </Box>

    {/* Name + descriptor */}
    <Box
      component={motion.div}
      {...fadeUp(0.2)}
      sx={{ pt: "40px", position: "relative", zIndex: 1 }}
    >
      <NameDisplay />

      <Box
        component={motion.div}
        {...fadeUp(0.45)}
        sx={{ mt: "36px", display: "flex", alignItems: "center", gap: "24px" }}
      >
        <Box sx={{ width: "48px", height: "1px", background: RULE, flexShrink: 0 }} />
        <Typography sx={{
          fontFamily: "'Lora', Georgia, serif",
          fontSize: "15px",
          fontStyle: "italic",
          color: INK_MID,
          letterSpacing: "0.01em",
        }}>
          Mobile Engineer · Flutter Specialist · 4+ years shipping apps people love.
        </Typography>
      </Box>
    </Box>

    {/* Stats row + CTA */}
    <Box
      component={motion.div}
      {...fadeUp(0.6)}
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
        borderTop: `1px solid ${RULE}`,
        mt: "40px",
        position: "relative",
        zIndex: 1,
      }}
    >
      {STATS.map((s) => (
        <StatCell key={s.label} number={s.number} label={s.label} />
      ))}
      <CtaCell onContact={scrollToContact} onDownload={downloadCV} />
    </Box>
  </Box>
);

export default Home;