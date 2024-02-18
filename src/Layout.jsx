import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const Layout = () => {
  return (
    <div className="flex overflow-hidden h-[100vh] ">
      <div className="flex-[0.2] sticky left-0  ">
        {" "}
        <Navbar />
      </div>
      <div className=" flex-[0.8] border  ">
        {" "}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
