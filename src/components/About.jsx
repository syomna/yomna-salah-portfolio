import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { skillCategories } from "../utils/constants";
import { INK_MID, RULE, SURFACE } from "../utils/tokens";
import { reveal } from "../utils/animations";
import SectionLabel from "./common/SectionLabel";
import CertRow      from "./common/CertRow";
import AboutText    from "./about/AboutText";
import CodePane     from "./about/CodePane";
import SkillBlock   from "./about/SkillBlock";
import { CERTS } from "../utils/constants";

const About = () => (
  <>
    {/* ── About ───────────────────────────────────── */}
    <Box
      id="about"
      component="section"
      sx={{
        px: { xs: "24px", md: "60px" },
        pt: { xs: "80px", md: "120px" },
        pb: { xs: "80px", md: "120px" },
        borderBottom: `1px solid ${RULE}`,
      }}
    >
      <SectionLabel number="01" title="About" sx={{ mb: "64px" }} />

      <Box sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: { xs: "64px", md: "120px" },
        alignItems: "start",
      }}>
        <AboutText />

        <Box
          component={motion.div}
          {...reveal(0.12)}
          sx={{ display: "flex", flexDirection: "column", gap: "24px" }}
        >
          <CodePane />
          {CERTS.map((c) => (
            <CertRow key={c.label} {...c} />
          ))}
        </Box>
      </Box>
    </Box>

    {/* ── Skills ──────────────────────────────────── */}
    <Box
      id="skills"
      component="section"
      sx={{
        px: { xs: "24px", md: "60px" },
        pt: { xs: "80px", md: "120px" },
        pb: { xs: "80px", md: "120px" },
        background: SURFACE,
        borderBottom: `1px solid ${RULE}`,
      }}
    >
      <SectionLabel number="02" title="Skills & Stack" sx={{ mb: "64px" }} />

      <Box sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "240px 1fr" },
        gap: { xs: "48px", md: "100px" },
        alignItems: "start",
      }}>
        <Box component={motion.div} {...reveal(0)}>
          <Typography sx={{
            fontFamily: "'Lora', Georgia, serif",
            fontStyle: "italic",
            fontSize: "17px", lineHeight: 1.9,
            color: INK_MID,
          }}>
            Every tool chosen with intention.
          </Typography>
        </Box>

        <Box sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: { xs: "48px", md: "56px 80px" },
        }}>
          {skillCategories.map((cat, i) => (
            <SkillBlock key={cat.title} category={cat} delay={i * 0.08} />
          ))}
        </Box>
      </Box>
    </Box>
  </>
);

export default About;