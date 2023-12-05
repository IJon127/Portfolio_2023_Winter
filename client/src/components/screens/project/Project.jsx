import { useState, useEffect } from "react";
import "./Project.css";
import ProjectInfo from "./ProjectInfo.jsx";
import ProjectContent from "./ProjectContent.jsx";
import ProjectGallery from "./ProjectGallery.jsx";

import PictureBox from "../../shared/PictureBox.jsx";

export default function Project({ project }) {
  return (
    <div className="project">
      {project.heroVideo && (
        <iframe
          className="project__video"
          title={project.name}
          src={project.heroVideo}
          frameBorder="0"
        ></iframe>
      )}
      {!project.heroVideo && (
        <PictureBox
          className="project__heroImg"
          aspectRatio="16/9"
          img={`/images/projects/${project.name}/${project.heroImage}`}
          alt={project.name}
        />
      )}
      <ProjectInfo info={project.info} />
      <ProjectContent project={project} />
      {project.gallery && (
        <ProjectGallery project={project.name} gallery={project.gallery} />
      )}
    </div>
  );
}
