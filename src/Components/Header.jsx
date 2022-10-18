import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { HiMoon, HiSun } from "react-icons/hi";
import logo from "../Images/logo-shopify.svg";
import darkLogo from "../Images/logo-dark.svg";
import { ImSearch } from "react-icons/im";
import { navlinks } from "../Data/ShopifyData";
import PopUpMenu from "./PopUpMenu";

const Header = ({ dark, setDark, setFixed }) => {
  const [popUp, setPopUp] = useState(false);
  return (
    <>
      <div>
        <header
          className={`flex justify-between items-center fixed top-0 right-0 left-0 py-3 md:py-4 px-5  z-10 ${
            dark ? "bg-black" : "bg-white"
          }`}
        >
          <nav className="flex items-center justify-center cursor-pointer">
            <div
              onClick={() => setPopUp((prevValue) => !prevValue)}
              className={`text-2xl mr-5 ${
                dark ? "text-gray-300" : "text-gray-500"
              } hidden lg:block`}
            >
              <FiMenu />
            </div>
            <img
              src={dark ? darkLogo : logo}
              alt="shopify-logo"
              className="w-16 h-6 object-fill"
            />
            <ul
              className={`flex items-center lg:hidden gap-7 text-sm ${
                dark ? "text-slate-200" : "text-gray-800"
              } filter ml-10`}
            >
              {navlinks.map((link, index) => {
                return <li key={index}>{link}</li>;
              })}
            </ul>
          </nav>
          <div className="flex justify-center items-center mr-28 lg:hidden">
            <div
              className={`flex justify-around items-center w-[125px] h-8 rounded-lg cursor-pointer  border-2 ${
                dark
                  ? "border-blue-500 bg-gray-700"
                  : "border-gray-400 bg-gray-200"
              }`}
              onClick={() => {
                setFixed((prevValue) => !prevValue);
              }}
            >
              <div className={`${dark ? "text-gray-300" : "text-slate-700"}`}>
                <ImSearch />
              </div>
              <div>
                <p
                  className={`${
                    dark ? "text-white" : "text-slate-500"
                  } text-sm`}
                >
                  Search
                </p>
              </div>
              <div
                className={`w-6 h-6  flex justify-center items-center text-sm rounded-md border-2 ${
                  dark
                    ? "border-blue-500 text-gray-300"
                    : "border-gray-400 text-black"
                } `}
              >
                /
              </div>
            </div>
            <div className="ml-5 flex items-center justify-center">
              <div
                className="text-2xl mr-3 cursor-pointer"
                onClick={() => setDark((prevValue) => !prevValue)}
              >
                {dark ? (
                  <HiSun
                    style={{
                      color: "#EBAF26",
                    }}
                  />
                ) : (
                  <HiMoon style={{ color: "gray" }} />
                )}
              </div>
              <p
                className={`text-sm ${
                  dark ? "text-slate-200" : "text-gray-800"
                }`}
              >
                Log in
              </p>
              <p
                className={`text-sm ml-3 ${
                  dark ? "text-slate-200" : "text-gray-800"
                }`}
              >
                Sign up
              </p>
            </div>
          </div>
          <div
            className={`hidden lg:block mr-5 ${
              dark ? "text-gray-300" : "text-gray-500"
            } my-auto text-lg cursor-pointer`}
            onClick={() => {
              setFixed((prevValue) => !prevValue);
            }}
          >
            <ImSearch />
          </div>
        </header>
        <div
          className={`w-[100%] h-[100vh] fixed hidden top-0  lg:block z-10 transition-all ease-in-out duration-500 ${
            dark ? "bg-black" : "bg-white"
          } ${popUp ? "translate-x-0" : "-translate-x-[100%]"}`}
        >
          <PopUpMenu dark={dark} setPopUp={setPopUp} setDark={setDark} />
        </div>
      </div>
    </>
  );
};

export default Header;
