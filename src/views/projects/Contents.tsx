import { Stack, Typography } from "@mui/material";
import CarouselButton from "../../components/carousel_button/CarouselButton";
import { IContentProps } from "./interfaces";
import { useState } from "react";
import { motion } from "framer-motion";

function Contents(props: IContentProps) {
  const [index, setIndex] = useState(0);
  const dataLength = props.data.length - 1;

  const [isButtonHover, setIsButtonHover] = useState(false);

  const handleNext = () => {
    if (index + 1 <= dataLength) {
      setIndex(index + 1);
      props.activeIndex(index + 1);
    } else {
      setIndex(0);
      props.activeIndex(0);
    }
  };

  const handleBack = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
      props.activeIndex(index - 1);
    } else {
      setIndex(dataLength);
      props.activeIndex(dataLength);
    }
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
        <motion.div>
          <motion.div
            style={{
              fontSize: "3vw",
            }}
          >
            {props.data[index].title}
          </motion.div>
          <motion.div
            style={{
              fontSize: "1vw",
              opacity: "0.7",
              fontWeight: "normal"
            }}
          >
            {props.data[index].description}
          </motion.div>
        </motion.div>

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
              width: "15vw",
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
