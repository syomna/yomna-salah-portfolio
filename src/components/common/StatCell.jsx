const StatCell = ({ number, label, fontSize = {} }) => {
  const numSize = number === "Production Apps"
    ? "text-[16px] md:text-[32px]"
    : "text-[36px] md:text-[52px]";

  return (
    <div className="py-7 px-6 md:px-8 border-r rule-b">
      <p className={`font-heading ${numSize} font-medium text-ink leading-none tracking-[-0.02em]`}>
        {number}
      </p>
      <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-low mt-2.5">
        {label}
      </p>
    </div>
  );
};

export default StatCell;
