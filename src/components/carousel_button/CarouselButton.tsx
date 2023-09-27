import { ICarouselButtonProps } from "./interfaces";
import { MotionConfig, motion } from "framer-motion";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useState } from "react";

function CarouselButton(props: ICarouselButtonProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <MotionConfig>
      <motion.button
        initial={false}
        animate={isHover ? "hover" : "rest"}
        variants={{
          rest: { backgroundColor: "rgba(255,255,255,0)", scale: 1 },
          hover: {
            //   backgroundColor: "#FF04D7",
            scale: 3,
            // boxShadow: "0px 0px 30px -7px rgba(255,4,215,0.45)",
          },
        }}
        onHoverStart={() => {
          setIsHover(true);
        }}
        onHoverEnd={() => {
          setIsHover(false);
        }}
        style={{
          width: "7vh",
          alignItems: "center",
          justifyContent: "center",
          perspective: 800,
        }}
        onClick={props.onClick}
      >
        {props.direction === "left" && (
          <NavigateBeforeIcon
            htmlColor={isHover ? "#FF04D7" : "white"}
          />
        )}
        {props.direction === "right" && (
          <NavigateNextIcon
            htmlColor={isHover ? "#FF04D7" : "white"}
          />
        )}
      </motion.button>
    </MotionConfig>
  );
}

export default CarouselButton;
