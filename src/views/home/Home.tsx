import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import { motion } from "framer-motion";
import HomeBanner from "../../components/home_banner/HomeBanner";
import ProjectsBanner from "../../components/projects_banner/ProjectsBanner";
import AboutBanner from "../../components/about_banner/AboutBanner";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <motion.div layout style={{
      backgroundColor: "black",
      height: "100vh",
    }}>
      <Navbar />
      <Stack>
        <HomeBanner/>
        <ProjectsBanner/>
        <AboutBanner/>
      </Stack>
    </motion.div>
  );
}

export default Home;
