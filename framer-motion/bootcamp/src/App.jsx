import "./App.css";
import { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import List from "./components/List";
import RotatingBox from "./components/RotatingBox";
import Modal from "./components/Modal";

function App() {
  const { scrollYProgress } = useScroll();

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#ffd500", "#ff0000", "#2b00ff"]
  );

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{
          scaleX: scrollYProgress,
          backgroundColor,
        }}
      />
      <motion.div
        className="square"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      <motion.button
        className="button"
        whileHover={{ backgroundColor: "#014a5c", scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Klicka på mig!
      </motion.button>

      <motion.div
        className="square"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.7, ease: "backOut" }}
      />
      <List />
      <RotatingBox />

      <motion.button
        className="button"
        whileHover={{ backgroundColor: "#014a5c", scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => (modalOpen ? close() : open())}
      >
        Öppna modal
      </motion.button>

      <AnimatePresence initial={false} mode="wait">
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            handleClose={close}
            text="Wow! What an amazing modal!"
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
