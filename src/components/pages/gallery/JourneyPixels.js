import { Box, Container, Typography,Button } from '@mui/material'
import React,{useState} from 'react'
import img1 from '../../../assets/images/pages/gallery-img-1.webp'
import img2 from '../../../assets/images/pages/gallery-img-2.webp'
import img3 from '../../../assets/images/pages/gallery-img-3.webp'
import img4 from '../../../assets/images/pages/gallery-img-4.webp'
import img5 from '../../../assets/images/pages/gallery-img-5.webp'
import { useNavigate } from 'react-router-dom'


const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    
  ];

function JourneyPixels() {
  const navigate = useNavigate();

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleChange = (event) => {
      setCurrentIndex(Number(event.target.value));
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  

  return (
    <Box sx={{backgroundColor:"#100A2E",paddingTop:"80px", paddingBottom:"80px"}}>
      <Container maxWidth='xl'>
      <Box sx={{color:"#fff", textAlign:"center"}} py={3}>
        <Typography variant='h3' sx={{fontSize:{lg:"48px",md:"40px",sm:"32px",xs:"28px"},fontWeight:"700",lineHeight:"80px",fontFamily:"'Rajdhani',sans-serif"}}>A JOURNEY THROUGH PIXELS</Typography>
        <Typography sx={{color:"#BFBFBFBF",fontSize:{lg:"18px",md:"18px",sm:"16px",xs:"14px"},lineHeight:"22px",fontFamily:"'Raleway', sans-serif"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</Typography>
        <Typography sx={{color:"#BFBFBFBF",fontSize:{lg:"18px",md:"18px",sm:"16px",xs:"14px"},lineHeight:"22px",fontFamily:"'Raleway', sans-serif"}}>the industry's standard dummy text.standard dummy text.</Typography>
      </Box>


       {/* <Box display="flex" flexDirection="column" alignItems="center">
           <Box sx={{width:{lg:"600px",md:"500px",sm:"400px",xs:"300px"},height:{lg:"600px",md:"500px",sm:"400px",xs:"300px"}}}>
              <img
                src={images[currentIndex]}
                alt="main display"
                style={{border:'2px solid #6B5FFE', objectFit: 'cover',width:"100%",height:"100%",padding:"0px",}}
              />
           </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap" mb={2} mt={2}>
        {images.map((image, index) => (
          <label key={index} style={{ margin: '0 5px' }}>
            <img
              src={image}
              alt={`gallery thumbnail ${index + 1}`}
              style={{
                width: '100px',
                height: '100px',
               
                border: currentIndex === index ? '2px solid #6B5FFE' : '2px solid transparent',
                cursor: 'pointer',
                objectFit: 'cover',
                transition: 'border-color 0.3s ease',
              }}
              onClick={() => setCurrentIndex(index)}
            />
          </label>
        ))}
      </Box>
       </Box> */}

       <div className='gallery-slider' style={{}}>
        <input type='radio' name='Slider' id='s1' checked />
        <input type='radio' name='Slider' id='s2' />
        <input type='radio' name='Slider' id='s3' />
        <input type='radio' name='Slider' id='s4' />
        <input type='radio' name='Slider' id='s5' />

         <label for="s1" id='slider1' >
           <img src={img1} alt="Slide 1"/>
         </label>
         <label for="s2" id='slider2'>
           <img src={img2} alt="Slide 2" />
         </label>
         <label for="s3" id='slider3'>
           <img src={img3} alt="Slide 3" />
         </label>
         <label for="s4" id='slider4'>
           <img src={img4} alt="Slide 4" />
         </label>
         <label for="s5" id='slider5'>
           <img src={img5} alt="Slide 5" />
         </label>
</div>

          <Box mt={5} textAlign={'center'} >
            <Button className='homebtn' onClick={() => navigate("/Gallery")} sx={{ border: '1px solid white',fontSize:{lg:"18px",md:"16px",sm:"14px",xs:"12px"},textTransform:"unset", fontFamily:"'Raleway',sans-serif",borderRadius: '0px', padding: '15px 25px',transition:"0.7s",'&:hover': { backgroundColor: '#221C3E',border:"1px solid rgba(44,36,74,.1)"}, color: 'white' }}>View More</Button>
          </Box>
      </Container>
    </Box>
  )
}

export default JourneyPixels
