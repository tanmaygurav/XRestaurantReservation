import React from "react";
import { Box, Typography } from "@mui/material";
import { format, addDays, isSameDay } from "date-fns";

const DaySelector = ({ selectedDate, onSelectDate }) => {
  const today = new Date();
  const days = Array.from({ length: 7 }, (_, i) => addDays(today, i));

  return (
    <Box sx={{ display: "flex", gap: 1.5, overflowX: "auto", py: 2 }}>
      {days.map((date, index) => {
        const isToday = index === 0;
        const isSelected = isSameDay(date, selectedDate);
        return (
          <Box
            key={date.toISOString()}
            onClick={() => onSelectDate(date)}
            sx={{
              minWidth: 90,
              padding: "10px 14px",
              borderRadius: 2,
              border: "2px solid",
              borderColor: isSelected ? "#2aa7ff" : "#e0e0e0",
              backgroundColor: isSelected ? "#eef7ff" : "#ffffff",
              cursor: "pointer",
              textAlign: "center",
              transition: "all 0.2s ease",
              "&:hover": {
                borderColor: "#2aa7ff",
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
                color: isSelected ? "#2aa7ff" : "#102851",
              }}
            >
              {isToday ? (
                <p style={{ margin: 0 }}>Today</p>
              ) : (
                format(date, "EEE")
              )}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {format(date, "MMM d")}
            </Typography>
            <Typography
              variant="caption"
              display="block"
              color="success.main"
              fontSize="10px"
              sx={{ mt: 0.5 }}
            >
              10 Slots
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default DaySelector;
