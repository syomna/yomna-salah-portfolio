import { useEffect, useState, useCallback } from "react";
import { SAGE } from "../../utils/tokens";

const isInteractive = (el) => {
  if (!el) return false;
  let node = el;
  for (let i = 0; i < 4; i++) {
    if (!node || node === document.body) break;
    if (
      node.tagName === "A" ||
      node.tagName === "BUTTON" ||
      node.getAttribute("role") === "button"
    ) return true;
    node = node.parentElement;
  }
  return false;
};

const CustomCursor = () => {
  const [pos,  setPos]  = useState({ x: -100, y: -100 });
  const [big,  setBig]  = useState(false);
  const [show, setShow] = useState(false);

  const onMove = useCallback((e) => {
    setPos({ x: e.clientX, y: e.clientY });
    if (!show) setShow(true);
    // intentionally NOT checking interactivity here
  }, [show]);

  const onOver = useCallback((e) => {
    if (isInteractive(e.target)) setBig(true);
  }, []);

  const onOut = useCallback((e) => {
    if (isInteractive(e.target)) setBig(false);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover",  onOver);
    document.addEventListener("mouseout",   onOut);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover",  onOver);
      document.removeEventListener("mouseout",   onOut);
    };
  }, [onMove, onOver, onOut]);

  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
    return null;
  }

  return (
    <>
      <style>{`
        @media (hover: hover) {
          *, *::before, *::after, a, button { cursor: none !important; }
        }
      `}</style>

      {/* Outer ring */}
      <div style={{
        position: "fixed", zIndex: 9999, pointerEvents: "none",
        top: pos.y, left: pos.x,
        width: "36px", height: "36px",
        borderRadius: "50%",
        border: `1.5px solid ${SAGE}`,
        opacity: big ? 1 : 0,
        transform: `translate(-50%, -50%) scale(${big ? 1 : 0.4})`,
        transition: "transform 0.3s ease, opacity 0.3s ease",
      }} />

      {/* Inner dot */}
      <div style={{
        position: "fixed", zIndex: 9999, pointerEvents: "none",
        top: pos.y, left: pos.x,
        width: big ? "3px" : "7px",
        height: big ? "3px" : "7px",
        borderRadius: "50%",
        background: SAGE,
        opacity: show ? 1 : 0,
        transform: "translate(-50%, -50%)",
        transition: "width 0.25s ease, height 0.25s ease, opacity 0.3s ease",
      }} />
    </>
  );
};

export default CustomCursor;