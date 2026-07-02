import { motion } from "framer-motion";
import { skillCategories, CERTS } from "../utils/constants";
import { reveal } from "../utils/animations";
import SectionLabel from "./common/SectionLabel";
import CertRow      from "./common/CertRow";
import AboutText    from "./about/AboutText";
import CodePane     from "./about/CodePane";
import SkillBlock   from "./about/SkillBlock";

const About = () => (
  <>
    <section
      id="about"
      className="px-6 md:px-[60px] pt-20 md:pt-[120px] pb-20 md:pb-[120px] border-b rule-b"
    >
      <SectionLabel number="01" title="About" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-[120px] items-start">
        <AboutText />

        <div className="flex flex-col gap-6">
          <motion.div {...reveal(0.12)}>
            <CodePane />
          </motion.div>
          {CERTS.map((c) => (
            <motion.div key={c.label} {...reveal(0.15)}>
              <CertRow {...c} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section
      id="skills"
      className="px-6 md:px-[60px] pt-20 md:pt-[120px] pb-20 md:pb-[120px] border-b rule-b bg-surface"
    >
      <SectionLabel number="02" title="Skills & Stack" />

      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12 md:gap-[100px] items-start">
        <motion.div {...reveal(0)}>
          <p className="font-body italic text-[17px] leading-[1.9] text-ink-mid m-0">
            Every tool chosen with intention.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-14 md:gap-x-20">
          {skillCategories.map((cat, i) => (
            <SkillBlock key={cat.title} category={cat} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
