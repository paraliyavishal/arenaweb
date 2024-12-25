import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import team1 from '../../../assets/images/pages/team1.webp'
import team2 from '../../../assets/images/pages/team2.webp'
import team3 from '../../../assets/images/pages/team3.webp'
import team4 from '../../../assets/images/pages/team4.webp'
import team5 from '../../../assets/images/pages/team5.webp'
import team6 from '../../../assets/images/pages/team6.webp'

const teamMember = [
  {
    name:"Malik AK-47",
    logo:team1,
  },
  {
    name:"Choco Taco",
    logo:team2,
  },
  {
    name:"Shroud Khans",
    logo:team3,
  },
  {
    name:"Lina Gray",
    logo:team4,
  },
  {
    name:"Mark Raffalo",
    logo:team5,
  },
  {
    name:"Chloe Anderson",
    logo:team6,
  },
]


function MeetOurMasterminds() {
  return (
    <Box sx={{bgcolor:"#100a2e",paddingBottom:"80px"}}>
        <Box sx={{color:"#fff", textAlign:"center",paddingTop:"80px", paddingBottom:"80px"}}>
            <Typography variant='h3' sx={{fontSize:{lg:"48px",md:"40px",sm:"32px",xs:"28px"},fontWeight:"700",lineHeight:"80px",fontFamily:"'Rajdhani',sans-serif"}}>MEET OUR MASTERMINDS</Typography>
            <Typography sx={{color:"#BFBFBFBF",fontSize:{lg:"18px",md:"18px",sm:"16px",xs:"14px"},lineHeight:"22px",fontFamily:"'Raleway', sans-serif"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </Typography>
            <Typography sx={{color:"#BFBFBFBF",fontSize:{lg:"18px",md:"18px",sm:"16px",xs:"14px"},lineHeight:"22px",fontFamily:"'Raleway', sans-serif"}}>industry's standard dummy text.standard dummy text.</Typography>
        </Box>

        <Container maxWidth='xl'>
        <Grid container item xs={12} spacing={5}> 
           {teamMember.map((item) =><Grid item xs={12} sm={12} md={6} lg={4}>
              <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="200" data-aos-duration="2000">
                <Box sx={{display:"flex",justifyContent:"space-between",alignItems:'end',backgroundColor:"#100a2e"}}>
                <Box sx={{backgroundColor:"#221C3E",width:"100%",padding:"20px",paddingTop:"30px","&:hover":{backgroundColor:"#2B2A65"}}}>
                    <Typography sx={{color:"white",fontWeight:"600",fontSize:{lg:"18px",md:"18px",sm:"16px",xs:"16px"},fontFamily:"'Raleway', sans-serif"}}>{item.name}</Typography>
                    <Typography sx={{color:"#BFBFBF",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>Pro Gamer CS:GO</Typography>
                    <Box paddingTop={3} sx={{color:"#BFBFBF"}}>
                    <i class="fa-brands fa-youtube icon" style={{paddingRight:"16px",fontSize:"20px",cursor:"pointer"}}></i>
                    <i class="fa-brands fa-twitch" style={{paddingRight:"16px",fontSize:"20px",cursor:"pointer",color:"#30D855"}}></i>
                    <i class="fa-brands fa-discord icon" style={{paddingRight:"16px",fontSize:"20px",cursor:"pointer"}}></i>
                    </Box>
                </Box>
                <Box>
                    <img src={item.logo} alt='' width={"100%"}/>
                </Box>
                </Box>
              </div>
            </Grid>)}
        </Grid>

        <Box paddingTop={5} marginBottom={5} textAlign={'center'}>
        <Button sx={{ border: '1px solid white',transition:".7s", borderRadius: '0px', padding: '10px 20px', '&:hover': { backgroundColor: '#6B5FFE',border:"1px solid rgba(44,36,74,.26)" }, color: 'white',textTransform:"unset",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>
                      View More
                  </Button>
        </Box>

        </Container>

    </Box>
  )
}

export default MeetOurMasterminds
