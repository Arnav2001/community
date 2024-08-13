"use client";

import React, { useState } from "react";
import Image from "next/image";

const ProceedCancelBtn = ({ onProceed, onCancel }) => {
  const [showBox, setShowBox] = useState(true); // State to manage visibility of the box

  const customStyles = {
    backgroundColor: "rgba(255, 138, 179, 0.26)",
    display: showBox ? "block" : "none", // Conditionally render based on showBox state
  };

  const handleClose = () => {
    setShowBox(false); // Update state to hide the box
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="my-[44px] h-[240px] w-[250px] rounded-[16px] border border-[#FF8AB3] backdrop-blur-2xl sm:my-[60px] sm:h-[290px] sm:w-[340px] lg:my-[90px]  lg:h-[320px] lg:w-[400px] xl:my-[100px] xl:h-[390px] xl:w-[490px]"
        style={customStyles}
      >
        <div className="relative flex h-[100px] items-center ">
          <div className="absolute left-[22%] top-[-39%] sm:left-[24%] sm:top-[-54%] lg:left-[24%] lg:top-[-60%] xl:left-[24%] xl:top-[-72%]">
            <Image
              src="/assets/images/events_page/cat pop up-01.svg"
              className="h-[120px] w-[140px] sm:h-[160px] sm:w-[180pxpx] lg:h-[180px] lg:w-[200px] xl:h-[230px] xl:w-[239px] "
              alt="cat image"
              height={20}
              width={20}
            />
          </div>
          <div
            className="absolute right-[8%] top-[26%] cursor-pointer"
            onClick={handleClose}
          >
            {/* Added onClick event handler to close the box */}
            <Image
              src="/assets/images/events_page/close-btn.svg"
              alt="close button"
              className="h-[18px] w-[18px] sm:h-[20px] sm:w-[20px] lg:h-[26px] lg:w-[26px] xl:h-[32px] xl:w-[32px]"
              height={10}
              width={10}
            />
          </div>
        </div>
        <h3 className="content-neue px-[5px] text-center text-[14px] leading-[20px] sm:mt-[20px] sm:px-[25px] sm:text-[16px] lg:mt-[40px] lg:px-[30px] lg:text-[18px] lg:leading-[22px] xl:mt-[80px] xl:text-[22px] xl:leading-[26px]">
          Hold up! Leaving now means starting over. Do you want to proceed?
        </h3>
        <div className="mt-[14px] flex w-full items-center justify-center sm:mt-[24px]">
          <div className="content-neue flex w-[50%] flex-col items-center justify-center gap-[10px] text-[12px] sm:gap-[17px] sm:text-[14px] lg:text-[14px] xl:text-[16px]">
            <div
              className="cursor-pointer rounded-[21px] border border-[#2A2A2A] bg-transparent px-[25px] py-[4px] text-[#2A2A2A] sm:px-[31px] sm:py-[6px]"
              onClick={() => {
                handleClose();
                onProceed();
              }}
            >
              Yes, I’m sure
            </div>
            <div
              className="cursor-pointer rounded-[21px] bg-[#2A2A2A] px-[14px] py-[4px] text-[#FFFDEE] sm:px-[18px] sm:py-[6px] "
              onClick={() => {
                handleClose();
                onCancel(); // Call onCancel when "No, keep me here" is clicked
              }}
            >
              No, keep me here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProceedCancelBtn;
