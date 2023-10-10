import { useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";

function ProjectContent(){
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  
    return(
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
              fontSize: isMdScreen ? "3.5vw" :"1.5vw",
              fontWeight: "normal",
              color: "white",
              opacity: "0.5",
              maxWidth: isMdScreen ? "70vw":"40vw",
              margin: isMdScreen ? "auto" : "none"
            }}
          >
            Collection of my past projects in various fields such as software
            development, UI/UX, and many more! Be it personal projects or in
            collaboration with other brilliant people, and many more will be
            published in the near future!
          </motion.div>
        </motion.div>
    );
}

export default ProjectContent;