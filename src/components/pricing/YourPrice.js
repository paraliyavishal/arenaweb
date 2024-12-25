import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function YourPrice() {
  return (
    <Box sx={{ bgcolor: "#100a2e" }}>
      <Box
        sx={{
          bgcolor: "#100a2e",
          color: "#fff",
          textAlign: "center",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <Typography
          sx={{
            fontSize: { lg: "48px", md: "48px", sm: "34px", xs: "34px" },
            fontWeight: "700",
            lineHeight: "80px",
            fontFamily: "'Rajdhani',sans-serif",
          }}
        >
          YOUR VICTORY, YOUR PRICE
        </Typography>
        <Typography
          sx={{
            color: "#BFBFBFBF",
            fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "12px" },
            lineHeight: "26px",
            fontFamily: "'Raleway', sans-serif",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </Typography>
        <Typography
          sx={{
            color: "#BFBFBFBF",
            fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "12px" },
            lineHeight: "26px",
            fontFamily: "'Raleway', sans-serif",
          }}
        >
          has been the industry's standard dummy text.Lorem Ipsum is simply.
        </Typography>
      </Box>

      <Container maxWidth="xl" paddingBottom={7}>
        <Grid container item xs={12} paddingBottom={5} spacing={3}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            sx={{
              display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
            }}
            width={"100%"}
          >
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Box
                  padding={3}
                  sx={{
                    border: "1px solid #2B2A65",
                    height: "100%",
                    "&:hover": {
                      "& .text": { color: "#30d855", transition: "0.7s" },
                    },
                  }}
                >
                  <Typography
                    className="text"
                    sx={{
                      color: "#fff",
                      paddingBottom: "26px",
                      fontWeight: "700",
                      fontSize: {
                        lg: "20px",
                        md: "20px",
                        sm: "18px",
                        xs: "16px",
                      },
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    Premium Pakage
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: {
                        lg: "48px",
                        md: "48px",
                        sm: "34px",
                        xs: "34px",
                      },
                      fontWeight: "700",
                      lineHeight: "71px",
                      fontFamily: "'Rajdhani',sans-serif",
                      paddingBottom: "26px",
                    }}
                  >
                    $350
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "500",
                        marginLeft: "10px",
                        lineHeight: "26px",
                        fontFamily: "'Raleway', sans-serif",
                      }}
                    >
                      /month
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#BFBFBFBF",
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "12px",
                      },
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ fontSize: 34, color: "#fff", marginRight: 1 }}
                    />
                    Lorem Ipsum is simply dummy text of the printing.
                  </Typography>
                  <Box marginTop={2} display={"flex"} justifyContent={"center"}>
                    <Button
                      className="c-button c-button--gooey"
                      sx={{
                        borderRadius: "0px",
                        overflow: "hidden",
                        border: "1px solid #30d855",
                        color: "#30d855",
                        textTransform: "unset",
                        fontSize: {
                          lg: "16px",
                          md: "16px",
                          sm: "14px",
                          xs: "12px",
                        },
                        fontWeight: "600",
                        lineHeight: "38px",
                        fontFamily: "'Raleway', sans-serif",
                        padding: {
                          xs: "8px 30px 8px 30px",
                          sm: "8px 70px 8px 70px",
                          md: "8px 60px 8px 60px",
                          lg: "8px 65px 8px 65px",
                        },
                        "&:hover": { color: "black" },
                      }}
                    >
                      Get Started
                      <Box className="c-button__blobs">
                        <Box></Box>
                        <Box></Box>
                        <Box></Box>
                      </Box>
                    </Button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      style={{ display: "block", height: "0", width: "0" }}
                    >
                      <defs>
                        <filter id="goo">
                          <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="10"
                            result="blur"
                          ></feGaussianBlur>
                          <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                            result="goo"
                          ></feColorMatrix>
                          <feBlend in="SourceGraphic" in2="goo"></feBlend>
                        </filter>
                      </defs>
                    </svg>
                  </Box>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Box
                  padding={3}
                  sx={{ border: "1px solid #2B2A65", height: "100%" }}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#BFBFBFBF",
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "12px",
                      },
                      fontFamily: "'Raleway', sans-serif",
                      paddingBottom: "20px",
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ fontSize: 20, color: "#fff", marginRight: 1 }}
                    />
                    Lorem Ipsum is simply dummy text of the printing.
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#BFBFBFBF",
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "12px",
                      },
                      fontFamily: "'Raleway', sans-serif",
                      paddingBottom: "20px",
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ fontSize: 20, color: "#fff", marginRight: 1 }}
                    />
                    Lorem Ipsum is simply dummy text of the printing.
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#BFBFBFBF",
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "12px",
                      },
                      fontFamily: "'Raleway', sans-serif",
                      paddingBottom: "20px",
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ fontSize: 20, color: "#fff", marginRight: 1 }}
                    />
                    Lorem Ipsum is simply dummy text of the printing.
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#BFBFBFBF",
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "12px",
                      },
                      fontFamily: "'Raleway', sans-serif",
                      paddingBottom: "20px",
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ fontSize: 20, color: "#fff", marginRight: 1 }}
                    />
                    Lorem Ipsum is simply dummy text of the printing.
                  </Typography>
                </Box>
              </div>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            sx={{
              display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
            }}
            width={"100%"}
          >
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <Box
                  padding={3}
                  sx={{
                    border: "1px solid #2B2A65",
                    height: "100%",
                    "&:hover": {
                      "& .text": { color: "#30d855", transition: "0.7s" },
                    },
                  }}
                >
                  <Typography
                    className="text"
                    sx={{
                      color: "#fff",
                      paddingBottom: "26px",
                      fontWeight: "700",
                      fontSize: {
                        lg: "20px",
                        md: "20px",
                        sm: "18px",
                        xs: "16px",
                      },
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    Premium Pakage
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: {
                        lg: "48px",
                        md: "48px",
                        sm: "34px",
                        xs: "34px",
                      },
                      fontWeight: "700",
                      lineHeight: "71px",
                      fontFamily: "'Rajdhani',sans-serif",
                      paddingBottom: "26px",
                    }}
                  >
                    $350
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "500",
                        marginLeft: "10px",
                        lineHeight: "26px",
                        fontFamily: "'Raleway', sans-serif",
                      }}
                    >
                      /month
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#BFBFBFBF",
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "12px",
                      },
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ fontSize: 34, color: "#fff", marginRight: 1 }}
                    />
                    Lorem Ipsum is simply dummy text of the printing.
                  </Typography>
                  <Box marginTop={2} display={"flex"} justifyContent={"center"}>
                    <Button
                      className="c-button c-button--gooey"
                      sx={{
                        borderRadius: "0px",
                        overflow: "hidden",
                        border: "1px solid #30d855",
                        color: "#30d855",
                        textTransform: "unset",
                        fontSize: {
                          lg: "16px",
                          md: "16px",
                          sm: "14px",
                          xs: "12px",
                        },
                        fontWeight: "600",
                        lineHeight: "38px",
                        fontFamily: "'Raleway', sans-serif",
                        padding: {
                          xs: "8px 30px 8px 30px",
                          sm: "8px 70px 8px 70px",
                          md: "8px 60px 8px 60px",
                          lg: "8px 65px 8px 65px",
                        },
                        "&:hover": { color: "black" },
                      }}
                    >
                      Get Started
                      <Box className="c-button__blobs">
                        <Box></Box>
                        <Box></Box>
                        <Box></Box>
                      </Box>
                    </Button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      style={{ display: "block", height: "0", width: "0" }}
                    >
                      <defs>
                        <filter id="goo">
                          <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="10"
                            result="blur"
                          ></feGaussianBlur>
                          <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                            result="goo"
                          ></feColorMatrix>
                          <feBlend in="SourceGraphic" in2="goo"></feBlend>
                        </filter>
                      </defs>
                    </svg>
                  </Box>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <Box
                  padding={3}
                  sx={{ border: "1px solid #2B2A65", height: "100%" }}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#BFBFBFBF",
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "12px",
                      },
                      fontFamily: "'Raleway', sans-serif",
                      paddingBottom: "20px",
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ fontSize: 20, color: "#fff", marginRight: 1 }}
                    />
                    Lorem Ipsum is simply dummy text of the printing.
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#BFBFBFBF",
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "12px",
                      },
                      fontFamily: "'Raleway', sans-serif",
                      paddingBottom: "20px",
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ fontSize: 20, color: "#fff", marginRight: 1 }}
                    />
                    Lorem Ipsum is simply dummy text of the printing.
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#BFBFBFBF",
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "12px",
                      },
                      fontFamily: "'Raleway', sans-serif",
                      paddingBottom: "20px",
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ fontSize: 20, color: "#fff", marginRight: 1 }}
                    />
                    Lorem Ipsum is simply dummy text of the printing.
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#BFBFBFBF",
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "12px",
                      },
                      fontFamily: "'Raleway', sans-serif",
                      paddingBottom: "20px",
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ fontSize: 20, color: "#fff", marginRight: 1 }}
                    />
                    Lorem Ipsum is simply dummy text of the printing.
                  </Typography>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default YourPrice;
