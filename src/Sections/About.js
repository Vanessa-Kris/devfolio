import { Box, Typography, Divider, Grid, List, ListItem } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function About() {
  return (
    <Box sx={{ m: { md: 15, xs: 1 }, pt: 7, color: "#e6cebd" }}>
      <Typography variant="h6" sx={{ my: { md: 5, xs: 5 }, fontWeight: 600 }}>
        ABOUT ME
      </Typography>
      <Typography variant="h3" sx={{ my: { md: 3, xs: 3 }, color: "#fff" }}>
        Biography
        <Divider
          flexItem
          sx={{ bgcolor: "#e6cebd", width: { md: "20%", xs: "40%" }, my: 2 }}
        />
      </Typography>

      <Typography>
        I'm a Freelancer Front-end Developer with over 12 years of experience.
        I'm from San Francisco. I code and create web elements for amazing
        people around the world. I like work with new people. New people are new
        experiences.
      </Typography>

      <Grid container sx={{ my: 5 }}>
        <Grid item md={3} xs={4}>
          <List>
            <ListItem> NAME </ListItem>
            <ListItem> BIRTHDAY </ListItem>
            <ListItem> AGE </ListItem>
            <ListItem> ADDRESS </ListItem>
            <ListItem> NATIONALITY </ListItem>
            <ListItem> EMAIL </ListItem>
            <ListItem> FACEBOOK </ListItem>
            <ListItem> TWITTER X</ListItem>
          </List>
        </Grid>
        <Grid item md={4} xs={8}>
          <List>
            <ListItem> Vanessa Christopher Igwe </ListItem>
            <ListItem> 10th August 2000 </ListItem>
            <ListItem> 23 Years </ListItem>
            <ListItem> Cameroon </ListItem>
            <ListItem> Nigerian </ListItem>
            <ListItem> vanessaigwe1@gmail.com </ListItem>
            <ListItem> Vanessa Christopher Igwe </ListItem>
            <ListItem> Vanessa Christopher Igwe </ListItem>
          </List>
        </Grid>
        <Grid item md={5} xs={12}>
          <Box
            justifyContent="center"
            // display="flex"
            textAlign="center"
            sx={{ border: "1px solid #e6cebd", borderRadius: "10px", m: 2 }}
          >
            <FontAwesomeIcon
              style={{ fontSize: "60px", padding: 50 }}
              icon={faDownload}
              bounce
              color="#e6cebd"
            />{" "}
            <br />
            <Typography variant="body">Download CV</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
