import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import AccordionComponent from "../../Accordion/Accordion";
import faqImg from "../../../assets/diningfaq.jpeg";

const FAQs = () => {
  const faqData = [
    {
      question: "How do I book a table at a restaurant?",
      answer:
        'Select your state and city, browse the list of available restaurants, select a date and time slot, and click "Book FREE Reservation".',
    },
    {
      question: "Is there any fee for table reservation?",
      answer:
        "No, reserving a table through XRestaurant is 100% free with instant confirmation.",
    },
    {
      question: "Can I view or cancel my existing bookings?",
      answer:
        'Yes! Navigate to the "My Bookings" tab in the top navigation bar to view all your upcoming reservations saved on your device.',
    },
    {
      question: "How far in advance can I book a table?",
      answer:
        "You can book tables up to 7 days in advance for any available time slot.",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      <Typography
        variant="caption"
        color="primary"
        fontWeight="bold"
        textAlign="center"
        display="block"
      >
        GET YOUR ANSWER
      </Typography>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        color="#102851"
        mb={5}
      >
        Frequently Asked Questions
      </Typography>

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            src={faqImg}
            alt="FAQs"
            sx={{
              width: "100%",
              borderRadius: 4,
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            }}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <AccordionComponent items={faqData} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default FAQs;
