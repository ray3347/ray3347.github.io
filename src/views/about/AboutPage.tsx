import { Stack, Typography } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import AboutPicture from "../../components/about_picture/AboutPicture";
import { descTypes, descriptionState, imagesData } from "./constants";
import AboutStateButton from "../../components/about_state_button/AboutStateButton";
import { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";

function AboutPage() {
  const [scope, setAnimate] = useAnimate();
  const [ActiveIndex, setActiveIndex] = useState<number>(0);
  const [PictureIndex, setPictureIndex] = useState<number>(0);

  const enterHandleNextAnimation = () => {
    setAnimate(scope.current, { opacity: 0 });
    setAnimate("div", { opacity: 0, x: -10 });
  };

  const exitHandleNextAnimation = () => {
    setAnimate(scope.current, { opacity: 1 });
    setAnimate("div", { opacity: 1, x: 0 });
  };

  const handleChangeData = (index: number) => {
    enterHandleNextAnimation();
    setTimeout(() => {
      setActiveIndex(index);
      exitHandleNextAnimation();
    }, 200);
  };

  useEffect(() => {
    document.title = "About Me - Ansel's Website";
  }, []);

  return (
    <Stack
      className="bg-backgroundGlow"
      sx={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        padding: "7vw",
        justifyContent: "center",
      }}
    >
      <Stack
        // ref={scope}
        sx={{
          width: "100%",
          height: "100%",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: "10vw",
          alignItems: "center",
        }}
      >
        <motion.div ref={scope}>
          <div>
            <AboutPicture picture={imagesData[ActiveIndex]} activeIndex={PictureIndex}/>
          </div>
        </motion.div>

        <Stack
          sx={{
            height: "100%",
            justifyContent: "space-between",
            paddingTop: "5vh",
            paddingBottom: "5vh",
          }}
        >
          <Stack
            sx={{
              flexDirection: "column",
              gap: "5vh",
            }}
          >
            <Stack>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  fontSize: "4vw",
                }}
              >
                Anselmus Raynard Halim
              </Typography>

              <Stack
                sx={{
                  flexDirection: "row",
                  gap: "2vw",
                }}
              >
                {descriptionState.map((item, key) => (
                  <AboutStateButton
                    title={item.title}
                    isActive={key === ActiveIndex ? true : false}
                    onClick={() => {
                      setPictureIndex(key);
                      handleChangeData(key);
                    }}
                  />
                ))}
              </Stack>
            </Stack>

            <motion.div
              ref={scope}
              style={{
                color: "white",
                textAlign: "left",
                maxWidth: "40vw",
              }}
            >
              <div>{descriptionState[ActiveIndex].description}</div>
            </motion.div>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default AboutPage;
