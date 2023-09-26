import { Stack } from "@mui/material";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import MainButton from "../main-button/MainButton";

function HomeBanner() {
  const fullTitle = ["Hi, Hallo, こんにちは!", "I'm Ansel, Software Developer"];
  const [title, setTitle] = useState("");
  const [title2, setTitle2] = useState("");

  const typingAnimation = (
    value: string,
    func: Dispatch<SetStateAction<string>>
  ) => {
    const typingInterval = 100; // Adjust the typing speed (in milliseconds)
    let currentIndex = 0;

    console.log(value);
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
    return;
  };
  useEffect(() => {
    typingAnimation(fullTitle[0], setTitle);
    setTimeout(() => {
      typingAnimation(fullTitle[1], setTitle2);
    }, 1000);
  }, []);
  return (
    <Stack
      sx={{
        width: "100%",
        height: "30em",
        padding: "5em",
        background: "black",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Stack>
        <motion.div
          style={{
            fontSize: "3em",
            fontWeight: "bold",
            color: "white",
            textAlign: "left",
            justifyContent: "flex-start",
          }}
        >
          {title}
          <br />
          {title2}
        </motion.div>
      </Stack>
      {/* <Stack
        sx={{
          justifyContent: "flex-end",
        }}
      >

      </Stack> */}
    </Stack>
  );
}

export default HomeBanner;
