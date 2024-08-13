"use client";
import Image from "next/image";
import React from "react";

const PaymentSuccessMain = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-[40px] flex flex-col items-center justify-center sm:mt-[44px] lg:mt-[60px] xl:mt-[72px]">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/community/assets/images/payment/green-tick.svg"
            className="h-[46px] w-[49px] sm:h-[102px] sm:w-[98px]"
            height={102}
            width={98}
          />
          <h2 className="page-subhead text-[16px] text-[#49A549] sm:text-[22px] lg:text-[32px] xl:text-[40px]">
            Ticket payment successful
          </h2>
        </div>
        <div className="mb-[30px] mt-[24px] flex flex-col items-center justify-center sm:mb-[34px] sm:mt-[28px] lg:mb-[46px] lg:mt-[32px] xl:mb-[52px] xl:mt-[44px] ">
          <Image
            src="/community/assets/images/payment/ticket img.svg"
            height={122}
            width={100}
            className="h-[310px] w-[280px] sm:h-[400px] sm:w-[380px] lg:h-[560px] lg:w-[530px] xl:h-[692px] xl:w-[612px]"
          />
          <div className="absolute">
            <h2 className="page-subhead text-center text-[16px] leading-[17px] text-[#2A2A2A] sm:text-[22px] sm:leading-[32px] lg:text-[32px] lg:leading-[36px] xl:text-[40px] xl:leading-[40px]">
              Design Thinking Workshop-
              <br />
              Extended Version
            </h2>
            <div className="content-neue-medium mt-[20px] flex flex-col items-center justify-center gap-[8px] text-[12px] text-[#2A2A2A] sm:mt-[24px] sm:text-[16px] lg:text-[20px] xl:text-[30px]">
              <h3>Sat 12 Jan, 2024</h3>
              <h3>10:00 AM</h3>
              <h3>Slay Coffee, Koramangala</h3>
            </div>
            <h4 className="content-neue mt-[20px] text-center text-[14px] text-[rgba(42,42,42,0.4)] sm:text-[18px] lg:text-[20px] xl:text-[24px]">
              The ticket is sent to aava@thekreatr.com
            </h4>
            <h2 className="page-subhead mt-[24px] text-center text-[16px] leading-[17px] text-[#2A2A2A] sm:text-[22px] sm:leading-[32px] lg:text-[32px] lg:leading-[36px] xl:text-[40px] xl:leading-[40px]">
              Booking ID : 89DJNS00SDW
            </h2>
            <div className="items-between flex justify-center">
              <div className="content-neue-medium mt-[24px] flex items-center justify-center gap-[100px] text-[10px] sm:text-[18px] lg:gap-[200px] lg:text-[20px] xl:gap-[260px] xl:text-[24px]">
                <h4>Total Amount</h4>
                <h4>INR 1499.00</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessMain;
