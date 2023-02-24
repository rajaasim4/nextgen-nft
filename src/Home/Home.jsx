import React from "react";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import Collection from "../Layout/Collection/Collection";
import Creators from "../Layout/Creators/Creators";
import Hero from "../Layout/Hero/Hero";
import Newsletter from "../Layout/Newsletter/Newsletter";
import Slider from "../Layout/Slider/Slider";
const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Slider />
      <Creators />
      <Newsletter />
      <Collection />
      <Footer />
    </>
  );
};

export default Home;
