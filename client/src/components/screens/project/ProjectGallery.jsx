import "./ProjectGallery.css";

export default function ProjectGallery({ project, gallery }) {
  const randomVar = (start, end, unit) => {
    const num = ~~(Math.random() * (end - start));
    return String(num + start + unit);
  };
  return (
    <div className="project-gallery">
      {gallery.map((pic, index) => (
        <img
          key={index}
          src={`/images/projects/${project}/${pic}`}
          alt={project}
          className="project-gallery__img"
        />
      ))}
    </div>
  );
}
