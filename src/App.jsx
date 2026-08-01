import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import CustomCursor from "./components/common/CustomCursor";

function App() {
  return (
    <div className="relative min-h-screen bg-paper overflow-x-hidden">
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

      <ToastContainer position="bottom-right" autoClose={3000} theme="light" />
    </div>
  );
}

export default App;
