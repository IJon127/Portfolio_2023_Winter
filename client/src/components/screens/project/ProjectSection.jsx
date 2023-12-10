import "./ProjectSection.css";

export default function ProjectSection({ projectName, section }) {
  return (
    <div className="project-section">
      {section.title && (
        <h2 className="project-section__title-subtitle">{section.title}</h2>
      )}
      {section.subtitle && (
        <h3 className="project-section__title-subtitle">{section.subtitle}</h3>
      )}
      {section.paragraphs &&
        section.paragraphs.map((para) => (
          <p className="project-section__para" key={para}>
            {para}
          </p>
        ))}
      {section.lists && (
        <ul className="project-section__ul">
          {section.lists.map((list) => (
            <li className="project-section__para" key={list}>
              {list}
            </li>
          ))}
        </ul>
      )}
      {section.video && (
        <iframe
          className="project-section__video"
          title={projectName}
          src={section.video}
        ></iframe>
      )}
      {section.diagram && (
        <img
          className="project-section__diagram"
          src={`/images/projects/${projectName}/${section.diagram}`}
          alt={projectName}
        />
      )}
    </div>
  );
}
