import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import offer1 from "../../../assets/restoffer1.png";
import offer2 from "../../../assets/restoffer2.png";

const Offers = () => {
  const offers = [offer1, offer2, offer1];

  return (
    <Container maxWidth="lg" sx={{ my: 6 }}>
      <Typography variant="h5" fontWeight="bold" color="#102851" mb={3}>
        Exclusive Dining Deals & Offers
      </Typography>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
      >
        {offers.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Box
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
                mb: 4,
              }}
            >
              <img
                src={item}
                alt={`Offer ${idx + 1}`}
                style={{ width: "100%", height: "180px", objectFit: "cover" }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Offers;
