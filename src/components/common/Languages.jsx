const Languages = () => (
  <div className="border rule-b bg-white p-4">
    <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-sage mb-3">
      Languages
    </p>

    <div className="flex flex-col gap-2">
      {[
        { lang: "Arabic", level: "Native" },
        { lang: "English", level: "Professional proficiency" },
      ].map((l) => (
        <div
          key={l.lang}
          className="flex items-baseline justify-between gap-4"
        >
          <span className="font-body text-[13px] text-ink">{l.lang}</span>
          <span className="font-mono text-[10px] text-ink-low tracking-[0.06em]">
            {l.level}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default Languages;
