import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavItem = ({ name, catagory, image, navbarOpen, setNavbarOpen }) => {

  const toggleNavbar = () => {
    setNavbarOpen(navbarOpen === name ? null : name);
  };
  return (
    <div
      className="relative"
      onMouseEnter={() => toggleNavbar()}
      onMouseLeave={() => toggleNavbar()}
    >
      <span
        className={
          navbarOpen === name ? "font-bold cursor-pointer text-black" : "cursor-pointer "
        }
      >
        {name}
      </span>
      {navbarOpen === name && (
        <div className="fixed left-1/2 transform -translate-x-1/2 bg-white border border-b-gray-500 border-t-0 border-x-0 z-50">
          <div className="w-[65rem] flex justify-between p-5 m-2">
            {catagory.map((cat) => (
              <div>
                <ul>
                  <li className="pb-4 font-semibold" key={cat.name}>
                    {cat.name}
                  </li>
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="pb-2 cursor-pointer hover:text-gray-500"
                    >
                      <Link onClick={() => {setNavbarOpen(null)}} to={`/browse/${name}?type=${item}`}>{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <img className="h-52" src={image} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(null);
  return (
    <div className="px-20 py-2 my-2 mx-96 justify-between flex">
      <NavItem
        name="Men"
        catagory={[
          {
            name: "Summer",
            items: ["Shirt", "T-shirts", "Shorts", "Lower"],
          },
          {
            name: "Winter",
            items: ["Jackets", "Sweaters", "Hoodies", "Jeans"],
          },
          {
            name: "Shoes",
            items: ["Boots", "Sneakers", "Sport-Shoes"],
          },
        ]}
        image="https://imgs.search.brave.com/TzNg8dmT7IdF41rLvNfuWN8CG4_qNrdIqG5L_RmPGAU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzA4LzA2/L2NjLzA4MDZjYzZh/MmM4MzU4OGQ5NzI0/MWU1OGI1NmRjYmQ0/LmpwZw"
        navbarOpen={navbarOpen}
        setNavbarOpen={setNavbarOpen}
      />
      <NavItem 
      name="Women"
      catagory={[
        {
          name: "Summer",
          items: ["Tops","Skirts", "T-Shirts"]
        },
        {
          name: "Winter",
          items: ["Sweaters", "Hoodies", "Jackets"]
        }, 
        {
          name: "Shoes",
          items: ["Boots", "Sneakers", "Sport-Shoes"]
        }
      ]}
      image="https://imgs.search.brave.com/qMOjLe4P0pbpBq116sD6mqzzQnC85rcVaJxynFUcX-U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MDY3OTU2NjAxOTgt/ZTk1Yzc3NjAyMTI5/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFlt/VmhkWFJwWm5Wc0pU/SXdkMjl0WVc1OFpX/NThNSHg4TUh4OGZE/QT0"
      navbarOpen={navbarOpen}
      setNavbarOpen={setNavbarOpen}
      />
      <NavItem 
      name="Children"
      catagory={[
        {
          name: "Summer",
          items: ["T-Shirts", "Shorts", "Shirts"]
        },
        {
          name: "Winter",
          items: ["Sweaters", "Jackets", "Jeans"]
        },
        {
          name: "Shoes",
          items: ["Sport-shoes", "Sandles", "Flip-flops"]
        }
      ]}
      image="https://imgs.search.brave.com/8fpuJGHqrrUWw8aUeEujwGlppH5iFUPkg9H6piIRxG0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzRiL2Q4/L2Q0LzRiZDhkNGI5/YTBiNzFiZGJlNDcy/OGY5ZDMyMTcyNjRl/LmpwZw"
      navbarOpen={navbarOpen}
      setNavbarOpen={setNavbarOpen}
      />
      <div className="relative">
        <span className=" cursor-pointer hover:underline">Shoes</span>
      </div>
    </div>
  );
};

export default Navbar;
