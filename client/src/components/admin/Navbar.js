import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  
  return (
    <div className="flex justify-between shadow-lg mx-5 p-2 h-20 ">
      <button>Menu</button>
      {localStorage.getItem("token") ? (
            <Link
              to="/admin/login"
              className="m-2 py-2 px-4 cursor-pointer text-white bg-black hover:bg-slate-600" 
              onClick={() => localStorage.removeItem("token")}
            >
              Logout
            </Link>
          ) : (
            <Link to={"/admin/login"} className="m-2 py-2 px-4 cursor-pointer text-white bg-black hover:bg-slate-600">
              Login{" "}
            </Link>
          )}
    </div>
  );
};

export default Navbar;
