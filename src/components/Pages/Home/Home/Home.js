import React from "react";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import QuickShop from "../QuickShop/QuickShop";
import Testimonial from "../Testimonial/Testimonial";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Products></Products>
      <Testimonial></Testimonial>
      <QuickShop></QuickShop>
    </>
  );
};

export default Home;
