import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import tournamentbg from '../../assets/images/home/tournament-bg.webp'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import tournament1 from '../../assets/images/home/tournament-1.webp'
import tournament2 from '../../assets/images/home/tournament-2.webp'
import tournament3 from '../../assets/images/home/tournament-3.webp'
import tournament4 from '../../assets/images/home/tournament-4.webp'
import tournament5 from '../../assets/images/home/tournament-5.webp'
import tournament6 from '../../assets/images/home/tournament-6.webp'
import { useNavigate } from 'react-router-dom';


const tourna =[
    {
        img:tournament2,
        name:"Modern Warfare"
    },
    {
        img:tournament3,
        name:"Need For Speed"
    },
]
const tourna2 =[
    {
        img:tournament4,
        heading:"Live Tournament Action Witness Thrilling Live Gaming Battles."
    },
    {
        img:tournament5,
        heading:"Past Champions' Highlights Relive Epic Gaming Moments And Strategies."
    },
    {
        img:tournament6,
        heading:"Compete And Conquer Join Upcoming Tournaments And Aim For Victory."
    },
]

function Tournament() {
    const navigate = useNavigate();
  return (
  <Box sx={{backgroundImage:`linear-gradient(rgba(40, 17, 43, 0.7),rgba(40, 17, 43, 0.7)),url(${tournamentbg})`,backgroundAttachment:"fixed",height:"100%",width:"100%",objectFit:"cover",backgroundSize:"cover"}}>
       <Container maxWidth="xl">
            <Box pt={10} sx={{backgroundAttachment:"fixed"}}>
                <Typography fontWeight={900} sx={{color:"white",fontSize:{lg:"48px",md:"40px",sm:"32px",xs:"28px"},fontFamily:"'Rajdhani',sans-serif"}}>WATCH TOURNAMENT MATCHES</Typography>
                <Typography sx={{color:"#BFBFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Has been the industry's</Typography>
                <Typography sx={{color:"#BFBFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}> standard dummy text ever since the 1500s.</Typography>
            </Box>
            
            <Grid item container xs={12} spacing={3} py={3}>

                <Grid item xs={12} md={12} lg={6}>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000">
                    <Box border={"2px solid #221C3E"} sx={{":hover":{borderColor:"#30D855"},transition:".5s"}}>
                        <Card sx={{backgroundImage:`linear-gradient(rgba(13, 19, 38, 0),rgba(34, 28, 62, 0.7)),url(${tournament1})`,backgroundSize:"cover",height:"395px",borderRadius:"0px",display:"flex",alignItems:"self-end"}}>
                            <CardContent>
                                  <Box>
                                      <Typography sx={{color:"white",fontSize:{lg:"20px",md:"20px",sm:"18px",xs:"16px"},fontFamily:"'Raleway', sans-serif",}} fontWeight={600}>Dota 2 Inter-Championship</Typography>
                                      <Typography sx={{color:"#BFBFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}} py={1}>Lorem ipsum dolor sit amet consectetur. Porta magnis sed non in.</Typography>
                                  </Box>
                                  <Box sx={{color:"#BFBFBF",display:"flex",gap:"20px",fontSize:{lg:"20px",md:"20px",sm:"18px",xs:"16px"},fontFamily:"'Raleway', sans-serif"}} py={1}>
                                      <i class="fa-brands fa-youtube"></i>
                                      <i class="fa-brands fa-twitch"></i>
                                      <i class="fa-brands fa-discord"></i>
                                  </Box>
                            </CardContent>
                        </Card>
                    </Box>
                    </div>
                </Grid>

                {tourna.map((item) =>
                    <Grid item xs={12} md={6} lg={3}>
                        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="500" data-aos-duration="1000">
                        <Box border={"2px solid #221C3E"} sx={{":hover":{borderColor:"#30D855"},transition:".5s"}}>
                            <Card sx={{backgroundImage:`linear-gradient(rgba(13, 19, 38, 0),rgba(34, 28, 62, 0.7)),url(${item.img})`,backgroundSize:"cover",height:"395px",borderRadius:"0px",display:"flex",alignItems:"self-end"}}>
                                <CardContent>
                                      <Box>
                                          <Typography sx={{color:"white",fontSize:{lg:"20px",md:"20px",sm:"18px",xs:"16px"},fontFamily:"'Raleway', sans-serif"}} fontWeight={600}>{item.name}</Typography>
                                          <Typography sx={{color:"#BFBFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}} py={1} >Lorem ipsum dolor sit amet consectetur. Porta magnis sed non in.</Typography>
                                      </Box>
                                      <Box sx={{color:"#BFBFBF",display:"flex",gap:"20px",fontSize:{lg:"20px",md:"20px",sm:"18px",xs:"16px"},fontFamily:"'Raleway', sans-serif"}} py={1}>
                                          <i class="fa-brands fa-youtube" style={{cursor:"pointer"}}></i>
                                          <i class="fa-brands fa-twitch" style={{cursor:"pointer"}}></i>
                                          <i class="fa-brands fa-discord" style={{cursor:"pointer"}}></i>
                                      </Box>
                                </CardContent>
                            </Card>
                        </Box>
                        </div>
                    </Grid>
                )}
            </Grid>

            <Grid item container xs={12} spacing={3} paddingBottom={5} display={"flex"} sx={{justifyContent:{lg:"start",md:"center",sm:"center",xs:"center"}}}>
                
                {tourna2.map((item) =>
                    <Grid item xs={12} md={6} lg={4}>
                        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000">
                        <Box border={"2px solid #221C3E"} sx={{":hover":{borderColor:"#30D855"},transition:".5s"}}>
                            <Card sx={{backgroundImage:`linear-gradient(rgba(13, 19, 38, 0),rgba(34, 28, 62, 0.7)),url(${item.img})`,backgroundSize:"cover",borderRadius:"0px",display:"flex",alignItems:"self-end"}}>
                                <CardContent>
                                      <Box sx={{paddingTop:"85px"}}>
                                          <Typography sx={{color:"white",fontSize:{lg:"20px",md:"20px",sm:"18px",xs:"16px"},fontFamily:"'Raleway', sans-serif"}} fontWeight={600}>{item.heading}</Typography>
                                          <Typography sx={{color:"#BFBFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}} py={1}>Lorem ipsum dolor sit amet consectetur. Porta magnis sed non in.</Typography>
                                      </Box>
                                      <Box sx={{color:"#BFBFBF",display:"flex",gap:"20px",fontSize:"20px",fontFamily:"'Raleway', sans-serif"}} py={1}>
                                          <i class="fa-brands fa-youtube" style={{cursor:"pointer"}}></i>
                                          <i class="fa-brands fa-twitch" style={{cursor:"pointer"}}></i>
                                          <i class="fa-brands fa-discord" style={{cursor:"pointer"}}></i>
                                      </Box>
                                </CardContent>
                            </Card>
                        </Box>
                        </div>
                    </Grid>
                )}
              </Grid>

            <Box display="flex" gap={3} justifyContent="center" paddingTop={3} sx={{paddingBottom:"90px"}}>
                <Button onClick={() => navigate("/match_schedule")} sx={{transition: "0.7s",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},textTransform:"unset",fontFamily:"'Raleway', sans-serif", border: '1px solid white', borderRadius: '0px', padding: '15px 30px', '&:hover': { backgroundColor: '#221C3E',border:"1px solid rgba(44,36,74,.26)" }, color: 'white', fontWeight: 600 }}>
                  View More
                </Button>
            </Box>
       </Container>
  </Box>
  );
}

export default Tournament;
