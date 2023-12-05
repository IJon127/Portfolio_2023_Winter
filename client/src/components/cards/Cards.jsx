import Card from "./card/Card";
import ContactCard from "./card/ContactCard";
import EndingCard from "./card/EndingCard";
import ScrollCard from "./card/ScrollCard";

export default function Cards({
  setModal,
  activeAction,
  setActiveAction,
  projects,
  practices,
  papers,
  about,
}) {
  return (
    <>
      <ScrollCard activeAction={activeAction} />
      {projects.map((project) => (
        <Card
          key={project.name}
          cardPosition={project.cardPosition}
          title={project.info.title}
          intro={project.content[0].paragraphs}
          content={project}
          type={"project"}
          setModal={setModal}
        />
      ))}
      {practices.map((practice, index) => (
        <Card
          key={index}
          cardPosition={practice.cardPosition}
          title={practice.title}
          intro={practice.intro}
          content={practice}
          type={"practice"}
          setModal={setModal}
        />
      ))}
      <Card
        cardPosition={{ top: "4600vh", left: "0" }}
        title={"Research Papers"}
        intro={papers.intro}
        content={papers}
        type={"paper"}
        setModal={setModal}
      />
      <Card
        cardPosition={{ top: "4850vh", right: "0" }}
        title={"About Me"}
        intro={about.intro}
        content={about}
        type={"about"}
        setModal={setModal}
      />
      <ContactCard position={{ top: "5040vh", left: "0" }} />

      <EndingCard
        position={{ top: "5550vh", left: "50vw" }}
        setActiveAction={setActiveAction}
      />
    </>
  );
}
