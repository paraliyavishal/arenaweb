import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import playing1 from '../../assets/images/home/playing-img-1.webp'
import playing2 from '../../assets/images/home/playing-img-2.webp'
import gameLogo1 from '../../assets/images/home/game-logo-1.webp'
import gameLogo2 from '../../assets/images/home/game-logo-2.webp'
import player1 from '../../assets/images/home/player-logo-1.webp'
import player2 from '../../assets/images/home/player-logo-2.webp'
import player3 from '../../assets/images/home/player-logo-3.webp'
import player4 from '../../assets/images/home/player-logo-4.webp'
import vs from '../../assets/images/home/vs.webp'
import { Link } from 'react-router-dom';

function Matches() {
  return (
    <Box sx={{backgroundColor:"#090329",height:"100%",paddingBottom:"50px"}}>
      <Container>
          <Box display={"flex"} justifyContent={"center"}>
               <Box textAlign={"center"} paddingTop={5}>
                  <Typography fontWeight={900} sx={{fontSize:{lg:"48px",md:"40px",sm:"32px",xs:"28px"},color:"#ffff",paddingTop:"50px",marginBottom:"20px",fontFamily:"'Rajdhani', sans-serif"}}>PLAN YOUR EPIC MATCHES</Typography>
                  <Typography fontWeight={500} sx={{fontSize:{lg:"28px",md:"28px",sm:"22px",xs:"20px"},color:"#30D855",marginBottom:"20px",fontFamily:"'Rajdhani', sans-serif"}}>Live Streaming</Typography>
                  <Typography  sx={{fontSize:{lg:"18px",md:"16px",sm:"14px",xs:"12px"},color:"#BFBFBF",fontFamily:"'Raleway', sans-serif"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </Typography>
                  <Typography sx={{fontSize:{lg:"18px",md:"16px",sm:"14px",xs:"12px"},color:"#BFBFBF",fontFamily:"'Raleway', sans-serif"}}>Ipsum has been the industry's standard dummy text.</Typography>
               </Box>
          </Box>
          <Grid item container xs={12} spacing={5} py={5} sx={{display:"flex",justifyContent:{md:"center",sm:"center",xs:"center"}}}>
             <Grid item lg={6} md={8} sm={10} xs={12}>
              <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100" data-aos-duration="1000">
                 <Box>
                     <Box sx={{backgroundImage:`url(${playing1})`,height:"250px",width:"100%",backgroundSize:"cover",objectFit:"cover",display:"flex",alignItems:"self-end",justifyContent:"center"}}>
                           <img src={gameLogo1} alt="" style={{marginBottom:"30px"}} className='player'/>
                     </Box>
                     <Box display={"flex"} justifyContent={"space-around"} sx={{backgroundColor:"#221C3E"}} alignItems={"center"} paddingTop={5}>
                           <Box>
                               <Box sx={{backgroundColor:"#393352",width:{lg:"130px",md:"130px",sm:"80px",xs:"50px"},height:{lg:"130px",md:"130px",sm:"80px",xs:"50px"},display:"flex",borderRadius:"50%",justifyContent:"center",alignItems:"center"}}>
                                 <img src={player1} alt="" className='player' />
                               </Box>
                               <Typography textAlign={"center"} fontWeight={600} sx={{color:"white",paddingTop:"15px",fontSize:{lg:"18px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>Bare Killers</Typography>  
                           </Box>
                          <Box>
                             <img src={vs} alt="" width={"100%"} />
                          </Box>
                          <Box>
                               <Box sx={{backgroundColor:"#393352",width:{lg:"130px",md:"130px",sm:"80px",xs:"50px"},height:{lg:"130px",md:"130px",sm:"80px",xs:"50px"},display:"flex",borderRadius:"50%",justifyContent:"center",alignItems:"center"}}>
                                 <img src={player2} alt="" className='player'/>
                               </Box>
                               <Typography textAlign={"center"} fontWeight={600} sx={{color:"white",paddingTop:"15px",fontSize:{lg:"18px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>Pro Slayer</Typography>  
                           </Box>
                     </Box>
                           <Box sx={{backgroundColor:"#221C3E",}} >
                               <Typography py={5} sx={{textAlign:"center",color:"white",fontSize:{lg:"20px",md:"20px",sm:"16px",xs:"18px"},fontFamily:"'Raleway', sans-serif"}} fontWeight={900}>Click To Join</Typography>
                               <Box sx={{display:"flex",justifyContent:"center"}}>
                                 <Link style={{width:"100%",margin:"20px"}} to={"https://dashboard.squadco.com/login"}><Button sx={{width:"100%",borderRadius:"0px",border:"1px solid #30D855",color:"#30D855","&:hover":{backgroundColor:"#30D855",color:"black"},textTransform:"unset",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"} ,fontFamily:"'Raleway', sans-serif"}}>Join Now</Button></Link>
                               </Box>
                           </Box>
                 </Box>
                </div>
             </Grid>
             <Grid item lg={6} md={8} sm={10} xs={12}>
              <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100" data-aos-duration="1000">
                <Box>
                     <Box sx={{backgroundImage:`url(${playing2})`,height:"250px",width:"100%",display:"flex",backgroundSize:"cover",objectFit:"cover",alignItems:"self-end",justifyContent:"center",}}>
                           <img src={gameLogo2} alt="" style={{marginBottom:"30px"}} className='player'/>
                     </Box>
                     <Box display={"flex"} justifyContent={"space-around"} sx={{backgroundColor:"#221C3E"}} alignItems={"center"} paddingTop={5}>
                           <Box>
                               <Box sx={{backgroundColor:"#393352",width:{lg:"130px",md:"130px",sm:"80px",xs:"50px"},height:{lg:"130px",md:"130px",sm:"80px",xs:"50px"},display:"flex",borderRadius:"50%",justifyContent:"center",alignItems:"center"}}>
                                 <img src={player3} alt="" className='player'/>
                               </Box>
                               <Typography textAlign={"center"} fontWeight={600} sx={{color:"white",paddingTop:"15px",fontSize:{lg:"18px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>Pro falcons</Typography>  
                           </Box>
                          <Box>
                             <img src={vs} alt="" width={"100%"}/>
                          </Box>
                          <Box>
                               <Box sx={{backgroundColor:"#393352",width:{lg:"130px",md:"130px",sm:"80px",xs:"50px"},height:{lg:"130px",md:"130px",sm:"80px",xs:"50px"},display:"flex",borderRadius:"50%",justifyContent:"center",alignItems:"center"}}>
                                 <img src={player4} alt="" className='player'/>
                               </Box>
                               <Typography textAlign={"center"} fontWeight={600} sx={{color:"white",paddingTop:"15px",fontSize:{lg:"18px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>Top Dogs</Typography>  
                           </Box>
                     </Box>
                           <Box sx={{backgroundColor:"#221C3E",}} >
                               <Typography py={5} sx={{textAlign:"center",color:"white",fontSize:{lg:"20px",md:"20px",sm:"16px",xs:"18px"},fontFamily:"'Raleway', sans-serif"}} variant='h5' fontWeight={900}>Click To Join</Typography>
                               <Box sx={{display:"flex",justifyContent:"center"}}>
                                 <Link style={{width:"100%",margin:"20px"}} to={"https://dashboard.squadco.com/login"}><Button sx={{width:"100%",borderRadius:"0px",border:"1px solid #30D855",color:"#30D855","&:hover":{backgroundColor:"#30D855",color:"black"},textTransform:"unset",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"} ,fontFamily:"'Raleway', sans-serif"}}>Join Now</Button></Link>
                               </Box>
                           </Box>
                </Box>
              </div>
             </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Matches;
