import React from "react";
import { footerData, subFooter } from "../Data/ShopifyData";

const Footer = ({ dark }) => {
  return (
    <>
      <div className="h-[100%] flex flex-col items-center justify-center p-4">
        <div
          className={`w-[100%] h-[100%] rounded-t-lg px-20 sm:px-0 py-16   flex justify-center items-center ${
            dark ? "bg-slate-900" : "bg-gray-200"
          } xsm:px-3`}
        >
          <div className="grid grid-cols-6 gap-16 lg:grid-cols-3 sm:grid-cols-2">
            {footerData.map((data, index) => {
              return (
                <div key={index}>
                  <div
                    className={`font-bold ${
                      dark ? "text-white" : "text-black"
                    }`}
                  >
                    {data.head}
                  </div>
                  <div>
                    {data?.sub?.map((data, idx) => {
                      return (
                        <div
                          key={idx}
                          className={`text-sm mt-2 ${
                            dark ? "text-gray-300" : "text-gray-500"
                          }`}
                        >
                          {data}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={`w-[100%] rounded-b-lg ${
            dark ? "bg-gray-800" : "bg-gray-100"
          } flex items-center justify-start px-20 py-5 sm:px-0 `}
        >
          <div className="flex flex-wrap sm:justify-center">
            {subFooter.map((data, idx) => {
              return (
                <div
                  className="ml-5 text-gray-500 text-sm font-bold sm:m-2"
                  key={idx}
                >
                  {data}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
