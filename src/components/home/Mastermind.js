import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import TeamMind from './TeamMind'



function Mastermind() {
  const navigate = useNavigate();
  return (
    <Box sx={{bgcolor:"#100a2e",paddingBottom:"80px"}}>
        <Box sx={{color:"#fff", textAlign:"center",paddingTop:"80px", paddingBottom:"80px"}}>
            <Typography variant='h3' sx={{fontSize:{lg:"48px",md:"40px",sm:"32px",xs:"28px"},fontWeight:"700",lineHeight:"50px",fontFamily:"'Rajdhani',sans-serif"}} py={1}>MEET OUR MASTERMINDS</Typography>
            <Typography sx={{color:"#BFBFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},lineHeight:"22px",fontFamily:"'Raleway', sans-serif"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </Typography>
            <Typography sx={{color:"#BFBFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},lineHeight:"22px",fontFamily:"'Raleway', sans-serif"}}>industry's standard dummy text.standard dummy text.</Typography>
        </Box>

        <Container maxWidth='xl'>
                <TeamMind />
            <Box display="flex" gap={3} justifyContent="center" paddingTop={6} >
                <Button className='homebtn' onClick={() => navigate("/team")} sx={{transition: "0.7s",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},textTransform:"unset",fontFamily:"'Raleway', sans-serif", border: '1px solid white', borderRadius: '0px', padding: '15px 30px', '&:hover': { backgroundColor: '#221C3E',border:"1px solid rgba(44,36,74,.26)" }, color: 'white', fontWeight: 600 }}>
                  View More
                </Button>
            </Box>
        </Container>

    </Box>
  )
}

export default Mastermind