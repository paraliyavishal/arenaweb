import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import team1 from "../../assets/images/home/team1.webp";
import team2 from "../../assets/images/home/team2.webp";
import team3 from "../../assets/images/home/team3.webp";

const mastermind = [
  {
    img: team1,
    name: "Malik AK-47",
  },
  {
    img: team2,
    name: "Choco Taco",
  },
  {
    img: team3,
    name: "Shroud Khans",
  },
];

function TeamMind() {
  return (
    <div>
      <Grid container item xs={12} spacing={5}>
        {mastermind.map((item) => (
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "end",
                  backgroundColor: "#100a2e",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#221C3E",
                    width: "100%",
                    padding: "20px",
                    paddingTop: "30px",
                    "&:hover": { backgroundColor: "#2B2A65" },
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: {
                        lg: "18px",
                        md: "18px",
                        sm: "16px",
                        xs: "16px",
                      },
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#BFBFBF",
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "12px",
                      },
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    Pro Gamer CS:GO
                  </Typography>
                  <Box paddingTop={3} sx={{ color: "#BFBFBF" }}>
                    <i
                      class="fa-brands fa-youtube icon"
                      style={{
                        paddingRight: "16px",
                        fontSize: "20px",
                        cursor: "pointer",
                      }}
                    ></i>
                    <i
                      class="fa-brands fa-twitch"
                      style={{
                        paddingRight: "16px",
                        fontSize: "20px",
                        cursor: "pointer",
                        color: "#30D855",
                      }}
                    ></i>
                    <i
                      class="fa-brands fa-discord icon"
                      style={{
                        paddingRight: "16px",
                        fontSize: "20px",
                        cursor: "pointer",
                      }}
                    ></i>
                  </Box>
                </Box>
                <Box>
                  <img src={item.img} alt="" width={"100%"} />
                </Box>
              </Box>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default TeamMind;
