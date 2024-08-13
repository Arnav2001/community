"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const CareersMainContent = ({ careerData }) => {
  console.log(careerData);
  // Check if careerData is defined and has all required fields
  const isDataAvailable =
    careerData &&
    careerData.title &&
    careerData.type &&
    careerData.location &&
    careerData.description &&
    careerData.responsibilities &&
    careerData.qualifications;

  if (!isDataAvailable) {
    return <div>No Data Available</div>;
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="relative mb-[46px] mt-[34px] sm:mt-[60px] lg:mb-[54px] lg:mt-[35px] xl:mb-[64px]  xl:mt-[82px]">
          <h1 className="page-heading text-[40px] text-[#2A2A2A] sm:text-[74px] lg:text-[94px] xl:text-[110px]">
            Careers
          </h1>
          <div className="absolute right-[-54%] top-[6%] rotate-[10deg] sm:right-[-66px] sm:top-[30px] lg:right-[-98px] lg:top-[24px] xl:right-[-35%] xl:top-[22%]">
            <Image
              className="h-[66.47px] w-[66.47px] sm:h-[76px] sm:w-[76px] lg:h-[110px] lg:w-[110px] xl:h-[120px] xl:w-[120px]"
              src="/community/assets/images/careers_page/careers-img.svg"
              alt="careers image"
              height={0}
              width={0}
            />
          </div>
        </div>
      </div>
      <div className="mx-[25px] mb-[10px] mt-[14px] sm:mx-[80px] sm:mb-[50px] sm:mt-[80px] lg:mx-[100px] lg:mb-0 lg:mt-0">
        <div className="flex items-center sm:mb-[20px] lg:mb-[24px] xl:mb-[24px]">
          <h4 className="content-neue-medium mr-3 mt-[-2px] text-[18px] capitalize sm:mr-[18px] sm:mt-[-4px] sm:text-[24px] lg:mt-[-6px] lg:text-[28px] xl:text-[33px]">
            {careerData.title}
          </h4>
          <div className="content-neue mr-[8px] flex h-[17px] w-[53px] items-center justify-center rounded-[24px] border border-[#2A2A2A] text-center text-[10px] sm:mr-[15px] sm:h-[22px] sm:w-[70px] sm:text-[14px] lg:h-[30px] lg:w-[96px] lg:text-[16px] xl:h-[36px] xl:w-[95px] xl:text-[19px]">
            {careerData.type}
          </div>
          <div className="content-neue flex h-[17px] w-[53px] items-center justify-center rounded-[24px] border border-[#2A2A2A] text-center text-[10px] sm:h-[22px] sm:w-[70px] sm:text-[14px] lg:h-[30px] lg:w-[96px] lg:text-[16px] xl:h-[36px] xl:w-[95px] xl:text-[19px]">
            {careerData.location}
          </div>
        </div>
        <div className="mt-[10px] sm:mb-4  sm:mt-0">
          <p className="content-neue whitespace-pre-line text-[16px] sm:mb-[20px] sm:text-[16px] lg:mb-[24px] lg:text-[18px] lg:leading-[22px] xl:mb-[24px] xl:text-[22px] xl:leading-[26px]">
            {careerData.description}
          </p>

          <p className="content-neue-medium mt-[10px] text-[16px] sm:mb-[20px] sm:mt-0 sm:text-[18px] lg:mb-[24px] lg:text-[22px] xl:mb-[24px] xl:text-[28px]">
            Responsibilities
          </p>

          <div>
            <p className="content-neue ml-5 mt-[8px] list-disc whitespace-pre-line text-[16px] sm:mb-[20px] sm:ml-5 sm:mt-0 sm:text-[16px] lg:mb-[24px] lg:ml-10 lg:text-[18px] lg:leading-[22px] xl:mb-[24px] xl:text-[22px] xl:leading-[26px]">
              {careerData.responsibilities}
            </p>
          </div>

          <p className="content-neue-medium mt-[10px] text-[16px] sm:mb-[20px] sm:mt-0 sm:text-[18px] lg:mb-[24px] lg:text-[22px] xl:mb-[24px] xl:text-[28px]">
            Qualifications
          </p>

          <div>
            <p className="content-neue ml-5 mt-[8px] list-disc whitespace-pre-line text-[16px] sm:ml-5 sm:mt-0 sm:text-[16px] lg:ml-10 lg:text-[18px] lg:leading-[22px] xl:text-[22px] xl:leading-[26px]">
              {careerData.qualifications}
            </p>
          </div>
        </div>
        <div className="mt-[24px] flex justify-center sm:mt-[50px] lg:mb-[24px] lg:mt-[44px]">
          <Link
            href={careerData.url}
            target="_blank"
            rel="noreferrer"
            className=" career-btn content-neue-medium flex h-[36px] w-[128px] cursor-pointer items-center justify-center rounded-[24px] bg-[#2A2A2A] text-center text-[15px] sm:h-[38px] sm:w-[220px]  sm:text-[18px] sm:hover:border sm:hover:border-[#2A2A2A] sm:hover:bg-transparent sm:hover:text-[#2A2A2A] lg:h-[42px] lg:w-[280px]  lg:text-[20px]"
          >
            Apply Now
          </Link>
        </div>
        {/* <div className="content-neue mt-[24px] mb-[40px] text-center text-[14px] leading-[18px] sm:mb-[50px] sm:mt-[30px] sm:text-[16px] lg:text-[20px] xl:text-[28px]">
          <p>
            Can’t find any suitable vacancy? Drop us a line{" "}
            <Link className="text-blue-700" href="mailto:hr@thekreatr.com">
              hr@thekreatr.com
            </Link>{" "}
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default CareersMainContent;
