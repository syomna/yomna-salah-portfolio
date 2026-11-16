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
        Flutter Mobile Developer with extensive experience delivering scalable,
        production-ready mobile applications for clients worldwide. I specialize
        in Clean Architecture, Firebase, AI integrations, and REST APIs, and I
        ship high-performance apps to the App Store and Google Play.
      </p>
    </motion.div>

    <motion.div {...reveal(0.18)}>
      <p className="font-body text-[16px] leading-[2.05] text-ink-mid mb-9 m-0">
        I've handled full project lifecycles — from requirement analysis and
        architecture through UI implementation, API integration, and production
        store deployment — shipping 15+ production applications across the US,
        UAE, France, and South Africa.
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
          production Flutter platforms{" "}
        </strong>
        for{" "}
        <strong className="not-italic text-ink font-medium">
          Android &amp; iOS
        </strong>
        &amp; Flutter Web — currently leading the technical roadmap at Stone
        Street Syndicate.
      </p>
    </motion.div>
  </div>
);

export default AboutText;
