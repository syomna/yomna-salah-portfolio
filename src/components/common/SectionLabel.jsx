const SectionLabel = ({ number, title, className = "" }) => (
  <div className={`flex items-center gap-5 mb-16 ${className}`}>
    <span className="font-mono text-[10px] text-ink-low tracking-[0.16em] shrink-0">
      {number}
    </span>
    <div className="flex-1 h-px rule-b" />
    <span className="font-mono text-[10px] text-ink-low tracking-[0.2em] uppercase shrink-0">
      {title}
    </span>
  </div>
);

export default SectionLabel;
