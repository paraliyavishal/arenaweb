import { Box, Container, Grid, Typography,Avatar,Stack,Rating } from '@mui/material';
import React, { useState } from 'react';
import customer from '../../assets/images/home/customer.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import testimonials1 from '../../assets/images/home/testimonials-1.webp'
import testimonials2 from '../../assets/images/home/testimonials-2.webp'
import testimonials3 from '../../assets/images/home/testimonials-3.webp'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const reviwe = [
    {
        name:"Hector Salamanca",
        img:testimonials1
    },
    {
        name:"Steve Burr",
        img:testimonials2
    },
    {
        name:"Chris Hemswoth",
        img:testimonials3
    }
]

function Customersay() {
    const [value,setValue] = React.useState(5)
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
                            <Slider {...settings}>
                                {reviwe.map((item, index) => (
                                <Box key={index} sx={{ padding: "30px" }}>
                                    <Box>
                                        <Stack alignItems="center" spacing={2}>
                                            <Avatar src={item.img} alt="Remy Sharp" sx={{ width: 76, height: 76, border: "2px solid #30D855" }} />
                                            <Typography component="legend" sx={{ color: "#bfbfbf",fontSize:{lg:"18px",md:"18px",sm:"16px",xs:"14px"},fontFamily:"'Raleway', sans-serif",textAlign:"center"}}>{item.name}</Typography>
                                            <Rating name="read-only" value={value} readOnly sx={{ color: "#30D855",textAlign:"center"}}/>
                                        </Stack>
                                    </Box>
                                    <Box py={2}>
                                       <Typography sx={{ fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif", color: "#BFBFBF",textAlign:"center"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</Typography>
                                       <Typography sx={{ fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif", color: "#BFBFBF",textAlign:"center"}}> eiusmod tempor incididunt.Lorem ipsum dolor sit amet,</Typography>
                                       <Typography sx={{ fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif", color: "#BFBFBF",textAlign:"center"}} > consectetur adipiscing elit, sed do eiusmod tempor incididunt</Typography>
                                    </Box>
                                    <Box>
                                        
                                    </Box>
                                </Box>
                               ))}
                            </Slider>
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
