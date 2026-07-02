const ExpMeta = ({ period, location, company, link }) => (
  <div className="pr-0 md:pr-10 mb-4 md:mb-0 flex flex-col justify-between border-r-0 md:border-r rule-b">
    <div>
      <p className="font-mono text-[11px] text-sage leading-[1.9] tracking-[0.03em] m-0">
        {period}
      </p>
      <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink-low mt-1 m-0">
        {location}
      </p>
    </div>

    {link ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-block w-fit font-mono text-[10px] tracking-[0.14em] uppercase text-ink no-underline border-b border-ink pb-[2px]"
        style={{ transition: "color 0.2s, border-color 0.2s" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#6b7c5e";
          e.currentTarget.style.borderColor = "#6b7c5e";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#181612";
          e.currentTarget.style.borderColor = "#181612";
        }}
      >
        {company}
        <span className="ml-1 opacity-50">↗</span>
      </a>
    ) : (
      <span className="mt-5 inline-block w-fit font-mono text-[10px] tracking-[0.14em] uppercase text-ink border-b border-ink pb-[2px]">
        {company}
      </span>
    )}
  </div>
);

export default ExpMeta;
