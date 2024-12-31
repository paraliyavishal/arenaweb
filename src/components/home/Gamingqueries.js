import { Box, Container, Grid } from "@mui/material";
import React from "react";
import video2 from "../../assets/images/home/faq-video.mp4";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Gamingqueries() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#100A2E",
        minHeight: "100%",
        py: 6,
        paddingBottom: "100px",
      }}
    >
      <Container maxWidth="xl">
        <Box py={5}>
          <Typography
            fontWeight={"700"}
            sx={{
              color: "white",
              textAlign: "center",
              fontSize: { lg: "48px", md: "40px", sm: "32px", xs: "28px" },
              fontFamily: "'Rajdhani',sans-serif",
            }}
          >
            ANSWERS TO YOUR GAMING QUERIES
          </Typography>
          <Typography
            sx={{
              color: "#BFBFBF",
              textAlign: "center",
              fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "12px" },
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the
          </Typography>
          <Typography
            sx={{
              color: "#BFBFBF",
              textAlign: "center",
              fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "12px" },
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            {" "}
            industry's standard dummy text.
          </Typography>
        </Box>

        <Grid container item xs={12}>
          <Grid item xs={12} md={6} lg={6}>
            <Box
              sx={{
                overflow: "hidden",
                width: "100%",
                height: "500px",
                position: "relative",
              }}
            >
              <video
                src={video2}
                autoPlay
                muted
                loop
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "546px",
                  objectFit: "cover",
                  zIndex: 1,
                }}
                controls={false}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            display={"flex"}
            alignItems={"center"}
          >
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <Box
                padding={4}
                sx={{ backgroundColor: "#221C3E", zIndex: "-1" }}
              >
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  sx={{ backgroundColor: "#221C3E", border: "none" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    sx={{
                      border: "none",
                      backgroundColor: "#221C3E",
                      color: "white",
                    }}
                  >
                    <Typography
                      sx={{
                        width: "100%",
                        flexShrink: 0,
                        fontWeight: "700",
                        fontSize: {
                          lg: "18px",
                          md: "18px",
                          sm: "16px",
                          xs: "14px",
                        },
                        fontFamily: "'Raleway', sans-serif",
                      }}
                    >
                      <FiberManualRecordIcon
                        sx={{ fontSize: { xs: "15px", sm: "20px" } }}
                      />{" "}
                      How is this works to extend this question with details
                      However it is not ?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      backgroundColor: "#2B2A65",
                      color: "#BFBFBF",
                      border: "none",
                    }}
                  >
                    <Typography
                      py={3}
                      sx={{
                        fontSize: {
                          lg: "16px",
                          md: "16px",
                          sm: "14px",
                          xs: "12px",
                        },
                        fontFamily: "'Raleway', sans-serif",
                      }}
                    >
                      {" "}
                      Nulla facilisi. Phasellus sollicitudin nulla et quam
                      mattis feugiat. Aliquam eget maximus est, id dignissim
                      quam.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                  sx={{ backgroundColor: "#221C3E", border: "none" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    sx={{ backgroundColor: "#221C3E", color: "white" }}
                  >
                    <Typography
                      sx={{
                        width: "100%",
                        flexShrink: 0,
                        fontWeight: "700",
                        fontSize: {
                          lg: "18px",
                          md: "18px",
                          sm: "16px",
                          xs: "14px",
                        },
                        fontFamily: "'Raleway', sans-serif",
                      }}
                    >
                      <FiberManualRecordIcon
                        sx={{ fontSize: { xs: "15px", sm: "20px" } }}
                      />{" "}
                      How is this works to extend this question with details
                      However it is not ?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{ backgroundColor: "#2B2A65", color: "#BFBFBF" }}
                  >
                    <Typography
                      py={3}
                      sx={{
                        fontSize: {
                          lg: "16px",
                          md: "16px",
                          sm: "14px",
                          xs: "12px",
                        },
                        fontFamily: "'Raleway', sans-serif",
                      }}
                    >
                      Donec placerat, lectus sed mattis semper, neque lectus
                      feugiat lectus,varius pulvinar diam eros in elit.
                      Pellentesque convallis laoreetlaoreet.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion 
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                  sx={{ backgroundColor: "#221C3E", border: "none" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#221C3E",
                      color: "white",
                    }}
                  >
                    <Typography
                      sx={{
                        width: "100%",
                        flexShrink: 0,
                        fontWeight: "700",
                        fontSize: {
                          lg: "18px",
                          md: "18px",
                          sm: "16px",
                          xs: "14px",
                        },
                        fontFamily: "'Raleway', sans-serif",
                      }}
                    >
                      <FiberManualRecordIcon
                        sx={{ fontSize: { xs: "15px", sm: "20px" } }}
                      />{" "}
                      How is this works to extend this question with details
                      However it is not ?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{ backgroundColor: "#2B2A65", color: "#BFBFBF" }}
                  >
                    <Typography
                      py={3}
                      sx={{
                        fontSize: {
                          lg: "16px",
                          md: "16px",
                          sm: "14px",
                          xs: "12px",
                        },
                        fontFamily: "'Raleway', sans-serif",
                      }}
                    >
                      Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                      Integer sitamet egestas eros, vitae egestas augue. Duis
                      vel est augue.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Gamingqueries;
