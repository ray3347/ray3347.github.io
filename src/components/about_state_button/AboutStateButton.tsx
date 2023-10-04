import { Stack } from "@mui/material";
import { IAboutStateButton } from "./interfaces";
import { motion } from "framer-motion";
import { useState } from "react";

function AboutStateButton(props: IAboutStateButton) {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.button
      initial={props.isActive ? "hover" : false}
      animate={props.isActive ? "none" : isHover ? "hover" : "rest"}
      transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
      variants={{
        rest: {
          border: "1px #FF04D7 solid",
          background: "none",
        },
        hover: {
          border: "none",
          background:
            "linear-gradient(312deg, rgba(0, 255, 133, 0.40) 31.35%, rgba(255, 255, 255, 0.00) 64.61%), linear-gradient(38deg, rgba(0, 235, 250, 0.30) 28.63%, rgba(253, 253, 253, 0.00) 77.07%), #FF04D7",
        },
      }}
      style={{
        borderRadius: "20px",
        padding: "2vw",
        paddingTop: "1vh",
        paddingBottom: "1.5vh",
        // border: props.isActive || isHover ? "none" : "1px #FF04D7 solid",
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        // background: props.isActive || isHover ? "linear-gradient(312deg, rgba(0, 255, 133, 0.40) 31.35%, rgba(255, 255, 255, 0.00) 64.61%), linear-gradient(38deg, rgba(0, 235, 250, 0.30) 28.63%, rgba(253, 253, 253, 0.00) 77.07%), #FF04D7" : "none"
      }}
      onHoverStart={() => {
        setIsHover(true);
      }}
      onHoverEnd={() => {
        setIsHover(false);
      }}
      onClick={props.onClick}
    >
      {props.title}
    </motion.button>
  );
}

export default AboutStateButton;
