import React from "react";
import { client } from "../lib/client";

// components
import { Product, HeroBanner, FooterBanner } from "../components";

const Home = ({ products, bannerData }) => {
  return (
    <>
      {/* Hero Banner*/}
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {/* Products heading */}
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Products</p>
      </div>
      {/* products container */}
      <div className="products-container">
        {products?.map((product) => product.name)}
      </div>
      {/* Footer */}
      <FooterBanner />
    </>
  );
};

// queries
export const getServerSideProps = async () => {
  // product query
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  // banner query
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
