import { motion } from "framer-motion";
import cv from "../assets/resume/Yomna_Salah_Flutter_Mobile_Developer_CV.pdf";

import { fadeUp } from "../utils/animations";

import MonoLabel from "./common/MonoLabel";
import StatCell from "./common/StatCell";
import BackgroundYear from "./home/BackgroundYear";
import CtaCell from "./home/CtaCell";
import NameDisplay from "./home/NameDisplay";

const STATS = [
  { number: "4+", label: "Years building" },
  { number: "15+", label: "Projects Delivered" },
  { number: "Production Apps", label: "Android & iOS" },
];

const scrollToContact = () => {
  const el = document.getElementById("contact");
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const downloadCV = () => {
  const link = document.createElement("a");
  link.download = "Yomna_Salah_Flutter_Mobile_Developer_CV.pdf";
  link.href = cv;
  link.click();
};

const Home = () => (
  <section
    id="home"
    className="min-h-screen flex flex-col justify-between px-3 md:px-[60px] border-b rule-b relative overflow-hidden"
  >
    <BackgroundYear />

    <motion.div
      {...fadeUp(0.1)}
      className="flex justify-between items-start pt-[100px] relative z-[1]"
    >
      <MonoLabel>Giza · Egypt</MonoLabel>
      <MonoLabel>Portfolio — 2026</MonoLabel>
    </motion.div>

    <div className="pt-10 relative z-[1]">
      <motion.div {...fadeUp(0.2)}>
        <NameDisplay />
      </motion.div>

      <motion.div {...fadeUp(0.45)} className="mt-9 flex items-center gap-6">
        <div className="w-12 h-px rule-b shrink-0" />
        <p className="font-body text-[15px] italic text-ink-mid tracking-[0.01em] m-0">
          Flutter Mobile Developer · crafting production-ready apps from idea to
          App Store.
        </p>
      </motion.div>
    </div>

    <motion.div
      {...fadeUp(0.6)}
      className="grid grid-cols-2 md:grid-cols-4 border-t rule-b mt-10 relative z-[1]"
    >
      {STATS.map((s) => (
        <StatCell key={s.label} number={s.number} label={s.label} />
      ))}
      <CtaCell onContact={scrollToContact} onDownload={downloadCV} />
    </motion.div>
  </section>
);

export default Home;
