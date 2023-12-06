import { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader, useProgress } from "@react-three/drei";
// import { motion, AnimatePresence } from "framer-motion";
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
  //Data loading
  const [loading, setLoading] = useState(true);
  const [aboutLoading, setAboutLoading] = useState(true);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [practicesLoading, setPracticesLoading] = useState(true);
  const [papersLoading, setPapersLoading] = useState(true);

  //Modal
  const [modalOpened, setModalOpened] = useState(false);
  const [modalContent, setModalContent] = useState();
  const [modalType, setModalType] = useState(true);

  const setModal = {
    opened: setModalOpened,
    content: setModalContent,
    type: setModalType,
  };

  const fetchData = async (topic, setData, setDataLoading) => {
    fetch(`http://localhost:5300/api/${topic}`)
      // fetch(`/api/${topic}`)
      .then((res) => res.json())
      .then((resData) => {
        setData(resData.data[topic]);
        setDataLoading(false);
      });
  };

  useEffect(() => {
    fetchData("about", setAbout, setAboutLoading);
    fetchData("projects", setProjects, setProjectsLoading);
    fetchData("practices", setPractices, setPracticesLoading);
    fetchData("papers", setPapers, setPapersLoading);
  }, []);

  useEffect(() => {
    if (
      !aboutLoading &&
      !projectsLoading &&
      !practicesLoading &&
      !papersLoading
    ) {
      setLoading(false);
    }
  }, [aboutLoading, projectsLoading, practicesLoading, papersLoading]);

  return (
    <>
      {!aboutLoading && <Header setModal={setModal} about={about} />}
      <Canvas>
        <Suspense>
          <Experience
            start={start}
            setModal={setModal}
            projects={projects}
            practices={practices}
            papers={papers}
            about={about}
          />
        </Suspense>
      </Canvas>
      {!loading && !start && <StartingScreen setStart={setStart} />}
      {modalOpened && (
        <MoreScreen
          content={modalContent}
          type={modalType}
          setModalOpened={setModalOpened}
        />
      )}
      <LoadingScreen dataLoading={loading} />
      <Loader containerStyles={{ backgroundColor: "#333333" }} />
    </>
  );
}
