import { motion } from "framer-motion";
import { reveal } from "../../utils/animations";
import ExpMeta    from "./ExpMeta";
import ExpBullets from "./ExpBullets";

const ExperienceRow = ({ exp, delay = 0 }) => (
  <motion.div
    {...reveal(delay)}
    className="grid grid-cols-1 md:grid-cols-[240px_1fr] border-t rule-b py-8 md:py-12 px-6 md:px-0 relative cursor-default group"
    style={{ transition: "background 0.25s" }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "#eef1ea";
      const bar = e.currentTarget.querySelector(".exp-bar");
      if (bar) bar.style.transform = "scaleY(1)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "transparent";
      const bar = e.currentTarget.querySelector(".exp-bar");
      if (bar) bar.style.transform = "scaleY(0)";
    }}
  >
    <div
      className="exp-bar absolute left-0 md:left-[-60px] top-0 w-[3px] h-full bg-sage origin-top"
      style={{ transition: "transform 0.4s ease" }}
    />
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
  </motion.div>
);

export default ExperienceRow;
