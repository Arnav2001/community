import React from "react";
import Image from "next/image";

const LeftGifSection = () => {
  return (
    <div className="relative col-span-3 flex  min-h-[100%] items-center sm:ml-0 lg:mr-[85px] lg:mt-[-150px] xl:mr-0 xl:mt-[-80px]">
      <div className="page-heading absolute hidden text-[50px] text-[#2A2A2A]  sm:left-[-50px] sm:top-[126px] sm:block sm:text-[74px] lg:left-[5%] lg:top-[22%] lg:text-[94px] xl:left-[2%] xl:top-[17%] xl:text-[110px]">
        <h1>Report a Pest</h1>
      </div>
      <div className="page-heading absolute left-[6%] top-[44%]  block text-[59px]  text-[#2A2A2A]  sm:hidden ">
        <h1>Report a Pest</h1>
      </div>
      <div className="sm:grid sm:grid-cols-5 lg:mt-[60px] lg:gap-10 xl:gap-12  ">
        <div className="content-neue col-span-2 hidden sm:ml-[-45px] sm:mt-[60px] sm:block lg:ml-[31px] lg:mt-[40px] xl:ml-[5.4%] xl:mt-[20%]">
          <p className=" contact-text text-[16px] leading-5 sm:text-[14px] lg:text-[18px] lg:leading-[22px] xl:text-[22px] xl:leading-[26px]">
            We consistently strive to make your experience better.
          </p>
        </div>
        <div className="sm:col-span-3 ">
          <Image
            className="h-[8.5625rem] w-[19.625rem] rounded-xl object-cover object-center sm:h-[130px] sm:w-[365px] lg:h-[171px] lg:w-[400px] xl:h-[191px] xl:w-[418px]"
            src="/community/assets/images/bug-report-page/bug-gif.gif"
            alt="form img"
            height={171}
            width={400}
            unoptimized
          />
        </div>
        <div className="content-neue mt-[50px] flex flex-col items-center justify-center sm:hidden ">
          <p className=" contact-text  text-center text-[16px] leading-5">
            We consistently strive to
            <br /> make your experience better.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftGifSection;
