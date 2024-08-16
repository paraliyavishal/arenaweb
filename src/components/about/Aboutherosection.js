import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import bgimg from '../../assets/images/games/bgimg.webp'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Header from '../../commoncomponets/header/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';



function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}


function Aboutherosection() {

  const navigate = useNavigate();
    const sliderRef = useRef(null);
  // Function to play the slider
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
    <Box sx={{backgroundImage:`linear-gradient(rgba(40, 17, 43, 0.541),rgba(40, 17, 43, 0.521)),url(${bgimg})`,backgroundAttachment:"fixed",paddingBottom:"4px",paddingTop:"10px"}}>
      <Header />
    <Box alignItems={"center"} sx={{width:"100%",height:"100%",backgroundRepeat:"no-repeat",display:"flex",justifyContent:"center",textAlign:"center",backgroundPosition:"center",backgroundSize:"cover"}}>
   <Box sx={{marginTop:"200px",paddingBottom:"55px"}}>
   <div data-aos="zoom-in-up" data-aos-delay="100" data-aos-duration="1000"> 
     <Typography py={2} sx={{fontFamily:"Rajdhani, sans-serif",color:"white"}} fontWeight={700} variant='h2'>ABOUT US</Typography>
     <div onClick={handleClick}>
     <Breadcrumbs sx={{display:'flex',justifyContent:"center"}}
        separator={<NavigateNextIcon sx={{color:'#fff'}}  fontSize="medium" />}
        aria-label="breadcrumb"
      >
       <Link
          onClick={() => navigate("/")}
          sx={{ color: '#FFFF', fontSize:{lg:"18px",md:"16px",sm:"14px",xs:"12px"}, fontWeight: '500', fontFamily: 'Raleway, sans-serif',textDecoration:"none","&:hover":{color:"#6B5FFE"},transition:".5s"}}
        >
          Home
        </Link>
        <Link
          href="/material-ui/getting-started/installation/"
          sx={{ color: '#FFFF',fontSize:{lg:"18px",md:"16px",sm:"14px",xs:"12px"}, fontWeight: '500', fontFamily: 'Raleway, sans-serif', cursor: 'default',textDecoration:"none"}}
        >
          About Us
        </Link>
     </Breadcrumbs>
   </div>
   </div>
   </Box>
 </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={'center'} py={5} sx={{backgroundColor:"rgba(44,36,74,.26)"}}>
            <Typography px={6} sx={{color:"white"}} fontWeight={700} variant='h6'>Our Partner:</Typography>
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

  )
}

export default Aboutherosection
