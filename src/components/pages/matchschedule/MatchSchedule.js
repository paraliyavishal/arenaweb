import { Box } from "@mui/material";
import React from "react";
import Matchherosection from "./Matchherosection";
import Matchschedules from "../../home/Matchschedules";
import Matches from "../../home/Matches";
import Footer from "../../../commoncomponets/footer/Footer";

function MatchSchedule() {
  return (
    <Box>
      <Matchherosection />
      <Matches />
      <Matchschedules />
      <Footer />
    </Box>
  );
}

export default MatchSchedule;
