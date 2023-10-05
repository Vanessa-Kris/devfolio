import React from "react";
import { motion } from "framer-motion";

const MouseMotionCircle = ({ x, y }) => {
  return (
    <motion.div
      className="mouse-motion-circle"
      style={{
        position: "fixed",
        top: y,
        left: x,
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        border: "3px solid #a55f71",
        display: { md: "block", xs: "none" },
      }}
    ></motion.div>
  );
};
export default MouseMotionCircle;
