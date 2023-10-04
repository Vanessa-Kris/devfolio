import { Box, Divider } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box sx={{ m: { md: 10, xs: 1 }, pt: 7, color: "#e6cebd" }}>
      <Divider
        flexItem
        sx={{ bgcolor: "#e6cebd", width: { md: "50%", xs: "100%" }, my: 2 }}
      />
      Copyright © 2023. All rights reserved. <br />
      Developed by Vanessa Kris
    </Box>
  );
}
