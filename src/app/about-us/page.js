import React from "react";
import HeroSection from "../components/Hero-section/HeroSection";
import About from "../components/About/About";
import Why from "../components/why/Why";
import EthicsAndValues from "../components/Ethics/Ethics";
import SpiceMissionVision from "../components/Mission-vision/SpiceMissionVision";

export const page = () => {
  return (
    <>
      <HeroSection />
      <About />
      <SpiceMissionVision />
      <EthicsAndValues />
      {/* <Why /> */}
    </>
  );
};
export default page;
