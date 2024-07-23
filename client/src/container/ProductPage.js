import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import RenderStars from "../components/common/RenderStar";


const ProductPage = () => {
  const { param } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/products/product/${param}`
        );
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [param]);

  const handleClick = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        await axios.post(`${process.env.REACT_APP_API_URL}/cart/add`, {
          param,
          token,
        });
        alert("Item added to cart");
      } else {
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:items-start p-4 md:p-8">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-md"
            src={data?.image}
            alt="Product"
          />
        </div>
        <div className="w-full md:w-1/3 md:ml-8">
          <div className="px-4">
            <h1 className="text-4xl font-bold mb-2">{data?.name}</h1>
            <h3 className="text-sm text-gray-600 mb-4">
              <RenderStars 
              rating={data?.rating}
              />
            </h3>
            <h2 className="text-2xl text-gray-500 mb-4">INR {data?.price}</h2>
          </div>
          <div className="p-2 m-2">
            <select className="px-4 py-2 w-full bg-white border border-black rounded-lg">
              <option value="">Select size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div className="text-center p-2 m-2">
            <button
              onClick={handleClick}
              className="bg-black w-full text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition-colors duration-300"
            >
              Add to Cart
            </button>
          </div>
          <div className="p-4 md:p-8">
            <h1 className="text-xl font-semibold mb-2">Description</h1>
            <p className="text-gray-700">{data?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
