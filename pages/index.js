import React from "react";

// components
import { Product, HeroBanner, FooterBanner } from "../components";

const Home = () => {
  return (
    <>
      {/* Hero Banner*/}
      <HeroBanner />
      {/* Products heading */}
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Products</p>
      </div>
      {/* products container */}
      <div className="products-container">
        {["Prod 1", "Prod 2", "Prod 3"].map((product) => product)}
      </div>
      {/* Footer */}
      <FooterBanner />
    </>
  );
};

export default Home;
