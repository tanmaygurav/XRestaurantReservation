import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const blogs = [
    "Top 10 Fine Dining Restaurants in Texas",
    "How to Get Table Reservations During Peak Hours",
    "Essential Dining Etiquette Tips for 2025",
  ];

  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      <Typography
        variant="caption"
        color="primary"
        fontWeight="bold"
        textAlign="center"
        display="block"
      >
        OUR BLOGS
      </Typography>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        color="#102851"
        mb={4}
      >
        Read Our Latest Dining News
      </Typography>
      <Grid container spacing={3}>
        {blogs.map((title, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <BlogCard title={title} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blogs;
