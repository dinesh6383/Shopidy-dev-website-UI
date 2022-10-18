import React from "react";
import { extras } from "../Data/ShopifyData";
import { AiOutlineArrowRight } from "react-icons/ai";

const Extras = ({ dark }) => {
  return (
    <div className="h-[100%] flex justify-center items-center py-8 px-20 sm:px-4 md:px-4">
      <div className=" w-[90%] grid grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 sm:w-[100%] md:w-[100%]">
        {extras.map((data, idx) => {
          return (
            <div
              key={idx}
              className={`flex flex-col justify-center items-start rounded-lg  h-[170px] px-5 cursor-pointer ${
                !dark &&
                "shadow-sm shadow-slate-400 hover:shadow-lg hover:shadow-slate-400"
              } ${
                data.head
                  ? dark
                    ? "bg-black border-2 border-violet-400"
                    : "bg-blue-100/75"
                  : dark
                  ? "bg-slate-900"
                  : "bg-gray-100"
              }
              }`}
            >
              <div className="mt-2">
                <img src={data.img} alt="extras-image" />
              </div>
              <div>
                <div
                  className={`mt-2 font-semibold flex items-center ${
                    data.head ? "text-xl" : "text-md"
                  } ${dark ? "text-white" : "text-black"}`}
                >
                  {data.title}
                  {!data.head && (
                    <AiOutlineArrowRight style={{ marginLeft: "5px" }} />
                  )}
                </div>
                <div
                  className={`mt-2 text-sm ${
                    dark ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {data.para}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Extras;
