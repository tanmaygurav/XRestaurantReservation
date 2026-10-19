import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import blogImg from "../../../assets/dining-blog.jpg";

const BlogCard = ({ title, date = "March 2025", author = "Chef John" }) => {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: "0 4px 15px rgba(0,0,0,0.06)" }}>
      <CardMedia component="img" height="180" image={blogImg} alt={title} />
      <CardContent>
        <Typography variant="caption" color="text.secondary">
          {date} • By {author}
        </Typography>
        <Typography variant="h6" fontWeight="bold" color="#102851" mt={0.5}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
