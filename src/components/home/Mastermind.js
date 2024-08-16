import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import team1 from '../../assets/images/home/team-1.webp'
import team2 from '../../assets/images/home/team-2.webp'
import team3 from '../../assets/images/home/team-3.webp'
import { useNavigate } from 'react-router-dom'


function Mastermind() {

  const navigate = useNavigate();
  return (
    <Box sx={{bgcolor:"#100a2e",paddingBottom:"80px"}}>
        <Box sx={{color:"#fff", textAlign:"center",paddingTop:"80px", paddingBottom:"80px"}}>
            <Typography variant='h3' sx={{fontSize:{lg:"48px",md:"40px",sm:"32px",xs:"28px"},fontWeight:"700",lineHeight:"50px",fontFamily:"'Rajdhani',sans-serif"}} py={1}>MEET OUR MASTERMINDS</Typography>
            <Typography sx={{color:"#BFBFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},lineHeight:"22px",fontFamily:"'Raleway', sans-serif"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </Typography>
            <Typography sx={{color:"#BFBFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},lineHeight:"22px",fontFamily:"'Raleway', sans-serif"}}>industry's standard dummy text.standard dummy text.</Typography>
        </Box>

        <Container maxWidth='xl'>
        <Grid container item xs={12} spacing={5}>   
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100" data-aos-duration="1000">
                <Box sx={{display:"flex",justifyContent:"space-between",alignItems:'end',backgroundColor:"#100a2e"}}>
                <Box sx={{backgroundColor:"#221C3E",width:"100%",padding:"20px",paddingTop:"30px","&:hover":{backgroundColor:"#2B2A65"}}}>
                    <Typography sx={{color:"white",fontWeight:"600",fontSize:{lg:"18px",md:"18px",sm:"16px",xs:"16px"},fontFamily:"'Raleway', sans-serif"}}>Malik AK-47</Typography>
                    <Typography sx={{color:"#BFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>Pro Gamer CS:GO</Typography>
                    <Box paddingTop={3} sx={{color:"#BFBFBF"}}>
                    <i class="fa-brands fa-youtube icon" style={{paddingRight:"16px",fontSize:"20px",cursor:"pointer"}}></i>
                    <i class="fa-brands fa-twitch" style={{paddingRight:"16px",fontSize:"20px",cursor:"pointer",color:"#30D855"}}></i>
                    <i class="fa-brands fa-discord icon" style={{paddingRight:"16px",fontSize:"20px",cursor:"pointer"}}></i>
                    </Box>
                </Box>
                <Box>
                    <img src={team1} alt='' width={"100%"}/>
                </Box>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="200" data-aos-duration="1000">
                <Box sx={{display:"flex",justifyContent:"space-between",alignItems:'end',backgroundColor:"#100a2e"}}>
                <Box sx={{backgroundColor:"#2B2A65",width:"100%",padding:"20px",paddingTop:"30px"}}>
                    <Typography sx={{color:"white",fontWeight:"600",fontSize:{lg:"18px",md:"18px",sm:"16px",xs:"16px"},fontFamily:"'Raleway', sans-serif"}}>Choco Taco</Typography>
                    <Typography sx={{color:"#BFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>Pro Gamer CS:GO</Typography>
                    <Box paddingTop={3} sx={{color:"#BFBFBF"}}>
                    <i class="fa-brands fa-youtube icon" style={{paddingRight:"16px",fontSize:"20px",cursor:"pointer"}}></i>
                    <i class="fa-brands fa-twitch" style={{paddingRight:"16px",fontSize:"20px",cursor:"pointer",color:"#30D855"}}></i>
                    <i class="fa-brands fa-discord icon" style={{paddingRight:"16px",fontSize:"20px",cursor:"pointer"}}></i>
                    </Box>
                </Box>
                <Box>
                    <img src={team2} alt='' width={"100%"}/>
                </Box>
                </Box>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={4}>
             <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000">
                <Box sx={{display:"flex",justifyContent:"space-between",alignItems:'end',backgroundColor:"#100a2e"}}>
                <Box sx={{backgroundColor:"#221C3E",width:"100%",padding:"20px",paddingTop:"30px","&:hover":{backgroundColor:"#2B2A65"}}}>
                    <Typography sx={{color:"white",fontWeight:"600",fontSize:{lg:"18px",md:"18px",sm:"16px",xs:"16px"},fontFamily:"'Raleway', sans-serif"}}>Shroud Khans</Typography>
                    <Typography sx={{color:"#BFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>Pro Gamer CS:GO</Typography>
                    <Box paddingTop={3} sx={{color:"#BFBFBF"}}>
                    <i class="fa-brands fa-youtube icon" style={{paddingRight:"16px",fontSize:"20px",cursor:"pointer"}}></i>
                    <i class="fa-brands fa-twitch" style={{paddingRight:"16px",fontSize:"20px",cursor:"pointer",color:"#30D855"}}></i>
                    <i class="fa-brands fa-discord icon" style={{paddingRight:"16px",fontSize:"20px",cursor:"pointer"}}></i>
                    </Box>
                </Box>
                <Box>
                    <img src={team3} alt='' width={"100%"}/>
                </Box>
                </Box>
             </div>
            </Grid>
        </Grid>
            <Box display="flex" gap={3} justifyContent="center" paddingTop={6} >
                <Button className='homebtn' onClick={() => navigate("/Team")} sx={{fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},textTransform:"unset",fontFamily:"'Raleway', sans-serif", border: '1px solid white', borderRadius: '0px', padding: '15px 30px', '&:hover': { backgroundColor: '#221C3E',border:"1px solid rgba(44,36,74,.26)" }, color: 'white', fontWeight: 600 }}>
                  View More
                </Button>
            </Box>
        </Container>

    </Box>
  )
}

export default Mastermind