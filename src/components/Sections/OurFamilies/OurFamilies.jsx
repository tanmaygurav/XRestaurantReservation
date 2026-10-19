import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import pattern from "../../../assets/pattern.png";

const OurFamilies = () => {
  const stats = [
    { number: "5000+", label: "Happy Diners" },
    { number: "200+", label: "Verified Restaurants" },
    { number: "50+", label: "Cities Covered" },
    { number: "10,000+", label: "Bookings Made" },
  ];

  return (
    <Box
      sx={{
        background:
          "linear-gradient(81deg, #E7F0FF 0%, rgba(232, 241, 255, 0.47) 100%)",
        py: 6,
        my: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Typography variant="caption" color="primary" fontWeight="bold">
              CARING FOR OUR DINERS
            </Typography>
            <Typography variant="h4" fontWeight="bold" color="#102851" mt={1}>
              Our Families & Community
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              {stats.map((st, idx) => (
                <Grid item xs={6} sm={3} key={idx}>
                  <Box
                    textAlign="center"
                    p={2}
                    sx={{
                      backgroundColor: "#ffffff",
                      borderRadius: 3,
                      boxShadow: "0 4px 15px rgba(0,0,0,0.04)",
                    }}
                  >
                    <Typography variant="h4" fontWeight="bold" color="#2aa7ff">
                      {st.number}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={0.5}>
                      {st.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurFamilies;
