import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Calendar from "../Calendar/Calendar";

const BookingModal = ({ open, onClose, restaurant, onBookingSuccess }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [email, setEmail] = useState("");

  if (!restaurant) return null;

  const handleConfirmBooking = () => {
    const newBooking = {
      restaurantName: restaurant.restaurantName || "",
      rating: restaurant.rating || 4,
      address:
        restaurant.address ||
        `${restaurant.city || ""}, ${restaurant.state || ""}`,
      city: restaurant.city || "",
      state: restaurant.state || "",
      bookingDate: selectedDate.toISOString(),
      bookingTime: selectedTime,
      bookingEmail: email.trim() || "hello@gmail.com",
    };

    // Store in localStorage under 'bookings' key
    const existingBookingsStr = localStorage.getItem("bookings");
    let existingBookings = [];
    try {
      if (existingBookingsStr) {
        existingBookings = JSON.parse(existingBookingsStr);
        if (!Array.isArray(existingBookings)) existingBookings = [];
      }
    } catch (e) {
      existingBookings = [];
    }

    existingBookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    if (onBookingSuccess) {
      onBookingSuccess(newBooking);
    }
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      paperProps={{ style: { borderRadius: 16 } }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: 1,
        }}
      >
        <Box>
          <Typography variant="h6" fontWeight="bold" color="#102851">
            Book Table at {restaurant.restaurantName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {restaurant.city}, {restaurant.state}
          </Typography>
        </Box>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Calendar
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
          selectedTime={selectedTime}
          onSelectTime={setSelectedTime}
        />

        <Box sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Email Address for Confirmation"
            variant="outlined"
            size="small"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="hello@gmail.com"
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2.5, justifyContent: "space-between" }}>
        <Button
          onClick={onClose}
          color="inherit"
          sx={{ textTransform: "none" }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          className="btn-primary-custom"
          onClick={handleConfirmBooking}
          disabled={!selectedTime}
        >
          Confirm Reservation
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookingModal;
