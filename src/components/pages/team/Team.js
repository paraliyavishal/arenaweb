import { Box } from "@mui/material";
import React from "react";
import Teamherosection from "./Teamherosection";
import MeetOurMasterminds from "./MeetOurMasterminds";
import Footer from "../../../commoncomponets/footer/Footer";

function Team() {
  return (
    <Box>
      <Teamherosection />
      <MeetOurMasterminds />
      <Footer />
    </Box>
  );
}

export default Team;
