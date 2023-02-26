import React, { useEffect } from "react";
import HomeSlider from "./Home Slider/HomeSlider";
import Products from "./Products/Products";
import Category from "./Shop Category/Category";
import Support from "./Support/Support";
import $ from "jquery";

const Home = () => {
  useEffect(() => {
    $(".app").removeClass("header3");
  });
  return (
    <main>
      <HomeSlider />
      <Category />
      <Products />
      <Support />
    </main>
  );
};

export default Home;
