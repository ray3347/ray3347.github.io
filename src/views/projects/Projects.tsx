import { Stack } from "@mui/material";
import { useState } from "react";
import { IProjectTypes } from "./interfaces";
import { motion} from "framer-motion";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";
import Contents from "./Contents";
import { contentData } from "./constants";

function Projects(){
    const [activeData, setActiveData] = useState<number>(0);
    const [projectType, setProjectType]=useState<IProjectTypes>();
    
    return(
        <Stack 
        className="bg-backgroundGlow bg-no-repeat bg-cover"
        sx={{
            height: "100vh",
            // backgroundColor: "black",
            color: "white"
        }}>
            <Stack sx={{
                top:"0"
            }}>
            <Navbar/>
            </Stack>
            
            <motion.div style={{
                padding: "5vw",
                paddingTop: "7vh",
                paddingBottom: "7vh",
                // flexDirection: "row",
                // alignItems: "center"
            }}>
                <Stack sx={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                <Card content={<Contents data={contentData} activeIndex={setActiveData}/>} width="55vw" height="70vh" paddingY="10vh"/>
                {/* <Card content={<Contents data={contentData}/>} width="30vw"/> */}
                
                </Stack>
                
            </motion.div>
        </Stack>
    );
}

export default Projects;