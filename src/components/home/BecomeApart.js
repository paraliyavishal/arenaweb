import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import becomepart from '../../assets/images/home/become-part-bg.webp'
import become from '../../assets/images/home/become.webp'
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';


function BecomeApart() {
  return (
   <Box sx={{backgroundImage:`linear-gradient(rgba(50,36,74,.36),rgba(50,36,74,.36)),url(${becomepart})`,width:"100%",height:"100%",backgroundSize:"cover",objectFit:"cover",display:"flex",alignItems:"center"}}>
       <Container maxWidth='xl' >
             <Box py={10}>
                <Grid item container xs={12} display={"flex"} justifyContent={"center"}>
                    <Grid xs={12} md={10} lg={6} item>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100" data-aos-duration="1000">
                        <Box sx={{backgroundColor:"#2B2A65",padding:"20px"}} height={"370px"} display={"flex"} alignItems={"center"}>
                            <Box>
                               <Typography fontWeight={700} sx={{color:"white",fontSize:{lg:"48px",md:"48px",sm:"40px",xs:"28px"},fontFamily:"'Rajdhani', sans-serif"}}>Become A Part Of Us</Typography>
                               <Typography sx={{color:"#BFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}} my={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Has been the industry's standard dummy text ever since the 1500s,</Typography>
                               <Box  gap={3} justifyContent="start" sx={{display:{lg:"flex",md:"flex",sm:"block",xs:"block"},paddingTop:{lg:"30px",md:"30px",sm:"10px",xs:"0px"}}}>
                                 <Button className='homebtn' sx={{fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",marginBottom:{sm:"10px",xs:"5px"},display:"flex",justifyContent:{xs:"center"},backgroundColor:"#221C3E",border: '1px solid white', borderRadius: '0px', padding: '10px 20px', '&:hover': { backgroundColor: '#221C3E',border:"1px solid rgba(44,36,74,.26)" }, color: 'white', fontWeight: 600 }}>
                                   Become a Member
                                 </Button>
                                 <Button className='homebtn' sx={{fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif", marginBottom:{sm:"10px",xs:"5px"},border: '1px solid white', borderRadius: '0px', padding: '10px 20px', '&:hover': { backgroundColor: '#221C3E',border:"1px solid rgba(44,36,74,.26)" }, color: 'white', fontWeight: 600 }}>
                                   Contact Us
                                 </Button>
                               </Box>
                            </Box>
                        </Box>
                        </div>
                    </Grid>
                    <Grid xs={12} md={10} lg={6} item>
                        <Box sx={{backgroundImage:`linear-gradient(90deg,rgba(43,42,101,90),rgba(43,42,101,.0)),url(${become})`,justifyContent:"center",display:"flex",alignItems:"center",zIndex:"-1",width:"100%",backgroundSize:"cover",objectFit:"cover",height:"370px"}}>
                             <Box >
                               <PlayCircleFilledRoundedIcon className='loader' sx={{zIndex:"1",fontSize:"60px"}}/>
                             </Box>
                        </Box> 
                    </Grid>
                </Grid>
             </Box>
       </Container>
   </Box>
  );
}

export default BecomeApart;
