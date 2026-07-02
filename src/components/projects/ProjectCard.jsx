import { Github, Apple, Smartphone, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import LinkIcon from "./LinkIcon";

const ProjectCard = ({ project, index, tabLabel }) => {
  const flip = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.07 }}
      className="grid grid-cols-1 md:grid-cols-2 border-t rule-b last:border-b rule-b cursor-default group"
      style={{ transition: "background 0.25s" }}
      onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.6)"}
      onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
    >
      <div
        className="overflow-hidden bg-sage-light border-r-0 md:border-r rule-b border-b md:border-b-0 rule-b relative"
        style={{ order: flip ? 1 : 0, aspectRatio: "16 / 7" }}
      >
        {project.img ? (
          <img
            src={project.img}
            alt={project.title}
            className="absolute w-full h-full block"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-30">
            <span className="text-[32px]">
              {tabLabel === "Mobile App" ? "📱" : "🌐"}
            </span>
            <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-ink-low">
              Coming soon
            </span>
          </div>
        )}

        <div className="absolute top-3 left-3 font-mono text-[10px] font-medium bg-ink text-paper px-2 py-[3px] tracking-[0.04em] z-[1]">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      <div
        className="flex flex-col p-[18px_24px] md:p-[6px_24px]"
        style={{ order: flip ? 0 : 1 }}
      >
        <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-low mb-2.5">
          {tabLabel}
        </span>

        <h3 className="font-heading text-[20px] md:text-[24px] font-medium text-ink tracking-[-0.02em] leading-[1.15] mb-3 m-0">
          {project.title}
        </h3>

        <p className="font-body text-[13px] leading-[1.8] text-ink-mid mb-5 max-w-[64ch] m-0">
          {project.subTitle}
        </p>

        <div className="flex flex-wrap gap-[6px] mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[9px] px-[9px] py-[3px] border rule-b text-ink-low tracking-[0.04em]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 items-center border-t rule-b pt-4 mt-auto">
          {project.github    && <LinkIcon href={project.github}    icon={<Github size={14} />}       label="GitHub" />}
          {project.appStore  && <LinkIcon href={project.appStore}  icon={<Apple size={14} />}        label="App Store" />}
          {project.playStore && <LinkIcon href={project.playStore} icon={<Smartphone size={14} />}   label="Play Store" />}
          {project.demo      && <LinkIcon href={project.demo}      icon={<ExternalLink size={14} />} label="Live demo" />}

          <span className="ml-auto text-[14px] text-ink-low group-hover:text-ink" style={{ transition: "all 0.2s" }}>
            ↗
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
