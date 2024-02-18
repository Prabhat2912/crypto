import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const Layout = () => {
  return (
    <div className="flex overflow-hidden h-[100vh] relative ">
      <div className="flex-[0.2] h-[100vh] sticky left-0  max-md:flex-1 z-10 max-md:fixed  ">
        {" "}
        <Navbar />
      </div>
      <div className=" flex-[0.8] border max-md:ml-[60px] z-0 ">
        {" "}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
