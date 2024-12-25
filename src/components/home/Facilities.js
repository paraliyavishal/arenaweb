import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import shap from '../../assets/images/home/shapes-bg.webp'
import Facilities1 from '../../assets/images/home/facilities-1.png'
import Facilities2 from '../../assets/images/home/facilities-2.png'
import Facilities3 from '../../assets/images/home/facilities-3.png'
import { useNavigate } from 'react-router-dom';


const facilitiesoffer = [
  {
    svg:Facilities1,
    fild:"ESports Competition"
  },
  {
    svg:Facilities2,
    fild:"Latest Gaming Tech"
  },
  {
    svg:Facilities3,
    fild:"Comfortable Environment"
  },
]

function Facilities() {

  const navigate = useNavigate();
  return (
    <div>
      <Box sx={{backgroundColor:"#100A2E"}}>
          <Box sx={{display:{lg:"flex",md:"none",xs:"none"},overflow:"hidden"}} gap={15} marginLeft={5} >
            <img src={shap} alt="" style={{height:"150px",width:"200px"}} className='bgroted'/>
            <img src={shap} alt="" style={{height:"150px",width:"200px"}} className='bgroted1'/>
            <img src={shap} alt="" style={{height:"150px",width:"200px"}} className='bgroted'/>
            <img src={shap} alt="" style={{height:"150px",width:"200px"}} className='bgroted1'/>
            <img src={shap} alt="" style={{height:"150px",width:"200px"}} className='bgroted'/>
            <img src={shap} alt="" style={{height:"150px",width:"200px"}} className='bgroted1'/> 
          </Box>
          <Box sx={{display:{lg:"flex",md:"none",xs:"none"},overflow:"hidden",justifyContent:"space-between",paddingTop:"30px"}}  >
            <img src={shap} alt="" style={{height:"150px",width:"200px"}} className='bgroted1'/>
            <img src={shap} alt="" style={{height:"150px",width:"200px"}} className='bgroted'/>
          </Box> 
            <Container maxWidth='xl'> 
                    <Box sx={{marginTop:{lg:"-100px"},paddingTop:{md:"10px",sm:"60px",xs:"60px"}}}>
                        <Typography sx={{color:"#FFF",fontWeight:"700",textAlign:"center",fontSize:{lg:"48px",md:"40px",sm:"32px",xs:"28px"},fontFamily:"'Rajdhani', sans-serif"}}>FACILITIES WE OFFER</Typography>
                        <Typography sx={{color:"#BFBFBF",textAlign:"center",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </Typography>
                        <Typography sx={{color:"#BFBFBF",textAlign:"center",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>industry's standard dummy text ever since the 1500s, when an unknown printer took.</Typography>
                    </Box>
                    <Grid xs={12} item container spacing={5} py={5} display={"flex"} justifyContent={"center"}>
                         {facilitiesoffer.map((item) => 
                         <Grid item lg={4} md={6} sm={10} xs={12} >
                              <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100" data-aos-duration="1000">
                                <Box sx={{backgroundColor:"#221C3E",border:"1px solid #221C3E",cursor:"pointer","&:hover":{"& .text":{color:"#30D855"},border:"1px solid #30D855",transition:".7s"}}} className='card'>
                                        <Box className='card2' >
                                            <Box sx={{display:"flex",justifyContent:"center"}}>
                                               <img src={item.svg} alt="" style={{padding:"35px 0px",height:"135px"}}/>
                                            </Box> 
                                               <Typography sx={{textAlign:"center",color:"white",fontSize:{lg:"20px",md:"20px",sm:"18px",xs:"16px"},fontFamily:"'Raleway', sans-serif"}} fontWeight={700} py={2}>{item.fild}</Typography>
                                               <Typography sx={{color:"#BFBFBF",textAlign:"center",padding:"20px 20px",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif"}}>Lorem ipsum dolor sit ametcsectetur. Eu enim odio facilisis eu curabitur integer.</Typography>
                                               <Typography className='text' py={3} sx={{marginTop:"4px",textAlign:"center",color:"#6B5FFE",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",cursor:"pointer",transition:".7s"}} onClick={() => navigate("/about")} fontWeight={600}>Learn More</Typography>
                                        </Box>
                                </Box>
                              </div>
                         </Grid>
                         )}
                    </Grid>
                    
                    <Box sx={{display:"flex",justifyContent:"center",paddingBottom:"100px"}}>
                        <Button onClick={() => navigate("/about")} sx={{ border: '1px solid white',transition: "0.7s", borderRadius: '0px', padding: '10px 20px', '&:hover': { backgroundColor: '#6B5FFE',border:"1px solid rgba(44,36,74,.26)" }, color: 'white',textTransform:"unset",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"} ,fontFamily:"'Raleway', sans-serif"}}>
                            View More
                        </Button>
                    </Box>
                      
            </Container>

      </Box>
    </div>
  );
}

export default Facilities;
