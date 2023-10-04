import { Box, Typography, Divider } from "@mui/material";
import React from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function Portfolio() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <Box sx={{ m: { md: 15, xs: 1 }, pt: 7, color: "#e6cebd" }}>
      <Typography variant="h6" sx={{ my: { md: 5, xs: 5 }, fontWeight: 600 }}>
        PORTFOLIO
      </Typography>
      <Typography variant="h3" sx={{ my: { md: 3, xs: 3 }, color: "#fff" }}>
        Featured Projects
        <Divider
          flexItem
          sx={{ bgcolor: "#e6cebd", width: { md: "20%", xs: "40%" }, my: 2 }}
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
          <Typography sx={{ color: "#fff" }}>Stunners Galleria</Typography>
        </li>
        <li className="listitems">
          <img src="/3.png" alt="" />
          <Typography variant="h5" sx={{ fontSize: "17px" }}>
            Static Kitchen web
          </Typography>
          <Typography sx={{ color: "#fff" }}>Aroma Kitchen</Typography>
        </li>
        <li className="listitems">
          <img src="/2.png" alt="" />
          <Typography variant="h5" sx={{ fontSize: "17px" }}>
            Fashion blog web
          </Typography>
          <Typography sx={{ color: "#fff" }}>Stunners Galleria Blog</Typography>
        </li>
        <li className="listitems">
          <img src="/4.png" alt="" />
          <Typography variant="h5" sx={{ fontSize: "17px" }}>
            SMS Messaging web
          </Typography>
          <Typography sx={{ color: "#fff" }}>Deku Messaging</Typography>
        </li>
        <li className="listitems">
          <img src="/5.png" alt="" />
          <Typography variant="h5" sx={{ fontSize: "17px" }}>
            web (maintainer)
          </Typography>
          <Typography sx={{ color: "#fff" }}>SMSWithoutBorders</Typography>
        </li>
        <li className="listitems">
          <img src="/6.png" alt="" />
          <Typography variant="h5" sx={{ fontSize: "17px" }}>
            Online training web
          </Typography>
          <Typography sx={{ color: "#fff" }}>
            Career Navigator Academy
          </Typography>
        </li>
        <li className="listitems">
          <img src="/7.png" alt="" />
          <Typography variant="h5" sx={{ fontSize: "17px" }}>
            Portfolio management web
          </Typography>
          <Typography sx={{ color: "#fff" }}>Impact Investment</Typography>
        </li>
        <li className="listitems">
          <img src="/8.png" alt="" />
          <Typography variant="h5" sx={{ fontSize: "17px" }}>
            Dev Portfolio (v2)
          </Typography>
          <Typography sx={{ color: "#fff" }}>DevFolio</Typography>
        </li>
      </ul>
    </Box>
  );
}
