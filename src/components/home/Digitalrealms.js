import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import craftersbg1 from '../../assets/images/home/crafters-bg.webp'
import crafter1 from '../../assets/images/home/crafter-1.webp'
import crafter2 from '../../assets/images/home/crafter-2.webp'
import crafter3 from '../../assets/images/home/crafter-3.webp'
import { useNavigate } from 'react-router-dom';

function Digitalrealms() {
     const navigate = useNavigate()
  return (
      <Box sx={{backgroundImage:`linear-gradient(rgba(40, 17, 43, 0.7),rgba(40, 17, 43, 0.7)),url(${craftersbg1})`,backgroundAttachment:"fixed",width:"100%",height:"100%",backgroundSize:"cover"}}>
          <Container maxWidth='xl'>
                    <Grid item container xs={12} spacing={2} sx={{display:"flex",justifyContent:{md:"center",sm:"center",xs:"center"},backgroundAttachment:"scroll"}}>
                        <Grid item xs={12} sm={12} md={8} lg={6} alignItems={"center"} sx={{display:"flex",height:"100vh",width:"100%"}} py={5}>
                             <Box >
                                  <Typography fontWeight={900} sx={{color:"white",fontSize:{lg:"48px",md:"48px",sm:"32px",xs:"28px"},fontFamily:"'Rajdhani', sans-serif"}} py={2}>GAME CRAFTERS SHAPING DIGITAL REALMS</Typography>
                                  <Typography sx={{fontSize:{lg:"18px",md:"16px",sm:"14px",xs:"12px"},color:"#BFBFBF",fontFamily:"'Raleway', sans-serif"}} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</Typography>
                                    <Box display={"flex"} justifyContent={"space-between"} paddingTop={5} alignItems={"center"}>
                                         <Box>
                                              <Typography variant='h4' fontWeight={700} sx={{color:"white",fontSize:{lg:"48px",md:"48px",sm:"32px",xs:"28px"},fontFamily:"'Rajdhani', sans-serif"}}>800</Typography>
                                              <Typography sx={{fontSize:{lg:"18px",md:"16px",sm:"14px",xs:"12px"},color:"#BFBFBF",fontFamily:"'Raleway', sans-serif"}}>Win-Matches</Typography>
                                         </Box>
                                         <Box>
                                             <Typography sx={{color:"#BFBFBF",fontFamily:"'Raleway', sans-serif"}} variant='h1' fontWeight={100} >|</Typography>
                                         </Box>
                                         <Box>
                                              <Typography variant='h4' fontWeight={700} sx={{color:"white",fontSize:{lg:"48px",md:"48px",sm:"32px",xs:"28px"},fontFamily:"'Rajdhani', sans-serif"}}>935</Typography>
                                              <Typography sx={{fontSize:{lg:"18px",md:"16px",sm:"14px",xs:"12px"},color:"#BFBFBF",fontFamily:"'Raleway', sans-serif"}}>Matches Played</Typography>
                                         </Box>
                                         <Box>
                                             <Typography sx={{color:"#BFBFBF",fontFamily:"'Raleway', sans-serif"}} variant='h1' fontWeight={100} >|</Typography>
                                         </Box>
                                         <Box>
                                              <Typography variant='h4' fontWeight={700} sx={{color:"white",fontSize:{lg:"48px",md:"48px",sm:"32px",xs:"28px"},fontFamily:"'Rajdhani', sans-serif"}}>24</Typography>
                                              <Typography sx={{fontSize:{lg:"18px",md:"16px",sm:"14px",xs:"12px"},color:"#BFBFBF",fontFamily:"'Raleway', sans-serif"}}>Tournament Won</Typography>
                                         </Box>
                                    </Box>
                                    <Box paddingTop={5} marginBottom={5}>
                                        <Button className='homebtn' onClick={() => navigate("/ContactUs")} sx={{ border: '1px solid white', borderRadius: '0px', padding: '15px 25px',transition:"0.7s",'&:hover': { backgroundColor: '#221C3E',border:"1px solid rgba(44,36,74,.1)"}, color: 'white', fontWeight: 600,textTransform:"unset",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"},fontFamily:"'Raleway', sans-serif"}}>Contact Us</Button>
                                    </Box>
                             </Box>
                        </Grid>
                        <Grid item xs={12} sm={10} md={8} lg={6} paddingTop={5} sx={{display:{lg:"flex",md:"flex",sm:"flex",xs:"block"},justifyContent:{md:"center",sm:"center",xs:"center"}}} alignItems={"center"}>
                             <Box >
                                 <Box gap={3} alignItems={"center"} sx={{display:{lg:"flex",md:"flex",sm:"flex",xs:"block"},justifyContent:{md:"center",sm:"center",xs:"center"}}}>
                                      <Box textAlign={"center"} padding={"10px 0px 40px 0px"}>
                                          <Box className='maintext' >
                                             <Typography className='text-1' variant='h1' fontWeight={700} sx={{marginBottom:{lg:"-30px",md:"-30px",sm:"-30px",xs:"-20px"},fontSize:{lg:"96px",md:"96px",sm:"66px",xs:"36px",fontFamily:"'Raleway', sans-serif"}}}>TEST</Typography>
                                          </Box>
                                           <img src={crafter1} alt="" className='gameimg'/>
                                      </Box>
                                      <Box textAlign={"center"}>
                                           <img src={crafter2} alt="" className='gameimg' style={{marginBottom:"20px"}}/>
                                           <Box className='maintext' >
                                             <Typography className='text-1' variant='h1' fontWeight={700} sx={{marginTop:{lg:"-96px",md:"-96px",sm:"-76px",xs:"-50px"},fontSize:{lg:"96px",md:"96px",sm:"66px",xs:"36px"},fontFamily:"'Raleway', sans-serif"}}>Your</Typography>
                                          </Box>
                                           <img src={crafter3} alt="" className='gameimg' style={{paddingTop:"20px",width:{xs:"100%"},height:"100pox"}} />
                                      </Box>
                                 </Box>
                                 <Box className='maintext' >
                                      <Typography className='text-1' textAlign={"center"} fontWeight={700} sx={{marginTop:{lg:"-96px",md:"-96px",sm:"-76px",xs:"-30px"},fontSize:{lg:"96px",md:"96px",sm:"66px",xs:"36px"},fontFamily:"'Raleway', sans-serif"}}>LIMITS</Typography>
                                 </Box>
                             </Box>
                        </Grid>
                    </Grid>

               
          </Container>
      </Box>
  );
}

export default Digitalrealms;
