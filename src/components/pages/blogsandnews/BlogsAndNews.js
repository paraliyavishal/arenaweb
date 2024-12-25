import { Box } from "@mui/material";
import React from "react";
import Blogsherosection from "./Blogsherosection";
import SourceForGaming from "./SourceForGaming";
import Footer from "../../../commoncomponets/footer/Footer";

function BlogsAndNews() {
  return (
    <Box>
      <Blogsherosection />
      <SourceForGaming />
      <Footer />
    </Box>
  );
}

export default BlogsAndNews;
