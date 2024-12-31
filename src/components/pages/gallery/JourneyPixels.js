import { Box, Container, Typography, Button } from "@mui/material";
import React from "react";
import img1 from "../../../assets/images/pages/gallery-img-1.webp";
import img2 from "../../../assets/images/pages/gallery-img-2.webp";
import img3 from "../../../assets/images/pages/gallery-img-3.webp";
import img4 from "../../../assets/images/pages/gallery-img-4.webp";
import img5 from "../../../assets/images/pages/gallery-img-5.webp";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

const gallerySlider = [
  { galleryimg: img1 },
  { galleryimg: img2 },
  { galleryimg: img3 },
  { galleryimg: img4 },
  { galleryimg: img5 },
];

function JourneyPixels() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "#100A2E",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ color: "#fff", textAlign: "center" }} py={3}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { lg: "48px", md: "40px", sm: "32px", xs: "28px" },
              fontWeight: "700",
              lineHeight: "80px",
              fontFamily: "'Rajdhani',sans-serif",
            }}
          >
            A JOURNEY THROUGH PIXELS
          </Typography>
          <Typography
            sx={{
              color: "#BFBFBFBF",
              fontSize: { lg: "18px", md: "18px", sm: "16px", xs: "14px" },
              lineHeight: "22px",
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </Typography>
          <Typography
            sx={{
              color: "#BFBFBFBF",
              fontSize: { lg: "18px", md: "18px", sm: "16px", xs: "14px" },
              lineHeight: "22px",
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            the industry's standard dummy text.standard dummy text.
          </Typography>
        </Box>

        {/* Slider */}

        <Box pt={3}>
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
            style={{ width: "100%", height: "550px" }}
          >
            {gallerySlider.map((item) => (
              <Box>
                <SwiperSlide
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={item.galleryimg}
                    alt=""
                    style={{ width: "500px", height: "500px" }}
                  />
                </SwiperSlide>
              </Box>
            ))}
          </Swiper>
        </Box>

        <Box mt={5} textAlign={"center"}>
          <Button
            onClick={() => navigate("/gallery")}
            sx={{
              border: "1px solid white",
              transition: ".7s",
              borderRadius: "0px",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "#6B5FFE",
                border: "1px solid rgba(44,36,74,.26)",
              },
              color: "white",
              textTransform: "unset",
              fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "12px" },
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            View More
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default JourneyPixels;
