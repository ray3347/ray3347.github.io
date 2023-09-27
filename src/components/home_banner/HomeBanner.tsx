import { Stack } from "@mui/material";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import MainButton from "../main-button/MainButton";

function HomeBanner() {
  const fullTitle = [
    "Hi, Hallo, こんにちは!",
    "I'm Ansel and I'm a Software Developer.",
    "Welcome to my personal website, feel free to play around and I hope you enjoy your stay :)",
  ];

  const images = [
    "bg-homeMe",
    "bg-homeMe2",
    "bg-homeMe3"
  ]

  const [activeImage, setActiveImage] = useState<string>("bg-homeMe");
  const [title, setTitle] = useState("");
  const [title2, setTitle2] = useState("");
  const [title3, setTitle3] = useState("");

  const typingAnimation = (
    value: string,
    func: Dispatch<SetStateAction<string>>,
    interval?: number
  ) => {
    const typingInterval = interval ? interval : 100; // Adjust the typing speed (in milliseconds)
    let currentIndex = 0;

    const typingTimer = setInterval(() => {
      if (currentIndex < value.length) {
        func(value.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingTimer);
        //   currentIndex = 0;
      }
    }, typingInterval);

    return () => clearInterval(typingTimer);
  };

  const switchImage = () =>{
    const interval = 1500;
    let index = 0;

    setInterval(()=>{
      setActiveImage(images[index]);
      index>=2 ? index = 0 : index++;
      
    },interval)
  }

  useEffect(() => {
    typingAnimation(fullTitle[0], setTitle);
    setTimeout(() => {
      typingAnimation(fullTitle[1], setTitle2);
    }, 700);   
    typingAnimation(fullTitle[2], setTitle3, 50);
    switchImage();
  }, []);
  return (
    <Stack
      sx={{
        width: "100%",
        maxWidth: "100%",
        height: "80vh",
        padding: "5vw",
        paddingRight: "0px",
        background: "black",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Stack>
        <motion.div
          style={{
            fontSize: "5vw",
            fontWeight: "bold",
            color: "white",
            textAlign: "left",
            justifyContent: "flex-start",
            maxWidth: "60vw",
          }}
        >
          <motion.div>{title}</motion.div>

          <motion.div
            style={{
              fontSize: "3vw",
              fontWeight: "bold",
            }}
          >
            {title2}
          </motion.div>

          <motion.div
            style={{
              fontSize: "1.2vw",
              fontWeight: "bold",
              color: "#FF04D7",
              opacity: "50%",
            }}
          >
            {title3}
          </motion.div>
        </motion.div>
      </Stack>
      <motion.div
        className={activeImage}
        initial={{scale: 1.5, opacity: 0, x:0, y: -70}}
        animate={{scale: 1.8, opacity: 1, x:-102, y:-70}}
        transition={{delay: 1 ,duration: 0.8, bounce: 100, ease: "easeOut"}}
        style={{
          backgroundSize: "cover",
          height: "100%",
          width: "20vw",
          opacity: "10%",
        }}
      ></motion.div>
    </Stack>
  );
}

export default HomeBanner;
