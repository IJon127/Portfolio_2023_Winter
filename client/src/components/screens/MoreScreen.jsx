import "./MoreScreen.css";
import Project from "./project/Project";
import Practices from "./practices/Practices";
import About from "./about/About";
import Papers from "./papers/Papers";
import Contact from "./contact/Contact";

export default function MoreScreen({ content = {}, type, setModalOpened }) {
  return (
    <div className="more-screen">
      <button
        onClick={() => setModalOpened(false)}
        className="more-screen__close-btn"
      >
        ✕
      </button>
      <div className="more-screen__container">
        {type == "project" && <Project project={content} />}
        {type == "practice" && <Practices practices={content} />}
        {type == "paper" && <Papers papers={content} />}
        {type == "about" && <About about={content} />}
        {type == "contact" && <Contact />}
      </div>
    </div>
  );
}
