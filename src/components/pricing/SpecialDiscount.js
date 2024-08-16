import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import shapebg from '../../assets/images/pricing/shapesbg.png'
import discountimg from '../../assets/images/pricing/discountimg.webp'
import { useNavigate } from 'react-router-dom'

function SpecialDiscount() {

    const navigate = useNavigate()

  return (
 <Box sx={{backgroundColor:"#100a2e",paddingTop:"50px",paddingBottom:"40px",zIndex:"-1"}}>
        <Container maxWidth='xl'>
            <Box sx={{backgroundImage:`url(${discountimg})`,backgroundSize:"cover",backgroundPosition:"cover",width:"100%",height:"470px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Box color={"#fff"} textAlign={'center'}>
                    <Typography sx={{fontSize:{lg:"48px",md:"48px",sm:"34px",xs:"34px"},fontWeight:"700",lineHeight:"34px",fontFamily:"'Rajdhani',sans-serif",paddingBottom:{xs:"10px",sm:"12px",md:"20px",lg:"30px"}}}>SPECIAL DISCOUNT FOR A REFERRAL</Typography>
                    <Box sx={{paddingBottom:"30px"}}>
                    <Typography sx={{fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",color:"#BFBFBF"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</Typography>
                    <Typography sx={{fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",color:"#BFBFBF"}}>the industry's standard dummy text.</Typography>
                    </Box>
                        <Box paddingTop={1}>
                             <Button className='homebtn' onClick={() => navigate("/Pricing")} sx={{ border: '1px solid white',textTransform:"unset",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif", borderRadius: '0px', padding: '15px 25px',transition:"0.7s",'&:hover': { backgroundColor: '#221C3E',border:"1px solid rgba(44,36,74,.1)"}, color: 'white', fontWeight: 600 }}>Refer A Friend</Button>
                        </Box>
                        <Box className='maintext' 
                            sx={{marginBottom:"-170px",paddingTop:"100px"}}>
                           <Typography className='text-1' zIndex={2} sx={{fontWeight:"700",fontSize:"70px",fontFamily:"'Raleway', sans-serif"}}> DREAM BIGGER</Typography>
                        </Box>
                </Box>
            </Box>
        </Container>
     <Box display={'flex'} justifyContent={'space-between'} overflow={'hidden'} zIndex={-1}>
      <img src={shapebg} alt="" style={{width:"200px"}} className='bgroted'/>
      <img src={shapebg} alt="" style={{width:"200px"}} className='bgroted'/> 
      <img src={shapebg} alt="" style={{width:"200px"}} className='bgroted1'/>
      <img src={shapebg} alt="" style={{width:"200px"}} className='bgroted'/>
      <img src={shapebg} alt="" style={{width:"200px"}} className='bgroted1'/>
      <img src={shapebg} alt="" style={{width:"200px"}} className='bgroted1'/>
     </Box>
</Box> 
  )
}

export default SpecialDiscount
