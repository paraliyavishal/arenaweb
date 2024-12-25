import { Box } from "@mui/material";
import React from "react";
import Galleryherosection from "./Galleryherosection";
import JourneyPixels from "./JourneyPixels";
import Footer from "../../../commoncomponets/footer/Footer";

function Gallery() {
  return (
    <Box>
      <Galleryherosection />
      <JourneyPixels />
      <Footer />
    </Box>
  );
}

export default Gallery;
