import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NAV_ITEMS = ["About", "Skills", "Experience", "Projects", "Contact"];

const Navbar = () => {
  const [raised, setRaised] = useState(false);

  useEffect(() => {
    const onScroll = () => setRaised(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (label) => {
    const idMap = {
      About: "about",
      Skills: "skills",
      Experience: "experience",
      Projects: "projects",
      Contact: "contact",
    };
    const el = document.getElementById(idMap[label]);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: raised ? "rgba(248,246,241,0.96)" : "rgba(248,246,241,0)",
        backdropFilter: raised ? "blur(20px)" : "none",
        borderBottom: `1px solid ${raised ? "rgba(24,22,18,0.10)" : "transparent"}`,
        transition: "background 0.4s ease, border-color 0.4s ease",
        pointerEvents: "none",
      }}
    >
      <div
        className="flex items-center justify-between h-[60px] px-3 md:px-[60px]"
        style={{ pointerEvents: "auto" }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-heading text-[15px] font-medium italic tracking-[0.03em] text-ink bg-none border-none cursor-pointer select-none p-0"
          style={{ transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.target.style.color = "#6b7c5e")}
          onMouseLeave={(e) => (e.target.style.color = "#181612")}
        >
          Yomna Salah
        </button>

        <nav className="hidden md:flex gap-9 items-center">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
              className="font-mono text-[10px] font-light tracking-[0.14em] uppercase text-ink-low bg-none border-none p-0 cursor-pointer"
              style={{ transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.target.style.color = "#181612")}
              onMouseLeave={(e) => (e.target.style.color = "#9a9088")}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(107,124,94,0.5)",
                "0 0 0 7px rgba(107,124,94,0)",
                "0 0 0 0 rgba(107,124,94,0)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[5px] h-[5px] rounded-full bg-green-500 shrink-0"
          />
          <span className="font-mono text-[10px] font-light tracking-[0.14em] uppercase text-sage">
            Available for work
          </span>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <div className="w-[6px] h-[6px] rounded-full bg-sage" />
          <span className="font-mono text-[10px] text-sage tracking-[0.1em] uppercase">
            Open to work
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
