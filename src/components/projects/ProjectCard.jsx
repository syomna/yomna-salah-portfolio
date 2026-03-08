import { GitHub, Apple, Android, Launch } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { PAPER, INK_LOW, INK_MID, INK, SAGE_L, RULE } from "../../utils/tokens";
import LinkIcon from "./LinkIcon";

const ProjectCard = ({ project, index, tabLabel }) => {
  const flip = index % 2 !== 0;

  return (
    <Box
      py={{xs: 2, md: 3}}
      component={motion.div}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.07 }}
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        borderTop: `1px solid ${RULE}`,
        "&:last-child": { borderBottom: `1px solid ${RULE}` },
        cursor: "default",
        transition: "background 0.25s",
        "&:hover": { background: "rgba(255,255,255,0.6)" },
        "&:hover .proj-arr": { transform: "translate(3px, -3px)", color: INK },
      }}
    >
      {/* ── Image ──────────────────────────────── */}
      <Box
        sx={{
          overflow: "hidden",
          background: SAGE_L,
          borderRight: { md: `1px solid ${RULE}` },
          borderBottom: { xs: `1px solid ${RULE}`, md: "none" },
          direction: "ltr",
          position: "relative",
                  aspectRatio: "16 / 7",
                    //   { xs: "16 / 7", md: "4 / 3" },
          order: { md: flip ? 1 : 0 },
        }}
      >
        {project.img ? (
          <Box
            component="img"
            src={project.img}
            alt={project.title}
            sx={{
              position: "absolute",
            //   top: 0, left: 0,
              width: "100%", height: "100%",
            //   objectFit: "cover",
            //   objectPosition: "center",
              display: "block",
            }}
          />
        ) : (
          <Box sx={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: "12px", opacity: 0.3,
          }}>
            <Typography sx={{ fontSize: "32px" }}>
              {tabLabel === "Mobile App" ? "📱" : "🌐"}
            </Typography>
            <Typography sx={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "9px", letterSpacing: "0.16em",
              textTransform: "uppercase", color: INK_LOW,
            }}>
              Coming soon
            </Typography>
          </Box>
        )}

        {/* Index badge */}
        <Box sx={{
          position: "absolute", top: "12px", left: "12px",
          fontFamily: "'DM Mono', monospace",
          fontSize: "10px", fontWeight: 500,
          background: INK, color: PAPER,
          px: "8px", py: "3px",
          letterSpacing: "0.04em",
          zIndex: 1,
        }}>
          {String(index + 1).padStart(2, "0")}
        </Box>
      </Box>

      {/* ── Body ───────────────────────────────── */}
      <Box
        sx={{
          // xs gets horizontal padding too — was "32px 0" before (no side padding)
          padding: { xs: "18px 24px", md: "6px 24px" },
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          order: { md: flip ? 0 : 1 },
        }}
      >
        <Typography sx={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "9px", letterSpacing: "0.2em",
          textTransform: "uppercase", color: INK_LOW,
          mb: "10px",
        }}>
          {tabLabel}
        </Typography>

        <Typography sx={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: { xs: "20px", md: "24px" },
          fontWeight: 500, color: INK,
          letterSpacing: "-0.02em", lineHeight: 1.15,
          mb: "12px",
        }}>
          {project.title}
        </Typography>

        <Typography sx={{
          fontFamily: "'Lora', Georgia, serif",
          fontSize: "13px", lineHeight: 1.8,
          color: INK_MID, mb: "20px",
          maxWidth: "64ch",
        }}>
          {project.subTitle}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "6px", mb: "20px" }}>
          {project.tech.map((t) => (
            <Box key={t} sx={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "9px", padding: "3px 9px",
              border: `1px solid ${RULE}`, color: INK_LOW,
              letterSpacing: "0.04em",
            }}>
              {t}
            </Box>
          ))}
        </Box>

        <Box sx={{
          display: "flex", gap: "16px", alignItems: "center",
          borderTop: `1px solid ${RULE}`, pt: "16px",
        }}>
          {project.github    && <LinkIcon href={project.github}    icon={<GitHub   sx={{ fontSize: "14px" }} />} label="GitHub"     />}
          {project.appStore  && <LinkIcon href={project.appStore}  icon={<Apple    sx={{ fontSize: "14px" }} />} label="App Store"  />}
          {project.playStore && <LinkIcon href={project.playStore} icon={<Android  sx={{ fontSize: "14px" }} />} label="Play Store" />}
          {project.demo      && <LinkIcon href={project.demo}      icon={<Launch   sx={{ fontSize: "14px" }} />} label="Live demo"  />}

          <Box className="proj-arr" sx={{ ml: "auto", fontSize: "14px", color: INK_LOW, transition: "all 0.2s" }}>
            ↗
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;