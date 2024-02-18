import React from "react";

import { Link, NavLink } from "react-router-dom";

import { IoMenu } from "react-icons/io5";

import { FaHome } from "react-icons/fa";

import { RxCross2 } from "react-icons/rx";

import { BsCurrencyExchange } from "react-icons/bs";

import { SiBitcoinsv } from "react-icons/si";

import { BiNews } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div
      className={`w-full  flex  flex-col  border bg-[#001529]  items-start h-[100%] min-w-[60px] ${
        showOptions ? "w-[600px] z-50  " : ""
      } `}
    >
      <Link
        to="/"
        className="flex w-full  gap-3 p-2 items-center justify-start "
        onClick={() => setShowOptions(false)}
      >
        <img
          src="/cryptocurrency.png"
          alt="logo"
          width={40}
          className="max-md:justify-start"
        />
        <h1
          className={`text-white hover:text-[#0071bd]  text-[30px] max-lg:hidden sm:block overflow-hidden ${
            showOptions ? "max-sm:block" : "hidden"
          } transition-all duration-300 ease-in-out `}
        >
          Cryptoverse
        </h1>
      </Link>
      <button
        onClick={toggleOptions}
        className="min-[500px]:hidden w-full flex pl-5 items-center text-white p-2 focus:outline-none"
      >
        {" "}
        {showOptions ? <RxCross2 /> : <IoMenu />}
      </button>
      <div className="bg-[#001529] flex flex-col w-[90%] max-md:w-full py-4 gap-4 items-center ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-gray-200 hover:bg-[#0071bd] flex gap-2 items-center w-full pl-5 ${
              isActive ? "bg-[#0071bd]" : "bg-transparent"
            } p-2 rounded-md`
          }
          onClick={() => setShowOptions(false)}
        >
          <FaHome />
          <h1 className={!showOptions && "block max-[500px]:hidden"}>Home</h1>
        </NavLink>
        <NavLink
          to="/crypto-currencies"
          className={({ isActive }) =>
            `text-gray-200 hover:bg-[#0071bd] flex gap-2 items-center w-full pl-5  ${
              isActive ? "bg-[#0071bd]" : "bg-transparent"
            } p-2 rounded-md`
          }
          onClick={() => setShowOptions(false)}
        >
          <SiBitcoinsv />
          <h1 className={!showOptions && "block max-[500px]:hidden"}>
            Crypto Currencies
          </h1>
        </NavLink>
        <NavLink
          to="/exchanges"
          className={({ isActive }) =>
            `text-gray-200 hover:bg-[#0071bd] flex gap-2 items-center w-full pl-5 ${
              isActive ? "bg-[#0071bd]" : "bg-transparent"
            } p-2 rounded-md`
          }
          onClick={() => setShowOptions(false)}
        >
          <BsCurrencyExchange />
          <h1 className={!showOptions && "block max-[500px]:hidden"}>
            Exchanges
          </h1>
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            `text-gray-200 hover:bg-[#0071bd] flex gap-2 items-center w-full pl-5 ${
              isActive ? "bg-[#0071bd]" : "bg-transparent"
            } p-2 rounded-md max-md:justify-start  `
          }
          onClick={() => setShowOptions(false)}
        >
          <BiNews />
          <h1 className={!showOptions && "block max-[500px]:hidden"}>News</h1>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
