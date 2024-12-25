import { Box } from "@mui/material";
import React from "react";
import Contactusherosection from "./Contactusherosection";
import Contact from "./Contact";
import ContactForm from "./ContactForm";
import FindUs from "./FindUs";
import Footer from "../../../commoncomponets/footer/Footer";

function ContactUs() {
  return (
    <Box>
      <Contactusherosection />
      <Contact />
      <ContactForm />
      <FindUs />
      <Footer />
    </Box>
  );
}

export default ContactUs;
