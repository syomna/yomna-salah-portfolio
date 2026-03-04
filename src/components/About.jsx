import { Box, Typography, Grid, Chip, Stack, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { 
  VerifiedRounded,
  AutoAwesomeRounded
} from "@mui/icons-material";

import { skillCategories } from "../utils/constants";
import { SkillCard  } from "./SkillCard";

const AboutAndSkills = () => {
  return (
    <Box id="about" sx={{ py: 4 }}>
      <Grid container spacing={8}>
        {/* --- LEFT SIDE: ABOUT & LEARNING --- */}
        <Grid item xs={12} md={5}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 800, fontFamily: "'Courier Prime', monospace" }}>
              01. About
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}>
      I am a <strong>Mobile Specialist</strong> with over 3 years of experience crafting high-performance, 
      user-centric applications. I specialize in architecting scalable solutions from the ground up, 
      with a deep focus on <strong>Clean Architecture</strong> and seamless user experiences.
    </Typography>
    
    <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8, mb: 4 }}>
      I thrive on owning the full product lifecycle—from initial system design to automated 
      CI/CD pipelines and store deployment. Having maintained production apps for 
      <strong> 10K+ active users</strong>
    </Typography>

            <Divider sx={{ mb: 4, opacity: 0.5 }} />
            
            <Stack spacing={3}>
              <Box>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
                  <AutoAwesomeRounded fontSize="small" color="primary" />
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>
                    Current Focus
                  </Typography>
                </Stack>
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                  Currently deepening my native capabilities by mastering <strong>SwiftUI</strong> to build 
                  high-performance, platform-specific iOS features.
                </Typography>
              </Box>

              <Box>
  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
    <VerifiedRounded fontSize="small" color="primary" />
    <Typography variant="subtitle2" sx={{ fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>
      Professional Certifications
    </Typography>
  </Stack>
  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
    {/* Meta iOS UI Development Specialization */}
    <Chip 
      label="Meta iOS UI Development" 
      size="small" 
      variant="outlined" 
      clickable
      component="a"
      href="https://coursera.org/verify/specialization/QNVYNKVZNBWA"
      target="_blank"
      rel="noopener noreferrer"
      sx={{ 
        borderRadius: 1, 
        fontWeight: 500,
        '&:hover': { backgroundColor: 'rgba(187, 134, 252, 0.08)' } 
      }} 
    />
    {/* Meta Front-End Developer Professional Certificate */}
    <Chip 
      label="Meta Front-End Developer" 
      size="small" 
      variant="outlined" 
      clickable
      component="a"
      href="https://coursera.org/verify/professional-cert/KCBQGDKJR9X5"
      target="_blank"
      rel="noopener noreferrer"
      sx={{ 
        borderRadius: 1, 
        fontWeight: 500,
        '&:hover': { backgroundColor: 'rgba(187, 134, 252, 0.08)' } 
      }} 
    />
  </Box>
</Box>
            </Stack>
          </motion.div>
        </Grid>

        {/* --- RIGHT SIDE: SKILLS GRID --- */}
        <Grid item xs={12} md={7}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography variant="h3" sx={{ mb: 4, fontWeight: 800, fontFamily: "'Courier Prime', monospace" }}>
              02. Expertise
            </Typography>
            
            <Grid container spacing={3}>
              {skillCategories.map((category, index) => (
                <SkillCard category={category} index={index}/>
              ))}
            </Grid>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutAndSkills;