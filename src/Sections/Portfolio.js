import { Box, Typography, Divider } from "@mui/material";
import React from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function Portfolio() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <Box sx={{ m: { md: 15, xs: 1 }, pt: 7, color: "#d7d0d7" }}>
      <Typography variant="h6" sx={{ my: { md: 5, xs: 5 }, fontWeight: 600 }}>
        PORTFOLIO
      </Typography>
      <Typography variant="h3" sx={{ my: { md: 3, xs: 3 }, color: "#fff" }}>
        Featured Projects
        <Divider
          flexItem
          sx={{ bgcolor: "#d7d0d7", width: { md: "20%", xs: "40%" }, my: 2 }}
        />
      </Typography>

      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>

      <ul ref={ref} className="list">
        <li className="listitems">
          <img src="/1.png" alt="" />
          <Typography variant="h5" sx={{ fontSize: "17px" }}>
            Fashion E-commerce web
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://stunnersgalleria.com"
            sx={{ color: "#fff", fontSize: "25px" }}
          >
            Stunners Galleria
          </Typography>
        </li>
        <li className="listitems">
          <img src="/3.png" alt="" />
          <Typography variant="h5" sx={{ fontSize: "17px" }}>
            Static Kitchen web
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://aroma-kitchen.netlify.app/"
            sx={{ color: "#fff", fontSize: "25px" }}
          >
            Aroma Kitchen
          </Typography>
        </li>
        <li className="listitems">
          <img src="/2.png" alt="" />
          <Typography variant="h5" sx={{ fontSize: "17px" }}>
            Fashion blog web
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://blog.stunnersgalleria.com/"
            sx={{ color: "#fff", fontSize: "25px" }}
          >
            Stunners Galleria Blog
          </Typography>
        </li>
        <li className="listitems">
          <img src="/4.png" alt="" />
          <Typography variant="h5" sx={{ fontSize: "17px" }}>
            SMS Messaging web
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/deku-messaging/Deku-Web-FE"
            sx={{ color: "#fff", fontSize: "25px" }}
          >
            Deku Messaging
          </Typography>
        </li>
        <li className="listitems">
          <img src="/5.png" alt="" />
          <Typography variant="h5" sx={{ fontSize: "17px" }}>
            web (maintainer)
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://smswithoutborders.com/"
            sx={{ color: "#fff", fontSize: "25px" }}
          >
            SMSWithoutBorders
          </Typography>
        </li>
        <li className="listitems">
          <img src="/6.png" alt="" />
          <Typography variant="h5" sx={{ fontSize: "17px" }}>
            Online training web
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="/"
            sx={{ color: "#fff", fontSize: "25px" }}
          >
            Career Navigator Academy
          </Typography>
        </li>
        <li className="listitems">
          <img src="/7.png" alt="" />
          <Typography variant="h5" sx={{ fontSize: "17px" }}>
            Portfolio management web
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://impact-investment.netlify.app/"
            sx={{ color: "#fff", fontSize: "25px" }}
          >
            Impact Investment
          </Typography>
        </li>
        <li className="listitems">
          <img src="/8.png" alt="" />
          <Typography variant="h5" sx={{ fontSize: "17px" }}>
            Dev Portfolio (v2)
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://vanessa-kris.github.io/"
            sx={{ color: "#fff", fontSize: "25px" }}
          >
            DevFolio
          </Typography>
        </li>
      </ul>
    </Box>
  );
}
