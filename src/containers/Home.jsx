import React from "react";
import HomeSlider from "../components/HomeSlider";
import NewArrivial from "../components/NewArrivial";
import Cards from "./Cards";
import Banner from "../components/Banner";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div>

      <HomeSlider />
      <NewArrivial/>
      <Cards/>
      <Banner/>
      <Footer/>
    </div>
  );
};

export default Home;
