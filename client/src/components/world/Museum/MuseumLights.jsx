import { Sparkles } from "@react-three/drei";

export default function MuseumLights() {
  return (
    <>
      <pointLight position={[10.074, 1.28, 4.34]} intensity={0.06} />
      <ambientLight intensity={2} />
      <Sparkles
        size={0.7}
        scale={[9, 3, 2.1]}
        position={[1.5, 2, 8]}
        speed={0.2}
        color={"#00ccff"}
        count={100}
      />
    </>
  );
}
