import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Dreambiggerbg from '../../assets/images/home/pricing.webp'
import shap from '../../assets/images/home/shapes-bg.webp'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useNavigate } from 'react-router-dom';

function Dreambigger() {
  const navigate = useNavigate();
  return (
    <Box sx={{backgroundColor:"#070929",height:"100%",paddingTop:"50px"}}>
          <Container maxWidth='xl'>
               <Box>
                    <Grid item container xs={12} pt={5} spacing={5} display={"flex"} justifyContent={"center"}>
                        <Grid item xs={12} sm={10} md={7} lg={6}>
                             <Box>
                                    <Box className='maintext' >
                                        <Typography className='text-1' variant='h1' zIndex={-1} fontWeight={700} sx={{marginBottom:{lg:"-40px",md:"-30px",sm:"-30px",xs:"-20px"},fontSize:{lg:"70px",md:"70px",sm:"70px",xs:"35px"},textAlign:"center"}}>DREAM BIGGER</Typography>
                                    </Box>
                                  
                                     <img src={Dreambiggerbg} alt="" width={"100%"} style={{zIndex:"1"}}/>

                                  <Box sx={{zIndex:"-1",overflow:"hidden",display:"flex",gap:"30px",display:{lg:"block",md:"none",sm:"none",xs:"none"}}}>
                                    <img src={shap} alt="" width={"220px"} style={{marginTop:"-70px",transform:"rotate(60deg)"}} />
                                    <img src={shap} alt="" width={"220px"} style={{marginTop:"-60px",transform:"rotate(360deg)"}} />
                                    <img src={shap} alt="" width={"220px"} style={{marginTop:"-90px",transform:"rotate(110deg)"}} />
                                  </Box>
                             </Box>
                        </Grid>
                        <Grid item xs={12} sm={10} md={7} lg={6}>
                            <Box >
                                 <Box my={10} sx={{textAlign:{md:"center",sm:"center",xs:"center",lg:"start"}}}>
                                        <Typography fontWeight={700} sx={{color:"white",fontSize:{lg:"48px",md:"48px",sm:"28px",xs:"28px"}}} py={2}>Pricing Plan</Typography>
                                        <Typography sx={{color:"#BFBFBF",paddingRight:{lg:"200px",md:"0px"},fontSize:{lg:"18px",md:"18px",sm:"12px",xs:"12px"}}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply.</Typography>
                                 </Box>
                                <Grid item xs={12} container spacing={2} display={"flex"} justifyContent={"center"}>
                                  <Grid item xs={12} sm={10} md={6} lg={6}>
                                  <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100" data-aos-duration="1000">
                                  <Box padding={3} py={5} sx={{border:"1px solid #2B2A65","&:hover":{"& .text":{color:"#30d855",transition:"0.7s"}}}}>
                                         <Typography className='text' variant='h5' sx={{color:"#fff",paddingBottom:"26px",fontWeight:"700",fontSize:"22px",fontFamily:"'Raleway', sans-serif"}}>Basic Pakage</Typography>
                                         <Typography sx={{color:"#fff",fontSize:{lg:"60px",md:"50px",sm:"36px",xs:"36px"},fontWeight:"700",lineHeight:"71px",fontFamily:"'Rajdhani',sans-serif",paddingBottom:"26px"}}>$350
                                         <span style={{fontSize:"22px",fontWeight:"500",marginLeft:"10px",lineHeight:"26px",fontFamily:"'Raleway', sans-serif"}}>/month</span>
                                         </Typography>
                                             <Typography sx={{ display: 'flex', alignItems: 'center',color:"#BFBFBFBF",fontSize:"18px",fontFamily:"'Raleway', sans-serif" }}>
                                                 <FiberManualRecordIcon sx={{ fontSize: 34, color: '#fff', marginRight: 1}} />
                                                 Lorem Ipsum is simply dummy text of the printing.
                                             </Typography>
                                         <Box marginTop={2} display={"flex"} justifyContent={"center"}>
                                            <Button className='c-button c-button--gooey' onClick={() => navigate("/pricing")} sx={{borderRadius:"0px",overflow:"hidden",border:"1px solid #30d855",color:"#30d855",fontWeight:"600",lineHeight:"38px",textTransform:"unset",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"} ,fontFamily:"'Raleway', sans-serif",padding:{xs:"8px 30px 8px 30px",sm:"8px 70px 8px 70px",md:"8px 40px 8px 40px",lg:"8px 60px 8px 60px"},"&:hover":{color:"black"}}}>Get Started
                                               <Box className='c-button__blobs'>
                                                 <Box></Box>
                                                 <Box></Box>
                                                 <Box></Box>
                                               </Box>
                                            </Button>
                                             <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{display:"block",height:"0",width:"0"}}>
                                               <defs>
                                                 <filter id="goo">
                                                   <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                                                   <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
                                                   <feBlend in="SourceGraphic" in2="goo"></feBlend>
                                                 </filter>
                                               </defs>
                                             </svg>
                                         </Box>
                                    </Box>
                                    </div>
                                  </Grid>
                                  <Grid item xs={12} sm={10} md={6} lg={6}>
                                  <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="200" data-aos-duration="1000">
                                  <Box padding={3} py={5} sx={{my:{lg:"120px",md:"100px",sm:"50px",xs:"50px"},border:"1px solid #2B2A65","&:hover":{"& .text":{color:"#30d855",transition:"0.7s"}}}}>
                                         <Typography className='text' variant='h5' sx={{color:"#fff",paddingBottom:"26px",fontWeight:"700",fontSize:"22px",fontFamily:"'Raleway', sans-serif"}}>Basic Pakage</Typography>
                                         <Typography sx={{color:"#fff",fontSize:{lg:"60px",md:"50px",sm:"36px",xs:"36px"},fontWeight:"700",lineHeight:"71px",fontFamily:"'Rajdhani',sans-serif",paddingBottom:"26px"}}>$150
                                         <span style={{fontSize:"22px",fontWeight:"500",marginLeft:"10px",lineHeight:"26px",fontFamily:"'Raleway', sans-serif"}}>/month</span>
                                         </Typography>
                                             <Typography sx={{ display: 'flex', alignItems: 'center',color:"#BFBFBFBF",fontSize:"18px",fontFamily:"'Raleway', sans-serif" }}>
                                                 <FiberManualRecordIcon sx={{ fontSize: 34, color: '#fff', marginRight: 1}} />
                                                 Lorem Ipsum is simply dummy text of the printing.
                                             </Typography>
                                         <Box marginTop={2} display={"flex"} justifyContent={"center"}>
                                            <Button className='c-button c-button--gooey' onClick={() => navigate("/pricing")} sx={{borderRadius:"0px",overflow:"hidden",border:"1px solid #30d855",color:"#30d855",fontWeight:"600",lineHeight:"38px",textTransform:"unset",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"},  fontFamily:"'Raleway', sans-serif",padding:{xs:"8px 30px 8px 30px",sm:"8px 70px 8px 70px",md:"8px 40px 8px 40px",lg:"8px 60px 8px 60px"},"&:hover":{color:"black"}}}>Get Started
                                               <Box className='c-button__blobs'>
                                                 <Box></Box>
                                                 <Box></Box>
                                                 <Box></Box>
                                               </Box>
                                            </Button>
                                             <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{display:"block",height:"0",width:"0"}}>
                                               <defs>
                                                 <filter id="goo">
                                                   <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                                                   <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
                                                   <feBlend in="SourceGraphic" in2="goo"></feBlend>
                                                 </filter>
                                               </defs>
                                             </svg>
                                         </Box>
                                    </Box>
                                    </div>
                                  </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
               </Box>
          </Container>
    </Box>
  );
}

export default Dreambigger;
