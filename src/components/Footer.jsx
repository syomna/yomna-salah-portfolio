const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="px-3 md:px-[60px] py-6 border-t rule-b flex items-center justify-between flex-wrap gap-2 bg-dark-bg">
      <p className="font-mono text-[10px] text-white/25 tracking-[0.08em] m-0">
        © {year}{" "}
        <em className="not-italic text-sage">Yomna Salah</em>
      </p>

      <p className="font-mono text-[10px] text-white/25 tracking-[0.08em] m-0">
        Built with{" "}
        <em className="not-italic text-sage">
          React · Tailwind · Framer Motion
        </em>
      </p>
    </footer>
  );
};

export default Footer;
