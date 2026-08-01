import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MobileProjects, WebProjects } from "../utils/constants";
import SectionLabel from "./common/SectionLabel";
import ProjectCard from "./projects/ProjectCard";

const Projects = () => {
  const [tab, setTab] = useState(0);
  const projects = tab === 0 ? MobileProjects : WebProjects;

  return (
    <section
      id="projects"
      className="px-6 md:px-[60px] pt-20 md:pt-[120px] pb-20 md:pb-[120px] border-b rule-b bg-surface"
    >
      <SectionLabel
        number="04"
        title={`Selected ${tab === 0 ? "Mobile" : "Web"} Applications`}
      />

      <div className="flex border-b rule-b mb-16">
        {["Mobile", "Web"].map((label, i) => (
          <div
            key={label}
            onClick={() => setTab(i)}
            className="font-mono text-[10px] tracking-[0.16em] uppercase cursor-pointer pb-4 mr-9 relative"
            style={{
              color: tab === i ? "#181612" : "#9a9088",
              transition: "color 0.2s",
            }}
          >
            {label}
            <div
              className="absolute bottom-[-1px] left-0 right-0 h-px bg-ink"
              style={{
                transform: tab === i ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.3s ease",
              }}
            />
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-col gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              tabLabel={tab === 0 ? "Mobile App" : "Web Platform"}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Projects;
