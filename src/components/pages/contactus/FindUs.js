import { Box, Container, Typography } from '@mui/material'
import React from 'react'

function FindUs() {
  return (
    <Box sx={{backgroundColor:"#100A2E",color:"white",paddingTop:"20px",paddingBottom:"80px"}}>
        <Container maxWidth='xl'>
            <Box>
                <Typography sx={{fontSize:{lg:"48px",md:"40px",sm:"32px",xs:"28px"},textAlign:{xs:"center",sm:"center",md:"start",lg:"start"},fontWeight:"700",fontFamily:"'Rajdhani', sans-serif",paddingBottom:"20px"}}>FIND US HERE</Typography>
            </Box>
            <Box>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6511980.1304290565!2d-124.59210174550276!3d37.16036014148867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1723452435979!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Box>
        </Container>
    </Box>
  )
}

export default FindUs
