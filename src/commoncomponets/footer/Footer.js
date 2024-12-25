import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "../../assets/images/home/logo.png";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <Box sx={{ backgroundColor: "#090329" }}>
      <Container maxWidth="xl">
        <Grid item container xs={12} borderBottom={"1px solid #212529"} py={3}>
          <Grid item xs={12} lg={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { lg: "start", md: "center", xs: "center" },
              }}
            >
              <img
                src={logo}
                alt=""
                width={"200px"}
                style={{
                  backgroundSize: "cover",
                  objectFit: "cover",
                  padding: "20px 0px",
                }}
              />
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "flex", lg: "block" },
                paddingTop: { lg: "15  px", md: "0px" },
                justifyContent: { lg: "start", md: "center", xs: "center" },
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: { lg: "48px", md: "48px", sm: "40px", xs: "26px" },
                  fontFamily: "'Rajdhani', sans-serif",
                }}
              >
                STRATEGIZE.
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: { lg: "48px", md: "48px", sm: "40px", xs: "26px" },
                  fontFamily: "'Rajdhani', sans-serif",
                }}
              >
                PLAY.
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: { lg: "48px", md: "48px", sm: "40px", xs: "26px" },
                  fontFamily: "'Rajdhani', sans-serif", 
                }}
              >
                CONQUER.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            lg={3}
            alignItems={"end"}
            sx={{
              display: "flex",
              justifyContent: { lg: "center", md: "center", xs: "center" },
            }}
          >
            <Box>
              <Typography
                py={1}
                fontWeight={700}
                sx={{
                  color: "white",
                  fontSize: { lg: "20px", md: "20px", sm: "18px", xs: "16px" },
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                Games
              </Typography>
              <Box
                sx={{
                  color: "white",
                  fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "12px" },
                }}
              >
                <Typography
                  sx={{
                    cursor: "pointer",
                    transition: "0.5s",
                    "&:hover": { color: "#6B5FFE" },
                    fontFamily: "'Raleway', sans-serif",
                    my: 1,
                  }}
                  onClick={() => navigate("/games")}
                >
                  CS GO
                </Typography>
                <Typography
                  sx={{
                    cursor: "pointer",
                    transition: "0.5s",
                    "&:hover": { color: "#6B5FFE" },
                    fontFamily: "'Raleway', sans-serif",
                    my: 1,
                  }}
                  onClick={() => navigate("/games")}
                >
                  PUBG
                </Typography>
                <Typography
                  sx={{
                    cursor: "pointer",
                    transition: "0.5s",
                    "&:hover": { color: "#6B5FFE" },
                    fontFamily: "'Raleway', sans-serif",
                    my: 1,
                  }}
                  onClick={() => navigate("/games")}
                >
                  DOTA2
                </Typography>
                <Typography
                  sx={{
                    cursor: "pointer",
                    transition: "0.5s",
                    "&:hover": { color: "#6B5FFE" },
                    fontFamily: "'Raleway', sans-serif",
                    my: 1,
                  }}
                  onClick={() => navigate("/games")}
                >
                  CALL OF DUTY
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: { lg: "center", md: "center", xs: "center" },
            }}
            alignItems={"end"}
          >
            <Box>
              <Typography
                py={1}
                fontWeight={700}
                sx={{
                  color: "white",
                  fontSize: { lg: "20px", md: "20px", sm: "18px", xs: "16px" },
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                Pages
              </Typography>
              <Box
                sx={{
                  color: "white",
                  fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "12px" },
                }}
              >
                <Typography
                  sx={{
                    cursor: "pointer",
                    transition: "0.5s",
                    "&:hover": { color: "#6B5FFE" },
                    fontFamily: "'Raleway', sans-serif",
                    my: 1,
                  }}
                  onClick={() => navigate("/about")}
                >
                  About Us
                </Typography>
                <Typography
                  sx={{
                    cursor: "pointer",
                    transition: "0.5s",
                    "&:hover": { color: "#6B5FFE" },
                    fontFamily: "'Raleway', sans-serif",
                    my: 1,
                  }}
                  onClick={() => navigate("/testimonials")}
                >
                  Testimonials
                </Typography>
                <Typography
                  sx={{
                    cursor: "pointer",
                    transition: "0.5s",
                    "&:hover": { color: "#6B5FFE" },
                    fontFamily: "'Raleway', sans-serif",
                    my: 1,
                  }}
                  onClick={() => navigate("/faq")}
                >
                  Faq
                </Typography>
                <Typography
                  sx={{
                    cursor: "pointer",
                    transition: "0.5s",
                    "&:hover": { color: "#6B5FFE" },
                    fontFamily: "'Raleway', sans-serif",
                    my: 1,
                  }}
                  onClick={() => navigate("/contact_us")}
                >
                  Contact Us
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: { lg: "start", md: "center", xs: "center" },
            }}
          >
            <Box>
              <Box
                gap={2}
                mt={4}
                sx={{
                  display: "flex",
                  justifyContent: { lg: "start", md: "center", xs: "center" },
                }}
              >
                <Link
                  class="icon1 fa-brands fa-twitter"
                  style={{
                    padding: "10px",
                    borderRadius: "50%",
                    textDecoration: "none",
                  }}
                  to={"https://x.com/i/flow/login"}
                ></Link>
                <Link
                  class="icon1 fa-brands fa-youtube"
                  style={{
                    padding: "10px",
                    borderRadius: "50%",
                    textDecoration: "none",
                  }}
                  to={"https://www.youtube.com/"}
                ></Link>
                <Link
                  class="icon1 fa-brands fa-facebook-f"
                  style={{
                    padding: "10px 13px",
                    borderRadius: "50%",
                    textDecoration: "none",
                  }}
                  to={"https://www.facebook.com/login.php/"}
                ></Link>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "white",
                    display: "flex",
                    justifyContent: { lg: "start", md: "center" },
                    fontSize: {
                      lg: "20px",
                      md: "20px",
                      sm: "18px",
                      xs: "18px",
                    },
                    fontFamily: "'Raleway', sans-serif",
                  }}
                  fontWeight={700}
                  pt={5}
                >
                  Subscribe to Our Newsletter to stay updated
                </Typography>
                <form action="" typeof="submit">
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    type="email"
                    required
                    placeholder="Enter Your Email Address"
                    sx={{
                      width: "100%",
                      mt: 2,
                      input: { color: "white" }, // Text color
                      label: { color: "white" }, // Label color
                      BorderColor: "red",
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "white", // Default border color
                      },
                      "& .MuiInput-underline:hover:before": {
                        borderBottomColor: "#FFFFFf",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#6B5FFE", // Focused border color
                      },
                    }}
                  />
                  <Box my={3}>
                    <Link to={""}>
                      <Button
                        className="c-button c-button--gooey"
                        type="submit"
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
                            xs: "14px",
                          },
                          fontWeight: "600",
                          lineHeight: "38px",
                          fontFamily: "'Raleway', sans-serif",
                          padding: {
                            xs: "8px 20px 8px 20px",
                            sm: "8px 60px 8px 60px",
                            md: "8px 30px 8px 30px",
                            lg: "8px 30px 8px 30px",
                          },
                          "&:hover": { color: "black" },
                        }}
                      >
                        Subscribe
                        <Box className="c-button__blobs">
                          <Box></Box>
                          <Box></Box>
                          <Box></Box>
                        </Box>
                      </Button>
                    </Link>
                  </Box>
                </form>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box py={5}>
          <Typography
            textAlign={"center"}
            sx={{
              color: "#BFBFBF",
              fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "12px" },
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            Copyright © 2024 Arena Lads By Evonicmedia. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
