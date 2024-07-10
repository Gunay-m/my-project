import React from "react";
import HomeSlider from "../components/HomeSlider";
import NewArrivial from "../components/NewArrivial";
import Cards from "./Cards";
import Banner from "../components/Banner";


const Home = () => {
  return (
    <div>

      <HomeSlider />
      <NewArrivial/>
      <Cards/>
      <Banner/>
    </div>
  );
};

export default Home;
