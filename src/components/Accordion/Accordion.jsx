import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionComponent = ({ items }) => {
  return (
    <Box>
      {items.map((item, index) => (
        <Accordion
          key={index}
          sx={{
            mb: 1.5,
            borderRadius: "8px !important",
            boxShadow: "none",
            border: "1px solid #e0e0e0",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
            <Typography fontWeight="bold" color="#102851">
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default AccordionComponent;
