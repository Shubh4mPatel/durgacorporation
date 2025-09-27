import React from "react";
import HeroSection from "../components/Hero-section/HeroSection";
import About from "../components/About/About";
import Why from "../components/why/Why";
import EthicsAndValues from "../components/Ethics/Ethics";

export const page = () => {
  return (
    <>
      <HeroSection />
      <About />
      <EthicsAndValues />
      {/* <Why /> */}
    </>
  );
};
export default page;
