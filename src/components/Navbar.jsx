import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

// ─── CONSTANTS ───────────────────────────────────────────────────────────────
const NAV_ITEMS = ["About", "Skills", "Experience", "Projects", "Contact"];

// Design tokens — keep in sync with App.js
const PAPER  = "#f8f6f1";
const INK    = "#181612";
const INK_LOW = "#9a9088";
const SAGE   = "#6b7c5e";
const RULE   = "rgba(24,22,18,0.10)";

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
const Navbar = ({ toggleMode, mode }) => {
  const theme = useTheme();
  const [raised, setRaised] = useState(false);

  // Add border only after user scrolls
  useEffect(() => {
    const onScroll = () => setRaised(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (label) => {
    // Map nav label → section id
    const idMap = {
      About:      "about",
      Skills:     "skills",
      Experience: "experience",
      Projects:   "projects",
      Contact:    "contact",
    };
    const el = document.getElementById(idMap[label]);
    if (!el) return;
    const offset = 70;
    const top =
      el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: raised
          ? "rgba(248,246,241,0.96)"
          : "rgba(248,246,241,0)",
        backdropFilter: raised ? "blur(20px)" : "none",
        borderBottom: `1px solid ${raised ? RULE : "transparent"}`,
        backgroundImage: "none",
        transition: "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: { xs: 3, md: "60px" },
          height: "60px",
          minHeight: "60px !important",
        }}
      >

        {/* ── LOGO ─────────────────────────────────── */}
        <Typography
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          sx={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "15px",
            fontWeight: 500,
            fontStyle: "italic",
            color: INK,
            letterSpacing: "0.03em",
            cursor: "pointer",
            userSelect: "none",
            "&:hover": { color: SAGE },
            transition: "color 0.2s",
          }}
        >
          Yomna Salah
        </Typography>

        {/* ── NAV LINKS (desktop) ───────────────────── */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "36px",
            alignItems: "center",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <Box
              key={item}
              component={motion.div}
              whileHover={{ y: -1 }}
              transition={{ duration: 0.15 }}
            >
              <Button
                onClick={() => handleScroll(item)}
                disableRipple
                sx={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "10px",
                  fontWeight: 300,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: INK_LOW,
                  padding: 0,
                  minWidth: "auto",
                  background: "transparent",
                  "&:hover": {
                    background: "transparent",
                    color: INK,
                  },
                  transition: "color 0.2s",
                }}
              >
                {item}
              </Button>
            </Box>
          ))}
        </Box>

        {/* ── AVAILABLE DOT + LABEL ─────────────────── */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: "8px",
          }}
        >
          {/* Pulsing dot */}
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
            sx={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: SAGE,
              flexShrink: 0,
            }}
          />
          <Typography
            sx={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "10px",
              fontWeight: 300,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: SAGE,
            }}
          >
            Available for work
          </Typography>
        </Box>

        {/* ── MOBILE: just the dot ─────────────────── */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Box
            sx={{
              width: "6px", height: "6px", borderRadius: "50%",
              background: SAGE,
            }}
          />
          <Typography
            sx={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "10px",
              color: SAGE,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Open to work
          </Typography>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;