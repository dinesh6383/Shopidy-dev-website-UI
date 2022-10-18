import React from "react";
import { ImSearch } from "react-icons/im";

const SearchBar = ({ dark }) => {
  return (
    <div
      className={`flex justify-start items-center mt-28 w-[45vw] lg:w-[80vw] md:w-[90vw] h-[8%] rounded-lg ${
        dark ? "bg-slate-900 border-gray-700" : "bg-white border-gray-200"
      } border-4 `}
    >
      <div
        className={`mx-3 text-xl ${dark ? "text-gray-50" : "text-gray-500"}`}
      >
        <ImSearch />
      </div>
      <div>
        <input
          placeholder="Search"
          className={` ${
            dark && "bg-slate-700 text-white"
          } border-2 p-3 text-lg border-black w-[32vw] lg:w-[54vw] md:w-[59vw] sm:w-[52vw] xsm:w-[43vw] rounded-lg  h-[35px]`}
        ></input>
      </div>
      <div
        className={`rounded-lg  text-center  p-2 mx-3 text-sm ${
          dark ? "bg-slate-700 text-white" : "text-gray-500 bg-gray-100"
        }`}
      >
        2022-10 <span className={`${dark && "text-green-400"}`}>latest</span>
      </div>
    </div>
  );
};

export default SearchBar;
