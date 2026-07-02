import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar      from "./components/Navbar";
import Home        from "./components/Home";
import About       from "./components/About";
import Experience  from "./components/Experience";
import Projects    from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer      from "./components/Footer";
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
