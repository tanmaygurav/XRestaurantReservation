import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import logo from "../../assets/restaurant-logo.png";

const Footer = () => {
  return (
    <Box
      sx={{ backgroundColor: "#102851", color: "#ffffff", pt: 6, pb: 4, mt: 8 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center" mb={2}>
              <img
                src={logo}
                alt="Logo"
                style={{
                  height: "36px",
                  marginRight: "10px",
                  filter: "brightness(0) invert(1)",
                }}
              />
              <Typography variant="h6" fontWeight="bold">
                XRestaurant
              </Typography>
            </Box>
            <Typography variant="body2" color="grey.400">
              Find and reserve top-rated restaurants near you in seconds. Enjoy
              hassle-free table reservations and exclusive dining deals.
            </Typography>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              About
            </Typography>

            <MuiLink
              href="#"
              color="grey.400"
              underline="hover"
              display="block"
              mb={1}
            >
              About Us
            </MuiLink>
            <MuiLink
              href="#"
              color="grey.400"
              underline="hover"
              display="block"
              mb={1}
            >
              Our Blog
            </MuiLink>
            <MuiLink
              href="#"
              color="grey.400"
              underline="hover"
              display="block"
              mb={1}
            >
              Careers
            </MuiLink>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Support
            </Typography>
            <MuiLink
              href="#"
              color="grey.400"
              underline="hover"
              display="block"
              mb={1}
            >
              Contact Us
            </MuiLink>
            <MuiLink
              href="#"
              color="grey.400"
              underline="hover"
              display="block"
              mb={1}
            >
              FAQs
            </MuiLink>
            <MuiLink
              href="#"
              color="grey.400"
              underline="hover"
              display="block"
              mb={1}
            >
              Privacy Policy
            </MuiLink>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Stay Connected
            </Typography>
            <Typography variant="body2" color="grey.400" mb={2}>
              Subscribe to get special discounts and restaurant updates.
            </Typography>
          </Grid>
        </Grid>

        <Box borderTop="1px solid #1e3a68" mt={4} pt={3} textAlign="center">
          <Typography variant="body2" color="grey.500">
            Copyright © {new Date().getFullYear()} XRestaurant Reservation. All
            rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
