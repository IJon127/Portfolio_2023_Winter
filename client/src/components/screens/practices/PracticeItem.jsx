// import { motion } from "framer-motion";
import "./PracticeItem.css";
import PictureBox from "../../shared/PictureBox.jsx";

export default function PracticeItem({ practice }) {
  const picUri = `images/exercises/${practice.thumbnail}`;
  return (
    <a href={practice.link} target="_blank" rel="noreferrer">
      <PictureBox aspectRatio="1/1" img={picUri} alt={practice.date} />
      <h4 className="practice-item__title">{practice.date}</h4>
    </a>
  );
}
