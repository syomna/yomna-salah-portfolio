const CertRow = ({ label, sub, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 p-4 border rule-b bg-white no-underline transition-all duration-250 hover:bg-sage-light hover:border-sage"
  >
    <div className="w-[22px] h-[22px] shrink-0 bg-sage text-white flex items-center justify-center font-mono text-[11px]">
      ✓
    </div>
    <div>
      <p className="text-[13px] font-medium text-ink font-body leading-none">
        {label}
      </p>
      <p className="font-mono text-[10px] text-ink-low tracking-[0.04em] mt-[3px]">
        {sub}
      </p>
    </div>
  </a>
);

export default CertRow;
