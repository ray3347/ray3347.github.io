import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import HomeBanner from "../../components/home_banner/HomeBanner";
import ProjectsBanner from "../../components/projects_banner/ProjectsBanner";
import AboutBanner from "../../components/about_banner/AboutBanner";
import { Outlet } from "react-router-dom";
import { useEffect, useRef } from "react";
import ProjectContent from "./components/ProjectContent";
// import { Helmet } from 'react-helmet';

function Home() {
  // framer onScroll hook -> scale change when scroll
  const ref = useRef(null);
  const scroll = useScroll({
    target: ref,
  });
  const parallax = useTransform(scroll.scrollYProgress, [1, 0], [1, 0.7]);

  // mui theme hook -> for responsive mobile design
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    document.title = "Ansel's Website";
  }, []);
  return (
    <motion.div
      layout
      style={{
        backgroundColor: "black",
        height: "100vh",
        paddingTop: "5vh",
      }}
    >
      <Stack>
        <HomeBanner />
        <motion.div
          className="bg-backgroundGlow"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "repeat-x",
            height: "80vh",
            width: "100%",
            padding: "5vw",
            alignItems: "center",
            paddingTop: "15vh",
            paddingBottom: "15vh"
          }}
        >
          {/* <ProjectContent/> */}
          <motion.div
            ref={ref}
            style={{
              scale: parallax,
            }}
          >
            <motion.div
              style={{
                gap: "1em",
                textAlign: isMdScreen ? "center" : "left",
                flexDirection: "column",
                alignItems: isMdScreen ? "center" : "flex-start",
                justifyContent: isMdScreen ? "center" : "flex-start",
              }}
            >
              <motion.div
                style={{
                  fontSize: isMdScreen ? "5vw" : "3vw",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Various Works
              </motion.div>
              <motion.div
                style={{
                  textAlign: "left",
                  fontSize: isMdScreen ? "3.5vw" : "1.5vw",
                  fontWeight: "normal",
                  color: "white",
                  opacity: "0.5",
                  maxWidth: isMdScreen ? "70vw" : "40vw",
                  margin: isMdScreen ? "auto" : "none",
                }}
              >
                Collection of my past projects in various fields such as
                software development, UI/UX, and many more! Be it personal
                projects or in collaboration with other brilliant people, and
                many more will be published in the near future!
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* <ProjectsBanner /> */}
        <AboutBanner />
      </Stack>
    </motion.div>
  );
}

export default Home;
