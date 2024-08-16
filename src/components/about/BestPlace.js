import { Box, Typography } from '@mui/material'
import React from 'react'
import bestplaceimg from '../../assets/images/about/bestplaceimg.webp'
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';

function BestPlace() {
  return (
    <Box>
      <Box sx={{backgroundImage:`linear-gradient(rgba(40, 17, 43, 0.7),rgba(40, 17, 43, 0.7)),url(${bestplaceimg})`,height:"80vh",objectFit:"cover",backgroundSize:"cover"}}>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",textAlign:"center"}}>
            <Box>
            <Typography sx={{color:'#fff',fontSize:{lg:"65px",md:"65px",sm:"34px",xs:"34px"},fontWeight:"700",fontFamily:"'Rajdhani',sans-serif",lineHeight:{xs:"45px",lg:"70px"}}}>BEST PLACE TO BECOME A</Typography>
            <Typography sx={{color:'#fff',fontSize:{lg:"65px",md:"65px",sm:"34px",xs:"34px"},fontWeight:"700",fontFamily:"'Rajdhani',sans-serif",lineHeight:{xs:"45px",lg:"70px"}}}>PROFESSIONAL</Typography>
            <Typography sx={{color:"#fff",fontWeight:"500",fontSize:{lg:"18px",md:"18px",sm:"16px",xs:"16px"},fontFamily:"'Raleway', sans-serif",paddingTop:"20px"}}>WATCH OUR VIDEO</Typography>
            <Box sx={{marginTop:"0px"}}>
                <PlayCircleFilledRoundedIcon sx={{fontSize:"60px",marginTop:"50px",color:'#2B2A65'}} className='loader' />
            </Box>
            </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BestPlace
