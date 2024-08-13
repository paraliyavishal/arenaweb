import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import gameslogo1 from '../../assets/images/home/game-logo-1.webp'
import gameslogo2 from '../../assets/images/home/game-logo-2.webp'
import gameslogo3 from '../../assets/images/home/game-logo-3.webp'
import gameslogo4 from '../../assets/images/home/game-logo-4.webp'
import games1 from '../../assets/images/home/games-1.webp'
import games2 from '../../assets/images/home/games-2.webp'
import games3 from '../../assets/images/home/games-3.webp'
import games4 from '../../assets/images/home/games-4.webp'

function Diveintodiverse() {
  return (
  <Box sx={{bgcolor:"#100a2e"}}>
      <Box sx={{bgcolor:"#100a2e",color:"#fff", textAlign:"center",paddingTop:"80px", paddingBottom:"80px"}}>
        <Typography sx={{fontSize:{lg:"48px",md:"40px",sm:"32px",xs:"28px"},fontWeight:"700",lineHeight:"80px",fontFamily:"'Rajdhani',sans-serif"}}>DIVE INTO DIVERSE WORLDS OF PLAY</Typography>
        <Typography sx={{color:"#BFBFBFBF",lineHeight:"22px",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</Typography>
        <Typography sx={{color:"#BFBFBFBF",lineHeight:"22px",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>standard dummy text.</Typography>
      </Box>

  <Container maxWidth="xl" paddingBottom={7}>
    <Grid container item xs={12} paddingBottom={5} spacing={4}> 

      <Grid item  xs={12} sm={12} md={12} lg={6}>
        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
          <Box sx={{backgroundImage:`linear-gradient(rgba(40, 17, 43, 0.5),rgba(40, 17, 43, 0.5)),url(${games1})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",zIndex:"-1",padding:"20px"}}>
              <Box sx={{gap:"20px",textAlign:"end",}}>
                  <Button sx={{borderRadius:"0px",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",backgroundColor:"rgba(107, 95, 254, 0.43)",color:"#fff",marginRight:"10px","&:hover":{backgroundColor:"rgba(49, 216, 85, 0.561)"}}}>Action</Button>
                  <Button sx={{borderRadius:"0px",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",backgroundColor:"rgba(107, 95, 254, 0.43)",color:"#fff",marginRight:"10px","&:hover":{backgroundColor:"rgba(49, 216, 85, 0.561)"}}}>FPP</Button>
                  <Button sx={{borderRadius:"0px",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",backgroundColor:"rgba(107, 95, 254, 0.43)",color:"#fff",marginRight:"10px","&:hover":{backgroundColor:"rgba(49, 216, 85, 0.561)"}}}>TPP</Button>
              </Box>
              <Box paddingTop={2}>
                  <img src={gameslogo1} alt="" />
                  <Typography sx={{fontSize:{lg:"20px",md:"20px",sm:"18px",xs:"16px"},fontFamily:"'Raleway', sans-serif",color:"#fff",fontWeight:"600",fontSize:"24px",lineHeight:"36px",marginTop:"20px"}}>Explore A Multitude Of Gaming Experiences In One Place.</Typography>
                  <Typography sx={{color:"#BFBFBFBF",marginTop:"20px",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                  has been the industry’s standard dummy text.</Typography>
              </Box>
              <Box marginTop={6}>
                  <Button className='c-button c-button--gooey' sx={{borderRadius:"0px",overflow:"hidden",border:"1px solid #30d855",color:"#30d855",fontSize:"16px",fontWeight:"600",lineHeight:"38px",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",padding:"10px 30px 10px 30px","&:hover":{color:"black"}}}>View Team
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

      <Grid item  xs={12} sm={12} md={12} lg={6}>
      <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
          <Box sx={{backgroundImage:`linear-gradient(rgba(40, 17, 43, 0.5),rgba(40, 17, 43, 0.5)),url(${games2})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",zIndex:"-1",padding:"20px"}}>
              <Box sx={{gap:"20px",textAlign:"end",}}>
                  <Button sx={{borderRadius:"0px",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",backgroundColor:"rgba(107, 95, 254, 0.43)",color:"#fff",marginRight:"10px","&:hover":{backgroundColor:"rgba(49, 216, 85, 0.561)"}}}>Action</Button>
                  <Button sx={{borderRadius:"0px",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",backgroundColor:"rgba(107, 95, 254, 0.43)",color:"#fff",marginRight:"10px","&:hover":{backgroundColor:"rgba(49, 216, 85, 0.561)"}}}>FPP</Button>
                  <Button sx={{borderRadius:"0px",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",backgroundColor:"rgba(107, 95, 254, 0.43)",color:"#fff",marginRight:"10px","&:hover":{backgroundColor:"rgba(49, 216, 85, 0.561)"}}}>TPP</Button>
              </Box>
              <Box paddingTop={2}>
                  <img src={gameslogo2} alt=""/>
                  <Typography sx={{fontSize:{lg:"20px",md:"20px",sm:"18px",xs:"16px"},fontFamily:"'Raleway', sans-serif",color:"#fff",fontWeight:"600",fontSize:"24px",lineHeight:"36px",marginTop:"20px"}}>Engage Players With Dynamic Visuals And Interactive Elements.</Typography>
                  <Typography sx={{color:"#BFBFBFBF",marginTop:"20px",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                  has been the industry’s standard dummy text.</Typography>
              </Box>
              <Box marginTop={6}>
                  <Button className='c-button c-button--gooey' sx={{borderRadius:"0px",overflow:"hidden",border:"1px solid #30d855",color:"#30d855",fontSize:"16px",fontWeight:"600",lineHeight:"38px",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",padding:"10px 30px 10px 30px","&:hover":{color:"black"}}}>View Team
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

    
    <Grid container item xs={12} paddingBottom={9} spacing={4}> 
      <Grid item  xs={12} sm={12} md={12} lg={6}>
        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
          <Box sx={{backgroundImage:`linear-gradient(rgba(40, 17, 43, 0.5),rgba(40, 17, 43, 0.5)),url(${games3})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",zIndex:"-1",padding:"20px"}}>
              <Box sx={{gap:"20px",textAlign:"end",}}>
                  <Button sx={{borderRadius:"0px",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",backgroundColor:"rgba(107, 95, 254, 0.43)",color:"#fff",marginRight:"10px","&:hover":{backgroundColor:"rgba(49, 216, 85, 0.561)"}}}>Action</Button>
                  <Button sx={{borderRadius:"0px",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",backgroundColor:"rgba(107, 95, 254, 0.43)",color:"#fff",marginRight:"10px","&:hover":{backgroundColor:"rgba(49, 216, 85, 0.561)"}}}>FPP</Button>
                  <Button sx={{borderRadius:"0px",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",backgroundColor:"rgba(107, 95, 254, 0.43)",color:"#fff",marginRight:"10px","&:hover":{backgroundColor:"rgba(49, 216, 85, 0.561)"}}}>TPP</Button>
              </Box>
              <Box paddingTop={2}>
                  <img src={gameslogo4} alt="" />
                  <Typography sx={{fontSize:{lg:"20px",md:"20px",sm:"18px",xs:"16px"},fontFamily:"'Raleway', sans-serif",color:"#fff",fontWeight:"600",fontSize:"24px",lineHeight:"36px",marginTop:"20px"}}>Showcase An Extensive Game Collection For Endless Fun.</Typography>
                  <Typography sx={{color:"#BFBFBFBF",marginTop:"20px",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                  has been the industry’s standard dummy text.</Typography>
              </Box>
              <Box marginTop={6}>
                  <Button className='c-button c-button--gooey' sx={{borderRadius:"0px",overflow:"hidden",border:"1px solid #30d855",color:"#30d855",fontSize:"16px",fontWeight:"600",lineHeight:"38px",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",padding:"10px 30px 10px 30px","&:hover":{color:"black"}}}>View Team
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

      <Grid item  xs={12} sm={12} md={12} lg={6}>
        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
          <Box sx={{backgroundImage:`linear-gradient(rgba(40, 17, 43, 0.5),rgba(40, 17, 43, 0.5)),url(${games4})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",zIndex:"-1",padding:"20px"}}>
              <Box sx={{gap:"20px",textAlign:"end",}}>
                  <Button sx={{borderRadius:"0px",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",backgroundColor:"rgba(107, 95, 254, 0.43)",color:"#fff",marginRight:"10px","&:hover":{backgroundColor:"rgba(49, 216, 85, 0.561)"}}}>Action</Button>
                  <Button sx={{borderRadius:"0px",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",backgroundColor:"rgba(107, 95, 254, 0.43)",color:"#fff",marginRight:"10px","&:hover":{backgroundColor:"rgba(49, 216, 85, 0.561)"}}}>FPP</Button>
                  <Button sx={{borderRadius:"0px",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",backgroundColor:"rgba(107, 95, 254, 0.43)",color:"#fff",marginRight:"10px","&:hover":{backgroundColor:"rgba(49, 216, 85, 0.561)"}}}>TPP</Button>
              </Box>
              <Box paddingTop={2}>
                  <img src={gameslogo3} alt="" />
                  <Typography sx={{fontSize:{lg:"20px",md:"20px",sm:"18px",xs:"16px"},fontFamily:"'Raleway', sans-serif",color:"#fff",fontWeight:"600",fontSize:"24px",lineHeight:"36px",marginTop:"20px"}}>Foster Connections Among Players In Your Gaming Community.</Typography>
                  <Typography sx={{color:"#BFBFBFBF",marginTop:"20px",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                  has been the industry’s standard dummy text.</Typography>
              </Box>
              <Box marginTop={6}>
                  <Button className='c-button c-button--gooey' sx={{borderRadius:"0px",overflow:"hidden",border:"1px solid #30d855",color:"#30d855",fontSize:"16px",fontWeight:"600",lineHeight:"38px",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",padding:"10px 30px 10px 30px","&:hover":{color:"black"}}}>View Team
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


  </Container>
  </Box>
  );
}

export default Diveintodiverse;
