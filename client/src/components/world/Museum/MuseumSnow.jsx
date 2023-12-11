import { useMemo, useRef, useEffect } from "react";
import { useThree, useFrame, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import snowVertexShader from "../../../shaders/snow/vertex.glsl";
import snowFragmentShader from "../../../shaders/snow/fragment.glsl";

const SnowMaterial = shaderMaterial(
  {
    uTime: 0,
    uPixelRatio: 2,
    uBottomY: -20,
  },
  snowVertexShader,
  snowFragmentShader
);

extend({ SnowMaterial });

export default function MuseumSnow({ position, range, count }) {
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * range[0];
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * range[1];
    }

    return positions;
  }, []);

  const { gl } = useThree();
  const snowMaterialRef = useRef();

  useFrame((state, delta) => {
    snowMaterialRef.current.uTime += delta;
  });

  useEffect(() => {
    snowMaterialRef.current.uPixelRatio = gl.getPixelRatio();
  }, [gl]);

  return (
    <>
      {positions && (
        <points position={position}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={positions.length / 3}
              itemSize={3}
              array={positions}
            />
          </bufferGeometry>
          <snowMaterial ref={snowMaterialRef} transparent={true} />
        </points>
      )}
    </>
  );
}
