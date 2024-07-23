import React from "react";
import Carousel from "../components/home/Carousel";
import ShopByCatogory from "../components/home/ShopByCatogory";
import TopPicks from "../components/home/TopPicks";
import Head from "../components/common/Head";
import Footer from "../components/common/Footer";

const HomePage = () => {
  return (
    <>
      <div>
        <Carousel />
        <TopPicks />
        <ShopByCatogory />
      </div>
    </>
  );
};

export default HomePage;
