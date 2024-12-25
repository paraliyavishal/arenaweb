import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import pageimg from "../../../assets/images/pages/404img.webp";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(28, 13, 40, 0.596),rgba(28, 13, 40, 0.596)),url(${pageimg})`,
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Box sx={{ color: "white" }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontSize: { lg: "65px", md: "65px", sm: "34px", xs: "34px" },
                fontWeight: "700",
                fontFamily: "'Rajdhani', sans-serif",
              }}
            >
              PAGE NOT FOUND
            </Typography>
            <Typography
              sx={{
                color: "#bfbfbf",
                fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "12px" },
                fontFamily: "'Raleway',sans-serif",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry'.
            </Typography>
            <Box
              justifyContent={"center"}
              width={"100%"}
              paddingTop={5}
              gap={4}
              sx={{
                display: { lg: "flex", md: "flex", sm: "flex", xs: "block" },
              }}
            >
              <Button
                onClick={() => navigate("/")}
                sx={{
                  width: { lg: "18%", sm: "20%", xs: "100%" },
                  transition: "0.7s",
                  fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "12px" },
                  fontFamily: "'Raleway', sans-serif",
                  marginBottom: { sm: "10px", xs: "5px" },
                  border: "1px solid white",
                  borderRadius: "0px",
                  padding: "15px 20px",
                  textTransform: "unset",
                  "&:hover": {
                    backgroundColor: "#6B5FFE",
                    border: "1px solid rgba(44,36,74,.26)",
                  },
                  color: "white",
                  fontWeight: 600,
                }}
              >
                Back to Home
              </Button>
              <Button
                onClick={() => navigate("/contact_us")}
                sx={{
                  width: { lg: "18%", sm: "20%", xs: "100%" },
                  transition: "0.7s",
                  fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "12px" },
                  fontFamily: "'Raleway', sans-serif",
                  marginBottom: { sm: "10px", xs: "5px" },
                  border: "1px solid white",
                  borderRadius: "0px",
                  padding: "15px 20px",
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
      </Container>
    </Box>
  );
}

export default PageNotFound;
