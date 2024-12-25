import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import blogimg1 from '../../assets/images/about/blog1.webp'
import blogimg2 from '../../assets/images/about/blog2.webp'
import blogimg3 from '../../assets/images/about/blog3.webp'

const gaming =[
    {
        img:blogimg2
    },
    {
        img:blogimg3
    }
]

function Gaminginsidhts() {
  return (
    <Box sx={{backgroundColor:"#221C3E",paddingBottom:"60px",paddingTop:"80px"}}>
    <Container maxWidth='xl'>
      <Box sx={{color:"white",textAlign:{lg:"start",md:"start",sm:"center",xs:"center"}}}>
          <Typography variant='h2' sx={{fontSize:{lg:"48px",md:"40px",sm:"32px",xs:"28px"},fontWeight:"800",fontFamily:"'Rajdhani', sans-serif"}} py={2}>YOUR SOURCE FOR GAMING INSIGHTS</Typography>
          <Typography sx={{color:"#BFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>Lorem Ipsum is simply dummy text of the printing and typesetting</Typography>
          <Typography sx={{color:"#BFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>industry. Lorem Ipsum has been the industry's.</Typography>
      </Box>


      <Grid container item xs={12} spacing={4} sx={{paddingTop:"40px"}}>
          <Grid item xs={12} sm={12} md={8} lg={8}>
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100" data-aos-duration="1000">
              <Box sx={{backgroundColor:"#070929",padding:"20px",fontFamily:"'Raleway', sans-serif"}}>

                  <Box >
                     <Box overflow={'hidden'}>
                     <img src={blogimg1} alt='' style={{width:"100%"}} className='card-img'/>
                     </Box>
                      <Box sx={{display:"flex",justifyContent:"space-between",color:"#bfbfbf",paddingTop:"16px",paddingBottom:"16px"}}>
                         <Typography sx={{color:"#BFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>January 19, 2023</Typography>
                         <Typography sx={{color:"#BFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>5 min Read</Typography>
                      </Box>
                      <Typography sx={{color:"white",fontSize:{lg:"20px",md:"20px",sm:"18px",xs:"18px"},fontWeight:"700",fontFamily:"'Raleway', sans-serif"}}>Lorem ipsum dolor sit amet cons. Vitae fermentum accumsan donec enim. Aliquamnon nec luctus .</Typography>
                      <Typography sx={{color:"#bfbfbf",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},paddingTop:"20px",paddingBottom:"20px",fontFamily:"'Raleway', sans-serif"}}>
                                  Lorem ipsum dolor sit amet consectetur. Tempus libero lectus id velit fermentum et
                                  tempus. Amet egestas lobortis aliquam aliquam convallis nunc sed commodo ut.
                                  Sollicitudin diam ornare non faucibus viverra in eleifend amet pretium. Est
                                  facilisis dictum lacus ac urna odio netus. Tincidunt sit fermentum nunc curabitur
                                  tortor placerat faucibus porttitor. Duis vitae varius accumsan porttitor cursus sit.
                                  Lobortis vel rutrum risus feugiat scelerisque tristique. Nulla proin cras mauris
                                  purus amet felis sit cursus. Eget lectus felis arcu pretium sed venenatis id id sed.
                      </Typography>
                      <Typography sx={{color:"#bfbfbf",fontSize:{lg:"20px",md:"20px",sm:"18px",xs:"18px"},fontFamily:"'Raleway', sans-serif"}}> By Rodrigus Sanchez </Typography>
                  </Box>
              </Box>
              </div>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4}>
          {gaming.map((item) => <div data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-delay="100" data-aos-duration="1000">
              <Box sx={{backgroundColor:"#070929",padding:"20px",fontFamily:"'Raleway', sans-serif",marginBottom:'40px'}}>    
                  <Box overflow={'hidden'}>
                     <img src={item.img} alt='' style={{width:"100%"}} className='card-img'/>
                     </Box>
                      <Box sx={{display:"flex",justifyContent:"space-between",color:"#bfbfbf",paddingTop:"16px",paddingBottom:"16px"}}>
                         <Typography sx={{color:"#BFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>January 19, 2023</Typography>
                         <Typography sx={{color:"#BFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>5 min Read</Typography>
                      </Box>
                      <Typography sx={{color:"#bfbfbf",fontSize:{lg:"18px",md:"18px",sm:"16px",xs:"16px"},fontFamily:"'Raleway', sans-serif",paddingBottom:"10px"}}>Lorem ipsum dolor sit amet cons. Vitae fermentum asan donec enim. Aliquam non nec luctus .</Typography>
                      <Typography sx={{color:"white",fontSize:{lg:"20px",md:"20px",sm:"18px",xs:"18px"},fontWeight:"600",paddingBottom:"20px",fontFamily:"'Raleway', sans-serif"}}>By Rodrigus Sanchez</Typography>
              </Box>
          </div>)}
     </Grid>
      </Grid>
    </Container>
  </Box>
  )
}

export default Gaminginsidhts
