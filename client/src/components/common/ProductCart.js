import React from "react";
import { useNavigate } from "react-router-dom";
import RenderStars from "./RenderStar";

const ProductCart = ({ img, name, price, rating, id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/product/"+id);
  }
  return (
    <div className="m-2 p-2 shadow-sm w-60 " onClick={handleClick}>
      <img className="w-full h-[281.8px]" alt="Product-Image" src={img} />
      <div className="flex flex-col">
        <span className="p-1">{name}</span>
        <span className="font-semibold px-1">INR {price}</span>
        <span>
        <RenderStars 
          rating={rating}
        />
        </span>
      </div>
    </div>
  );
};

export default ProductCart;
