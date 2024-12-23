import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import TeamMind from '../home/TeamMind'


function MeetOur() {
  return (
    <Box sx={{bgcolor:"#100A2E",paddingBottom:"80px"}}>
        <Box sx={{color:"#fff", textAlign:"center",paddingTop:"80px", paddingBottom:"80px"}}>
            <Typography variant='h3'sx={{fontSize:"46px",fontWeight:"700",lineHeight:"80px",fontFamily:"'Rajdhani',sans-serif"}}>MEET OUR MASTERMINDS</Typography>
            <Typography sx={{color:"#BFBFBFBF",fontSize:"20px",lineHeight:"22px",fontFamily:"'Raleway', sans-serif"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </Typography>
            <Typography sx={{color:"#BFBFBFBF",fontSize:"20px",lineHeight:"22px",fontFamily:"'Raleway', sans-serif"}}>industry's standard dummy text.standard dummy text.</Typography>
        </Box>

        <Container maxWidth='xl'>

             <TeamMind />
          
            <Box sx={{display:"flex",justifyContent:"center"}} pt={5}>
                  <Button className='homebtn' sx={{ border: '1px solid white', borderRadius: '0px', padding: '10px 20px', '&:hover': { backgroundColor: '#221C3E',border:"1px solid rgba(44,36,74,.26)" }, color: 'white',textTransform:"unset",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>
                      View More
                  </Button>
            </Box>
        </Container>

    </Box>
  )
}

export default MeetOur
