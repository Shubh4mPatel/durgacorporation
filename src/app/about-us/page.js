import React from "react";
import HeroSection from "../components/Hero-section/HeroSection";
import About from "../components/About/About";
import Why from "../components/why/Why";

export const page = () => {
  return (
    <>
      <HeroSection />
      <About />
      {/* <Why /> */}
    </>
  );
};
export default page;
