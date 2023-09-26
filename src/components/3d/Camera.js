import { motion } from "framer-motion-3d";
import { useThree } from "@react-three/fiber";
import { spring } from "framer-motion";
import { useRef, useLayoutEffect, useState } from "react";
import { useSmoothTransform } from "../main-button/useSmoothTransform";

export function Camera({ mouseX, mouseY, ...props }) {
    const cameraX = useSmoothTransform(mouseX, spring, (x) => x / 350);
    const cameraY = useSmoothTransform(mouseY, spring, (y) => (-1 * y) / 350);
  
    const set = useThree(({ set }) => set);
    const camera = useThree(({ camera }) => camera);
    const size = useThree(({ size }) => size);
    const scene = useThree(({ scene }) => scene);
    const cameraRef = useRef();

    // const [currCam, setCurrCam] = useState(camera);
  
    useLayoutEffect(() => {
      const { current: cam } = cameraRef;
      if (cam) {
        cam.aspect = size.width / size.height;
        cam.updateProjectionMatrix();
      }
    }, [size, props]);
  
    useLayoutEffect(() => {
      if (cameraRef.current) {
        const oldCam = camera;
        set(() => ({ camera: cameraRef.current }));
        return () => set(() => ({ camera: oldCam }));
      }
    }, [camera, cameraRef, set]);
  
    useLayoutEffect(() => {
      return cameraX.onChange(() => camera.lookAt(scene.position));
    }, [cameraX]);
  
    return (
      <motion.perspectiveCamera
        ref={cameraRef}
        fov={90}
        position={[cameraX, cameraY, 3.8]}
      />
    );
  }