import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Blog />
      <Footer />
    </>
  );
};

export default Homepage;
