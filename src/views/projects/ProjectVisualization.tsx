import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { motion, useAnimate } from "framer-motion";
import { IContentImages } from "./interfaces";
import { useEffect, useState } from "react";

function ProjectVisualization(props: IContentImages) {
  // const [activeImage, setActiveImage] = useState(props.activeIndex);
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [scope, setAnimate] = useAnimate();

  const enterAnimate = () => {
    setAnimate(scope.current, { opacity: -3,scale: 1.2, y: -30, rotateY: -500 });
  };

  const exitAnimate = () => {
    setAnimate(scope.current, { opacity: 1, scale: 1, y: 0, rotateY: 0 },{duration: 1});
  };

  useEffect(()=>{
    
    // setTimeout(()=>{
    //     setAnimate(scope.current, {scale: 1.1, y: -15, rotateY : 500}, {duration: 1});
    //     // setTimeout(exitAnimate, 300);
    //     exitAnimate();

    // }, 100);
    enterAnimate();

    setTimeout(()=>{        
        exitAnimate();
    }, 100);
  },[props.activeIndex]);

  return (
    <motion.div
      ref={scope}
      className={props.src[props.activeIndex]}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: isMdScreen ? "30vh": "75vh",
        width: isMdScreen ? "70vw": "30vw",
        y: isMdScreen ? -1500 : 0,
        opacity: "100%",
      }}
    ></motion.div>
  );
}

export default ProjectVisualization;
