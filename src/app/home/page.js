import React from "react";
import HeroSection from "../components/Hero-section/HeroSection";
import About from "../components/About/About";
import CardSection from "../components/Spices-Card-section/SpicesCardSection";
import OurProducts from "../components/OurProducts/OurProducts";
import Why from "../components/why/Why";

export const page = () => {
  return (
    <>
      <HeroSection />
      <CardSection/>
      <About />
      {/* <OurProducts/> */}
      <Why />
    </>
  );
};
export default page;
