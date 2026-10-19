import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import teamImg from "../../../assets/restaurant-team.png";

const PatientCaring = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={teamImg}
            alt="Hospitality Team"
            sx={{
              width: "100%",
              borderRadius: 4,
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="caption" color="primary" fontWeight="bold">
            EXCELLENCE IN HOSPITALITY
          </Typography>
          <Typography variant="h4" fontWeight="bold" color="#102851" my={2}>
            Dedicated to Providing Outstanding Dining Experiences
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Our platform connects you with top-rated dining venues that
            prioritize quality service, fresh ingredients, and exceptional
            ambiance for you and your loved ones.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PatientCaring;
