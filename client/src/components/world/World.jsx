import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import {
  useGLTF,
  PerspectiveCamera,
  useAnimations,
  useScroll,
} from "@react-three/drei";
import * as THREE from "three";
import Museum from "./Museum/Museum";

export default function World({ start, activeAction, setActiveAction }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/world.glb");
  const { actions } = useAnimations(animations, group);
  const [fov, setFov] = useState();

  const getFov = () => {
    const viewportRatio = window.innerWidth / window.innerHeight;
    let _fov;
    if (viewportRatio > 1.2) {
      _fov = 30;
    } else if (viewportRatio > 1) {
      _fov = 40;
    } else if (viewportRatio > 0.7) {
      _fov = 48;
    } else {
      _fov = 55;
    }
    return _fov;
  };

  useEffect(() => {
    setFov(getFov());
  }, []);

  const scroll = useScroll();

  //Switch animation
  useEffect(() => {
    if (start && actions) {
      switch (activeAction) {
        case "start":
          actions["Start"]
            .reset()
            .setLoop(THREE.LoopOnce)
            .play().clampWhenFinished = true;
          break;
        case "main":
          actions["Start"].enabled = false;
          actions["Restart"].enabled = false;
          actions["Main"].reset().play().paused = true;
          break;
        case "restart":
          actions["Start"].enabled = false;
          actions["Main"].enabled = false;
          actions["Restart"]
            .reset()
            .setLoop(THREE.LoopOnce)
            .play().clampWhenFinished = true;
          scroll.el.scroll({ top: 0 });
          break;
        default:
          actions["Start"].enabled = false;
          actions["Main"].enabled = false;
          actions["Restart"].enabled = false;
      }
    }
  }, [activeAction, actions]);

  const cameraRef = useRef();

  let debounceCount = 0;
  useFrame((state, delta) => {
    if (start && actions) {
      switch (activeAction) {
        case "main":
          const offset = scroll.offset;
          actions["Main"].time = THREE.MathUtils.damp(
            actions["Main"].time,
            actions["Main"].getClip().duration * offset,
            100,
            delta
          );
          break;
        case "start":
          if (debounceCount < 10) {
            debounceCount++;
          } else if (!actions["Start"].isRunning()) setActiveAction("main");
          if (actions["Start"].isRunning() && scroll != 0) {
            scroll.el.scroll({ top: 0 });
          }
          break;
        case "restart":
          if (!actions["Restart"].isRunning()) setActiveAction("main");
          if (scroll != 0) {
            scroll.el.scroll({ top: 0 });
          }
          break;
        default:
      }
    }
    cameraRef.current.fov = getFov();
  });

  return (
    <>
      {/* ENVIRONMENT */}
      <color args={["#666666"]} attach="background" />
      <fog attach="fog" args={["#666666", 20, 27]} />

      <group ref={group} dispose={null}>
        <group name="Scene">
          <PerspectiveCamera
            name="Camera"
            makeDefault
            far={26}
            near={0.1}
            fov={fov}
            position={[3.2, 2.85, -24.88]}
            rotation={[-Math.PI, 0.508, -Math.PI]}
            ref={cameraRef}
          />
          <Museum nodes={nodes} materials={materials} start={start} />
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/world.glb");
