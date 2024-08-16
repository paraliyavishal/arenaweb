import { Avatar, Box, Container, Stack, Grid, Rating, Typography } from '@mui/material'
import React from 'react'
import card1img from '../../../assets/images/pages/testimonials1.webp'
import card2img from '../../../assets/images/pages/testimonials2.webp'
import card3img from '../../../assets/images/pages/testimonials3.webp'
import card4img from '../../../assets/images/pages/testimonials4.webp'

function RavingReviews() {

    const [value, setValue] = React.useState(5);

  return (

    <Box sx={{backgroundColor:"#100A2E",paddingBottom:"80px"}}>
      <Box sx={{color:"#fff", textAlign:"center",paddingTop:"80px", paddingBottom:"80px"}}>
        <Typography variant='h3' sx={{fontSize:{lg:"48px",md:"40px",sm:"32px",xs:"28px"},fontWeight:"700",lineHeight:"80px",fontFamily:"'Rajdhani',sans-serif"}}>RAVING REVIEWS AND STORIES</Typography>
        <Typography sx={{color:"#BFBFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},lineHeight:"22px",fontFamily:"'Raleway', sans-serif"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</Typography>
        <Typography sx={{color:"#BFBFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},lineHeight:"22px",fontFamily:"'Raleway', sans-serif"}}>standard dummy text.standard dummy text.</Typography>
      </Box>

      <Container maxWidth='xl'>
        <Grid container item xs={12} spacing={10} marginBottom={10}>
            <Grid item xs={12} sm={12} md={6} xl={6}>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100" data-aos-duration="1000">
            <Box sx={{ backgroundColor: "#2B2A65", padding: "30px" }}>
          <Typography sx={{ fontSize:{lg:"20px",md:"20px",sm:"18px",xs:"16px"}, lineHeight: "36px", color: "white", fontWeight: "500", fontFamily: "'Raleway', sans-serif" }}>
            Excellent Service
          </Typography>
          <Typography sx={{ fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"}, color: "#BFBFBF",paddingTop:"25px",fontFamily: "'Raleway', sans-serif"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </Typography>
          <Box sx={{ marginTop: "50px" }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar src={card1img} alt="Remy Sharp" sx={{ width: 53, height: 53, border: "2px solid #30D855" }} />
              <Box>
                <Typography component="legend" sx={{ color: "#fff",fontSize:{lg:"18px",md:"16px",sm:"14px",xs:"12px"},fontFamily: "'Raleway', sans-serif" }}>Hector Salamanca</Typography>
                <Rating name="read-only" value={value} readOnly sx={{ color: "#30D855" }} />
              </Box>
            </Stack>
          </Box>
        </Box>
        </div>
    </Grid>

    <Grid item xs={12} sm={12} md={6} lg={6}>
    <div data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-delay="100" data-aos-duration="1000">
            <Box sx={{ backgroundColor: "#221C3E", padding: "30px","&:hover":{backgroundColor:"#2B2A65"}}}>
          <Typography sx={{ fontSize:{lg:"20px",md:"20px",sm:"18px",xs:"16px"}, lineHeight: "36px", color: "white", fontWeight: "500", fontFamily: "'Raleway', sans-serif" }}>
            Excellent Service
          </Typography>
          <Typography sx={{ fontSize: {lg:"16px",md:"16px",sm:"14px",xs:"12px"}, color: "#BFBFBF",paddingTop:"25px",fontFamily: "'Raleway', sans-serif"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </Typography>
          <Box sx={{ marginTop: "50px" }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar src={card2img} alt="Remy Sharp" sx={{ width: 53, height: 53, border: "2px solid #30D855" }} />
              <Box>
                <Typography component="legend" sx={{ color: "#fff",fontSize:{lg:"18px",md:"16px",sm:"14px",xs:"12px"},fontFamily: "'Raleway', sans-serif"}}>Steve Burr</Typography>
                <Rating name="read-only" value={value} readOnly sx={{ color: "#30D855" }} />
              </Box>
            </Stack>
          </Box>
        </Box>
        </div>
    </Grid>
</Grid>

        <Grid container item xs={12} spacing={10}>
        <Grid item xs={12} sm={12} md={6} xl={6}>
        <div data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-delay="100" data-aos-duration="1000">
            <Box sx={{ backgroundColor: "#221C3E", padding: "30px","&:hover":{backgroundColor:"#2B2A65"}}}>
          <Typography sx={{ fontSize:{lg:"20px",md:"20px",sm:"18px",xs:"16px"}, lineHeight: "36px", color: "white", fontWeight: "500", fontFamily: "'Raleway', sans-serif" }}>
            Excellent Service
          </Typography>
          <Typography sx={{ fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily: "'Raleway', sans-serif", color: "#BFBFBF",paddingTop:"25px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </Typography>
          <Box sx={{ marginTop: "50px" }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar src={card3img} alt="Remy Sharp" sx={{ width: 53, height: 53, border: "2px solid #30D855" }} />
              <Box>
                <Typography component="legend" sx={{ color: "#fff", fontSize:{lg:"18px",md:"16px",sm:"14px",xs:"12px"},fontFamily: "'Raleway', sans-serif"}}>Chris Hemswoth</Typography>
                <Rating name="read-only" value={value} readOnly sx={{ color: "#30D855" }} />
              </Box>
            </Stack>
          </Box>
        </Box>
        </div>
    </Grid>

    <Grid item xs={12} sm={12} md={6} xl={6}>
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100" data-aos-duration="1000">
            <Box sx={{ backgroundColor: "#221C3E", padding: "30px","&:hover":{backgroundColor:"#2B2A65"}}}>
          <Typography sx={{ fontSize:{lg:"20px",md:"20px",sm:"18px",xs:"16px"}, lineHeight: "36px", color: "white", fontWeight: "500", fontFamily: "'Raleway', sans-serif" }}>
            Excellent Service
          </Typography>
          <Typography sx={{fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily: "'Raleway', sans-serif",  color: "#BFBFBF",paddingTop:"25px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </Typography>
          <Box sx={{ marginTop: "50px" }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar src={card4img} alt="Remy Sharp" sx={{ width: 53, height: 53, border: "2px solid #30D855" }} />
              <Box>
                <Typography component="legend" sx={{ color: "#fff", fontSize:{lg:"18px",md:"16px",sm:"14px",xs:"12px"},fontFamily: "'Raleway', sans-serif" }}>Gastavo Fring</Typography>
                <Rating name="read-only" value={value} readOnly sx={{ color: "#30D855" }} />
              </Box>
            </Stack>
          </Box>
        </Box>
        </div>
    </Grid>
  </Grid>
</Container>  
</Box>
  )
}

export default RavingReviews;
