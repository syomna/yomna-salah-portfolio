import { motion } from "framer-motion";
import { reveal } from "../../utils/animations";

const SkillBlock = ({ category, delay = 0 }) => (
  <motion.div {...reveal(delay)}>
    <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-sage mb-5 pb-3.5 border-b rule-b m-0">
      {category.title}
    </p>

    <div className="flex flex-wrap gap-[10px]">
      {category.skills.map((skill) => (
        <span
          key={skill}
          className="font-mono text-[10px] px-[14px] py-[6px] border rule-b text-ink-low tracking-[0.04em] cursor-default"
          style={{ transition: "all 0.2s" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#181612";
            e.currentTarget.style.color = "#f8f6f1";
            e.currentTarget.style.borderColor = "#181612";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#9a9088";
            e.currentTarget.style.borderColor = "rgba(24,22,18,0.10)";
          }}
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export default SkillBlock;
