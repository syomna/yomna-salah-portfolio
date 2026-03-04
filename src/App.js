import { useMemo } from "react";
import { 
  Box, 
  createTheme, 
  ThemeProvider, 
  CssBaseline, 
  GlobalStyles 
} from "@mui/material";
import { create } from "zustand";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Component Imports
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

// --- THEME STORE (Zustand) ---
const useThemeStore = create((set) => ({
  mode: "light",
  toggleMode: () => set((state) => ({ mode: state.mode === "light" ? "dark" : "light" })),
}));

function App() {
  const { mode, toggleMode } = useThemeStore();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "dark" ? "#BB86FC" : "#6200EE",
          },
          secondary: {
            main: "#03DAC6",
          },
          background: {
            default: mode === "dark" ? "#030303" : "#F8F9FA",
            paper: mode === "dark" ? "#121212" : "#FFFFFF",
          },
          text: {
            primary: mode === "dark" ? "#E0E0E0" : "#202124",
            secondary: mode === "dark" ? "#A0A0A0" : "#5F6368",
          },
        },
        typography: {
          fontFamily: "'Inter', sans-serif",
          h1: { fontWeight: 800, letterSpacing: "-0.02em" },
          h2: { fontWeight: 700, letterSpacing: "-0.01em" },
          button: { textTransform: "none", fontWeight: 600 },
        },
        shape: {
          borderRadius: 16,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { 
            transition: "background-color 0.4s ease, color 0.4s ease",
            overflowX: "hidden" 
          },
          "::-webkit-scrollbar": { width: "8px" },
          "::-webkit-scrollbar-thumb": { 
            backgroundColor: mode === "dark" ? "#333" : "#ccc", 
            borderRadius: "10px" 
          },
        }}
      />

      <Box sx={{ position: "relative", minHeight: "100vh" }}>
        
        {/* --- BACKGROUND LAYER --- */}
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            background: mode === "dark" 
              ? "radial-gradient(circle at 50% -20%, #1a1a2e 0%, #030303 80%)"
              : "radial-gradient(circle at 50% -20%, #f0f0ff 0%, #f8f9fa 80%)",
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute", top: "10%", left: "15%", width: "40vw", height: "40vw",
              background: "radial-gradient(circle, rgba(187, 134, 252, 0.15) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </Box>

        {/* --- CONTENT LAYER --- */}
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Navbar toggleMode={toggleMode} mode={mode} />
          
          <Box
            component="main"
            sx={{
              maxWidth: "1200px",
              margin: "0 auto",
              pt: { xs: 8, md: 10 }, // Reduced top padding
              px: { xs: 3, md: 6 },
              display: "flex",
              flexDirection: "column",
              gap: { xs: 8, md: 10 }, // Reduced from 25 to 10 for better flow
            }}
          >
            <AnimatePresence>
              {/* Wrapping each section in motion.section for consistent entry animations */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <Home />
              </motion.div>

              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <About />
              </motion.div>

              <Experience />
              <Projects />
              <ContactForm />
            </AnimatePresence>
          </Box>
          
          <Footer />
        </Box>
      </Box>

      {/* ToastContainer sits outside the main flow */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme={mode === "dark" ? "dark" : "light"}
      />
    </ThemeProvider>
  );
}

export default App;