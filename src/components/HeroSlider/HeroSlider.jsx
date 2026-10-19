import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Box } from "@mui/material";
import offer1 from "../../assets/restoffer1.png";
import offer2 from "../../assets/restoffer2.png";

const HeroSlider = () => {
  const slides = [offer1, offer2];

  return (
    <Box sx={{ width: "100%", my: 3 }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        style={{ borderRadius: 12 }}
      >
        {slides.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Promo ${idx + 1}`}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "280px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HeroSlider;
