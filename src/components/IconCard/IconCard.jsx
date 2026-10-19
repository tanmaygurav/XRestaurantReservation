import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const IconCard = ({ icon, title, active = false, onClick }) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        textAlign: "center",
        p: 2,
        borderRadius: 3,
        cursor: "pointer",
        border: "2px solid",
        borderColor: active ? "#2aa7ff" : "transparent",
        backgroundColor: active ? "#eef7ff" : "#ffffff",
        boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
        transition: "all 0.2s ease",
        "&:hover": {
          boxShadow: "0 6px 20px rgba(42, 167, 255, 0.15)",
        },
      }}
    >
      <CardContent sx={{ p: "16px !important" }}>
        <Box
          component="img"
          src={icon}
          alt={title}
          sx={{ width: 48, height: 48, mb: 1.5 }}
        />
        <Typography
          variant="body1"
          fontWeight="bold"
          color={active ? "#2aa7ff" : "#102851"}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default IconCard;
