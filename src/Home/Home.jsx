import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import axios from "axios";
import SearchBar from "../components/SearchBar/SearchBar";
import RestaurantCard from "../components/RestaurantCard/RestaurantCard";
import BookingModal from "../components/BookingModal/BookingModal";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import Offers from "../components/Sections/Offers/Offers";
import FAQs from "../components/Sections/FAQs/FAQs";
import DownloadApp from "../components/Sections/DownloadApp/DownloadApp";
import AutohideSnackbar from "../components/AutohideSnackbar/AutohideSnackbar";
import heroBanner from "../assets/home.png";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchedCity, setSearchedCity] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Booking Modal State
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  // Snackbar State
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");

  const handleSearch = async (state, city) => {
    if (!state || !city) {
      setError("Please select both state and city to search.");
      return;
    }
    setError("");
    setLoading(true);
    setHasSearched(true);
    setSearchedCity(city);

    try {
      const response = await axios.get(
        `https://restaurantdata.onrender.com/restaurants?state=${encodeURIComponent(state)}&city=${encodeURIComponent(city)}`,
      );
      if (Array.isArray(response.data)) {
        setRestaurants(response.data);
      } else {
        setRestaurants([]);
      }
    } catch (err) {
      console.error("Error fetching restaurants:", err);
      setError("Failed to fetch restaurants. Please try again later.");
      setRestaurants([]);
    } finally {
      setLoading(false);
    }
  };

  const handleBookClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setBookingModalOpen(true);
  };

  const handleBookingSuccess = (bookingDetails) => {
    setSnackbarMsg(
      `Reservation confirmed for ${bookingDetails.restaurantName}!`,
    );
    setSnackbarOpen(true);
  };

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      {/* Hero Section */}
      <Box className="bg-hero-gradient">
        <Container maxWidth="lg">
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems="center"
            gap={4}
            py={4}
          >
            <Box flex={1}>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Skip the wait, reserve your spot!
              </Typography>
              <Typography
                variant="h3"
                component="h1"
                fontWeight="bold"
                color="#102851"
                gutterBottom
                sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
              >
                Find & Book Table at{" "}
                <span style={{ color: "#2aa7ff" }}>Best Restaurants</span>
              </Typography>

              {/* Search Bar Component */}
              <Box sx={{ mt: 4 }}>
                <SearchBar onSearch={handleSearch} />
              </Box>
            </Box>

            <Box flex={1} display={{ xs: "none", md: "block" }}>
              <img
                src={heroBanner}
                alt="Hero Banner"
                style={{
                  width: "100%",
                  maxHeight: "420px",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Search Results Container */}
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {loading && (
          <Box display="flex" justifyContent="center" py={6}>
            <CircularProgress />
          </Box>
        )}

        {hasSearched && !loading && (
          <Box mb={4}>
            {/* Cypress Test Requirement: Heading formatted as "{number} restaurants available in {city}" inside an <h1> tag */}
            <Typography
              variant="h4"
              component="h1"
              fontWeight="bold"
              color="#102851"
              mb={3}
            >
              {restaurants.length} restaurants available in {searchedCity}
            </Typography>

            {restaurants.length === 0 ? (
              <Alert severity="info">
                No restaurants found in {searchedCity}. Please try searching
                another location.
              </Alert>
            ) : (
              restaurants.map((res, index) => (
                <RestaurantCard
                  key={res.id || index}
                  restaurant={res}
                  onBookClick={handleBookClick}
                />
              ))
            )}
          </Box>
        )}

        {/* Promotional Offers & Banners */}
        <HeroSlider />
        <Offers />
        <FAQs />
        <DownloadApp />
      </Container>

      {/* Booking Modal */}
      <BookingModal
        open={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        restaurant={selectedRestaurant}
        onBookingSuccess={handleBookingSuccess}
      />

      {/* Snackbar Notification */}
      <AutohideSnackbar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMsg}
      />
    </Box>
  );
};

export default Home;
