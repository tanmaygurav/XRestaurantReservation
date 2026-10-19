import React from "react";
import { Grid } from "@mui/material";
import IconCard from "../IconCard/IconCard";
import resIcon from "../../assets/restaurant.png";
import eventIcon from "../../assets/event.png";
import venueIcon from "../../assets/venue.png";

const HeroServices = () => {
  const services = [
    { title: "Table Reservation", icon: resIcon, active: true },
    { title: "Private Events", icon: eventIcon },
    { title: "Banquet Venues", icon: venueIcon },
  ];

  return (
    <Grid container spacing={3} justifyContent="center" sx={{ mt: 3 }}>
      {services.map((item, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <IconCard title={item.title} icon={item.icon} active={item.active} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HeroServices;
