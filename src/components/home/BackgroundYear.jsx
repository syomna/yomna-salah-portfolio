const BackgroundYear = ({ year = new Date().getFullYear() }) => (
  <span
    aria-hidden
    className="absolute font-heading text-[180px] md:text-[420px] font-bold text-transparent pointer-events-none select-none leading-none tracking-[-0.04em] z-0 right-[-20px] md:right-[-3vw] bottom-[-20px] md:bottom-[-2vw]"
    style={{
      WebkitTextStroke: "1px rgba(24,22,18,0.04)",
    }}
  >
    {year}
  </span>
);

export default BackgroundYear;
