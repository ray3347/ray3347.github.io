import { Canvas } from "@react-three/fiber";
import { transition, useSmoothTransform } from "./constants";
import { ICanvasProps } from "./interfaces";
import { Camera } from "./Camera";
import { motion as motion3d } from "framer-motion-3d";
import { MotionConfig } from "framer-motion";
import { Lights } from "./Lights";

function Canvas3D(props: ICanvasProps) {
  const spring = { stiffness: 600, damping: 30 };
  const mouseToLightRotation = (v: number) => (-1 * v) / 140;
  const lightRotateX = useSmoothTransform(
    props.mouseY,
    spring,
    mouseToLightRotation
  );
  const lightRotateY = useSmoothTransform(
    props.mouseX,
    spring,
    mouseToLightRotation
  );
  return (
    <Canvas shadows dpr={[1, 2]} resize={{ scroll: false, offsetSize: true }}>
      <Camera mouseX={props.mouseX} mouseY={props.mouseY} />
      <MotionConfig transition={transition} />
      <motion3d.group
        // center={[0, 0, 0]}
        rotation={[lightRotateX, lightRotateY, 0]}
      >
        <Lights />
      </motion3d.group>
      <motion3d.group
        initial={false}
        animate={props.isHover ? "hover" : "rest"}
        dispose={null}
        variants={{
          hover: { z: props.isPress ? -0.9 : 0 },
        }}
      >
        {props.component}
      </motion3d.group>
    </Canvas>
  );
}

export default Canvas3D;
