import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import becomepart from "../../assets/images/home/become-part-bg.webp";
import become from "../../assets/images/home/become.webp";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import { Link, useNavigate } from "react-router-dom";

function BecomeApart() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(50,36,74,.36),rgba(50,36,74,.36)),url(${becomepart})`,
        width: "100%",
        height: "100%",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        objectFit: "cover",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <Box py={10} sx={{ backgroundAttachment: "scroll" }}>
          <Grid
            item
            container
            xs={12}
            display={"flex"}
            justifyContent={"center"}
          >
            <Grid xs={12} md={10} lg={6} item>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Box
                  sx={{
                    backgroundColor: "#2B2A65",
                    padding: { lg: "60px", md: "60px", sm: "60px", xs: "20px" },
                  }}
                  height={"370px"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Box>
                    <Typography
                      fontWeight={700}
                      sx={{
                        color: "white",
                        fontSize: {lg:"48px",md:"48px",sm:"40px",xs:"28px",},
                        fontFamily: "'Rajdhani', sans-serif",
                      }}
                    >
                      Become A Part Of Us
                    </Typography>
                    <Typography
                      sx={{
                        color: "#BFBFBF",
                        fontSize: {lg:"16px",md:"16px",sm:"14px",xs:"12px",},
                        fontFamily: "'Raleway', sans-serif",
                      }}
                      my={2}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Has been the industry's standard
                      dummy text ever since the 1500s,
                    </Typography>
                    <Box
                      gap={3}
                      justifyContent="start"
                      sx={{
                        display: {lg:"flex",md:"flex",sm:"flex",xs:"flex",},
                        paddingTop: {lg:"30px",md:"30px",sm: "10px",xs:"0px",},
                      }}
                    >
                      <Button
                        onClick={() => navigate("/")}
                        sx={{
                          width: { lg: "45%",md:"35%", sm: "45%", xs: "50%" },
                          transition: "0.7s",
                          fontSize: {lg:"16px",md:"16px",sm:"14px",xs:"12px",},
                          fontFamily: "'Raleway', sans-serif",
                          marginBottom: { sm: "10px", xs: "5px" },
                          border: "1px solid white",
                          borderRadius: "0px",
                          padding: "15px 15px",
                          textTransform: "unset",
                          "&:hover": {
                            backgroundColor: "#6B5FFE",
                            border: "1px solid rgba(44,36,74,.26)",
                          },
                          color: "white",
                          fontWeight: 600,
                        }}
                      >
                        Become a Member
                      </Button>
                      <Button
                        onClick={() => navigate("/contact_us")}
                        sx={{
                          width: { lg: "45%",md:"20%", sm: "45%", xs: "50%" },
                          transition: "0.7s",
                          fontSize: {lg:"16px",md:"16px",sm:"14px",xs:"12px",},
                          fontFamily: "'Raleway', sans-serif",
                          marginBottom: { sm: "10px", xs: "5px" },
                          border: "1px solid white",
                          borderRadius: "0px",
                          padding: "15px 15px",
                          textTransform: "unset",
                          "&:hover": {
                            backgroundColor: "#6B5FFE",
                            border: "1px solid rgba(44,36,74,.26)",
                          },
                          color: "white",
                          fontWeight: 600,
                        }}
                      >
                        Contact Us
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </div>
            </Grid>
            <Grid xs={12} md={10} lg={6} item>
              <Box
                sx={{
                  backgroundImage: `linear-gradient(90deg,rgba(43,42,101,90),rgba(43,42,101,.0)),url(${become})`,
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  zIndex: "-1",
                  width: "100%",
                  backgroundSize: "cover",
                  objectFit: "cover",
                  height: "370px",
                }}
              >
                <Box>
                  <Link to={"https://www.youtube.com/watch?v=u4smAxDtbGc"}>
                    <PlayCircleFilledRoundedIcon
                      className="loader"
                      sx={{ zIndex: "1", fontSize: "60px" }}
                    />
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default BecomeApart;
