import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";

const Footer = () => {
  // Get current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ pb: 6, pt: 4, textAlign: "center" }}>
      <Container maxWidth="lg">
        <Divider sx={{ mb: 6, opacity: 0.1 }} />
        <Typography 
          variant="body2" 
          sx={{ 
            fontFamily: "'Courier Prime', monospace", 
            color: "text.secondary",
            letterSpacing: 1 
          }}
        >
          DESIGNED & BUILT BY YOMNA SALAH — {currentYear}
        </Typography>
        <Typography variant="caption" sx={{ color: "text.disabled", mt: 1, display: "block" }}>
          Built with React • MUI • Framer Motion
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;