import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { SAGE, SAGE_L, RULE } from "../../utils/tokens";
import { reveal } from "../../utils/animations";
import ExpMeta    from "./ExpMeta";
import ExpBullets from "./ExpBullets";

const ExperienceRow = ({ exp, delay = 0 }) => (
  <Box
    component={motion.div}
    {...reveal(delay)}
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "240px 1fr" },
      borderTop: `1px solid ${RULE}`,
      py: { xs: "32px", md: "48px" },
      px: { xs: "24px", md: 0 },
      position: "relative",
      cursor: "default",
      transition: "background 0.25s",
      "&:last-child": { borderBottom: `1px solid ${RULE}` },
      "&:hover": { background: SAGE_L },
      "&::before": {
        content: '""',
        position: "absolute",
        left: { xs: 0, md: "-60px" },
        top: 0, width: "3px", height: "100%",
        background: SAGE,
        transform: "scaleY(0)",
        transformOrigin: "top",
        transition: "transform 0.4s ease",
      },
      "&:hover::before": { transform: "scaleY(1)" },
    }}
  >
    <ExpMeta
      period={exp.period}
      location={exp.location}
      company={exp.company}
      link={exp.link}
    />
    <ExpBullets
      role={exp.role}
      description={exp.description}
    />
  </Box>
);

export default ExperienceRow;