import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, CardContent } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Experience() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ m: { md: 15, xs: 1 }, pt: 7, color: "#e6cebd" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          component="text"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{ color: "#e6cebd", fontSize: { md: "20px", xs: "15px" } }}
            label="Experience"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              color: "#e6cebd",
              fontSize: { md: "20px", xs: "15px" },
              mx: { md: 2, xs: 0 },
            }}
            label="Education"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ color: "#e6cebd", fontSize: { md: "20px", xs: "15px" } }}
            label="Skills"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Card sx={{ p: 2, my: 2, bgcolor: "#232323", color: "#e6cebd" }}>
          <Typography sx={{ px: 2, color: "#fff" }} variant="h5">
            Company{" "}
            <span style={{ fontSize: "15px", color: "#e6cebd" }}>
              ( 1998 - Today )
            </span>
          </Typography>
          <Typography sx={{ px: 2, pt: 2, color: "#fff" }} variant="h4">
            Jr. Front-end Engineer
          </Typography>
          <CardContent sx={{ fontSize: "18px" }}>
            Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardContent>
        </Card>
        {/*  */}
        <Card sx={{ p: 2, my: 2, bgcolor: "#232323", color: "#e6cebd" }}>
          <Typography sx={{ px: 2, color: "#fff" }} variant="h5">
            Company{" "}
            <span style={{ fontSize: "15px", color: "#e6cebd" }}>
              ( 1998 - Today )
            </span>
          </Typography>
          <Typography sx={{ px: 2, pt: 2, color: "#fff" }} variant="h4">
            Jr. Front-end Engineer
          </Typography>
          <CardContent sx={{ fontSize: "18px" }}>
            Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardContent>
        </Card>
        {/*  */}
        <Card sx={{ p: 2, my: 2, bgcolor: "#232323", color: "#e6cebd" }}>
          <Typography sx={{ px: 2, color: "#fff" }} variant="h5">
            Company{" "}
            <span style={{ fontSize: "15px", color: "#e6cebd" }}>
              ( 1998 - Today )
            </span>
          </Typography>
          <Typography sx={{ px: 2, pt: 2, color: "#fff" }} variant="h4">
            Jr. Front-end Engineer
          </Typography>
          <CardContent sx={{ fontSize: "18px" }}>
            Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardContent>
        </Card>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Card sx={{ p: 2, my: 2, bgcolor: "#232323", color: "#e6cebd" }}>
          <Typography sx={{ px: 2, color: "#fff" }} variant="h5">
            High Scool{" "}
            <span style={{ fontSize: "15px", color: "#e6cebd" }}>
              ( 1998 - Today )
            </span>
          </Typography>
          <Typography sx={{ px: 2, pt: 2, color: "#fff" }} variant="h4">
            Sciences
          </Typography>
          <CardContent sx={{ fontSize: "18px" }}>
            Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardContent>
        </Card>

        {/*  */}
        <Card sx={{ p: 2, my: 2, bgcolor: "#232323", color: "#e6cebd" }}>
          <Typography sx={{ px: 2, color: "#fff" }} variant="h5">
            RIVERS STATE UNIVERSITY OF SCIENCE AND TECHNOLOGY{" "}
            <span style={{ fontSize: "15px", color: "#e6cebd" }}>
              ( 1998 - Today )
            </span>
          </Typography>
          <Typography sx={{ px: 2, pt: 2, color: "#fff" }} variant="h4">
            Biology
          </Typography>
          <CardContent sx={{ fontSize: "18px" }}>
            Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardContent>
        </Card>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Box>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            HTML
          </Typography>
          <LinearProgress variant="determinate" value={95} />
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            CSS
          </Typography>
          <LinearProgress variant="determinate" value={80} />
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            Bootstrap
          </Typography>
          <LinearProgress variant="determinate" value={80} />
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            React
          </Typography>
          <LinearProgress variant="determinate" value={70} />
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            JavaScript
          </Typography>
          <LinearProgress variant="determinate" value={60} />
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            Framer Motion
          </Typography>
          <LinearProgress variant="determinate" value={50} />
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            Mui
          </Typography>
          <LinearProgress variant="determinate" value={75} />
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            Tailwind
          </Typography>
          <LinearProgress variant="determinate" value={40} />
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            Python
          </Typography>
          <LinearProgress variant="determinate" value={20} />
        </Box>
      </CustomTabPanel>
    </Box>
  );
}
