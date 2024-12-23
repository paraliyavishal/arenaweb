import React, { useRef } from 'react';
import video1 from '../../assets/images/home/video1.mp4';
import { Box, Button, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../../commoncomponets/header/Header';
import { useNavigate } from 'react-router-dom';

function  Backgroundvideo() {


  const navigate = useNavigate()
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
    '& .slick-prev, & .slick-next': {
      display: 'none !important',
    },
  },
};




  return (
    <div style={{ overflow: 'hidden', width: '100%', height: '100%', position: 'relative' }}>
      <video
        src={video1}
        autoPlay
        muted
        loop
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}
        controls={false}
      />
      <Header />
      <Box display="flex" justifyContent="center" width="100%" height="100%" textAlign="center" alignItems="end" pt={12}>
        <Box textAlign="center" width="100%">
              <Box sx={{display:"flex",justifyContent:"center",}}>
                  <Typography sx={{width:"90%",color: 'white', zIndex: 1,fontWeight: 700,fontSize:{lg:"65px",md:"60px",sm:"34px",xs:"28px"},fontFamily:"'Rajdhani', sans-serif"}}>
                    GAME ON! YOUR GATEWAY TO INFINITE ADVENTURES
                  </Typography>
              </Box>
              <Typography sx={{ color: 'white', zIndex: 1, fontWeight: 600,fontSize:{lg:"28px",md:"28px",sm:"24px",xs:"20px"},fontFamily:"'Rajdhani', sans-serif"}} py={1} >
                UNLEASH YOUR INNER CHAMPION
              </Typography>
              <Box  gap={4} justifyContent="center" sx={{display:"flex",paddingTop:{lg:"20px",md:"30px",sm:"10px",xs:"0px"},marginBottom:"80px"}}>
                    <Button className='' sx={{textTransform:"unset",marginBottom:{sm:"10px",xs:"5px"},backgroundColor:"#221C3E", borderRadius: '0px', padding: '15px 20px', '&:hover': { backgroundColor: 'transparent',border:"1px solid white",transition:".5s"}, color: 'white', fontWeight: 600,fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"},fontFamily:"'Raleway', sans-serif"}}>
                      Become a Member
                    </Button>
                    <Button className='' onClick={() => navigate("/contact_us")} sx={{marginBottom:{sm:"10px",xs:"5px"},border: '1px solid white', borderRadius: '0px', padding: '15px 20px', '&:hover': { backgroundColor: '#221C3E',border:"1px solid #221C3E  ",transition:".5s"}, color: 'white', fontWeight: 600,textTransform:"unset",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"},fontFamily:"'Raleway', sans-serif" }}>
                      Contact Us
                    </Button>
              </Box>
              <Box display={"flex"} justifyContent={"center"} alignItems={'center'} py={5} sx={{backgroundColor:"rgba(44,36,74,.26)"}}>
            <Typography px={6} sx={{color:"white"}} fontWeight={700} variant='h6' >Our Partner:</Typography>
            <div className="slider-container" style={{width:"60%"}}>
                <Slider ref={sliderRef} {...settings}>
                    <div>
                        <img src="https://html-templates.evonicmedia.com/arena/assets/images/index/logo_1.png" alt="" style={{display:"flex",justifyContent:"center",marginLeft:"60px"}}/>
                    </div>
                    <div>
                        <img src="https://html-templates.evonicmedia.com/arena/assets/images/index/logo_2.svg" alt="" style={{display:"flex",justifyContent:"center",marginLeft:"60px"}}/>
                    </div>
                    <div>
                        <img src="https://html-templates.evonicmedia.com/arena/assets/images/index/logo_3.svg" alt="" style={{display:"flex",justifyContent:"center",marginLeft:"60px"}}/>
                    </div>
                    <div>
                        <img src="https://html-templates.evonicmedia.com/arena/assets/images/index/logo_4.svg" alt="" style={{display:"flex",justifyContent:"center",marginLeft:"60px"}}/>
                    </div>
                    <div>
                        <img src="https://html-templates.evonicmedia.com/arena/assets/images/index/logo_5.svg" alt="" style={{display:"flex",justifyContent:"center",marginLeft:"60px"}}/>
                    </div>
                    <div>
                        <img src="https://html-templates.evonicmedia.com/arena/assets/images/index/logo_6.svg" alt="" style={{display:"flex",justifyContent:"center",marginLeft:"60px"}}/>
                    </div>
                </Slider>
            </div>
        </Box>
              </Box>
      </Box>
    </div>
  );
}

export default Backgroundvideo;
