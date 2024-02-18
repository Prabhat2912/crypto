import React from "react";

import { Link, NavLink } from "react-router-dom";

import { FaHome } from "react-icons/fa";

import { BsCurrencyExchange } from "react-icons/bs";

import { SiBitcoinsv } from "react-icons/si";

import { BiNews } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="w-full flex  flex-col  border bg-[#001529]  items-start h-[100%] min-w-[300px] ">
      <Link
        to="/"
        className="flex w-full  gap-3 p-2 items-center justify-center "
      >
        <img src="/cryptocurrency.png" alt="logo" width={40} />
        <h1 className="text-white hover:text-[#0071bd] text-[30px] ">
          Cryptoverse
        </h1>
      </Link>
      <div className="bg-[#001529] flex flex-col w-[90%] py-4 gap-4 items-center ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-gray-200 hover:bg-[#0071bd] flex gap-2 items-center w-full pl-6 ${
              isActive ? "bg-[#0071bd]" : "bg-transparent"
            } p-2 rounded-md`
          }
        >
          <FaHome />
          <h1>Home</h1>
        </NavLink>
        <NavLink
          to="/crypto-currencies"
          className={({ isActive }) =>
            `text-gray-200 hover:bg-[#0071bd] flex gap-2 items-center w-full pl-6  ${
              isActive ? "bg-[#0071bd]" : "bg-transparent"
            } p-2 rounded-md`
          }
        >
          <SiBitcoinsv />
          <h1>Crypto Currencies</h1>
        </NavLink>
        <NavLink
          to="/exchanges"
          className={({ isActive }) =>
            `text-gray-200 hover:bg-[#0071bd] flex gap-2 items-center w-full pl-6 ${
              isActive ? "bg-[#0071bd]" : "bg-transparent"
            } p-2 rounded-md`
          }
        >
          <BsCurrencyExchange />
          <h1>Exchanges</h1>
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            `text-gray-200 hover:bg-[#0071bd] flex gap-2 items-center w-full pl-6 ${
              isActive ? "bg-[#0071bd]" : "bg-transparent"
            } p-2 rounded-md`
          }
        >
          <BiNews />
          <h1>News</h1>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
