import { Box, Container, Grid, Typography,Avatar,Stack,Rating, Button } from '@mui/material';
import React, { useState } from 'react';
import customer from '../../assets/images/home/customer.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import testimonials1 from '../../assets/images/home/testimonials-1.webp'
import testimonials2 from '../../assets/images/home/testimonials-2.webp'
import testimonials3 from '../../assets/images/home/testimonials-3.webp'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const reviews = [
    {
        img: testimonials1,
        name: "Hector Salamanca ",
        rating: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        img: testimonials2,
        name: "Steve Burr",
        rating: 5,
        text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        img: testimonials3,
        name: "Chris Hemswoth",
        rating: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
];



function Customersay() {
 
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = React.useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => setCurrentSlide(next),
    };

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };

  return (
  <Box sx={{backgroundColor:"#070929"}}>
      <Container maxWidth='xl'>
             <Box>
                 <Grid item container xs={12}>
                    <Grid item xs={12} md={6} lg={6} display={"flex"} justifyContent={"center"}>
                        <div data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-delay="100" data-aos-duration="1000">
                             <Box>
                                 <img src={customer} alt="" width={"100%"} height={"100%"}/>
                             </Box>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} sx={{alignSelf:"center"}}>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100" data-aos-duration="1000">
                        <Box>
                            <Typography sx={{color:"white",fontWeight:"700",fontSize:"46px",textAlign:"center",fontFamily:"'Rajdhani', sans-serif"}} > Customer Says</Typography>
                            <Box >   
                                <Slider ref={sliderRef} {...settings}>
                                    {reviews.map((item, index) => (
                                        <Box key={index} sx={{ padding: "30px" }}>
                                            <Box>
                                                <Stack alignItems="center" spacing={2}>
                                                    <Avatar src={item.img} alt={item.name} sx={{ width: 76, height: 76, border: "2px solid #30D855" }} />
                                                    <Typography component="legend" sx={{ color: "#bfbfbf", fontSize: { lg: "18px", md: "18px", sm: "16px", xs: "14px" }, fontFamily: "'Raleway', sans-serif", textAlign: "center" }}>
                                                        {item.name}
                                                    </Typography>
                                                    <Rating name="read-only" value={item.rating} readOnly sx={{ color: "#30D855", textAlign: "center" }} />
                                                </Stack>
                                            </Box>
                                            <Box py={2}>
                                                <Typography sx={{ fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "12px" }, fontFamily: "'Raleway', sans-serif", color: "#BFBFBF", textAlign: "center" }}>
                                                    {item.text}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ))}
                                </Slider>
                                <Box display="flex" justifyContent="center" my={2} gap={2}>
                                    <ArrowBackIosIcon onClick={prevSlide} sx={{color:"white",padding:"10px",fontSize:"38px",display:"flex",textAlign:"center",border:"1px solid white",borderRadius:"20%","&:hover":{backgroundColor:"#30D855"}}}/>
                                    <ArrowForwardIosIcon onClick={nextSlide} sx={{color:"white",padding:"10px",fontSize:"38px",border:"1px solid white",borderRadius:"20%","&:hover":{backgroundColor:"#30D855"}}}/>
                                </Box>
                            </Box>
                        </Box>
                    </div>
                    </Grid>
                 </Grid>
             </Box>
      </Container>
  </Box>
  );
}

export default Customersay;
