import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Card.css";

export default function Card({
  cardPosition,
  title,
  intro,
  content,
  type,
  setModal,
}) {
  const [introParas, setIntroParas] = useState();
  useEffect(() => {
    let paras = "";
    if (intro) {
      for (let para of intro) {
        paras += para;
        paras += "\n";
      }
    }
    setIntroParas(paras);
  }, [intro]);
  const clickMore = () => {
    setModal.opened(true);
    setModal.content(content);
    setModal.type(type);
  };

  return (
    <motion.div
      style={{ position: "absolute", ...cardPosition }}
      className="card"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <div className="card__container">
        <h2 className="card__title">{title}</h2>
        <div className="card__line" />
        <p className="card__para">{introParas}</p>
        <button className="card__btn" onClick={() => clickMore()}>
          More ↗
        </button>
      </div>
    </motion.div>
  );
}
