import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import MainButton from "../main-button/MainButton";
import loop from "../../assets/videos/ansel-stg-flash.mp4";

function HomeBanner() {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  const fullTitle = [
    "Hi, Hallo, こんにちは!",
    "I'm Ansel and I'm a Software Developer.",
    "Welcome to my personal website, feel free to play around and I hope you enjoy your stay :)",
  ];

  const images = ["bg-homeMe", "bg-homeMe2", "bg-homeMe3"];

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

  const switchImage = async () => {
    const interval = 1500;
    let index = 0;

    setInterval(() => {
      setActiveImage(images[index]);
      index >= 2 ? (index = 0) : index++;
    }, interval);
  };

  useEffect(() => {
    typingAnimation(fullTitle[0], setTitle);
    setTimeout(() => {
      typingAnimation(fullTitle[1], setTitle2);
    }, 700);
    typingAnimation(fullTitle[2], setTitle3, 50);
    switchImage();
  }, []);
  return (
    <Stack>
      <Stack
        sx={{
          position: "absolute",
          top: "0",
          // bottom: "0",
          left: "0",
          right: "0",
          width: "100%",
          height: "80vh",
          objectFit: "cover",
          objectPosition: "center",
          overflow: "hidden"
        }}
      >
        <video src={loop} muted autoPlay loop style={{
           width: "auto",
           height: "auto",
           minWidth: "100%",
           minHeight: "100%",
           scale: isMdScreen ? "3" : undefined
        }}></video>
      </Stack>
      <Stack
        className="bg-mp4Home"
        sx={{
          width: "100%",
          maxWidth: "100%",
          height: "80vh",
          padding: "5vw",
          // paddingRight: "0px",
          // background: "black",
          backgroundPosition: "center",
          backgroundSize: "cover",
          justifyContent: isMdScreen ? "center" : "space-between",
          alignItems: "center",
          flexDirection: isMdScreen ? "column-reverse" : "row",
        }}
      >
        <Stack>
          <motion.div
            style={{
              fontSize: isMdScreen ? "6vw" : "5vw",
              fontWeight: "bold",
              color: "white",
              textAlign: isMdScreen ? "center" : "left",
              justifyContent: isMdScreen ? "center" : "flex-start",
              maxWidth: "60vw",
              zIndex: "3",
            }}
          >
            <motion.div>{title}</motion.div>

            <motion.div
              style={{
                fontSize: isMdScreen ? "4vw" : "3vw",
                fontWeight: "bold",
              }}
            >
              {title2}
            </motion.div>

            <motion.div
              style={{
                fontSize: isMdScreen ? "2.2vw" : "1.2vw",
                fontWeight: "bold",
                // color: "#FF04D7",
                // opacity: "50%",
              }}
            >
              {title3}
            </motion.div>
          </motion.div>
        </Stack>
        <Stack
          sx={{
            height: "100%",
            width: isMdScreen ? "60vw" : "20vw",
          }}
        >
          <motion.div
            className={activeImage}
            initial={{ scale: 0.7, opacity: 0, x: 100, y: 0 }}
            animate={{ scale: 1.2, opacity: 1, x: isMdScreen ? 0 : 0, y: -70 }}
            transition={{
              delay: 1,
              duration: 0.8,
              bounce: 100,
              ease: "easeOut",
            }}
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              opacity: "10%",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default HomeBanner;
