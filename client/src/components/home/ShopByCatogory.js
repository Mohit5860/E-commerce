import React from "react";

const ShopByCatogory = () => {
  return (
    <div className="mb-20 text-center">
      <span className="text-2xl font-semibold">Shop By Category</span>
      <div className=" m-8 flex justify-between" >
        <div className="m-2 p-2 h-96" >
          <img className="h-full w-full" src="https://imgs.search.brave.com/O5ngfvTEjSVL55dmjO3P2JXVceNnIouiZTpkIMwbli4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQ0L2E1/L2EwLzQ0YTVhMGVk/NWJiMGM4MjE0ODgw/OWQ3Yzg5NDY0NDM4/LmpwZw" />
          <p className=" text-center font-semibold m-2 text-xl">Men</p>        
        </div>
        <div className="m-2 p-2 h-96">
          <img className="h-full w-full" src="https://imgs.search.brave.com/wJo2V2k8dhoHrDDzWRl3PAVIeZfaDM6reSqjpe2SURo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaG9w/YXZhcmEuY29tL2Nk/bi9zaG9wL2ZpbGVz/L1NLVTEyMjg3LUtl/bGx5LURyZXNzLTAw/NTEtQl8zYzRlM2I1/My1lMDM3LTRkMGUt/YTFmYS01MjQ3YWRl/NGRiMWEuanBnP3Y9/MTcyMDQ3MzI0MSZ3/aWR0aD0yMDAw" />
          <p className=" text-center font-semibold m-2 text-xl">Women</p> 
        </div>
        <div className="m-2 p-2 h-96">
          <img className="h-full w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1PAj1FbH_WOdutHCm0eydl7YAQ351NsovJw&s" />
          <p className=" text-center font-semibold m-2 text-xl">Kids</p> 
        </div>
        <div className="m-2 p-2 h-96">
          <img className="h-full w-full" src="https://i.pinimg.com/736x/2f/40/a2/2f40a2d562cd984be6a9286d3639b026.jpg" />
          <p className=" text-center font-semibold m-2 text-xl">Shoes</p> 
        </div>
      </div>
    </div>
  );
};

export default ShopByCatogory;
