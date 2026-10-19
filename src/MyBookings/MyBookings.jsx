import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Rating,
  Alert,
  Button,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useNavigate } from "react-router-dom";
import DownloadApp from "../components/Sections/DownloadApp/DownloadApp";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadBookings = () => {
      try {
        const stored = localStorage.getItem("bookings");
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            setBookings(parsed);
          }
        }
      } catch (err) {
        console.error("Failed to load bookings from localStorage:", err);
      }
    };

    loadBookings();
    // Listen for storage events if modified elsewhere
    window.addEventListener("storage", loadBookings);
    return () => window.removeEventListener("storage", loadBookings);
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f8f9fa", pb: 6 }}>
      {/* Header Container */}
      <Box
        sx={{
          background:
            "linear-gradient(81deg, #E7F0FF 0%, rgba(232, 241, 255, 0.47) 100%)",
          py: 5,
          mb: 4,
        }}
      >
        <Container maxWidth="lg">
          {/* Cypress Test Requirement: <h1> tag as parent element to display "My Bookings" heading */}
          <Typography
            variant="h3"
            component="h1"
            fontWeight="bold"
            color="#102851"
          >
            My Bookings
          </Typography>
          <Typography variant="body1" color="text.secondary" mt={1}>
            View and manage your active restaurant reservations.
          </Typography>
        </Container>
      </Box>

      {/* Bookings List */}
      <Container maxWidth="lg">
        {bookings.length === 0 ? (
          <Box textAlign="center" py={6}>
            <Alert severity="info" sx={{ maxWidth: 500, mx: "auto", mb: 3 }}>
              You have no active reservations yet.
            </Alert>
            <Button
              variant="contained"
              className="btn-primary-custom"
              onClick={() => navigate("/")}
            >
              Explore Restaurants
            </Button>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {bookings.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
                    p: 1,
                  }}
                >
                  <CardContent>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="flex-start"
                      mb={1}
                    >
                      {/* Cypress Test Requirement: <h3> tag displaying restaurant name */}
                      <Typography
                        variant="h5"
                        component="h3"
                        fontWeight="bold"
                        color="#102851"
                      >
                        {item.restaurantName}
                      </Typography>
                      <Chip label="Confirmed" color="success" size="small" />
                    </Box>

                    <Box display="flex" alignItems="center" gap={1} mb={2}>
                      <Rating
                        value={Number(item.rating || 4)}
                        precision={0.5}
                        readOnly
                        size="small"
                      />
                      <Typography variant="body2" fontWeight="bold">
                        {item.rating || 4}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      display="flex"
                      alignItems="center"
                      gap={1}
                      mb={1}
                    >
                      <LocationOnIcon fontSize="small" color="primary" />
                      {item.address || `${item.city}, ${item.state}`}
                    </Typography>

                    <Box
                      display="flex"
                      gap={3}
                      mt={2}
                      pt={2}
                      borderTop="1px solid #f0f0f0"
                    >
                      <Typography
                        variant="body2"
                        display="flex"
                        alignItems="center"
                        gap={0.5}
                        fontWeight="500"
                      >
                        <CalendarTodayIcon fontSize="small" color="action" />
                        {item.bookingDate
                          ? new Date(item.bookingDate).toLocaleDateString()
                          : "Today"}
                      </Typography>
                      <Typography
                        variant="body2"
                        display="flex"
                        alignItems="center"
                        gap={0.5}
                        fontWeight="500"
                      >
                        <AccessTimeIcon fontSize="small" color="action" />
                        {item.bookingTime || "10:00 AM"}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        <DownloadApp />
      </Container>
    </Box>
  );
};

export default MyBookings;
