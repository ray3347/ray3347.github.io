import { Button, Stack, Typography } from "@mui/material";
import { MotionValue, motion, useWillChange } from "framer-motion";
import "../../index.css";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { pageType } from "./constants";

function Navbar() {
  const [activePage, setActivePage] = useState<string>("");
  const [pageHover, setPageHover] = useState<string>("");

  useEffect(() => {
    setActivePage(document.title)
  }, []);

  return (
    <Stack>
      <Stack
        // className="w-full"
        sx={{
          margin: "auto",
          position: "fixed",
          top: 0,
          backgroundColor: "black",
          width: "100%",
          zIndex: 10,
        }}
      >
        <Stack
          sx={{
            padding: "10px",
            // paddingBottom: "0px",
            justifyContent: "center",
            flexDirection: "row",
            gap: "5em",
            width: "100%",
          }}
        >
          <Link to="/">
            <motion.div
              style={{
                gap: "0.5vh",
              }}
              exit={{ y: 5 }}
              whileHover={{ scale: 1.1, y: -5, opacity: 1, cursor: "pointer" }}
              onHoverStart={() => {
                setPageHover(pageType.homePage);
              }}
              onHoverEnd={() => {
                setPageHover("");
              }}
              onClick={() => {
                setActivePage(pageType.homePage);
              }}
            >
              <motion.div style={{ color: "white", fontWeight: "bold" }}>
                Home
              </motion.div>
              <motion.div
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  height: "0.2vh",
                  opacity:
                    pageHover === pageType.homePage ||
                    activePage === pageType.homePage
                      ? 1
                      : 0,
                }}
              />
            </motion.div>
          </Link>

          <Link to="/projects">
            <motion.div
              style={{
                gap: "0.5vh",
              }}
              exit={{ y: 5 }}
              whileHover={{ scale: 1.1, y: -5, opacity: 1, cursor: "pointer" }}
              onHoverStart={() => {
                setPageHover(pageType.projectsPage);
              }}
              onHoverEnd={() => {
                setPageHover("");
              }}
              onClick={() => {
                setActivePage(pageType.projectsPage);
              }}
            >
              <span style={{ color: "white", fontWeight: "bold" }}>
                Projects
              </span>
              <motion.div
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  height: "0.2vh",
                  opacity:
                    pageHover === pageType.projectsPage ||
                    activePage === pageType.projectsPage
                      ? 1
                      : 0,
                }}
              />
            </motion.div>
          </Link>

          <Link to="/about-me">
          <motion.div
              style={{
                gap: "0.5vh",
              }}
              exit={{ y: 5 }}
              whileHover={{ scale: 1.1, y: -5, opacity: 1, cursor: "pointer" }}
              onHoverStart={() => {
                setPageHover(pageType.aboutPage);
              }}
              onHoverEnd={() => {
                setPageHover("");
              }}
              onClick={() => {
                setActivePage(pageType.aboutPage);
              }}
            >
              <span style={{ color: "white", fontWeight: "bold" }}>
                About Me
              </span>
              <motion.div
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  height: "0.2vh",
                  opacity:
                    pageHover === pageType.aboutPage ||
                    activePage === pageType.aboutPage
                      ? 1
                      : 0,
                }}
              />
            </motion.div>
          </Link>
        </Stack>
        <motion.div
          className="bg-glowNavbar w-full bg-repeat-x h-1 overflow-hidden"
          style={{
            backgroundPosition: "0% 50%",
            animation: "moveBackground 3s linear infinite",
          }}
        ></motion.div>
      </Stack>
      <Stack>
        <Outlet />
      </Stack>
    </Stack>
  );
}

export default Navbar;
