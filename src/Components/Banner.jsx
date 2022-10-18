import React from "react";
import { bannerData, bannerHead, bannerBox } from "../Data/ShopifyData";

const Banner = ({ dark }) => {
  return (
    <>
      <div className="flex items-center justify-center h-[100%]">
        <div
          className={`flex lg:flex-col justify-center items-center w-[95%] h-[100%] rounded-xl ${
            dark ? "bg-black border-2 border-green-400" : "bg-emerald-100"
          } py-10 lg:p-10 xsm:p-5`}
        >
          <div className="flex justify-center flex-col w-[45%] h-[60vh] lg:w-[100%] pl-10 lg:pl-0">
            <div
              className={`text-3xl font-semibold ${
                dark ? "text-white" : "text-black"
              } `}
            >
              {bannerHead}
            </div>
            <div>
              {bannerData.map((data, idx) => {
                return (
                  <div key={idx}>
                    <div
                      className={`mt-8 mb-5 text-lg font-bold ${
                        dark ? "text-white" : "text-black"
                      }`}
                    >
                      {data.title}
                    </div>
                    <div
                      className={`${dark ? "text-gray-300" : "text-gray-500"}`}
                    >
                      {data.para}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-[45%] h-[60vh] lg:w-[100%] relative ">
            <div
              className={`w-[25vw] lg:w-[90%] xsm:w-[100%] h-[90%] absolute right-10 lg:right-5 sm:right-5 xsm:right-0 top-5 border-2 border-slate-800 flex flex-col justify-evenly items-center box-shadow ${
                dark ? "bg-slate-900 rounded-lg" : "bg-slate-100"
              }`}
            >
              {bannerBox.map((data, idx) => {
                return (
                  <div className="flex items-center w-[70%]" key={idx}>
                    <div className="mr-5">
                      <img src={data.img} />
                    </div>
                    <div>
                      <div
                        className={`font-bold ${
                          dark ? "text-white" : "text-black"
                        }`}
                      >
                        {data.name}
                      </div>
                      {data.para && (
                        <div
                          className={`text-sm ${
                            dark ? "text-gray-300" : "text-gray-500"
                          }`}
                        >
                          {data.para}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
