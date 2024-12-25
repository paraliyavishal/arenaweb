import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import gamelogo1 from "../../assets/images/home/game-logo-1.webp";
import gamelogo2 from "../../assets/images/home/game-logo-2.webp";
import gamelogo3 from "../../assets/images/home/game-logo-3.webp";
import player1 from "../../assets/images/home/player-logo-1.webp";
import player2 from "../../assets/images/home/player-logo-2.webp";
import player3 from "../../assets/images/home/player-logo-3.webp";
import player4 from "../../assets/images/home/player-logo-4.webp";
import vs from "../../assets/images/home/vs.webp";
import { useNavigate } from "react-router-dom";

const schedules = [
  {
    img1: player3,
    name1: "Top Dogs",
    img2: player4,
    name2: "Pro Falcons",
    logo: gamelogo1,
    time: "Monday ,22nd Feb 2023 Live At 04:00 pm",
  },
  {
    img1: player4,
    name1: "Top Dogs",
    img2: player3,
    name2: "Pro Falcons",
    logo: gamelogo2,
    time: "Tuesday ,23rd Feb 2023 Live At 05:00 pm",
  },
  {
    img1: player2,
    name1: "Pro Slayer",
    img2: player3,
    name2: "Pro Falcons",
    logo: gamelogo1,
    time: "Wednesday ,24th Feb 2023 Live At 09:00 pm",
  },
  {
    img1: player4,
    name1: "Top Dogs",
    img2: player1,
    name2: "Bare Killer",
    logo: gamelogo3,
    time: "Friday ,25th Feb 2023 Live At 10:00 pm",
  },
  {
    img1: player4,
    name1: "Top Dogs",
    img2: player3,
    name2: "Pro Falcons",
    logo: gamelogo2,
    time: "Monday ,28th Feb 2023 Live At 5:00 pm",
  },
  {
    img1: player2,
    name1: "Pro Slayer",
    img2: player1,
    name2: "Bare Killer",
    logo: gamelogo1,
    time: "Tuesday ,23rd Feb 2023 Live At 4:00 pm",
  },
  {
    img1: player4,
    name1: "Top Dogs",
    img2: player1,
    name2: "Bare Killer",
    logo: gamelogo3,
    time: "Thursday ,25th Feb 2023 Live At 10:00 pm",
  },
  {
    img1: player2,
    name1: "Pro Slayer",
    img2: player3,
    name2: "Pro Falcons",
    logo: gamelogo1,
    time: "Thursday ,25th Feb 2023 Live At 10:00 pm",
  },
];

const matchCategory = [
  {
    name: "All Matches",
  },
  {
    name: "Past Matches",
  },
  {
    name: "Live Stream",
  },
  {
    name: "Upcoming Matches",
  },
];

function Matchschedules() {
  const [selectedItem, setSelectedItem] = useState(null);

  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: "#090329", py: 6 }}>
      <Container maxWidth="xl">
        <Box sx={{ paddingTop: "50px" }}>
          <Typography
            textAlign="center"
            variant="h3"
            fontWeight={700}
            sx={{
              color: "white",
              fontSize: { lg: "48px", md: "40px", sm: "32px", xs: "28px" },
              fontFamily: "'Rajdhani', sans-serif",
            }}
          >
            MATCH SCHEDULES
          </Typography>
          <Box>
            <Typography
              sx={{
                fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "12px" },
                color: "#BFBFBF",
                fontFamily: "'Raleway', sans-serif",
                textAlign: "center",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "16x", md: "16px", sm: "14px", xs: "12px" },
                color: "#BFBFBF",
                fontFamily: "'Raleway', sans-serif",
                textAlign: "center",
              }}
            >
              been the industry's standard dummy text ever since the 1500s
            </Typography>
          </Box>
        </Box>
        <Box>
          <Grid
            item
            container
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              borderBottom: "2px solid #202256",
              paddingTop: "50px",
              marginBottom: "50px",
            }}
          >
            {matchCategory.map((item, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={10}
                md={6}
                lg={3}
                sx={{ paddingLeft: { lg: "30px", xs: "0px" } }}
              >
                <Box
                  onClick={() => setSelectedItem(index)} // Update selected item
                  sx={{
                    cursor: "pointer",
                    backgroundColor:
                      selectedItem === index ? "#6B5FFE" : "inherit", // Apply red background if selected
                    "&:hover": {
                      backgroundColor:
                        selectedItem === index ? "#6B5FFE" : "#6B5FFE",
                      transition: ".7s",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      textAlign: "center",
                      padding: "15px 0px",
                      fontWeight: "600",
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "12px",
                      },
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    {item.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Grid container xs={12}>
            {schedules.map((item, index) => (
              <Grid
                container
                item
                xs={12}
                key={index}
                sx={{
                  borderBottom: {
                    xs: "2px solid #221C3E",
                    sm: "2px solid #221C3E",
                    md: "2px solid #221C3E",
                    lg: "2px solid #221C3E",
                  },
                  ":hover": { backgroundColor: "#2B2A65" },
                  display: "flex",
                  justifyContent: { xs: "center", sm: "center" },
                  paddingTop: { xs: "20px", sm: "20px" },
                  transition: "0.3s",
                }}
              >
                <Grid item xs={12} sm={10} md={4} lg={3}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <img src={item.logo} alt={`Logo ${index}`} />
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={10}
                  md={4}
                  lg={4}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box textAlign="center">
                    <Typography
                      sx={{
                        color: "#BFBFBF",
                        py: 2,
                        fontSize: {
                          lg: "16x",
                          md: "16px",
                          sm: "14px",
                          xs: "12px",
                        },
                        fontFamily: "'Raleway', sans-serif",
                      }}
                    >
                      {item.time}
                    </Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      gap={3}
                    >
                      <i
                        class="fa-brands fa-youtube"
                        style={{ color: "#BFBFBF", cursor: "pointer" }}
                      ></i>
                      <i
                        class="fa-brands fa-twitch"
                        style={{ color: "#BFBFBF", cursor: "pointer" }}
                      ></i>
                      <i
                        class="fa-brands fa-discord"
                        style={{ color: "#BFBFBF", cursor: "pointer" }}
                      ></i>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={10} md={4} lg={5}>
                  <Box p={2}>
                    <Box
                      display="flex"
                      justifyContent="space-around"
                      alignItems="center"
                    >
                      <Box>
                        <img
                          src={item.img1}
                          alt=""
                          className="player"
                          style={{ height: "70px", cursor: "pointer" }}
                        />
                        <Typography
                          sx={{
                            textAlign: "center",
                            color: "#BFBFBF",
                            pt: 2,
                            fontSize: {
                              lg: "16x",
                              md: "16px",
                              sm: "14px",
                              xs: "12px",
                            },
                            fontFamily: "'Raleway', sans-serif",
                          }}
                        >
                          {item.name1}
                        </Typography>
                      </Box>
                      <Box>
                        <img src={vs} alt="VS" width="100%" />
                      </Box>
                      <Box>
                        <img
                          src={item.img2}
                          alt=""
                          className="player"
                          style={{ height: "70px", cursor: "pointer" }}
                        />
                        <Typography
                          textAlign="center"
                          sx={{
                            color: "#BFBFBF",
                            pt: 2,
                            fontSize: {
                              lg: "16x",
                              md: "16px",
                              sm: "14px",
                              xs: "12px",
                            },
                            fontFamily: "'Raleway', sans-serif",
                          }}
                        >
                          {item.name2}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Box
            display="flex"
            gap={3}
            justifyContent="center"
            paddingTop={5}
            paddingBottom={5}
          >
            <Button
              onClick={() => navigate("/match_schedule")}
              sx={{
                border: "1px solid white",
                transition: ".7s",
                borderRadius: "0px",
                padding: "10px 20px",
                "&:hover": {
                  backgroundColor: "#6B5FFE",
                  border: "1px solid rgba(44,36,74,.26)",
                },
                color: "white",
                textTransform: "unset",
                fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "12px" },
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              View More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Matchschedules;
