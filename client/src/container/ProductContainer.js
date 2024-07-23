import React from "react";
import Filter from "../components/product/Filter";
import { Outlet } from "react-router-dom";

const ProductContainer = () => {
  return (
    <div className="flex">
      <Filter />
      <Outlet />
    </div>
  );
};

export default ProductContainer;
