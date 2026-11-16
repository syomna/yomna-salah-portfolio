import { motion } from "framer-motion";
import { reveal } from "../utils/animations";
import SectionLabel from "./common/SectionLabel";

const Education = () => (
  <section
    id="education"
    className="px-6 md:px-[60px] pt-20 md:pt-[120px] pb-20 md:pb-[120px] border-b rule-b"
  >
    <SectionLabel number="05" title="Education" />

    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] border-t rule-b">
      <div className="py-8 md:py-10 pr-0 md:pr-10 border-r-0 md:border-r rule-b">
        <p className="font-mono text-[11px] text-sage leading-[1.9] tracking-[0.03em] m-0">
          Sep 2015 — Jul 2019
        </p>
        <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink-low mt-1 m-0">
          Giza, Egypt
        </p>
      </div>

      <motion.div {...reveal(0)} className="md:pl-11 py-8 md:py-10">
        <h3 className="font-heading text-[20px] md:text-[26px] font-medium text-ink tracking-[-0.015em] leading-[1.2] mb-3 m-0">
          Bachelor of Commerce — Accounting &amp; Finance
        </h3>
        <p className="font-body text-[14px] text-ink-mid m-0">Cairo University</p>
      </motion.div>
    </div>
  </section>
);

export default Education;
