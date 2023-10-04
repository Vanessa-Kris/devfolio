import { Box, Typography, Divider, Grid, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

export default function Contact() {
  return (
    <Box sx={{ m: { md: 15, xs: 1 }, pt: 7, color: "#e6cebd" }}>
      <Typography variant="h6" sx={{ my: { md: 5, xs: 5 }, fontWeight: 600 }}>
        CONTACT
      </Typography>
      <Typography variant="h3" sx={{ my: { md: 3, xs: 3 }, color: "#fff" }}>
        Get In Touch
        <Divider
          flexItem
          sx={{ bgcolor: "#e6cebd", width: { md: "20%", xs: "40%" }, my: 2 }}
        />
      </Typography>

      <Typography sx={{ pb: 3 }}>
        If you have any suggestion, project, or even want to say “hello,” please
        fill out the form below, and I will reply to you shortly.
      </Typography>

      <Grid container columnSpacing={2}>
        <Grid item md={6} xs={12} sx={{ py: 2 }}>
          Name* <br />
          <TextField
            fullWidth
            id="outlined-basic"
            sx={{ border: "1px solid #a55f71" }}
          />
        </Grid>
        <Grid item md={6} xs={12} sx={{ py: 2 }}>
          Email* <br />
          <TextField
            fullWidth
            id="outlined-basic"
            variant="outlined"
            sx={{ border: "1px solid #a55f71" }}
          />
        </Grid>
        <Grid item md={12} xs={12} sx={{ py: 2 }}>
          Number <br />
          <TextField
            fullWidth
            id="outlined-basic"
            variant="outlined"
            sx={{ border: "1px solid #a55f71" }}
          />
        </Grid>
        <Grid item md={12} xs={12} sx={{ py: 2 }}>
          Message* <br />
          <TextField
            fullWidth
            rows={4}
            id="outlined-basic"
            variant="outlined"
            sx={{ border: "1px solid #a55f71" }}
          />
        </Grid>
      </Grid>

      <Box sx={{ py: 7 }}>
        <Typography variant="h5" sx={{ fontSize: "17px" }}>
          Adress
        </Typography>

        <Typography variant="h4">
          Sonac Street bamenda, Cameroon ( Open to relocating )
        </Typography>

        <Typography variant="h5" sx={{ fontSize: "17px", mt: 5 }}>
          Email
        </Typography>

        <Typography variant="h4" sx={{ mb: 5 }}>
          Vanessaigwe1@gmail.com
        </Typography>

        <FontAwesomeIcon
          style={{ fontSize: "30px", marginRight: 30 }}
          icon={faGithub}
          color="#e6cebd"
        />
        <FontAwesomeIcon
          style={{ fontSize: "30px", marginRight: 30 }}
          icon={faLinkedin}
          color="#e6cebd"
        />
        <FontAwesomeIcon
          style={{ fontSize: "30px", marginRight: 30 }}
          icon={faTwitter}
          color="#e6cebd"
        />
        <FontAwesomeIcon
          style={{ fontSize: "30px", marginRight: 30 }}
          icon={faFacebook}
          color="#e6cebd"
        />
        <FontAwesomeIcon
          style={{ fontSize: "30px", marginRight: 30 }}
          icon={faInstagram}
          color="#e6cebd"
        />
      </Box>
    </Box>
  );
}
