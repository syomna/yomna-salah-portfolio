import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Box, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { motion } from "framer-motion";

const navItems = ["About", "Expertise", "Experience", "Projects", "Contact"];

const Navbar = ({ mode, toggleMode }) => {
  const theme = useTheme();

  const handleScroll = (id) => {
    // Logic: If 'Expertise' is clicked, use 'about' as the target ID
    const targetId = id === "Expertise" ? "about" : id.toLowerCase();
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: mode === "dark" 
          ? "rgba(10, 10, 12, 0.8)" 
          : "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(12px)",
        boxShadow: "none",
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundImage: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 10 } }}>
        <Typography
          variant="h6"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          component={motion.div}
          whileHover={{ scale: 1.05 }}
          sx={{
            fontFamily: "'Courier Prime', monospace",
            fontWeight: 800,
            cursor: "pointer",
            color: theme.palette.primary.main,
            letterSpacing: -1
          }}
        >
          YS.DEV
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, alignItems: "center" }}>
          {navItems.map((item) => (
            <Button
              key={item}
              onClick={() => handleScroll(item)}
              component={motion.button}
              whileHover={{ y: -2 }}
              sx={{
                color: theme.palette.text.primary,
                fontSize: "0.85rem",
                fontWeight: 600,
                px: 2,
                "&:hover": { 
                  background: "transparent", 
                  color: theme.palette.primary.main 
                },
              }}
            >
              {item}
            </Button>
          ))}

          <IconButton 
            onClick={toggleMode} 
            sx={{ 
              color: theme.palette.text.primary,
              ml: 2,
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 2
            }}
            component={motion.button}
            whileTap={{ scale: 0.9 }}
          >
            {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
          </IconButton>
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton 
            onClick={toggleMode} 
            sx={{ color: theme.palette.text.primary }}
          >
            {mode === "dark" ? <LightModeOutlined  /> : <DarkModeOutlined />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;