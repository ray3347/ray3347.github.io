import { Stack, Typography } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import { motion } from "framer-motion";
import HomeBanner from "../../components/home_banner/HomeBanner";
import ProjectsBanner from "../../components/projects_banner/ProjectsBanner";
import AboutBanner from "../../components/about_banner/AboutBanner";

function Home() {
  return (
    <motion.div layout>
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
