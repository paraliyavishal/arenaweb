import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState, useRef } from "react";
import peopleimg1 from "../../assets/images/about/testimonials-1.webp";
import peopleimg2 from "../../assets/images/about/testimonials-2.webp";
import peopleimg3 from "../../assets/images/about/testimonials-3.webp";
import comma from "../../assets/images/about/comma.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function PeopleSay() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const [value, setValue] = useState(5);

  const people = [
    {
      img: peopleimg1,
      name: "John Doe",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum issimply dummy text of the printing and typesetting industry.",
    },
    {
      img: peopleimg2,
      name: "Jane Smith",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum issimply dummy text of the printing and typesetting industry.",
    },
    {
      img: peopleimg3,
      name: "John Doe",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum issimply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#070929",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          item
          xs={12}
          display={"flex"}
          justifyContent={"center"}
          spacing={3}
        >
          <Grid item xs={12} sm={10} md={6} lg={6} spacing={3}
            sx={{ color: "white", alignItems: "center", display: "flex" }}
          >
            <Box>
              <Box
                sx={{
                  textAlign: {lg: "start",md: "start",sm: "center",xs: "center",},
                }}
              >
                <Typography
                  sx={{
                    fontSize: {lg: "48px",md: "48px",sm: "34px",xs: "34px",},
                    fontWeight: "700",
                    fontFamily: "'Rajdhani', sans-serif",
                  }}
                >
                  WHAT PEOPLE SAY{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: {lg: "48px",md: "48px",sm: "34px",xs: "34px",},
                    fontWeight: "700",
                    fontFamily: "'Rajdhani', sans-serif",
                  }}
                >
                  ABOUT US​{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: {lg: "18px",md: "18px",sm: "16px",xs: "16px",},
                    fontFamily: "'Raleway', sans-serif",
                    color: "#bfbfbf",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.Lorem Ipsum is simply.
                </Typography>
                <Box sx={{ paddingTop: "40px" }}>
                  <Button
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
                      fontSize: {lg: "16px",md: "16px",sm: "14px",xs: "12px",},
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    View More
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={10} md={6} lg={6} py={2}>
            <img src={comma} alt="" />
            <Box sx={{ backgroundColor: "#2B2A65", padding: "20px" }}>
              <Slider ref={sliderRef} {...settings}>
                {people.map((item, index) => (
                  <Box key={index} sx={{ backgroundColor: "#2B2A65" }}>
                    <Box padding={4}>
                      <Typography
                        sx={{
                          fontSize: {lg: "18px",md: "18px",sm: "16px",xs: "16px",},
                          lineHeight: "36px",
                          color: "white",
                          fontWeight: "500",
                          fontFamily: "'Raleway', sans-serif",
                        }}
                      >
                        Excellent Service
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: {lg: "16px",md: "16px",sm: "14px",xs: "12px",},
                          color: "#BFBFBF",
                          fontFamily: "'Raleway', sans-serif",
                        }}
                      >
                        {item.text}
                      </Typography>
                      <Box sx={{ marginTop: "50px" }}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Avatar
                            src={item.img}
                            alt="Remy Sharp"
                            sx={{
                              width: 76,
                              height: 76,
                              border: "2px solid #30D855",
                            }}
                          />
                          <Box>
                            <Typography
                              component="legend"
                              sx={{
                                color: "white",
                                fontSize: {lg: "18px",md: "18px",sm: "16px",xs: "16px",},
                                fontFamily: "'Raleway', sans-serif",
                              }}
                            >
                              {item.name}
                            </Typography>
                            <Rating
                              name="read-only"
                              value={value}
                              readOnly
                              sx={{ color: "#30D855" }}
                            />
                          </Box>
                        </Stack>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Slider>
              <Box display="flex" justifyContent="end" mt={2} gap={2}>
                <ArrowBackIosIcon
                  onClick={prevSlide}
                  sx={{
                    color: "white",
                    padding: "10px",
                    fontSize: "38px",
                    display: "flex",
                    textAlign: "center",
                    border: "1px solid white",
                    borderRadius: "20%",
                    "&:hover": { backgroundColor: "#30D855" },
                  }}
                />
                <ArrowForwardIosIcon
                  onClick={nextSlide}
                  sx={{
                    color: "white",
                    padding: "10px",
                    fontSize: "38px",
                    border: "1px solid white",
                    borderRadius: "20%",
                    "&:hover": { backgroundColor: "#30D855" },
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default PeopleSay;
