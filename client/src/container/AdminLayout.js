import React from "react";
import Navbar from "../components/admin/Navbar";
import SideBar from "../components/admin/SideBar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full">
        <div>
          <Navbar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
