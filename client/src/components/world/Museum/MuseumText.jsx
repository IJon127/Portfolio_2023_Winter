import { Text } from "@react-three/drei";

export default function MuseumText(props) {
  return (
    <>
      <group position={[6.872, 1.23, -7]} rotation={[0, -Math.PI / 2, 0]}>
        <Text
          font="./fonts/CrimsonText-SemiBold.woff"
          fontSize={0.13}
          color="#353535"
          maxWidth={2}
        >
          I Jon Hsieh
        </Text>
        <Text
          font="./fonts/OpenSans-Regular.woff"
          fontSize={0.06}
          color="#414141"
          position={[0.2, -0.155, 0]}
          maxWidth={2}
        >
          Creative tech architect: {"\n"}turning daily life into interactive
          art!
        </Text>
      </group>
      <Text
        font="./fonts/OpenSans-Regular.woff"
        fontSize={0.06}
        color="#666666"
        position={[-2.274, 1.45, 0.3]}
        rotation={[0, -Math.PI / 2, 0]}
        maxWidth={2}
        textAlign="left"
      >
        Games / XR
      </Text>
      <group position={[-4.1, 1.3, 9.52]} rotation={[0, -Math.PI, 0]}>
        <Text
          font="./fonts/CrimsonText-SemiBold.woff"
          fontSize={0.1}
          lineHeight={0.98}
          color="#474747"
          maxWidth={2}
          textAlign="left"
        >
          American Museum {"\n"}of Natural History
        </Text>
        <Text
          font="./fonts/OpenSans-Regular.woff"
          fontSize={0.06}
          position={[0.14, -0.17, 0]}
          color="#474747"
          maxWidth={2}
          textAlign="left"
        >
          Invisible Worlds Immersive Experience
        </Text>
      </group>
      <Text
        font="./fonts/OpenSans-Regular.woff"
        fontSize={0.045}
        color="#333333"
        position={[-2.274, 4.37, -2.15]}
        rotation={[0, -Math.PI / 2, 0]}
        maxWidth={2}
        textAlign="left"
        lineHeight={1.3}
      >
        Creative Coding
      </Text>
      <Text
        font="./fonts/OpenSans-Regular.woff"
        fontSize={0.05}
        color="#3a3a3a"
        position={[-6.2, 4.37, 9.52]}
        rotation={[0, -Math.PI, 0]}
        maxWidth={2}
        textAlign="left"
        lineHeight={1.3}
      >
        Blender {"\n"}/ Motion Graphics
      </Text>
      <Text
        font="./fonts/OpenSans-Regular.woff"
        fontSize={0.1}
        color="#333333"
        position={[-11, -1.3, -3.475]}
        rotation={[0, 0, 0]}
        maxWidth={2}
        textAlign="left"
        lineHeight={1.3}
      >
        EXIT
      </Text>
    </>
  );
}
