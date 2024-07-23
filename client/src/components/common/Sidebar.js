import React from "react";
import { useSelector } from "react-redux";

const Item = ({ item }) => (
  <span className="p-2 text-lg cursor-pointer hover:bg-slate-300">{item}</span>
);

const Heading = ({ heading }) => (
  <span className="font-bold text-xl px-2 py-4"> {heading} </span>
);

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className="flex flex-col p-5 w-48 shadow-lg h-screen relative">
      <div className="flex flex-col">
        <Heading heading="Shop In" />
        <Item item="Men" />
        <Item item="Women" />
        <Item item="Accessories" />
        <Item item="Specials" />
      </div>
      <div className="flex flex-col">
        <Heading heading="My Profile" />
        <Item item="My Account" />
        <Item item="My Oders" />
        <Item item="My Cart" />
      </div>
      <div className="flex flex-col">
        <Heading heading="Contact Us" />
        <Item item="Help & Support" />
        <Item item="Feedback" />
      </div>
      <span className="font-bold text-2xl w-full p-2 bg-gray-300 absolute bottom-0 left-0 text-center cursor-pointer hover:bg-slate-500">
        Logout
      </span>
    </div>
  );
};

export default Sidebar;
