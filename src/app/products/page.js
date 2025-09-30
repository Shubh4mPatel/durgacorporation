import React from 'react'
import HeroSection from "../components/Hero-section/HeroSection";
import Products from '../components/products/Products';
import ProductHeroSection from '../components/Producthero-section/ProductHeroSection';



const page = () => {
  return (
    <>
    <ProductHeroSection />
    <Products />
    </>
  )
}

export default page