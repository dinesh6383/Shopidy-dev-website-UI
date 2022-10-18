import React, { useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { BiArrowBack } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import logo from "../Images/logo-shopify.svg";
import darkLogo from "../Images/logo-dark.svg";
import { insidePopUp } from "../Data/ShopifyData";
const PopUpMenu = ({ dark, setPopUp, setDark }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`w-[100%] border-b-[1px] ${
          dark ? "border-gray-300" : "border-slate-200"
        } flex justify-between items-center py-3 md:py-4 px-5 text-2xl ${
          dark ? "text-gray-300" : "text-gray-500"
        }`}
      >
        <div
          className="cursor-pointer"
          onClick={() => setPopUp((prevValue) => !prevValue)}
        >
          <BiArrowBack />
        </div>
        <div>
          <img src={dark ? darkLogo : logo} />
        </div>
      </div>
      <div
        className={`border-b-[1px] relative flex  justify-center items-center py-3 ${
          dark ? "border-gray-300" : "border-slate-200"
        }`}
      >
        <div
          className={`w-[95%] ${
            dark ? "bg-slate-800 text-white" : "bg-gray-100 text-black"
          } cursor-pointer px-5 py-2 ${
            open ? "rounded-t-md" : "rounded-md"
          } flex justify-between items-center `}
          onClick={() => {
            setOpen((prevValue) => !prevValue);
          }}
        >
          <div className="text-sm font-bold">Menu</div>
          <div className="text-lg font-bold">
            <FiChevronDown />
          </div>
        </div>
        <div
          className={`${
            open ? "block" : "hidden"
          } w-[95%] h-[max-content]   rounded-b-md absolute top-12 ${
            dark ? "bg-slate-800 text-white" : "bg-gray-100 text-gray-500"
          }`}
        >
          {insidePopUp.map((val, idx) => {
            return (
              <div className=" m-5 text-sm" key={idx}>
                {val}
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-5">
        <div
          className={`text-sm ${dark ? "text-gray-300" : "text-gray-500"} mt-3`}
        >
          Log in
        </div>
        <div
          className={`text-sm ${dark ? "text-gray-300" : "text-gray-500"} mt-3`}
        >
          Sign up
        </div>
        <div
          onClick={() => setDark((prevValue) => !prevValue)}
          className="text-2xl text-gray-500 mt-3"
        >
          {dark ? (
            <HiSun
              style={{
                color: "#EBAF26",
              }}
            />
          ) : (
            <HiMoon />
          )}
        </div>
      </div>
    </>
  );
};

export default PopUpMenu;
