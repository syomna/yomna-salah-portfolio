import { experiences } from "../utils/constants";
import SectionLabel  from "./common/SectionLabel";
import ExperienceRow from "./experience/ExperienceRow";

const Experience = () => (
  <section
    id="experience"
    className="px-6 md:px-[60px] pt-20 md:pt-[120px] pb-20 md:pb-[120px] border-b rule-b"
  >
    <SectionLabel number="03" title="Experience" />

    <div className="flex flex-col">
      {experiences.map((exp, i) => (
        <ExperienceRow key={exp.company} exp={exp} delay={i * 0.1} />
      ))}
    </div>
  </section>
);

export default Experience;
