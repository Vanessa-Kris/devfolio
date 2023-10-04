import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

export default function Blogs() {
  const [openIndex, setOpenIndex] = useState(-1);

  const blogPosts = [
    {
      imageUrl:
        "https://img.freepik.com/free-photo/spaceship-orbits-dark-galaxy-glowing-blue-comet-generated-by-ai_188544-9662.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph",
      date: "October 1, 2023",
      title:
        "The Genesis Of Everything; The Literal Beginning of the entire world.",
      content: "Some Blog Content",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/human-helix-dna-structure-concept-blue-color_90220-1399.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph",
      date: "October 1, 2023",
      title:
        "The Exodus Of Everything; The Literal Beginning of the entire world.",
      content: "Some Blog Content2",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/baked-quails-pan-dark-surface_2829-5596.jpg?size=626&ext=jpg&ga=GA1.2.1563347392.1696364341&semt=sph",
      date: "October 1, 2023",
      title:
        "The Whatever Of Everything; The Literal Beginning of the entire world.",
      content: "Some Blog Content3",
    },
  ];

  const handleOpen = (index) => {
    setOpenIndex(index);
  };

  const handleClose = () => {
    setOpenIndex(-1);
  };

  return (
    <Box sx={{ m: { md: 15, xs: 1 }, pt: 7, color: "#e6cebd" }}>
      <Typography variant="h6" sx={{ my: { md: 5, xs: 5 }, fontWeight: 600 }}>
        Articles & Blogs
      </Typography>
      <Typography variant="h3" sx={{ my: { md: 3, xs: 3 }, color: "#fff" }}>
        latest Blogs
        <Divider
          flexItem
          sx={{ bgcolor: "#e6cebd", width: { md: "20%", xs: "40%" }, my: 2 }}
        />
      </Typography>

      <Grid container columnSpacing={4}>
        {blogPosts.map((post, index) => (
          <Grid item md={6} sx={{ p: 2 }} key={index}>
            <img
              style={{ height: "200px", cursor: "pointer" }}
              onClick={() => handleOpen(index)}
              src={post.imageUrl}
              alt=""
            />
            <Typography variant="h5" sx={{ fontSize: "17px", py: 2 }}>
              {post.date}
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "17px", color: "#fff" }}>
              {post.title}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {blogPosts.map((post, index) => (
        <Dialog
          key={index}
          open={openIndex === index}
          onClose={handleClose}
          maxWidth="md"
        >
          <DialogTitle>Blog Post Title</DialogTitle>
          <DialogContent>
            <img style={{ maxWidth: "100%" }} src={post.imageUrl} alt="" />
            <Typography variant="h5" sx={{ fontSize: "17px", py: 2 }}>
              {post.date}
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "17px" }}>
              {post.title}
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "17px" }}>
              {post.content}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      ))}
    </Box>
  );
}
