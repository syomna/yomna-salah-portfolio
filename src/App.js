import { Box, ThemeProvider, CssBaseline, GlobalStyles } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import theme from "./utils/theme";
import { PAPER, SAGE, INK_LOW } from "./utils/tokens";

import Navbar      from "./components/Navbar";
import Home        from "./components/Home";
import About       from "./components/About";
import Experience  from "./components/Experience";
import Projects    from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer      from "./components/Footer";
import CustomCursor from "./components/common/CustomCursor";


// ─── GLOBAL STYLES ───────────────────────────────────────────────────────────
const globalStyles = {
  "*, *::before, *::after": { boxSizing: "border-box" },
  html: {
    scrollBehavior: "smooth",
    overflowX: "hidden",
    maxWidth: "100%",
  },
  body: {
    background: PAPER,
    overflowX: "hidden",
    maxWidth: "100%",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  },
  "::selection":               { background: SAGE, color: "#fff" },
  "::-webkit-scrollbar":       { width: "1px" },
  "::-webkit-scrollbar-thumb": { background: INK_LOW },
};

// ─── APP ─────────────────────────────────────────────────────────────────────
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      

      <Box sx={{ position: "relative", minHeight: "100vh", background: PAPER, overflowX: "hidden" }}>
        <Navbar />

        <AnimatePresence>
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Home />
            <About />
            <Experience />
            <Projects />
            <ContactForm />
          </motion.main>
        </AnimatePresence>

        <Footer />
        <CustomCursor />
      </Box>

      <ToastContainer position="bottom-right" autoClose={3000} theme="light" />
    </ThemeProvider>
  );
}

export default App;