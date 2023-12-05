import { motion, AnimatePresence } from "framer-motion";
import "./StartingScreen.css";

export default function StartingScreen({ setStart }) {
  return (
    <motion.div className="starting-screen">
      <h1 className="starting-screen__title">I JON HSIEH</h1>
      <h2 className="starting-screen__subtitle">
        Creative Technologist, XR Developer
      </h2>
      <button
        className="big-btn"
        onClick={() => {
          setStart(true);
        }}
      >
        Explore
      </button>
    </motion.div>
  );
}
