import { motion } from "framer-motion";

const CtaCell = ({ onContact, onDownload }) => (
  <div className="py-7 pl-0 md:pl-8 border-l-0 md:border-l rule-b border-t md:border-t-0 rule-b col-span-full md:col-auto flex flex-col justify-center gap-3">
    <motion.div
      role="button"
      whileHover={{ x: 4 }}
      transition={{ duration: 0.15 }}
      onClick={onContact}
      className="inline-flex items-center gap-3 bg-ink text-paper font-mono text-[10px] tracking-[0.14em] uppercase px-[22px] py-[13px] cursor-pointer w-fit select-none"
      style={{ transition: "background 0.25s" }}
      onMouseEnter={(e) => e.currentTarget.style.background = "#6b7c5e"}
      onMouseLeave={(e) => e.currentTarget.style.background = "#181612"}
    >
      Get in touch →
    </motion.div>

    <motion.div
      role="button"
      whileHover={{ x: 2 }}
      transition={{ duration: 0.15 }}
      onClick={onDownload}
      className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-low border-b rule-b pb-[3px] w-fit cursor-pointer select-none"
      style={{ transition: "color 0.2s, border-color 0.2s" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#181612";
        e.currentTarget.style.borderColor = "#181612";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#9a9088";
        e.currentTarget.style.borderColor = "rgba(24,22,18,0.10)";
      }}
    >
      ↓ Download CV
    </motion.div>
  </div>
);

export default CtaCell;
