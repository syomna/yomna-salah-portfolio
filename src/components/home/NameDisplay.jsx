import { motion } from "framer-motion";

const NameDisplay = () => (
  <>
    <h1 className="font-heading text-[17vw] sm:text-[14vw] md:text-[13vw] lg:text-[190px] font-semibold leading-[0.88] tracking-[-0.025em] text-ink m-0">
      Yomna
    </h1>

    <div className="relative w-fit">
      <h1 className="font-heading text-[17vw] sm:text-[14vw] md:text-[13vw] lg:text-[190px] font-semibold leading-[0.88] tracking-[-0.025em] italic text-sage relative z-[1] m-0">
        Salah.
      </h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.85 }}
        className="absolute bottom-[6px] md:bottom-[10px] left-0 w-full h-[8px] md:h-[18px] bg-sage opacity-[0.18] origin-left z-0"
      />
    </div>
  </>
);

export default NameDisplay;
