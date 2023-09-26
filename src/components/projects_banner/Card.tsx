import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import useMeasure from "react-use-measure";
import { ICardProps } from "./interfaces";

function Card(props: ICardProps) {
  const [isHover, setIsHover] = useState(false);
  const [res, bounds] = useMeasure({ scroll: false });
  const offset = useSpring(0, { stiffness: 100 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]); // Reversed values
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]); // Reversed values
  const cardRotateX = useTransform(mouseY, [-300, 300], [5, -5]); // Adjusted rotation values
  const cardRotateY = useTransform(mouseX, [-300, 300], [-5, 5]); // Adjusted rotation values

  const handleMovement = (e: any) => {
    const offsetX = e.clientX - window.innerWidth / 2;
    const offsetY = e.clientY - window.innerHeight / 2;

    mouseX.set(offsetX);
    mouseY.set(offsetY);
  };

  const handleReset = () => {
    mouseX.set(offset.get());
    mouseY.set(offset.get());
  };

  return (
    <motion.div
      ref={props.ref}
      initial={{ scale: 1 }}
      style={{
        scale: props.scaleChange.get() < 0.85 ? 0.85 : props.scaleChange,
        perspective: 800,
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      transition={{ velocity: 0, type: "spring" }}
      animate={isHover ? true : false}
      //   onHoverStart={() => {
      //     setIsHover(true);
      //   }}
      //   onHoverEnd={() => {
      //     setIsHover(false);
      //   }}
      //   onPointerMove={(e) => {
      //     mouseX.set(e.clientX - bounds.x - bounds.width / 2);
      //     mouseY.set(e.clientY - bounds.y - bounds.height / 2);
      //   }}
      onMouseMove={handleMovement}
      onMouseLeave={handleReset}
    >
      <motion.div
        key="card"
        style={{
          boxShadow: "0px 0px 30px -7px rgba(255,255,255,0.45)",
          flexDirection: "row",
          borderRadius: "30px",
          border: "2px solid white",
          backgroundColor: "0.5 gray",
          padding: "2.5em",
          paddingTop: "10em",
          paddingBottom: "10em",
          perspective: 800,
          transformStyle: "preserve-3d",
          rotateX: cardRotateX,
          rotateY: cardRotateY,
        }}
        transition={{ velocity: 0, type: "spring" }}
      >
        <motion.div
          style={{
            gap: "1em",
            textAlign: "left",
          }}
        >
          <motion.div
            style={{
              fontSize: "2.5em",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Various Works
          </motion.div>
          <motion.div
            style={{
              fontSize: "1em",
              fontWeight: "bold",
              color: "gray",
              opacity: "0.8",
              maxWidth: "40vw",
            }}
          >
            Collection of my past projects in various fields such as software
            development, UI/UX, and many more! Be it personal projects or in
            collaboration with other brilliant people, and many more will be
            published in the near future!
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Card;
