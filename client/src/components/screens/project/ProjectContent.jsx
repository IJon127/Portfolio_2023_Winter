import "./ProjectContent.css";
import ProjectSection from "./ProjectSection.jsx";

export default function ProjectContent({ project }) {
  return (
    <div className="project-content">
      {project.content.map((section, index) => (
        <ProjectSection
          key={index}
          section={section}
          projectName={project.name}
        />
      ))}
    </div>
  );
}
