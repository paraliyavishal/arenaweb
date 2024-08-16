import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const contactDetails = [
  {
    title: 'Call Us',
    icon: <CallIcon />,
    details: [
      '+123 456 7890',
      '+123 456 7890',
    ],
  },
  {
    title: 'Email Us',
    icon: <EmailIcon />,
    details: [
      'Yourname@gmail.com',
      'Yourname@gmail.com',
    ],
  },
  {
    title: 'Our Location',
    icon: <LocationOnIcon />,
    details: [
      'Street X, Plaza XY, XYZ',
      'Street X, Plaza XY, XYZ',
    ],
  },
];

function Contact() {
  return (
    <Box sx={{ backgroundColor: "#100A2E", paddingBottom: "10px" }}>
      <Container maxWidth='xl'>
        <Grid container spacing={3}>
          {contactDetails.map((contact, index) => (
            <Grid item xs={12} sm={12} md={4} lg={4} key={index}>
              <Box sx={{ backgroundColor: "#6B5FFE", display: "flex", justifyContent: "center", padding: "20px", color: "white", textAlign: "center" }}>
                <Typography sx={{ display: "flex", alignItems: "center", gap: '6px',fontWeight:"500",fontSize:{lg:"18px",md:"16px",sm:"16px",xs:"14px"},fontFamily:"'Raleway',sans-serif"}}>
                  {contact.icon}
                  {contact.title}
                </Typography>
              </Box>
              <Box sx={{ backgroundColor: "#2B2A65", color: "#bfbfbf", textAlign: 'center' }}>
                {contact.details.map((detail, i) => (
                  <Box sx={{ padding: "18px" }} key={i}>
                    <Typography sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: '6px',fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"12px"},fontFamily:"'Raleway',sans-serif"}}>
                      <FiberManualRecordIcon sx={{ fontSize: "16px", fontFamily: "'Raleway', sans-serif" }} />
                      {detail}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
