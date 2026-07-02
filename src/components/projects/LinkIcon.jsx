const LinkIcon = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={label}
    className="flex items-center gap-[6px] text-ink-low no-underline font-mono text-[9px] tracking-[0.1em] uppercase"
    style={{ transition: "color 0.2s" }}
    onMouseEnter={(e) => e.currentTarget.style.color = "#181612"}
    onMouseLeave={(e) => e.currentTarget.style.color = "#9a9088"}
  >
    {icon}
    <span className="hidden sm:inline">{label}</span>
  </a>
);

export default LinkIcon;
