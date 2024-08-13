"use client";

import React, { useState } from "react";
import { legalBarData } from "@/constants/constants";
import LegalPage1 from "./legal-page1/LegalPage1";
import LegalPage2 from "./legal-page2/LegalPage2";
import LegalPage3 from "./legal-page3/LegalPage3";
import LegalPage4 from "./legal-page4/LegalPage4";
import LegalPage5 from "./legal-page5/LegalPage5";

const LegalMainSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="container mx-auto">
      <div className=" mt-[34px] flex flex-col items-center justify-center sm:mt-[60px] lg:mt-[35px] xl:mx-[50px] xl:mt-[82px]">
        <h1 className="heading mb-[22px] text-[#2A2A2A]  text-[40px] sm:mb-[26px] sm:text-[74px] lg:mb-[30px] lg:text-[94px] xl:mb-[44px] xl:text-[110px]">
          legal
        </h1>
        <div className=" flex  w-full items-center justify-center">
          <div className="scrollbar-hide flex w-full gap-3 overflow-x-auto pt-4 lg:justify-center ">
            {legalBarData.map((item, index) => (
              <div
                className={
                  currentIndex === index
                    ? "content-neue flex cursor-pointer items-center   justify-center text-nowrap rounded-[5.625rem] border border-[#2A2A2A] bg-[#2A2A2A] px-[12px] py-[2.5px] text-[14px] text-[#FFFDEE]  sm:text-[16px] lg:h-[40px] lg:w-auto lg:px-[15px]"
                    : " content-neue flex cursor-pointer items-center   justify-center text-nowrap rounded-[5.625rem] border border-[#2A2A2A] px-[12px] py-[2.5px] text-[14px] text-[#2A2A2A]  sm:text-[16px] lg:h-[40px] lg:w-auto lg:px-[15px]"
                }
                key={index}
                onClick={() => handleClick(index)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="content-neue pb-10 pt-10  content-neue text-nonSelectedText  sm:mx-[50px]">
          {legalBarData[currentIndex] === "End User License Agreement" ? (
            <LegalPage1 />
          ) : legalBarData[currentIndex] === "Privacy Policy" ? (
            <LegalPage2 />
          ) : legalBarData[currentIndex] === "Refund and Cancellation" ? (
            <LegalPage3 />
          ) : legalBarData[currentIndex] === "Terms and Conditions" ? (
            <LegalPage4 />
          ) : (
            <LegalPage5 />
          )}
        </div>
      </div>
    </div>
  );
};

export default LegalMainSection;
