import { Box, Container, Typography, Grid } from "@mui/material";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Name() {
  return (
    <Container
      sx={{
        my: 5,
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#e6cebd",
      }}
    >
      <Box sx={{ p: 1, border: "1px solid #a55f71", borderRadius: "10px" }}>
        <Box sx={{ p: 2, border: "1px solid #a55f71", borderRadius: "10px" }}>
          <img
            alt=""
            src="https://img.freepik.com/free-photo/delicious-ice-cream-with-topping_23-2150735486.jpg?size=626&ext=jpg&ga=GA1.2.1563347392.1696364341&semt=ais"
          />
          <Typography textAlign="center" variant="h6" sx={{ m: 2 }}>
            HEY THERE! I AM A
          </Typography>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            display="flex"
            sx={{ m: 2 }}
          >
            <Grid item md={2} xs={2}>
              <Typography variant="h5">[</Typography>
            </Grid>
            <Grid item md={8} xs={8}>
              <Box textAlign="center">
                <TypeAnimation
                  sequence={[
                    "Web Developer",
                    500,
                    "Freelancer",
                    500,
                    "UI/UX Engineer",
                    500,
                    "Open Source Baddie",
                    500,
                  ]}
                  style={{ fontSize: "20px" }}
                  speed={40}
                  repeat={Infinity}
                />
              </Box>
            </Grid>
            <Grid item md={2} xs={2}>
              <Typography variant="h5">]</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
