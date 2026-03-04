import React, { useState } from "react";
import { 
  Box, Typography, Grid, CardMedia, 
  Chip, IconButton, Stack, useTheme, Tabs, Tab 
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { GitHub, Apple, Android, Launch } from "@mui/icons-material";
import { MobileProjects, WebProjects } from "../utils/constants";

const Projects = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const currentProjects = tabValue === 0 ? MobileProjects : WebProjects;

  return (
    <Box id="projects" sx={{ py: 0 }}>
      
      <Stack 
        direction={{ xs: "column", md: "row" }} 
        justifyContent="space-between" 
        alignItems={{ xs: "flex-start", md: "flex-end" }} 
        sx={{ mb: 4, gap: 2 }} 
      >
        <Box>
          <Typography variant="h3" sx={{ fontWeight: 800, fontFamily: "'Courier Prime', monospace" }}>
            04. Selected Work
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mt: 1 }}>
            Engineered high-performance solutions across cross-platform and native mobile ecosystems.
          </Typography>
        </Box>

        <Tabs 
          value={tabValue} 
          onChange={handleTabChange}
          sx={{
            '& .MuiTabs-indicator': { height: 3 },
            '& .MuiTab-root': { fontWeight: 700, fontFamily: "'Courier Prime', monospace" }
          }}
        >
          <Tab label="Mobile" />
          <Tab label="Web" />
        </Tabs>
      </Stack>

      {/* Projects Grid - Reduced spacing from 12 to 6 */}
      <Grid container spacing={6}>
        <AnimatePresence mode="wait">
          {currentProjects.map((project, index) => (
            <Grid 
              item 
              xs={12} 
              key={`${tabValue}-${project.title}`}
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Grid 
                container 
                spacing={4} // Reduced internal spacing from 6 to 4
                alignItems="center" 
                direction={index % 2 === 0 ? "row" : "row-reverse"}
              >
                {/* Image Side */}
                <Grid item xs={12} md={7}>
                  <Box
                    sx={{
                      borderRadius: 4,
                      overflow: "hidden",
                      border: `1px solid ${theme.palette.divider}`,
                      boxShadow: theme.palette.mode === 'dark' 
                        ? "0 20px 40px -12px rgba(0,0,0,0.5)" 
                        : "0 20px 40px -12px rgba(0,0,0,0.1)",
                      background: theme.palette.background.paper,
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={project.img}
                      alt={project.title}
                      sx={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "450px", // Slightly reduced max height
                        objectFit: "contain", 
                        display: "block",
                        p: 1 
                      }}
                    />
                  </Box>
                </Grid>

                {/* Info Side */}
                <Grid item xs={12} md={5}>
                  <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 2 }}>
                    {tabValue === 0 ? "Mobile App" : "Web Platform"}
                  </Typography>
                  <Typography variant="h3" sx={{ mb: 2, fontWeight: 700, mt: 1, fontSize: { xs: "1.8rem", md: "2.2rem" } }}>
                    {project.title}
                  </Typography>
                  
                  <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.6, mb: 3, fontSize: "1rem" }}>
                    {project.subTitle}
                  </Typography>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                    {project.tech.map((skill) => (
                      <Chip 
                        key={skill} 
                        label={skill} 
                        size="small"
                        variant="outlined"
                        sx={{ 
                          borderRadius: 1, 
                          fontFamily: "'Courier Prime', monospace",
                          fontSize: "0.7rem",
                        }} 
                      />
                    ))}
                  </Box>

                  <Stack direction="row" spacing={1}>
                    {project.github && <IconButton href={project.github} target="_blank" color="inherit"><GitHub /></IconButton>}
                    {project.appStore && <IconButton href={project.appStore} target="_blank" color="inherit"><Apple /></IconButton>}
                    {project.playStore && <IconButton href={project.playStore} target="_blank" color="inherit"><Android /></IconButton>}
                    {project.demo && <IconButton href={project.demo} target="_blank" color="inherit"><Launch /></IconButton>}
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </AnimatePresence>
      </Grid>
    </Box>
  );
};

export default Projects;