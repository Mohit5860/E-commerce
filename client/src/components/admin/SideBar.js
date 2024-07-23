import React, { useState } from "react";
import { Link } from "react-router-dom";

const Item = ({ name, setIsActive, isActive }) => {
  const handleClick = () => {
    setIsActive(name);
  };
  return (
    <div className={isActive === name ? " my-5 p-5 bg-slate-200" : " my-5 p-5"}>
      <Link
        className="cursor-pointer"
        to={`/admin/${name}`}
        onClick={handleClick}
      >
        {name}
      </Link>
    </div>
  );
};

const SideBar = () => {
  const [isActive, setIsActive] = useState("Dashboard");

  return (
    <div className="m-5 p-2 shadow-lg h-screen">
      <h1 className="text-2xl font-bold">Shopping</h1>
      <Item name="Dashboard" isActive={isActive} setIsActive={setIsActive} />
      <Item name="Users" isActive={isActive} setIsActive={setIsActive} />
      <Item name="Orders" isActive={isActive} setIsActive={setIsActive} />
      <Item name="Products" isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default SideBar;
