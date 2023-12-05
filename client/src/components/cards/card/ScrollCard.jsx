import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from "@react-three/drei";

import "./ScrollCard.css";
export default function ScrollCard({ activeAction }) {
  const [show, setShow] = useState(true);

  const scroll = useScroll();

  useFrame((state, delta) => {
    const offset = scroll.offset;
    if (show && offset * 600 > 0.1) {
      setShow(false);
    }
  });

  return (
    <AnimatePresence>
      {activeAction == "main" && show && (
        <motion.div
          className="scroll-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="scroll-card__container">
            <div className="scroll-card__box">
              <div className="scroll-card__arrow"></div>
            </div>
            <h3 className="scroll-card__text">scroll</h3>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
