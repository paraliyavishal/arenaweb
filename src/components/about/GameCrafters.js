import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import crafter1 from '../../assets/images/about/crafterimg1.webp'
import crafter2 from '../../assets/images/about/crafterimg2.webp'
import crafter3 from '../../assets/images/about/crafterimg3.webp'
import { useNavigate } from 'react-router-dom';

function GameCrafters() {

const navigate = useNavigate()

  return (
    <Box sx={{backgroundColor:"#100A2E",width:"100%",height:"100%",backgroundSize:"cover",paddingBottom:"30px"}}>
       <Box sx={{bgcolor:"#100a2e",color:"#fff", textAlign:"center",paddingTop:"80px",paddingBottom:{xs:"40px",lg:"10px"}}}>
        <Typography variant='h3' sx={{fontSize:{lg:"48px",md:"48px",sm:"34px",xs:"34px"},fontWeight:"700",fontFamily:"'Rajdhani',sans-serif"}} pt={1}>GAME CRAFTERS SHAPING DIGITAL </Typography>
        <Typography variant='h3' sx={{fontSize:{lg:"48px",md:"48px",sm:"34px",xs:"34px"},fontWeight:"700",fontFamily:"'Rajdhani',sans-serif"}} pb={1}>REALMS</Typography>
        <Typography sx={{color:"#BFBFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</Typography>
        <Typography sx={{color:"#BFBFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>industry's standard dummy text ever since the 1500s, when an unknown printer took.Lorem Ipsum is simply</Typography>
        <Typography sx={{color:"#BFBFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>dummy text of the printing and typesetting industry..</Typography>
      </Box>


    <Container maxWidth='xl'>
         <Grid item container xs={12} spacing={7} sx={{display:"flex",justifyContent:{md:"center",sm:"center",xs:"center"}}}>
             <Grid item xs={12} sm={12} md={8} lg={6} alignItems={"center"} sx={{display:"flex",height:"100vh",width:"100%",}} py={3}>
                  <Box sx={{textAlign:{lg:"start",md:"start",sm:"start",xs:"center"}}}>
                       <Typography sx={{color:"white",fontWeight:"700",fontSize:{lg:"48px",md:"48px",sm:"34px",xs:"34px"},fontFamily:"'Rajdhani',sans-serif"}} py={2}>OUR STORY</Typography>
                       <Typography sx={{color:"#BFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took.Lorem
                        Ipsum is simply dummy text of the printing and typesetting industry..</Typography>
                         <Box display={"flex"} justifyContent={"space-between"} paddingTop={5} alignItems={"center"}>
                              <Box>
                                   <Typography variant='h4' fontWeight={700} sx={{color:"white",fontSize:{lg:"48px",md:"48px",sm:"34px",xs:"34px"},fontFamily:"'Rajdhani',sans-serif"}}>800</Typography>
                                   <Typography sx={{color:"#BFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>Win-Matches</Typography>
                              </Box>
                              <Box>
                                   <Typography sx={{color:"#BFBFBF",fontFamily:"'Raleway', sans-serif"}} variant='h1' fontWeight={100} >|</Typography>
                              </Box>
                              <Box >
                                   <Typography variant='h4' fontWeight={700} sx={{color:"white",fontSize:{lg:"48px",md:"48px",sm:"34px",xs:"34px"},fontFamily:"'Rajdhani',sans-serif"}}>935</Typography>
                                   <Typography sx={{color:"#BFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>Matches Played</Typography>
                              </Box>
                              <Box>
                                 <Typography sx={{color:"#BFBFBF",fontFamily:"'Raleway', sans-serif"}} variant='h1' fontWeight={100} >|</Typography>
                              </Box>
                              <Box>
                                   <Typography variant='h4' fontWeight={700} sx={{color:"white",fontSize:{lg:"48px",md:"48px",sm:"34px",xs:"34px"},fontFamily:"'Rajdhani',sans-serif"}}>24</Typography>
                                   <Typography sx={{color:"#BFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>Tournament Won</Typography>
                              </Box>
                         </Box>
                         <Box paddingTop={5}>
                             <Button className='homebtn' onClick={() => navigate("/ContactUs")} sx={{ border: '1px solid white',textTransform:"unset",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif", borderRadius: '0px', padding: '15px 25px',transition:"0.7s",'&:hover': { backgroundColor: '#221C3E',border:"1px solid rgba(44,36,74,.1)"}, color: 'white', fontWeight: 600 }}>Contact Us</Button>
                         </Box>
                  </Box>
             </Grid>
             <Grid item xs={12} sm={10} md={8} lg={6} paddingTop={5} sx={{display:{lg:"flex",md:"flex",sm:"flex",xs:"block"},justifyContent:{md:"center",sm:"center",xs:"center"}}} alignItems={"center"}>
                  <Box >
                      <Box gap={3} alignItems={"center"} sx={{display:{lg:"flex",md:"flex",sm:"flex",xs:"block"},justifyContent:{md:"start",sm:"center",xs:"center"}}}>
                           <Box textAlign={"center"} padding={"10px 0px 40px 0px"}>
                               <Box className='maintext' >
                                  <Typography className='text-1' variant='h1' fontWeight={700} sx={{marginBottom:{lg:"-30px",md:"-30px",sm:"-30px",xs:"-20px"},fontSize:{lg:"96px",md:"96px",sm:"66px",xs:"56px"}}}>TEST</Typography>
                               </Box>
                                <img src={crafter1} alt="" className='gameimg'/>
                           </Box>
                           <Box textAlign={"center"}>
                                <img src={crafter2} alt="" className='gameimg' style={{marginBottom:"20px"}}/>
                                <Box className='maintext' >
                                  <Typography className='text-1' variant='h1' fontWeight={700} sx={{marginTop:{lg:"-96px",md:"-96px",sm:"-76px",xs:"-50px"},fontSize:{lg:"96px",md:"96px",sm:"66px",xs:"56px"}}}>Your</Typography>
                               </Box>
                                <img src={crafter3} alt="" className='gameimg' style={{paddingTop:"20px",width:{xs:"100%"},height:"100pox"}} />
                           </Box>
                      </Box>
                      <Box className='maintext' >
                           <Typography className='text-1' textAlign={"center"} fontWeight={700} sx={{marginTop:{lg:"-96px",md:"-96px",sm:"-76px",xs:"-30px"},fontSize:{lg:"96px",md:"96px",sm:"66px",xs:"56px"}}}>LIMITS</Typography>
                      </Box>
                  </Box>
             </Grid>
         </Grid>
    </Container>
</Box>
  );
}

export default GameCrafters;
