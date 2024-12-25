import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import NavigationIcon from "@mui/icons-material/Navigation";

function HomeBack() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowButton(scrollTop > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      id="back-to-top"
      sx={{
        position: "fixed",
        bottom: 30,
        right: 40,
        zIndex: 999,
        border: "2px solid #32D855",
        fontSize: "26px",
        width: "50px",
        height: "50px",
        // borderRadius: '50%',
        textAlign: "center",
        cursor: "pointer",
        display: showButton ? "block" : "none",
        bgcolor: "transparent",
      }}
      onClick={scrollToTop}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "41px",
        }}
      >
        <NavigationIcon sx={{ color: "#32D855" }} />
      </Box>
    </Box>
  );
}

export default HomeBack;
