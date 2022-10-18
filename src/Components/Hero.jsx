import React from "react";
import heroImg from "../Images/hero-image.webp";
import heroImgDark from "../Images/hero-img-dark.png";
import bitOne from "../Images/bit-one.png";
import bitTwo from "../Images/bit-two.png";
import bitThree from "../Images/bit-three.png";
import SplitImages from "./SplitImages";
import { heroData, heroSub1, heroSub2 } from "../Data/ShopifyData";

const Hero = ({ dark }) => {
  return (
    <>
      <div className="w-[100%] flex lg:flex-col  mt-14 lg:mt-12 sm:mt-0">
        <div className=" w-[50%] lg:w-[100%] h-[100%] flex justify-center items-center pt-28 pb-10 lg:pt-0">
          <div className="w-[85%] lg:w-[100%]">
            <div className="hidden lg:block">
              <SplitImages source={bitOne} />
            </div>
            <div className="lg:mt-8">
              <div
                className={`text-5xl px-10 sm:px-3 xsm:px-3 font-extrabold lg:text-4xl md:text-3xl xsm:text-2xl ${
                  dark ? "text-white" : "text-black"
                } `}
              >
                <h1>{heroData.title1}</h1>
                <h1 className="py-2">{heroData.title2}</h1>
              </div>
              <div
                className={`px-10 sm:px-3 xsm:px-3 mt-8 text-lg  ${
                  dark ? "text-gray-300" : "text-gray-500"
                }`}
              >
                <p>{heroData.para}</p>
              </div>
            </div>
            <div className="hidden lg:block my-5">
              <SplitImages source={bitTwo} />
            </div>
            {heroSub1.map((val, idx) => {
              return (
                <div className="mt-8 px-10 sm:px-3 xsm:px-3" key={idx}>
                  <div
                    className={`text-xl font-bold ${
                      dark ? "text-white" : "text-black"
                    }`}
                  >
                    {val.title}
                  </div>
                  <div
                    className={`mt-8 text-base ${
                      dark ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {val.para}
                  </div>
                </div>
              );
            })}
            <div className="mt-8 px-10 sm:px-3 xsm:px-3">
              <div
                className={`text-xl font-bold ${
                  dark ? "text-white" : "text-black"
                } `}
              >
                Start Building
              </div>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-1 gap-5">
                {heroSub2.map((val, idx) => {
                  return (
                    <div
                      key={idx}
                      className={`flex justify-start items-center rounded ${
                        dark
                          ? "bg-slate-900"
                          : " bg-gray-100 cursor-pointer shadow-sm shadow-slate-400 hover:shadow-lg hover:shadow-slate-400"
                      } p-3`}
                    >
                      <div>
                        <img src={val.img} alt="build-imgs" />
                      </div>
                      <div
                        className={`ml-5 font-bold text-lg ${
                          dark ? "text-white" : "text-black"
                        }`}
                      >
                        {val.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="hidden lg:block mt-5">
              <SplitImages source={bitThree} />
            </div>
          </div>
        </div>
        <div className="w-[50%] lg:w-[100%] relative lg:hidden">
          <img
            src={dark ? heroImgDark : heroImg}
            className="w-[100%] h-[160vh] absolute right-[0px]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
