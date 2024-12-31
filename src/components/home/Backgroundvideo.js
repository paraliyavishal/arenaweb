import React, { useRef } from "react";
import video1 from "../../assets/images/home/video1.mp4";
import { Box, Button, Container, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../../commoncomponets/header/Header";
import { useNavigate } from "react-router-dom";
import logo_1 from '../../assets/images/home/logo_1.webp'
import logo_2 from '../../assets/images/home/logo_2.webp'
import logo_3 from '../../assets/images/home/logo_3.webp'
import logo_4 from '../../assets/images/home/logo_4.webp'
import logo_5 from '../../assets/images/home/logo_5.webp'
import logo_6 from '../../assets/images/home/logo_6.webp'

const homeSlider = [
  {
    hSlider:logo_1,
  },
  {
    hSlider:logo_2,
  },
  {
    hSlider:logo_3,
  },
  {
    hSlider:logo_4,
  },
  {
    hSlider:logo_5,
  },
  {
    hSlider:logo_6,
  },
]

function Backgroundvideo() {

  const navigate = useNavigate();

  const sliderRef = useRef(null);
  const play = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  // Function to pause the slider
  const pause = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const styles = {
    hideArrows: {
      "& .slick-prev, & .slick-next": {
        display: "none !important",
      },
    },
  };

return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <video
        src={video1}
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
        controls={false}
      />
      <Box sx={{pt:"10px"}}> 
        <Header />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        height="100%"
        textAlign="center"
        alignItems="end"
        pt={12}
      >
        <Box textAlign="center" width="100%">
          <Container maxWidth="xl">
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                sx={{
                  width: "90%",
                  color: "white",
                  zIndex: 1,
                  fontWeight: 700,
                  fontSize: { lg: "65px", md: "60px", sm: "34px", xs: "28px" },
                  fontFamily: "'Rajdhani', sans-serif",
                }}
              >
                GAME ON! YOUR GATEWAY TO INFINITE ADVENTURES
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "white",
                zIndex: 1,
                fontWeight: 600,
                fontSize: { lg: "28px", md: "28px", sm: "24px", xs: "20px" },
                fontFamily: "'Rajdhani', sans-serif",
              }}
              py={1}
            >
              UNLEASH YOUR INNER CHAMPION
            </Typography>
            <Box
              gap={4}
              justifyContent="center"
              sx={{
                display: { lg: "flex", sm: "flex", xs: "block" },
                paddingTop: { lg: "20px", md: "30px", sm: "10px", xs: "0px" },
                marginBottom: "80px",
              }}
            >
              <Button
                onClick={() => navigate("/")}
                sx={{
                  width: { lg: "18%", sm: "25%", xs: "60%" },
                  transition: "0.7s",
                  fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "12px" },
                  fontFamily: "'Raleway', sans-serif",
                  marginBottom: { sm: "10px", xs: "5px" },
                  border: "1px solid white",
                  borderRadius: "0px",
                  padding: "15px 20px",
                  textTransform: "unset",
                  "&:hover": {
                    backgroundColor: "#6B5FFE",
                    border: "1px solid rgba(44,36,74,.26)",
                  },
                  color: "white",
                  fontWeight: 600,
                }}
              >
                Become a Member
              </Button>
              <Button
                onClick={() => navigate("/contact_us")}
                sx={{
                  width: { lg: "18%", sm: "25%", xs: "60%" },
                  transition: "0.7s",
                  fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "12px" },
                  fontFamily: "'Raleway', sans-serif",
                  marginBottom: { sm: "10px", xs: "5px" },
                  border: "1px solid white",
                  borderRadius: "0px",
                  padding: "15px 20px",
                  textTransform: "unset",
                  "&:hover": {
                    backgroundColor: "#6B5FFE",
                    border: "1px solid rgba(44,36,74,.26)",
                  },
                  color: "white",
                  fontWeight: 600,
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Container>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            py={5}
            sx={{ backgroundColor: "rgba(44,36,74,.26)" }}
          >
            <Typography
              px={6}
              sx={{ color: "white" }}
              fontWeight={700}
              variant="h6"
            >
              Our Partner:
            </Typography>
            <div className="slider-container" style={{ width: "60%" }}>
              <Slider ref={sliderRef} {...settings}>
              {homeSlider.map((item) =>
                  <div>
                    <img
                      src={item.hSlider}
                      alt=""
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginLeft: "60px",
                        height:"49px",
                        width:"49px"
                      }}
                    />
                  </div>
              )}
              </Slider>
            </div>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Backgroundvideo;
