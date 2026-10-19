import React from "react";
import { Box, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const SliderButtons = ({ onPrev, onNext, canPrev, canNext }) => {
  return (
    <Box display="flex" gap={1}>
      <IconButton onClick={onPrev} disabled={!canPrev} size="small">
        <ChevronLeftIcon />
      </IconButton>
      <IconButton onClick={onNext} disabled={!canNext} size="small">
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
};

export default SliderButtons;
