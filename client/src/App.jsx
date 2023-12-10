import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import StartingScreen from "./components/screens/StartingScreen";
import MoreScreen from "./components/screens/MoreScreen.jsx";
import Header from "./components/header/Header.jsx";
import LoadingScreen from "./components/screens/LoadingScreen.jsx";
import "./App.css";

export default function App() {
  const [start, setStart] = useState(false);
  //Data
  const [about, setAbout] = useState();
  const [projects, setProjects] = useState([]);
  const [practices, setPractices] = useState([]);
  const [papers, setPapers] = useState([]);
  //Data fetching
  const [fetching, setFetching] = useState(true);
  const [aboutFetching, setAboutFetching] = useState(true);
  const [projectsFetching, setProjectsFetching] = useState(true);
  const [practicesFetching, setPracticesFetching] = useState(true);
  const [papersFetching, setPapersFetching] = useState(true);

  //World loading
  const [worldLoaded, setWorldLoaded] = useState(false);

  //Modal
  const [modalOpened, setModalOpened] = useState(false);
  const [modalContent, setModalContent] = useState();
  const [modalType, setModalType] = useState(true);

  const setModal = {
    opened: setModalOpened,
    content: setModalContent,
    type: setModalType,
  };

  const fetchData = async (topic, setData, setDataFetching) => {
    fetch(`http://localhost:5300/api/${topic}`)
      // fetch(`/api/${topic}`)
      .then((res) => res.json())
      .then((resData) => {
        setData(resData.data[topic]);
        setDataFetching(false);
      });
  };

  useEffect(() => {
    fetchData("about", setAbout, setAboutFetching);
    fetchData("projects", setProjects, setProjectsFetching);
    fetchData("practices", setPractices, setPracticesFetching);
    fetchData("papers", setPapers, setPapersFetching);
  }, []);

  useEffect(() => {
    if (
      !aboutFetching &&
      !projectsFetching &&
      !practicesFetching &&
      !papersFetching
    ) {
      setFetching(false);
    }
  }, [aboutFetching, projectsFetching, practicesFetching, papersFetching]);

  return (
    <>
      {worldLoaded && !aboutFetching && (
        <Header setModal={setModal} about={about} />
      )}
      <Canvas>
        <Experience
          start={start}
          setModal={setModal}
          projects={projects}
          practices={practices}
          papers={papers}
          about={about}
          fetching={fetching}
        />
      </Canvas>
      {!fetching && !start && <StartingScreen setStart={setStart} />}
      {modalOpened && (
        <MoreScreen
          content={modalContent}
          type={modalType}
          setModalOpened={setModalOpened}
        />
      )}
      <LoadingScreen dataLoading={fetching} setWorldLoaded={setWorldLoaded} />
    </>
  );
}
