import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import crafter1 from '../../assets/images/about/crafterimg1.webp'
import crafter2 from '../../assets/images/about/crafterimg2.webp'
import crafter3 from '../../assets/images/about/crafterimg3.webp'
import { useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';

function GameCrafters() {

const navigate = useNavigate()
const [startCounting, setStartCounting] = useState(false);
const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <Box sx={{backgroundColor:"#100A2E",width:"100%",height:"100%",backgroundSize:"cover",paddingBottom:"30px"}}>
       <Box sx={{bgcolor:"#100a2e",color:"#fff", textAlign:"center",paddingTop:"80px",paddingBottom:{xs:"40px",lg:"10px"}}}>
             <Box sx={{display:"flex",justifyContent:"center"}}>
               <Typography variant='h3' sx={{fontSize:{lg:"48px",md:"48px",sm:"34px",xs:"34px"},fontWeight:"700",fontFamily:"'Rajdhani',sans-serif",width:{lg:"50%",md:"60%",sm:"80%",xs:"100%"}}} py={1}>GAME CRAFTERS SHAPING DIGITAL REALMS</Typography>
             </Box>
             <Box sx={{display:"flex",justifyContent:"center"}}>
               <Typography sx={{width:{lg:"56%",md:"70%",xs:"100%"},color:"#BFBFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.Lorem Ipsum is simply dummy text of the printing and typesetting industry..</Typography>
             </Box>
      </Box>


    <Container maxWidth='xl'>
         <Grid item container xs={12} spacing={7} sx={{display:"flex",justifyContent:{md:"center",sm:"center",xs:"center"}}}>
             <Grid item xs={12} sm={12} md={8} lg={6} alignItems={"center"} sx={{display:"flex",height:"100vh",width:"100%",}} py={3}>
                  <Box sx={{textAlign:{lg:"start",md:"start",sm:"start",xs:"center"}}}>
                       <Typography sx={{color:"white",fontWeight:"700",fontSize:{lg:"48px",md:"48px",sm:"34px",xs:"34px"},fontFamily:"'Rajdhani',sans-serif"}} py={2}>OUR STORY</Typography>
                       <Typography sx={{color:"#BFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took.Lorem
                        Ipsum is simply dummy text of the printing and typesetting industry..</Typography>
                         <Box ref={statsRef} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                              <Box >
                                        <Typography
                                          sx={{
                                            fontWeight: 900,
                                            color: "white",
                                            fontSize: { lg: "48px", md: "48px", sm: "32px", xs: "28px" },
                                            fontFamily: "'Rajdhani', sans-serif",
                                          }}
                                        >
                                          {startCounting ? <CountUp end={800} duration={2} /> : "0"}
                                        </Typography>
                                   <Typography sx={{color:"#BFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>Win-Matches</Typography>
                              </Box>
                              <Box>
                                   <Typography sx={{color:"#BFBFBF",fontFamily:"'Raleway', sans-serif"}} variant='h1' fontWeight={100} >|</Typography>
                              </Box>
                              <Box >
                                   <Typography variant='h4' fontWeight={700} sx={{color:"white",fontSize:{lg:"48px",md:"48px",sm:"34px",xs:"34px"},fontFamily:"'Rajdhani',sans-serif"}}> {startCounting ? <CountUp end={935} duration={2} /> : "0"}</Typography>
                                   <Typography sx={{color:"#BFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>Matches Played</Typography>
                              </Box>
                              <Box>
                                 <Typography sx={{color:"#BFBFBF",fontFamily:"'Raleway', sans-serif"}} variant='h1' fontWeight={100} >|</Typography>
                              </Box>
                              <Box>
                                   <Typography variant='h4' fontWeight={700} sx={{color:"white",fontSize:{lg:"48px",md:"48px",sm:"34px",xs:"34px"},fontFamily:"'Rajdhani',sans-serif"}}> {startCounting ? <CountUp end={24} duration={2} /> : "0"}</Typography>
                                   <Typography sx={{color:"#BFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>Tournament Won</Typography>
                              </Box>
                         </Box>
                         <Box paddingTop={5}>
                             <Button onClick={() => navigate("/contact_us")} sx={{ border: '1px solid white',transition:".7s", borderRadius: '0px', padding: '10px 20px', '&:hover': { backgroundColor: '#6B5FFE',border:"1px solid rgba(44,36,74,.26)" }, color: 'white',textTransform:"unset",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>
                                Contact Us
                              </Button>
                         </Box>
                  </Box>
             </Grid>
             <Grid item xs={12} sm={10} md={8} lg={6} sx={{display:{lg:"flex",md:"flex",sm:"flex",xs:"flex"},justifyContent:{md:"center",sm:"center",xs:"center"}}} alignItems={"center"}>
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
