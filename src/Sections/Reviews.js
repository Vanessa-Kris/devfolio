import { Box, Typography, Divider } from "@mui/material";
import React from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function Reviews() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <Box sx={{ m: { md: 15, xs: 1 }, pt: 7, color: "#e6cebd" }}>
      <Typography variant="h6" sx={{ my: { md: 5, xs: 5 }, fontWeight: 600 }}>
        What People Are Saying
      </Typography>
      <Typography variant="h3" sx={{ my: { md: 3, xs: 3 }, color: "#fff" }}>
        Reviews
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

      <ul ref={ref} className="list2">
        <li className="listitems2">
          <Typography variant="h5" sx={{ fontSize: "17px" }}>
            "I help ambitious businesses like yours generate more profits by
            building awareness, driving web traffic, connecting with customers
            and growing overall sales."
          </Typography>
          <Typography sx={{ color: "#fff", pt: 4, pb: 1 }}>
            Fru Promise
          </Typography>
          <Typography variant="h5" sx={{ fontSize: "17px" }}>
            Co Worker
          </Typography>
        </li>
        <li className="listitems2">
          <Typography variant="h5" sx={{ fontSize: "17px" }}>
            " I help ambitious businesses like yours generate more profits by
            building awareness, driving web traffic, connecting with customers
            and growing overall sales."
          </Typography>
          <Typography sx={{ color: "#fff", pt: 4, pb: 1 }}>
            Viola Dave
          </Typography>
          <Typography variant="h5" sx={{ fontSize: "17px" }}>
            Imaginary Friend
          </Typography>
        </li>
        <li className="listitems2">
          <Typography variant="h5" sx={{ fontSize: "17px" }}>
            " I help ambitious businesses like yours generate more profits by
            building awareness, driving web traffic, connecting with customers
            and growing overall sales."
          </Typography>
          <Typography sx={{ color: "#fff", pt: 4, pb: 1 }}>Clinton</Typography>
          <Typography variant="h5" sx={{ fontSize: "17px" }}>
            Imaginary Friend
          </Typography>
        </li>
        <li className="listitems2">
          <Typography variant="h5" sx={{ fontSize: "17px" }}>
            " I help ambitious businesses like yours generate more profits by
            building awareness, driving web traffic, connecting with customers
            and growing overall sales."
          </Typography>
          <Typography sx={{ color: "#fff", pt: 4, pb: 1 }}>Celia</Typography>
          <Typography variant="h5" sx={{ fontSize: "17px" }}>
            Imaginary Friend
          </Typography>
        </li>
      </ul>
    </Box>
  );
}
