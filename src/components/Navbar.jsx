import { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { INK, INK_LOW, SAGE, RULE } from "../utils/tokens";

const NAV_ITEMS = ["About", "Skills", "Experience", "Projects", "Contact"];

const Navbar = () => {
  const [raised, setRaised] = useState(false);

  useEffect(() => {
    const onScroll = () => setRaised(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (label) => {
    const idMap = {
      About:      "about",
      Skills:     "skills",
      Experience: "experience",
      Projects:   "projects",
      Contact:    "contact",
    };
    const el = document.getElementById(idMap[label]);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: raised ? "rgba(248,246,241,0.96)" : "rgba(248,246,241,0)",
        backdropFilter: raised ? "blur(20px)" : "none",
        borderBottom: `1px solid ${raised ? RULE : "transparent"}`,
        backgroundImage: "none",
        transition: "background 0.4s ease, border-color 0.4s ease",
        pointerEvents: "none",  // let clicks pass through the bar itself
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: { xs: 3, md: "60px" },
          height: "60px",
          minHeight: "60px !important",
          pointerEvents: "auto", // re-enable only on the toolbar content
        }}
      >
        {/* ── Logo ─────────────────────────────── */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "15px", fontWeight: 500, fontStyle: "italic",
            color: INK, letterSpacing: "0.03em",
            background: "none", border: "none",
            cursor: "pointer", userSelect: "none",
            transition: "color 0.2s", padding: 0,
          }}
          onMouseEnter={e => e.target.style.color = SAGE}
          onMouseLeave={e => e.target.style.color = INK}
        >
          Yomna Salah
        </button>

        {/* ── Nav links (desktop) ───────────────── */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: "36px", alignItems: "center" }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px", fontWeight: 300,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: INK_LOW, background: "none",
                border: "none", padding: 0,
                cursor: "pointer", transition: "color 0.2s",
              }}
              onMouseEnter={e => e.target.style.color = INK}
              onMouseLeave={e => e.target.style.color = INK_LOW}
            >
              {item}
            </button>
          ))}
        </Box>

        {/* ── Available dot (desktop) ───────────── */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: "8px" }}>
          <Box
            component={motion.div}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(107,124,94,0.5)",
                "0 0 0 7px rgba(107,124,94,0)",
                "0 0 0 0 rgba(107,124,94,0)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            sx={{ width: "5px", height: "5px", borderRadius: "50%", background: SAGE, flexShrink: 0 }}
          />
          <Typography sx={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "10px", fontWeight: 300,
            letterSpacing: "0.14em", textTransform: "uppercase", color: SAGE,
          }}>
            Available for work
          </Typography>
        </Box>

        {/* ── Mobile: dot + label ───────────────── */}
        <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: "8px" }}>
          <Box sx={{ width: "6px", height: "6px", borderRadius: "50%", background: SAGE }} />
          <Typography sx={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "10px", color: SAGE,
            letterSpacing: "0.1em", textTransform: "uppercase",
          }}>
            Open to work
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;