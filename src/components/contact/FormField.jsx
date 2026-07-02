const FormField = ({ label, name, type = "text", value, onChange, placeholder, multiline, borderRight }) => {
  const Tag = multiline ? "textarea" : "input";

  return (
    <div
      className="relative"
      style={{
        borderRight: borderRight ? "1px solid rgba(24,22,18,0.10)" : "none",
        transition: "background 0.2s",
      }}
      onFocus={() => {}}
    >
      <label
        htmlFor={name}
        className="block font-mono text-[9px] tracking-[0.18em] uppercase text-ink-low pt-[14px] px-[18px]"
      >
        {label}
      </label>
      <Tag
        id={name}
        name={name}
        type={multiline ? undefined : type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={multiline ? 4 : undefined}
        className="block w-full bg-transparent border-none outline-none font-body text-[14px] text-ink px-[18px] pb-[14px] resize-none italic placeholder:text-ink-low placeholder:italic"
      />
    </div>
  );
};

export default FormField;
