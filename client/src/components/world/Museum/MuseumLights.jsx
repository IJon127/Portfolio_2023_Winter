import { useThree } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";
import sparklesVertexShader from "../../../shaders/sparkles/vertex.glsl";
import sparklesFragmentShader from "../../../shaders/sparkles/fragment.glsl";

export default function MuseumLights() {
  const { gl } = useThree();

  return (
    <>
      <pointLight position={[10.074, 1.28, 4.34]} intensity={0.06} />
      <ambientLight intensity={2} />
      <Sparkles
        size={0.7}
        scale={[8, 3, 2.1]}
        position={[2, 2, 8]}
        speed={0.2}
        count={100}
      >
        <shaderMaterial
          vertexShader={sparklesVertexShader}
          fragmentShader={sparklesFragmentShader}
          uniforms={{
            uPixelRatio: { value: gl.getPixelRatio() },
            uColorCyan: { value: new THREE.Color(0x006cff) },
            uColorBlue: { value: new THREE.Color(0x55e8cf) },
          }}
          transparent={true}
          depthWrite={false}
        />
      </Sparkles>
    </>
  );
}
