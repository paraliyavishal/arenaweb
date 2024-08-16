import { Box, Button, Container, Grid, InputLabel, TextField, Typography } from '@mui/material'
import React from 'react'

function 
ContactForm() {

  return (
    <Box sx={{backgroundColor:"#100A2E",paddingBottom:"50px",paddingTop:"20px"}}>

      <Container maxWidth='xl'>
        <Grid container item xs={12} spacing={14} sx={{color:"white",paddingTop:"100px"}}>
            <Grid item xs={12} sm={12} md={6} lg={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Box>
                    <Typography sx={{fontSize:{lg:"48px",md:"40px",sm:"32px",xs:"28px"},fontWeight:"700",fontFamily:"'Rajdhani',sans-serif",textAlign:{xs:"center",sm:"center",md:"start",lg:"start"}}}>LET'S CONQUER TOGETHER!</Typography>
                    <Typography sx={{fontSize:{lg:"18px",md:"16px",sm:"14px",xs:"12px"},color:"#bfbfbf",fontFamily:"'Raleway',sans-serif",textAlign:{xs:"center",sm:"center",md:"start",lg:"start"}}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                    </Typography>
                </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Box>
                  <form>
                      <Box sx={{display:{lg:"flex",md:"flex",sm:"block"}}} width={"100%"} gap={3}>
                        <Box width={"100%"} paddingTop={1}>
                          <InputLabel htmlFor="component-simple" sx={{color:"white",marginBottom:"10px",fontSize:{lg:"18px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway',sans-serif"}}>Name *</InputLabel>
                          <TextField id="outlined-basic" variant="outlined" required
                            placeholder='Enter name' type='text' sx={{width:"100%",'& .MuiInputBase-input': {color: 'white', },'& .MuiOutlinedInput-root': { borderRadius: "0",'& fieldset': {borderColor: '#6B5FFE',},'&:hover fieldset': {borderColor: '#6B5FFE'},'&.Mui-focused fieldset': {borderColor: 'white',}, }}}/>
                        </Box>
                        <Box width={"100%"} paddingTop={1}>
                          <InputLabel htmlFor="component-simple" sx={{color:"white",marginBottom:"10px",fontSize:{lg:"18px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway',sans-serif"}}>Email *</InputLabel>
                          <TextField id="outlined-basic" variant="outlined" required placeholder='Enter email'  sx={{width:"100%",'& .MuiInputBase-input': {color: 'white', },'& .MuiOutlinedInput-root': { borderRadius: "0",'& fieldset': {borderColor: '#6B5FFE',},'&:hover fieldset': {borderColor: '#6B5FFE'},'&.Mui-focused fieldset': {borderColor: 'white',}, }}}/>
                        </Box>
                      </Box>
                      <Box py={2}>
                      <InputLabel htmlFor="component-simple" sx={{color:"white",marginBottom:"10px",fontSize:{lg:"18px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway',sans-serif"}}>Message *</InputLabel>
                      <TextField id="outlined-multiline-static" multiline rows={10} placeholder='Enter text...' sx={{width:"100%", '& .MuiInputBase-input': {color: 'white', },'& .MuiOutlinedInput-root': { borderRadius: "0",'& fieldset': {borderColor: '#6B5FFE',},'&:hover fieldset': {borderColor: '#6B5FFE'},'&.Mui-focused fieldset': {borderColor: 'white',},}}} />
                      </Box>
                      <Box sx={{display:"flex",justifyContent:"center"}} py={3}>
                          <Button type='submit' sx={{width:"100%",borderRadius:"0px",border:"1px solid #30D855",color:"#30D855","&:hover":{backgroundColor:"#30D855",color:"black"},textTransform:"unset",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway', sans-serif",padding:"10px 0px"}}>Submit</Button>
                        </Box>
                  </form>
                  </Box>
                </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ContactForm
