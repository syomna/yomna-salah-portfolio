import { motion } from "framer-motion";
import { reveal } from "../../utils/animations";

const AboutText = () => (
  <div>
    <motion.div {...reveal(0)}>
      <h2 className="font-heading text-[36px] md:text-[52px] font-medium tracking-[-0.02em] leading-[1.05] text-ink mb-10 m-0">
        I build apps
        <br />
        that <em className="italic text-sage">last.</em>
      </h2>
    </motion.div>

    <motion.div {...reveal(0.1)}>
      <p className="font-body text-[16px] leading-[2.05] text-ink-mid mb-[22px] m-0">
        I'm <strong className="text-ink font-medium">Yomna Salah</strong> — a
        Flutter Mobile Developer focused on building production-ready mobile and
        web applications. I’ve worked on freelance and startup projects
        involving payments, notifications, real-time updates, maps, and AI
        integrations using Flutter, and Firebase. I also build lightweight internal dashboards and admin tools using React when projects require them.
      </p>
    </motion.div>

    <motion.div {...reveal(0.18)}>
      <p className="font-body text-[16px] leading-[2.05] text-ink-mid mb-9 m-0">
        My experience includes mobile and web app deployment, Firebase services,
        CI/CD workflows, and maintaining production applications for Android,
        iOS, and the web. I enjoy building clean, reliable products and
        collaborating closely with teams and clients.
      </p>
    </motion.div>

    <motion.div
      {...reveal(0.25)}
      className="border-y rule-b py-[22px] flex gap-5 items-baseline"
    >
      <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-sage shrink-0">
        Now →
      </span>

      <p className="font-body italic text-[15px] text-ink-mid leading-[1.6] m-0">
        Building{" "}
        <strong className="not-italic text-ink font-medium">
          scalable Flutter apps{" "}
        </strong>
        for{" "}
        <strong className="not-italic text-ink font-medium">
          Android & iOS
        </strong>
        .
      </p>
    </motion.div>
  </div>
);

export default AboutText;
