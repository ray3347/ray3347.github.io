import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import CarouselButton from "../../components/carousel_button/CarouselButton";
import { IContentProps } from "./interfaces";
import { useState } from "react";
import { AnimatePresence, motion, useAnimate } from "framer-motion";

function Contents(props: IContentProps) {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [index, setIndex] = useState(0);
  const dataLength = props.data.length - 1;
  const [scope, setAnimate] = useAnimate();

  const [isButtonHover, setIsButtonHover] = useState(false);

  const enterHandlePrevAnimation = () => {
    setAnimate(scope.current, { opacity: 0 });
    setAnimate("div", { opacity: 0, x: 10 });
  };

  const exitHandlePrevAnimation = () => {
    setAnimate(scope.current, { opacity: 1 });
    setAnimate("div", { opacity: 1, x: 0 });
  };

  const enterHandleNextAnimation = () => {
    setAnimate(scope.current, { opacity: 0 });
    setAnimate("div", { opacity: 0, x: -10 });
  };

  const exitHandleNextAnimation = () => {
    setAnimate(scope.current, { opacity: 1 });
    setAnimate("div", { opacity: 1, x: 0 });
  };

  const handleNext = () => {
    enterHandleNextAnimation();
    setTimeout(() => {
      if (index + 1 <= dataLength) {
        setIndex(index + 1);
        props.activeIndex(index + 1);
      } else {
        setIndex(0);
        props.activeIndex(0);
      }
      exitHandleNextAnimation();
    }, 200);
  };

  const handleBack = () => {
    enterHandlePrevAnimation();
    setTimeout(()=>{
      if (index - 1 >= 0) {
        setIndex(index - 1);
        props.activeIndex(index - 1);
      } else {
        setIndex(dataLength);
        props.activeIndex(dataLength);
      }
      exitHandlePrevAnimation();
    },200)
   
  };

  return (
    <Stack
      sx={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <CarouselButton direction="left" onClick={handleBack} />
      <Stack
        sx={{
          width: "30vw",
          height: "100%",
          textAlign: "left",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "white",
          fontWeight: "bold",
        }}
      >
        <Stack
          ref={scope}
          sx={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            textAlign: "justify",
          }}
        >
          <div
            style={{
              fontSize: isMdScreen ? "5vw":"3vw",
            }}
          >
            {props.data[index].title}
          </div>
          <div
            style={{
              fontSize: isMdScreen ? "1.5vw" : "1vw",
              opacity: "0.7",
              fontWeight: "normal",
            }}
          >
            {props.data[index].description}
          </div>
        </Stack>

        <motion.div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <motion.button
            initial={false}
            animate={isButtonHover ? "hover" : "rest"}
            transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
            variants={{
              rest: {
                background: "none",
                border: "#FF04D7 1px solid",
                scale: 1,
              },
              hover: {
                background:
                  "linear-gradient(312deg, rgba(0, 255, 133, 0.40) 31.35%, rgba(255, 255, 255, 0.00) 64.61%), linear-gradient(38deg, rgba(0, 235, 250, 0.30) 28.63%, rgba(253, 253, 253, 0.00) 77.07%), #FF04D7",
                boxShadow: "0px 0px 30px -7px rgba(255,4,215,1)",
                border: "none",
                scale: 1.2,
              },
            }}
            style={{
              width: isMdScreen ? "25vw" : "15vw",
              fontSize: isMdScreen ? "3vw" : undefined,
              padding: "1.5vw",
              backgroundColor: "rgba(255,4,215,0.45)",
              // marginTop: "5vh",
              borderRadius: "1.5vw",
              // margin: "auto",
            }}
            onHoverStart={() => {
              setIsButtonHover(true);
            }}
            onHoverEnd={() => {
              setIsButtonHover(false);
            }}
            onClick={() => {
              window.open(props.data[index].url);
            }}
          >
            Check It Out!
          </motion.button>
        </motion.div>
      </Stack>
      <CarouselButton direction="right" onClick={handleNext} />
    </Stack>
  );
}

export default Contents;
