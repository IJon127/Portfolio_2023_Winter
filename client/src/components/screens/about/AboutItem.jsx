import "./AboutItem.css";

function AboutItem({ firstLine, secondLine, link }) {
  return (
    <div className="about-item__container">
      {!link && <h4 className="about-item__title">{firstLine}</h4>}
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          <h4 className="about-item__title">{firstLine}</h4>
        </a>
      )}
      <p className="about-item__second-line">{secondLine}</p>
    </div>
  );
}

export default AboutItem;
