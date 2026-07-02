const MonoLabel = ({ children, className = "" }) => (
  <span className={`font-mono text-[10px] tracking-[0.2em] uppercase text-ink-low ${className}`}>
    {children}
  </span>
);

export default MonoLabel;
