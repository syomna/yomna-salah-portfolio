import { useState } from "react";
import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { MobileProjects, WebProjects } from "../utils/constants";
import ProjectCard from "./projects/ProjectCard";
import { INK, INK_LOW, SURFACE, RULE } from "../utils/tokens";
import SectionLabel from "./common/SectionLabel";

const Projects = () => {
  const [tab, setTab] = useState(0);
  const projects = tab === 0 ? MobileProjects : WebProjects;

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        px: { xs: "24px", md: "60px" },
        pt: { xs: "80px", md: "120px" },
        pb: { xs: "80px", md: "120px" },
        background: SURFACE,
        borderBottom: `1px solid ${RULE}`,
      }}
    >
      <SectionLabel number="04" title="Selected Work" sx={{ mb: "56px" }} />

      {/* Tabs */}
      <Box sx={{ display: "flex", borderBottom: `1px solid ${RULE}`, mb: "64px" }}>
        {["Mobile", "Web"].map((label, i) => (
          <Box
            key={label}
            onClick={() => setTab(i)}
            sx={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "10px", letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: tab === i ? INK : INK_LOW,
              cursor: "pointer",
              pb: "16px", mr: "36px",
              position: "relative",
              transition: "color 0.2s",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-1px", left: 0, right: 0,
                height: "1px", background: INK,
                transform: tab === i ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.3s ease",
              },
            }}
          >
            {label}
          </Box>
        ))}
      </Box>

      {/* Project list */}
      <AnimatePresence mode="wait">
        <Box
          key={tab}
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          sx={{ display: "flex", flexDirection: "column", gap: "32px" }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              tabLabel={tab === 0 ? "Mobile App" : "Web Platform"}
            />
          ))}
        </Box>
      </AnimatePresence>
    </Box>
  );
};

export default Projects;