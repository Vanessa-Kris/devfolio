import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Box } from "@mui/material";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav>
      <Box
        sx={{
          justifyContent: "flex-end",
          display: "flex",
          pr: { md: 0, xs: 2 },
          pt: { md: 4, xs: 2 },
        }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <FontAwesomeIcon icon={faBarsStaggered} color="#e6cebd" />
        </IconButton>
        <Menu
          PaperProps={{
            sx: {
              backgroundColor: "#171717",
              color: "#e6cebd", // Set the background color of the dialog content
            },
          }}
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>About</MenuItem>
          <MenuItem onClick={handleClose}>Experience</MenuItem>
          <MenuItem onClick={handleClose}>Projects</MenuItem>
          <MenuItem onClick={handleClose}>Reviews</MenuItem>
          <MenuItem onClick={handleClose}>Blogs</MenuItem>
          <MenuItem onClick={handleClose}>Contact</MenuItem>
          <Box display="flex">
            <MenuItem
              component="a"
              href="https://github.com/Vanessa-Kris"
              target="_blank"
            >
              <FontAwesomeIcon
                style={{ fontSize: "30px", marginRight: 30 }}
                icon={faGithub}
                color="#a55f71"
              />
            </MenuItem>
            <MenuItem
              component="a"
              href="https://www.linkedin.com/in/vanessachristopherigwe"
              target="_blank"
            >
              <FontAwesomeIcon
                style={{ fontSize: "30px", marginRight: 30 }}
                icon={faLinkedin}
                color="#a55f71"
              />
            </MenuItem>

            <MenuItem
              component="a"
              href="https://twitter.com/Mini_on_Nessa"
              target="_blank"
            >
              <FontAwesomeIcon
                style={{ fontSize: "30px", marginRight: 30 }}
                icon={faTwitter}
                color="#a55f71"
              />
            </MenuItem>

            <MenuItem
              component="a"
              href="https://facebook.com/vanesssachrsitopherigwe/"
              target="_blank"
            >
              <FontAwesomeIcon
                style={{ fontSize: "30px", marginRight: 30 }}
                icon={faFacebook}
                color="#a55f71"
              />
            </MenuItem>

            <MenuItem
              component="a"
              href="https://www.instagram.com/vanessachristopherigwe/"
              target="_blank"
            >
              <FontAwesomeIcon
                style={{ fontSize: "30px", marginRight: 30 }}
                icon={faInstagram}
                color="#a55f71"
              />
            </MenuItem>
          </Box>
        </Menu>
      </Box>
    </nav>
  );
}
