import React from "react";
import { Box, Typography, Stack, useTheme, IconButton, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import { Launch } from "@mui/icons-material"; // Professional icons
import { experiences } from "../utils/constants";


const Experience = () => {
  const theme = useTheme();

  return (
    <Box id="experience" sx={{ py: 4 }}>
      <Typography variant="h3" sx={{ mb: 8, fontWeight: 800, fontFamily: "'Courier Prime', monospace" }}>
        03. Experience
      </Typography>

      <Box sx={{ position: "relative", ml: { xs: 2, md: 4 } }}>
        <Box
          component={motion.div}
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5 }}
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "2px",
            background: `linear-gradient(to bottom, ${theme.palette.primary.main}, transparent)`,
          }}
        />

        {experiences.map((exp, index) => (
          <Box
            key={index}
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            sx={{ mb: 10, pl: 4, position: "relative" }}
          >
            <Box
              sx={{
                position: "absolute",
                left: "-6px",
                top: "8px",
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                background: theme.palette.background.default,
                border: `3px solid ${theme.palette.primary.main}`,
              }}
            />

            <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2 }}>
              <Box>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: "text.primary" }}>
                    {exp.role}
                  </Typography>
                  
                  {/* The New Link Button */}
                  <Tooltip title={`Visit ${exp.company}`}>
                    <IconButton 
                      href={exp.link} 
                      target="_blank" 
                      size="small" 
                      sx={{ color: "primary.main", p: 0 }}
                    >
                      <Launch sx={{ fontSize: "1.2rem" }} />
                    </IconButton>
                  </Tooltip>
                </Stack>

                <Typography variant="subtitle1" sx={{ color: "primary.main", fontWeight: 600 }}>
                  {exp.company}
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 600, mt: { xs: 1, md: 1 } }}>
                {exp.period.toUpperCase()} | {exp.location.toUpperCase()}
              </Typography>
            </Stack>

            <Box component="ul" sx={{ pl: 2, color: "text.secondary" }}>
              {exp.description.map((bullet, i) => (
                <Typography key={i} component="li" variant="body2" sx={{ mb: 1.5, lineHeight: 1.6 }}>
                  {bullet}
                </Typography>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;