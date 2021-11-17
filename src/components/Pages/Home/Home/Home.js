import React from "react";
import Banner from "../Banner/Banner";
import QuickShop from "../QuickShop/QuickShop";
import Testimonial from "../Testimonial/Testimonial";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Testimonial></Testimonial>
      <QuickShop></QuickShop>
    </>
  );
};

export default Home;
