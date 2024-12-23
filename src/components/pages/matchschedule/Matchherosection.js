import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import bgimg from '../../../assets/images/games/bgimg.webp'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Header from '../../../commoncomponets/header/Header';
import { useNavigate } from 'react-router-dom';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

function Matchherosection() {

  const navigate = useNavigate();
  return (
    <Box sx={{backgroundImage:`linear-gradient(rgba(40, 17, 43, 0.541),rgba(40, 17, 43, 0.521)),url(${bgimg})`,backgroundAttachment:"fixed",paddingBottom:"46px",paddingTop:"10px"}}>
    <Header />
   <Box alignItems={"center"} sx={{width:"100%",height:"100%",backgroundRepeat:"no-repeat",display:"flex",justifyContent:"center",textAlign:"center",backgroundPosition:"center",backgroundSize:"cover"}}>
  <Box sx={{marginTop:"200px",paddingBottom:"55px"}}>
  <div data-aos="zoom-in-up" data-aos-delay="100" data-aos-duration="1000"> 
    <Typography py={2} sx={{fontFamily:"Rajdhani, sans-serif",fontSize:{lg:"65px",md:"60px",sm:"34px",xs:"34px"},color:"white"}} fontWeight={700}>MATCH SCHEDULE</Typography>
    <div onClick={handleClick}>
    <Breadcrumbs sx={{display:'flex',justifyContent:"center"}}
      separator={<NavigateNextIcon sx={{color:'#fff',textAlign:"center"}}  fontSize="medium" />}
      aria-label="breadcrumb"
    >
      <Link
        onClick={() => navigate("/")}
        sx={{ color: '#FFFF',cursor:"pointer", fontSize:{lg:"18px",md:"16px",sm:"14px",xs:"12px"}, fontWeight: '500', fontFamily: 'Raleway, sans-serif',textDecoration:"none","&:hover":{color:"#6B5FFE"},transition:".5s"}}
      >
        Home
      </Link>
      <Link
        href="/material-ui/getting-started/installation/"
        sx={{ color: '#FFFF',fontSize:{lg:"18px",md:"16px",sm:"14px",xs:"12px"}, fontWeight: '500', fontFamily: 'Raleway, sans-serif', cursor: 'default',textDecoration:"none"}}
      >
        Match Schedule
      </Link>
    </Breadcrumbs>
  </div>
  </div>
  </Box>
</Box>
 </Box>
  )
}

export default Matchherosection
