import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import SmsForm from "./SmsForm";
import appImg from "../../../assets/dining-app.png";
import googlePlay from "../../../assets/playstore.png";
import appleStore from "../../../assets/apple-logo.png";

const DownloadApp = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(81deg, #E7F0FF 0%, rgba(232, 241, 255, 0.47) 100%)",
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={appImg}
              alt="Download App"
              sx={{
                width: "100%",
                maxWidth: 350,
                display: "block",
                margin: "auto",
              }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="#102851"
              gutterBottom
            >
              Download the <br />
              <span style={{ color: "#2AA7FF" }}>XRestaurant Booking App</span>
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Get the link to download the app and reserve tables on the go
              anytime, anywhere.
            </Typography>
            <SmsForm />
            <Box display="flex" gap={2} mt={4}>
              <Box
                component="img"
                src={googlePlay}
                alt="Google Play"
                sx={{ height: 40, cursor: "pointer" }}
              />
              <Box
                component="img"
                src={appleStore}
                alt="Apple Store"
                sx={{ height: 40, cursor: "pointer" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DownloadApp;
