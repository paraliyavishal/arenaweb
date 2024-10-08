import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import gamelogo1 from '../../assets/images/home/game-logo-1.webp';
import gamelogo2 from '../../assets/images/home/game-logo-2.webp';
import gamelogo3 from '../../assets/images/home/game-logo-3.webp';
import player1 from '../../assets/images/home/player-logo-1.webp';
import player2 from '../../assets/images/home/player-logo-2.webp';
import player3 from '../../assets/images/home/player-logo-3.webp';
import player4 from '../../assets/images/home/player-logo-4.webp';
import vs from '../../assets/images/home/vs.webp';
import { useNavigate } from 'react-router-dom';

const schedules = [
    {
        img1: player4,
        name1: "Top Dogs",
        img2: player3,
        name2: "Pro Falcons",
        logo: gamelogo2,
        time: "Tuesday ,23rd Feb 2023 Live At 05:00 pm"
    },
    {
        img1: player2,
        name1: "Pro Slayer",
        img2: player3,
        name2: "Pro Falcons",
        logo: gamelogo1,
        time: "Wednesday ,24th Feb 2023 Live At 09:00 pm"
    },
    {
        img1: player4,
        name1: "Top Dogs",
        img2: player1,
        name2: "Bare Killer",
        logo: gamelogo3,
        time: "Friday ,25th Feb 2023 Live At 10:00 pm"
    },
    {
        img1: player4,
        name1: "Top Dogs",
        img2: player3,
        name2: "Pro Falcons",
        logo: gamelogo2,
        time: "Monday ,28th Feb 2023 Live At 5:00 pm"
    },
    {
        img1: player2,
        name1: "Pro Slayer",
        img2: player1,
        name2: "Bare Killer",
        logo: gamelogo1,
        time: "Tuesday ,23rd Feb 2023 Live At 4:00 pm"
    },
    {
        img1: player4,
        name1: "Top Dogs",
        img2: player1,
        name2: "Bare Killer",
        logo: gamelogo3,
        time: "Thursday ,25th Feb 2023 Live At 10:00 pm"
    },
    {
        img1: player2,
        name1: "Pro Slayer",
        img2: player3,
        name2: "Pro Falcons",
        logo: gamelogo1,
        time: "Thursday ,25th Feb 2023 Live At 10:00 pm"
    },
];

function Matchschedules() {
const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: "#090329", py: 6 }}>
        <Container maxWidth='xl'>
            <Box sx={{paddingTop:"50px"}}>
                <Typography textAlign="center" variant='h3' fontWeight={700} sx={{ color: "white",fontSize:{lg:"48px",md:"40px",sm:"32px",xs:"28px"},fontFamily:"'Rajdhani', sans-serif"}}>MATCH SCHEDULES</Typography>
                <Box >
                    <Typography sx={{fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},color:"#BFBFBF",fontFamily:"'Raleway', sans-serif", textAlign: "center" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    </Typography>
                    <Typography sx={{fontSize:{lg:"16x",md:"16px",sm:"14px",xs:"12px"},color:"#BFBFBF",fontFamily:"'Raleway', sans-serif", textAlign: "center" }}>
                        been the industry's standard dummy text ever since the 1500s
                    </Typography>
                </Box>
            </Box>
            <Box>
                    
                <Grid item container xs={12} sx={{display:"flex",justifyContent:"center",width:"100%",borderBottom:"2px solid #202256",paddingTop:"50px",marginBottom:"50px"}}>
                         <Grid item xs={12} sm={10} md={6} lg={3}>
                             <Box sx={{backgroundColor:"#6B5FFE"}}>
                                 <Typography sx={{color:"white",textAlign:"center",padding:"15px 0px",fontWeight:"600",fontSize:{lg:"16x",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",}}>All Matches</Typography>
                             </Box>
                         </Grid>
                         <Grid item xs={12} sm={10} md={6} lg={3} sx={{paddingLeft:{lg:"30px",xs:"0px"}}}>
                             <Box sx={{"&:hover":{backgroundColor:"#6B5FFE",transition:".7s"},}}>
                                 <Typography sx={{color:"white",textAlign:"center",padding:"15px 0px",fontWeight:"600",fontSize:{lg:"16x",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",}}>Past Matches</Typography>
                             </Box>
                         </Grid>
                         <Grid item xs={12} sm={10} md={6} lg={3} sx={{paddingLeft:{lg:"30px",xs:"0px"}}}>
                             <Box sx={{"&:hover":{backgroundColor:"#6B5FFE",transition:".7s"},}}>
                                 <Typography sx={{color:"white",textAlign:"center",padding:"15px 0px",fontWeight:"600",fontSize:{lg:"16x",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",}}>Live Stream</Typography>
                             </Box>
                         </Grid>
                         <Grid item xs={12} sm={10} md={6} lg={3} sx={{paddingLeft:{lg:"30px",xs:"0px"}}}>
                             <Box sx={{"&:hover":{backgroundColor:"#6B5FFE",transition:".7s"},}}>
                                 <Typography sx={{color:"white",textAlign:"center",padding:"15px 0px",fontWeight:"600",fontSize:{lg:"16x",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",}}>Upcoming Matches</Typography>
                             </Box>
                         </Grid>
                </Grid>

                <Grid container xs={12} sx={{backgroundColor:"#2B2A65",display:"flex",justifyContent:{xs:"center"},borderBottom:{xs:"none",sm:"none",md:"2px solid #221C3E",lg:"2px solid #221C3E"}}}>
                    <Grid item xs={12} sm={10} md={6} lg={3} sx={{ backgroundColor: "#2B2A65"}}>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                            <img src={gamelogo1} alt="Game Logo 1" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={10} md={6} lg={4} sx={{ backgroundColor: "#2B2A65", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Box textAlign="center">
                            <Typography sx={{ color: "#BFBFBF", py: 2,fontSize:{lg:"16x",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",}}>Monday ,22nd Feb 2023 Live At 04:00 pm</Typography>
                            <Box display="flex" alignItems="center" justifyContent="center" gap={3}>
                                <i class="fa-brands fa-youtube" style={{color:"#BFBFBF"}}></i>
                                <i class="fa-brands fa-twitch" style={{color:"#BFBFBF"}}></i>
                                <i class="fa-brands fa-discord" style={{color:"#BFBFBF"}}></i>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={10} md={6} lg={5} sx={{ backgroundColor:{lg:"#2B2A65",md:"none",sm:"#2B2A65",xs:"#2B2A65"}}}>
                        <Box p={2}>
                            <Box display="flex" justifyContent="space-around" alignItems="center">
                                <Box>
                                    <Box sx={{
                                        backgroundColor: "#414075",
                                        width: { lg: "120px", md: "120px", sm: "70px", xs: "40px" },
                                        height: { lg: "120px", md: "120px", sm: "70px", xs: "40px" },
                                        display: "flex",
                                        borderRadius: "50%",    
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                        <img src={player3} alt="Player 3" className='player'/>
                                    </Box>
                                    <Typography textAlign="center" sx={{ color: "#BFBFBF", pt: 2 ,fontSize:{lg:"16x",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>Bare Killers</Typography>
                                </Box>
                                <Box>
                                    <img src={vs} alt="VS" width="100%"  />
                                </Box>
                                <Box>
                                    <Box sx={{
                                        backgroundColor: "#414075",
                                        width: { lg: "120px", md: "120px", sm: "70px", xs: "40px" },
                                        height: { lg: "120px", md: "120px", sm: "70px", xs: "40px" },
                                        display: "flex",
                                        borderRadius: "50%",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                        <img src={player4} alt="Player 4" className='player' />
                                    </Box>
                                    <Typography textAlign="center" sx={{ color: "#BFBFBF", pt: 2,fontSize:{lg:"16x",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>Pro Slayer</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                    <Grid container xs={12}>
                        {schedules.map((item, index) => (
                            <Grid container item xs={12} key={index} sx={{ ':hover': { backgroundColor: "#2B2A65" },display:"flex",justifyContent:{xs:"center",sm:"center"},paddingTop:{xs:"20px",sm:"20px"},transition:"0.3s" }}>
                                <Grid item xs={12} sm={10} md={6} lg={3} sx={{borderBottom:{xs:"none",sm:"none",md:"none",lg:"2px solid #221C3E"}}}>
                                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                                        <img src={item.logo} alt={`Logo ${index}`} />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={10} md={6} lg={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center",borderBottom:{xs:"none",sm:"none",md:"none",lg:"2px solid #221C3E"}}}>
                                    <Box textAlign="center">
                                        <Typography sx={{ color: "#BFBFBF", py: 2 ,fontSize:{lg:"16x",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",}}>{item.time}</Typography>
                                        <Box display="flex" alignItems="center" justifyContent="center" gap={3}>
                                            <i class="fa-brands fa-youtube" style={{color:"#BFBFBF"}}></i>
                                            <i class="fa-brands fa-twitch" style={{color:"#BFBFBF"}}></i>
                                            <i class="fa-brands fa-discord" style={{color:"#BFBFBF"}}></i>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={10} md={6} lg={5} sx={{borderBottom:{xs:"2px solid #221C3E",sm:"2px solid #221C3E",md:"2px solid #221C3E",lg:"2px solid #221C3E"}}}>
                                    <Box p={2}>
                                        <Box display="flex" justifyContent="space-around" alignItems="center" gap={2}>
                                            <Box>
                                                <Box sx={{
                                                    backgroundColor: "#414075",
                                                    width: { lg: "120px", md: "120px", sm: "70px", xs: "40px" },
                                                    height: { lg: "120px", md: "120px", sm: "70px", xs: "40px" },
                                                    display: "flex",
                                                    borderRadius: "50%",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    textAlign:"center"
                                                }}>
                                                    <img src={item.img1} alt="" className='player'/>
                                                </Box>
                                                <Typography textAlign="center" sx={{ color: "#BFBFBF", pt: 2 ,fontSize:{lg:"16x",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",}}>{item.name1}</Typography>
                                            </Box>
                                            <Box>
                                                <img src={vs} alt="VS" width="100%" />
                                            </Box>
                                            <Box>
                                                <Box sx={{
                                                    backgroundColor: "#414075",
                                                    width: { lg: "120px", md: "120px", sm: "70px", xs: "40px" },
                                                    height: { lg: "120px", md: "120px", sm: "70px", xs: "40px" },
                                                    display: "flex",
                                                    borderRadius: "50%",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    textAlign:"center"
                                                }}>
                                                    <img src={item.img2} alt=""  className='player' />
                                                </Box>
                                                <Typography textAlign="center" sx={{ color: "#BFBFBF", pt: 2,fontSize:{lg:"16x",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",}}>{item.name2}</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                    <Box display="flex" gap={3} justifyContent="center" paddingTop={5} paddingBottom={5}>
                       <Button className='homebtn' onClick={() => navigate("/MatchSchedule")} sx={{ border: '1px solid white', borderRadius: '0px', padding: '15px 30px', '&:hover': { backgroundColor: '#221C3E',border:"1px solid rgba(44,36,74,.26)" }, color: 'white', fontWeight: 600,textTransform:"unset",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"} ,fontFamily:"'Raleway', sans-serif" }}>View More</Button>
                    </Box>
                </Box>
        </Container>
    </Box>
  );
}

export default Matchschedules;