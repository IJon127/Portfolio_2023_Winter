import "./ProjectInfo.css";

export default function ProjectInfo({ info }) {
  return (
    <div>
      <h1 className="project-info__title">{info.title}</h1>
      <h3 className="project-info__subtitle">{info.subtitle}</h3>
      <div className="project-info__content">
        {info.team && <p>{`Co-created with ${info.team.join(" & ")}`}</p>}
        {info.company && <p>{`Worked at ${info.company}`}</p>}
        <p>{info.type}</p>
        <p>{info.time}</p>
        {info.location && <p>{info.location}</p>}
        {/* {info.venue && <p>{info.venue}</p>} */}
      </div>
    </div>
  );
}
