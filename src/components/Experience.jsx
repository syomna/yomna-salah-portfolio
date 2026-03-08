import { Box } from "@mui/material";
import { experiences } from "../utils/constants";
import { RULE } from "../utils/tokens";
import SectionLabel  from "./common/SectionLabel";
import ExperienceRow from "./experience/ExperienceRow";

const Experience = () => (
  <Box
    id="experience"
    component="section"
    sx={{
      px: { xs: "24px", md: "60px" },
      pt: { xs: "80px", md: "120px" },
      pb: { xs: "80px", md: "120px" },
      borderBottom: `1px solid ${RULE}`,
    }}
  >
    <SectionLabel number="03" title="Experience" sx={{ mb: "64px" }} />

    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {experiences.map((exp, i) => (
        <ExperienceRow key={exp.company} exp={exp} delay={i * 0.1} />
      ))}
    </Box>
  </Box>
);

export default Experience;