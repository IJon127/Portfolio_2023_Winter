import "./PaperItem.css";

export default function PaperItem({ paper }) {
  return (
    <div className="paper-item__container">
      <h3 className="paper-item__title">{paper.title}</h3>
      <p className="paper-item__para">{paper.abstract}</p>

      <a href={`/papers/${paper.name}.pdf`} target="_blank" rel="noreferrer">
        <button className="paper-item__btn">full text →</button>
      </a>
    </div>
  );
}
