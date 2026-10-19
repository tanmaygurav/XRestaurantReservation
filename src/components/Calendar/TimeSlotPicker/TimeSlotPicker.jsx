import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

const TimeSlotPicker = ({ selectedTime, onSelectTime }) => {
  const morningSlots = ["09:00 AM", "10:00 AM", "11:00 AM"];
  const afternoonSlots = ["12:00 PM", "01:00 PM", "02:00 PM", "03:30 PM"];
  const eveningSlots = ["05:00 PM", "06:30 PM", "07:30 PM", "08:30 PM"];

  const renderPeriodSlots = (label, slots) => (
    <Box key={label} mb={2.5}>
      <Typography
        variant="subtitle2"
        sx={{ fontWeight: "bold", mb: 1, color: "#102851" }}
      >
        <p style={{ margin: 0, padding: 0 }}>{label}</p>
      </Typography>
      <Grid container spacing={1.5}>
        {slots.map((slot) => {
          const isSelected = selectedTime === slot;
          return (
            <Grid item key={slot}>
              <Button
                variant={isSelected ? "contained" : "outlined"}
                onClick={() => onSelectTime(slot)}
                size="small"
                sx={{
                  borderRadius: 2,
                  textTransform: "none",
                  borderColor: isSelected ? "#2aa7ff" : "#2aa7ff",
                  backgroundColor: isSelected ? "#2aa7ff" : "transparent",
                  color: isSelected ? "#ffffff" : "#2aa7ff",
                  "&:hover": {
                    backgroundColor: isSelected ? "#1a96ed" : "#eef7ff",
                  },
                }}
              >
                {slot}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );

  return (
    <Box sx={{ mt: 2 }}>
      {renderPeriodSlots("Morning", morningSlots)}
      {renderPeriodSlots("Afternoon", afternoonSlots)}
      {renderPeriodSlots("Evening", eveningSlots)}
    </Box>
  );
};

export default TimeSlotPicker;
