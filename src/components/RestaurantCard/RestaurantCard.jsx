import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Rating,
  Chip,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VerifiedIcon from "@mui/icons-material/Verified";
import defaultRestaurantImg from "../../assets/restaurant.png";

const RestaurantCard = ({ restaurant, onBookClick }) => {
  const {
    restaurantName,
    rating = 4.5,
    address,
    city,
    state,
    image,
  } = restaurant || {};

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        borderRadius: 3,
        boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
        mb: 3,
        overflow: "hidden",
        border: "1px solid #eef2f6",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", sm: 220 },
          height: { xs: 180, sm: "auto" },
          objectFit: "cover",
        }}
        image={image || defaultRestaurantImg}
        alt={restaurantName}
      />
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justify: "space-between",
          p: 3,
        }}
      >
        <Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
            gap={1}
            mb={1}
          >
            <Typography
              variant="h5"
              component="h3"
              sx={{ fontWeight: "bold", color: "#102851", m: 0 }}
            >
              {restaurantName}
            </Typography>
            <Chip
              icon={<VerifiedIcon style={{ color: "#00a500" }} />}
              label="Verified"
              size="small"
              variant="outlined"
              color="success"
            />
          </Box>

          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Rating
              value={Number(rating)}
              precision={0.5}
              readOnly
              size="small"
            />
            <Typography variant="body2" fontWeight="bold" color="text.primary">
              {rating}
            </Typography>
          </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            display="flex"
            alignItems="center"
            gap={0.5}
            mb={2}
          >
            <LocationOnIcon fontSize="small" color="primary" />
            {address || `${city}, ${state}`}
          </Typography>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
          gap={2}
          pt={1}
          borderTop="1px solid #f0f0f0"
        >
          <Typography variant="body2" color="success.main" fontWeight="500">
            Free Cancellation • Instant Booking
          </Typography>
          <Button
            variant="contained"
            className="btn-primary-custom"
            onClick={() => onBookClick(restaurant)}
            sx={{ px: 3, py: 1 }}
          >
            Book FREE Reservation
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;
