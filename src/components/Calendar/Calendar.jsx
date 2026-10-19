import React from "react";
import { Box, Divider } from "@mui/material";
import DaySelector from "./DaySelector/DaySelector";
import TimeSlotPicker from "./TimeSlotPicker/TimeSlotPicker";

const Calendar = ({
  selectedDate,
  onSelectDate,
  selectedTime,
  onSelectTime,
}) => {
  return (
    <Box>
      <DaySelector selectedDate={selectedDate} onSelectDate={onSelectDate} />
      <Divider sx={{ my: 2 }} />
      <TimeSlotPicker selectedTime={selectedTime} onSelectTime={onSelectTime} />
    </Box>
  );
};

export default Calendar;
