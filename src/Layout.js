import React, { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import MouseMotionCircle from "./Components/Motion";

export default function Layout(props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Fragment>
      <Box sx={{ display: { md: "block", xs: "none" } }}>
        <Grid container columnSpacing={2}>
          <Grid item md={scrollPosition > 100 ? 8 : 7} xs={12}>
            {props.leftSection}
            {props.footer}
          </Grid>
          <Divider
            flexItem
            orientation="vertical"
            sx={{ bgcolor: "#a55f71" }}
          />
          <Box
            sx={{
              position: "fixed",
              right: 0,
              pr: 4,
            }}
          >
            {props.nav}
          </Box>

          <Grid item md={scrollPosition > 100 ? 3 : 4} className="sticky-grid">
            {props.rightSection}
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: { md: "none", xs: "block" } }}>
        {props.nav}
        {props.rightSection}
        {props.leftSection}
        {props.footer}
      </Box>
      <MouseMotionCircle x={mousePosition.x} y={mousePosition.y} />
    </Fragment>
  );
}
