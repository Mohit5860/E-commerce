import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Head = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="grid grid-flow-col p-2 m-2  relative border-b-2 border-gray-500">
        <div className="flex col-span-1">
          <Link to={"/"} className="font-bold text-3xl m-3 px-2">
            {" "}
            Shopping
          </Link>
        </div>

        <div className="flex col-span-1 absolute right-0 p-2">
          <button
            className="m-2"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <img
              className="h-10"
              alt="cart"
              src="https://cdn1.vectorstock.com/i/1000x1000/25/25/shopping-cart-icon-vector-12712525.jpg"
            />
          </button>
          {localStorage.getItem("token") ? (
            <Link
              to="/login"
              className="m-2 py-2 px-4 cursor-pointer text-white bg-black hover:bg-slate-600" 
              onClick={() => localStorage.removeItem("token")}
            >
              Logout
            </Link>
          ) : (
            <Link to={"/login"} className="m-2 py-2 px-4 cursor-pointer text-white bg-black hover:bg-slate-600">
              Login{" "}
            </Link>
          )}
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Head;
