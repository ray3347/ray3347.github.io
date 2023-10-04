import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { IProjectTypes } from "./interfaces";
import { motion } from "framer-motion";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";
import Contents from "./Contents";
import { contentData, imagesData } from "./constants";
import ProjectVisualization from "./ProjectVisualization";

function Projects() {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [activeData, setActiveData] = useState<number>(0);
  const [projectType, setProjectType] = useState<IProjectTypes>();

  useEffect(()=>{
    document.title = "Projects - Ansel's Website";
  },[])

  return (
    <Stack
      className="bg-backgroundGlow bg-no-repeat bg-cover"
      sx={{
        height: "100vh",
        // backgroundColor: "black",
        color: "white",
        paddingTop: "5vh"
      }}
    >

      <motion.div
        style={{
          padding: "5vw",
          paddingTop: "7vh",
          paddingBottom: "7vh",
          // flexDirection: "row",
          // alignItems: "center"
        }}
      >
        <Stack
          sx={{
            width: "100%",
            flexDirection: isMdScreen ? "column-reverse": "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: isMdScreen ? "5vh" : "0px",
          }}
        >
          <Card
            content={
              <Contents data={contentData} activeIndex={setActiveData} />
            }
            width= {isMdScreen ? "80vw": "55vw"}
            height={isMdScreen ? "30vh": "70vh"}
            paddingY={isMdScreen ? "5vh": "10vh"}
            perspective={1200}
          />
          {/* <Card content={<Contents data={contentData}/>} width="30vw"/> */}
          {/* <Card
            content={
              <ProjectVisualization src={imagesData} activeIndex={activeData} />
            }
            styleProps={{
              width: "30vw",
              height: "75vh",
              perspective: 800,
              paddingTop: "none",
              paddingBottom: "none",
              padding: "none",
              border: "none",
              boxShadow: "none",
            }}
          /> */}
          <ProjectVisualization src={imagesData} activeIndex={activeData} />
          
        </Stack>
      </motion.div>
    </Stack>
  );
}

export default Projects;
