import { Stack } from "@mui/material";
import {
  MotionConfig,
  MotionValue,
  motion,
  useAnimation,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import "../../index.css";
import { useRef, useEffect, useState, Suspense } from "react";
import useMeasure from "react-use-measure";
import { Camera } from "../3d/Camera";
import { Canvas } from "@react-three/fiber";
import { useSmoothTransform } from "../main-button/useSmoothTransform";
import { motion as motion3d } from "framer-motion-3d";
import Canvas3D from "../3d/Canvas3D";
import Card from "./Card";

function ProjectsBanner() {
  const ref = useRef(null);
  const scroll = useScroll({
    target: ref,
  });
  const parallax = useTransform(scroll.scrollYProgress, [1, 0], [0.7, 1]);

  useEffect(() => {
    // console.log(parallax);
  }, []);

  return (
    <Stack>
      <motion.div
        className="bg-backgroundGlow w-full overflow-hidden bg-repeat-y"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "50% 0%",
          padding: "5em",
        }}
      >
        <Card ref={ref} scaleChange={parallax} />
      </motion.div>
    </Stack>
  );
}

function useParallax(value: MotionValue<number>, scale: number) {
  return useTransform(value, [0, 1], [0.7, scale]);
}

export default ProjectsBanner;
