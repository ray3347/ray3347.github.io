import { Stack } from "@mui/material";
import { IAboutPictureProps } from "./interfaces";
import { useEffect } from "react";
import { useAnimate } from "framer-motion";

function AboutPicture(props: IAboutPictureProps) {
  const [scope, setAnimate] = useAnimate();

  const enterAnimate = () => {
    setAnimate(scope.current, { opacity: 0, x: -10 });
    // setAnimate("div", { opacity: 0, x: -10 });
  };

  const exitAnimate = () => {
    setAnimate(scope.current, { opacity: 1, x: 0 });
    // setAnimate("div", { opacity: 1, x: 0 });
  };

  useEffect(() => {
    enterAnimate();

    setTimeout(() => {
      exitAnimate();
    }, 200);
  }, [props.activeIndex]);
  return (
    <Stack
      ref={scope}
      className={props.picture}
      sx={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "25vw",
        height: "70vh",
        borderRadius: "40px",
        border: "1px white solid",
      }}
    ></Stack>
  );
}

export default AboutPicture;
