import { useState, useEffect, Suspense } from "react";
import "./EndingCard.css";

export default function EndingCard({ setActiveAction, position }) {
  const [hidden, setHidden] = useState(true);
  const [words, setWords] = useState(`Let's Talk`);

  const copyEmail = () => {
    const email = "ih2168@nyu.edu";
    navigator.clipboard.writeText(email);
    setWords("Email Copied");
  };

  return (
    <div style={{ position: "absolute", ...position }} className="ending-card">
      <h1 className="ending-card__title">{words}</h1>
      <button className="big-btn" onClick={copyEmail}>
        E-Mail
      </button>
      <a href="/resume.pdf" download="Ijon_Hsieh">
        <button className="big-btn">Resume</button>
      </a>
      <button
        className="ending-card__restart-btn"
        onClick={() => {
          setActiveAction("restart");
        }}
      >
        Restart
      </button>
    </div>
  );
}
