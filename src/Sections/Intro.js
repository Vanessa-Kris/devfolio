import { Box, Typography, Divider } from "@mui/material";
import React from "react";

export default function Intro() {
  return (
    <Box sx={{ m: { md: 15, xs: 1 }, color: "#e6cebd" }}>
      <Typography variant="h6" sx={{ my: { md: 5, xs: 5 }, fontWeight: 600 }}>
        INTRODUCTION
      </Typography>
      <Typography variant="h3" sx={{ my: { md: 3, xs: 3 }, color: "#fff" }}>
        UI/UX Designer
        <Divider
          flexItem
          sx={{ bgcolor: "#e6cebd", width: { md: "20%", xs: "40%" }, my: 2 }}
        />
      </Typography>

      <Typography>
        I design and develop services for customers of all sizes, specializing
        in creating stylish, modern websites, web services and online stores.
      </Typography>
      <Box sx={{ mt: 7 }} component="img" src="/name.png" />
    </Box>
  );
}
