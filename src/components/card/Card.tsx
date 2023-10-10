import {
  animate,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useMeasure from "react-use-measure";
import { ICardProps } from "./interfaces";

function Card(props: ICardProps) {
  const [isHover, setIsHover] = useState(false);
  const [res, bounds] = useMeasure({ scroll: false });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]); // Reversed values
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]); // Reversed values
  const cardRotateX = useTransform(mouseY, [-300, 300], [5, -5]); // Adjusted rotation values
  const cardRotateY = useTransform(mouseX, [-300, 300], [-5, 5]); // Adjusted rotation values
  const myRef = useRef<HTMLDivElement | null>(null);
  const [componentWidth, setComponentWidth] = useState<number>(0);
  const [componentHeight, setComponentHeight] = useState<number>(0);

  // carousel
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMovement = (e: any) => {
    const offsetX = e.clientX - componentWidth / 2;
    const offsetY = e.clientY - componentHeight / 2;

    mouseX.set(offsetX);
    mouseY.set(offsetY);
  };

  const handleReset = () => {
    animate(mouseX, 0, { duration: 0.3 });
    animate(mouseY, 0, { duration: 0.3 });
  };

  useEffect(() => {
    if (myRef.current != null) {
      const boundary = myRef.current?.getBoundingClientRect();
      setComponentWidth(boundary.width);
      setComponentHeight(boundary.height);
    }
  }, []);

  return (
    <motion.div
      ref={props.ref}
      initial={{ scale: 1 }}
      style={{
        scale:
          props.scaleChange && props.scaleChange.get() < 0.7
            ? 0.7
            : props.scaleChange,
        perspective: props.perspective ? props.perspective : 800,
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      transition={{ velocity: 0, type: "spring" }}
      animate={isHover ? true : false}
      onMouseMove={handleMovement}
      onMouseLeave={handleReset}
      onScroll={handleReset}
    >
      <motion.div
        ref={myRef}
        key="card"
        style={{
          // maxWidth: props.maxWidth ? props.maxWidth : "none",
          width: props.width ? props.width : undefined,
          height: props.height ? props.height : "auto",
          // maxHeight: props.height ? props.height : "auto",
          // alignItems: "center",
          boxShadow: "0px 0px 30px -7px rgba(255,255,255,0.7)",
          flexDirection: "row",
          borderRadius: "30px",
          border: "2px solid white",
          backgroundColor: "0.5 gray",
          padding: props.paddingX ? props.paddingX : "2.5vw",
          paddingTop: props.paddingY ? props.paddingY : "30vh",
          paddingBottom: props.paddingY ? props.paddingY : "30vh",
          perspective: props.perspective ? props.perspective : 800,
          transformStyle: "preserve-3d",
          rotateX: cardRotateX,
          rotateY: cardRotateY,
          ...props.styleProps,
        }}
        transition={{ velocity: 0, type: "spring" }}
      >
        <motion.div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {props.content}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Card;
