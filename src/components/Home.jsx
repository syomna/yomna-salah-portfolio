import React from "react";
import { Box, Typography, Button, Stack, useTheme, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { GetAppRounded, SendRounded } from "@mui/icons-material";
import cv from "../assets/resume/Yomna_Salah_Flutter_Developer.pdf";
import { DecorativeCode } from "./DecorativeCode";

const Home = () => {
  const theme = useTheme();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        pt: { xs: 12, md: 0 },
      }}
    >
      <Grid container spacing={6} alignItems="center">
        {/* Left Side: Content */}
        <Grid item xs={12} md={7}>
          <Box
            component={motion.div}
            variants={container}
            initial="hidden"
            animate="show"
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              variant="overline"
              component={motion.span}
              variants={item}
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                letterSpacing: "0.3rem",
                mb: 1,
                display: "block",
              }}
            >
              MOBILE SPECIALIST {/* Updated from Flutter Specialist */}
            </Typography>

            <Typography
              variant="h1"
              component={motion.h1}
              variants={item}
              sx={{
                fontSize: { xs: "2.6rem", md: "4.2rem" },
                lineHeight: 1.1,
                mb: 2,
                fontWeight: 800,
                background: theme.palette.mode === "dark" 
                  ? "linear-gradient(90deg, #fff 0%, #aaa 100%)" 
                  : "linear-gradient(90deg, #202124 0%, #5f6368 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Building seamless <br /> mobile experiences.
            </Typography>

            <Typography
              variant="body1"
              component={motion.p}
              variants={item}
              sx={{
                maxWidth: "600px",
                fontSize: "1.1rem",
                color: theme.palette.text.secondary,
                mb: 5,
                lineHeight: 1.7,
                mx: { xs: "auto", md: 0 }
              }}
            >
              I'm <strong>Yomna Salah</strong>, a Mobile Specialist with 3+ years of experience 
              building and scaling production-ready applications. I specialize in 
              <strong> Flutter & Clean Architecture</strong>, while continuously expanding 
              my native capabilities with <strong>Native iOS (SwiftUI)</strong>.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent={{ xs: "center", md: "flex-start" }}
              component={motion.div}
              variants={item}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<SendRounded />}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  boxShadow: `0 8px 20px ${theme.palette.primary.main}33`,
                }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Talk
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<GetAppRounded />}
                onClick={() => {
                  const link = document.createElement("a");
                  link.download = "Yomna_Salah_Flutter_Developer.pdf";
                  link.href = cv;
                  link.click();
                }}
                sx={{ px: 4, py: 1.5, borderRadius: 2, borderWidth: 2, "&:hover": { borderWidth: 2 } }}
              >
                Download CV
              </Button>
            </Stack>
          </Box>
        </Grid>

        {/* Right Side: Decorative Code Snippet */}
        <DecorativeCode />
      </Grid>
    </Box>
  );
};

export default Home;