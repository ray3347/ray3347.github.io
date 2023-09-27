import { Button, Stack, Typography } from "@mui/material";
import { MotionValue, motion, useWillChange } from "framer-motion";
import "../../index.css";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <Stack
      className="w-full"
      sx={{
        margin: "auto",
        position: "sticky",
        top: 0,
        backgroundColor: "black",
        zIndex: 3,
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
            exit={{ y: 5 }}
            whileHover={{ scale: 1.1, y: -5, opacity: 1, cursor: "pointer" }}
          >
            {/* <Outlet/> */}
            <span style={{ color: "white", fontWeight: "bold" }}>Home</span>
          </motion.div>
        </Link>

        {/* <Stack
          sx={{
            width: "5em",
          }}
        >
          <Button>Projects</Button>
        </Stack> */}
        <Link to="/projects">
          <motion.div
            exit={{ y: 5 }}
            whileHover={{ scale: 1.1, y: -5, opacity: 1, cursor: "pointer" }}
          >
            <span style={{ color: "white", fontWeight: "bold" }}>Projects</span>
          </motion.div>
        </Link>

        {/* <Stack
          sx={
            {
              // width: "5em",
            }
          }
        >
          <Button>About Author</Button>
        </Stack> */}
        <Link to="/about-me">
          <motion.div
            exit={{ y: 5 }}
            whileHover={{ scale: 1.1, y: -5, opacity: 1, cursor: "pointer" }}
          >
            <span style={{ color: "white", fontWeight: "bold" }}>About Me</span>
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
  );
}

export default Navbar;
