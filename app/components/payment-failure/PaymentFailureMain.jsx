"use client";
import Image from "next/image";
import React from "react";

const PaymentFailureMain = () => {
  return (
    <div className="mb-[50px] mt-[80px] flex h-full w-full flex-col items-center justify-center sm:mb-0 sm:mt-[50px] lg:mt-[60px] xl:mt-[110px]">
      <Image
        src={"/community/assets/images/payment/failure-img.svg"}
        alt="image"
        width={130}
        height={124.06}
        className="flex h-[52px] w-[52px] flex-col items-center justify-center sm:h-[80px] sm:w-[80px] lg:h-[110px] lg:w-[110px] xl:h-[130px] xl:w-[124px] "
      />
      <h1 className="page-subhead mt-[25px] text-[20px] font-[800] text-[#E41E4F] sm:mt-[30px] sm:text-[26px] lg:mt-14 lg:text-[32px] lg:leading-[38px] xl:text-[40px] xl:leading-[40px]">
        Oops! Something went wrong.
      </h1>
      <h1
        className={
          "content-neue-medium mt-[5px] text-center text-[14px] text-[#2A2A2A]  sm:mt-[5px] sm:text-[18px] lg:mt-[8px] lg:text-[20px] xl:mt-[10px] xl:text-[28px]"
        }
      >{`Let’s give it another shot!`}</h1>
      <div className="mb-[50px] mt-[30px] flex h-[30px] w-[114px] cursor-pointer items-center justify-center rounded-[30px] bg-[#2A2A2A] text-[12px] text-[#FFFDEE] sm:mb-[80px] sm:mt-[50px] sm:h-[40px] sm:w-[170px] sm:text-[16px] sm:hover:border sm:hover:border-[#2A2A2A] sm:hover:bg-transparent sm:hover:text-[#2A2A2A] lg:h-[50px] lg:w-[200px] lg:text-[18px] xl:h-[67px] xl:w-[265px] xl:text-[24px]">
        Proceed to Pay
      </div>
    </div>
  );
};

export default PaymentFailureMain;
