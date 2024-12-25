import React from "react";
import Pricingherosection from "../components/pricing/Pricingherosection";
import SpecialDiscount from "../components/pricing/SpecialDiscount";
import YourPrice from "../components/pricing/YourPrice";
import Footer from "../commoncomponets/footer/Footer";

function Pricing() {
  return (
    <div>
      <Pricingherosection />
      <YourPrice />
      <SpecialDiscount />
      <Footer />
    </div>
  );
}

export default Pricing;
