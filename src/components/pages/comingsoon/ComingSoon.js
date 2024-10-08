import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import comingsoon from '../../../assets/images/pages/comingsoonimg.webp'

function ComingSoon() {
  return (
    <Box sx={{backgroundImage:`linear-gradient(rgba(28, 13, 40, 0.596),rgba(28, 13, 40, 0.596)),url(${comingsoon})`,width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <Container>
      <Box sx={{color:"white"}}>
            <Box sx={{textAlign:"center"}}>
                <Typography sx={{fontSize:{lg:"65px",md:"65px",sm:"34px",xs:"34px"},fontWeight:"700",fontFamily:"'Rajdhani', sans-serif"}}>WE ARE COMING SOON</Typography>
                <Typography sx={{color:"#bfbfbf",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway',sans-serif"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'.</Typography>
                <Box justifyContent={'center'} width={"100%"} paddingTop={5} gap={4} sx={{display:{lg:"flex",md:"flex",sm:"flex",xs:"block"}}}>
                    <Box marginBottom={3} textAlign={'center'}>
                      <Button className='homebtn' sx={{ border: '1px solid white',fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},textTransform:"unset", fontFamily:"'Raleway',sans-serif",borderRadius: '0px',backgroundColor: '#221C3E', padding: '15px 25px',transition:"0.7s",'&:hover': {backgroundColor: '#221C3E', border:"1px solid rgba(44,36,74,.1)"}, color: 'white' }}>Back To Home</Button>
                    </Box>
                    <Box marginBottom={5} textAlign={'center'} >
                      <Button className='homebtn' sx={{ border: '1px solid white',fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},textTransform:"unset", fontFamily:"'Raleway',sans-serif",borderRadius: '0px', padding: '15px 25px',transition:"0.7s",'&:hover': { backgroundColor: '#221C3E',border:"1px solid rgba(44,36,74,.1)"}, color: 'white' }}>Contact Us</Button>
                    </Box>
                </Box>
            </Box>
      </Box>
    </Container>
    </Box>
  )
}

export default ComingSoon
