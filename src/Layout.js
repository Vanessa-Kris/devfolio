import { Box, Grid } from "@mui/material";
import "./App.css";
import React, { Fragment } from "react";
import Divider from "@mui/material/Divider";

export default function Layout(props) {
  return (
    <Fragment>
      <Box sx={{ display: { md: "block", xs: "none" } }}>
        <Grid container columnSpacing={2}>
          <Grid item md={7} xs={12}>
            {props.leftSection}
          </Grid>
          <Divider
            flexItem
            orientation="vertical"
            sx={{ bgcolor: "#a55f71" }}
          />
          <Grid item md={4} position="sticky">
            {props.nav}
            {props.rightSection}
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: { md: "none", xs: "block" } }}>
        {props.nav}
        {props.rightSection}
        {props.leftSection}
      </Box>
      {props.footer}
    </Fragment>
  );
}
