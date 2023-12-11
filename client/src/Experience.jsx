import { useState, useEffect, Suspense } from "react";
import { ScrollControls, Scroll } from "@react-three/drei";
// import { OrbitControls} from "@react-three/drei";
// import { Perf } from "r3f-perf";
import World from "./components/world/World";
import Cards from "./components/cards/Cards";

export default function Experience({
  start,
  setModal,
  projects,
  practices,
  papers,
  about,
  fetching,
}) {
  const [activeAction, setActiveAction] = useState("");
  useEffect(() => {
    if (start) setActiveAction("start");
  }, [start]);

  return (
    <>
      {/* <Perf position="top-left" /> */}
      {/* <OrbitControls makeDefault /> */}
      <ScrollControls pages={55} distance={1.5}>
        <Scroll html style={{ width: "100%" }}>
          {!fetching && activeAction != "restart" && (
            <Cards
              setModal={setModal}
              activeAction={activeAction}
              setActiveAction={setActiveAction}
              projects={projects}
              practices={practices}
              papers={papers}
              about={about}
            />
          )}
        </Scroll>
        <Suspense>
          <World
            start={start}
            activeAction={activeAction}
            setActiveAction={setActiveAction}
          />
        </Suspense>
      </ScrollControls>
    </>
  );
}
