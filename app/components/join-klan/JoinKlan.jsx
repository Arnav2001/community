"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LightPlayStore from "@/public/assets/images/home_page/Light-playstore.svg";
import LightAppStore from "@/public/assets/images/home_page/Light-applestore.svg";
import DarkPlayStore from "@/public/assets/images/home_page/Dark-playstore.svg";
import DarkAppStore from "@/public/assets/images/home_page/Dark-applestore.svg";

const JoinKlan = () => {
  const [logoPlayActive, setLogoPlayActive] = useState(false);
  const [logoAppActive, setLogoAppActive] = useState(false);
  const handlePlayStoreEnter = () => {
    setLogoPlayActive(!logoPlayActive);
  };

  const handlePlayStoreLeave = () => {
    setLogoPlayActive(!logoPlayActive);
  };

  const handleAppStoreEnter = () => {
    setLogoAppActive(!logoAppActive);
  };

  const handleAppStoreLeave = () => {
    setLogoAppActive(!logoAppActive);
  };
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="page-heading mb-[-2px] mt-[20px] text-center text-[48px] sm:text-[65px] lg:text-[86px] xl:text-[96px]">
          JoIn our Klan
        </h1>
        <p className="content-neue sm:lead-[0px] text-center text-[16px] italic leading-[18px] text-blue-700 sm:text-[18px] lg:text-[20px] xl:text-[24px]">
          (Note: We use the word “Klan”
          <br className="sm:hidden" /> to replace “clan.”)
        </p>
      </div>
      <div className="relative flex h-[80px] w-auto justify-center">
        <img
          src="/assets/images/JOK_page/left-arrow.svg"
          className="absolute hidden sm:left-[10%] sm:block lg:left-[26%] lg:h-[98.82px] lg:w-[88.99px] xl:h-[108.82px] xl:w-[92.99px]"
          alt="left arrow"
        />
        <img
          src="/assets/images/JOK_page/center-arrow.svg"
          className="absolute top-[12%] h-[40px] w-[13px]  lg:h-[46.2px] lg:w-[14.26px] xl:right-[47%] xl:top-[30%] xl:h-[46.2px] xl:w-[14.26px]"
          alt="center arrow"
        />
        <img
          src="/assets/images/JOK_page/right-arrow.svg"
          className="absolute hidden sm:right-[10%] sm:block lg:right-[26%] lg:h-[98.82px] lg:w-[88.99px] xl:h-[108.82px] xl:w-[92.99px]"
          alt="right arrow"
        />
      </div>
      <div className="relative flex h-[70px] w-auto justify-center xl:mt-[95px]">
        <Link
          href="https://www.instagram.com/thekreatr?igsh=Ymdwenl2bmlvanI1"
          target="_blank"
          rel="noreferrer"
        >
          <div className="instagram-img absolute left-[10%] top-[-13%] h-[201.31px] w-[195.69px] rotate-[-6deg] rounded-[15px] border border-black p-[18px] shadow-md shadow-black  sm:left-[3%] sm:top-[70%]  sm:shadow-none sm:hover:shadow-md sm:hover:shadow-black lg:left-[18%] lg:top-[80%] lg:h-[242px] lg:w-[225px] lg:p-[25px] xl:left-[17%] xl:top-[-38%] xl:h-[272px] xl:w-[255px] xl:p-[30px]">
            <img
              src="/assets/images/JOK_page/instagram-JOK.svg"
              className="h-[77.33px] w-[77.33px] rotate-[8deg] xl:h-[101px] xl:w-[101px]"
              alt="instagram"
            />
            <p className="page-subhead mt-[18px] text-[20px] leading-[20px] lg:mt-[40px] xl:mt-[2.25rem] xl:text-[24px] xl:leading-[25px]">
              “Pop” goes our hearts when you leave one!
            </p>
          </div>
        </Link>
        <Link
          href="https://chat.whatsapp.com/KhEXrhzF4Oj4acJItXEipM"
          target="_blank"
          rel="noreferrer"
        >
          <div className="whatsapp-img absolute right-[20px] top-[225px] h-[201.31px] w-[195.69px] rotate-[6deg] rounded-[15px] border border-black p-[18px] shadow-md  shadow-black sm:left-[37%] sm:top-[-8%]  sm:shadow-none sm:hover:shadow-md sm:hover:shadow-black lg:left-[40%] lg:right-[41%] lg:top-[-20%] lg:h-[242px] lg:w-[225px] lg:p-[25px] xl:top-[-134%] xl:h-[272px] xl:w-[255px] xl:p-[30px]">
            <img
              src="/assets/images/JOK_page/whatsapp-JOK.svg"
              className="h-[85px] w-[85px] xl:h-[112px] xl:w-[112px]"
              alt="whatsapp"
            />
            <p className="page-subhead mt-[18px] text-[20px] leading-[20px] lg:mt-[40px] xl:my-[22px] xl:text-[24px] xl:leading-[25px]">
              The biggest green flag you will ever see.
            </p>
          </div>
        </Link>
        <Link
          href="https://www.linkedin.com/company/the-kreatr/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="linkdin-img absolute left-[10%] top-[456px] h-[201.31px] w-[195.69px] rotate-[-6deg] rounded-[15px] border border-black p-[18px] shadow-md shadow-black sm:left-[71%] sm:top-[70%]  sm:shadow-none sm:hover:shadow-md sm:hover:shadow-black lg:left-[64%] lg:top-[78%] lg:h-[242px] lg:w-[225px] lg:p-[25px] xl:right-[17%] xl:top-[-36%] xl:h-[272px] xl:w-[255px] xl:p-[30px]">
            <img
              src="/assets/images/JOK_page/linkdin-JOK.svg"
              className="h-[69px] w-[69px] rotate-[8deg] xl:h-[92px] xl:w-[92px]"
              alt="linkdin"
            />
            <p className="page-subhead mt-[26px] text-[20px] leading-[20px] lg:mt-[50px] xl:mt-[44px] xl:text-[24px] xl:leading-[25px]">
              For your professional needs!
            </p>
          </div>
        </Link>
      </div>
      <div className="relative mt-[635px] sm:mt-[174px] lg:mt-[226px] xl:mt-[160px]">
        <h1 className=" page-heading absolute right-[20%] top-[-18%] text-center text-[35px] sm:left-[20%] sm:top-[-25%] lg:right-[19%] lg:top-[-16%] lg:text-[55px] xl:right-[20%] xl:top-[-12%] xl:text-[64px]">
          WE CELEBRATE THE
        </h1>
        <h1 className="JOK-content page-heading rotate-[-1deg] text-center text-[48px] lg:text-[95px] xl:mt-[50px] xl:text-[110px] ">
          BEAUTY of CreatIon
        </h1>
        <h1 className="page-heading mt-[-18px] text-center text-[35px] leading-[28px] lg:mt-[-12px] lg:text-[55px] lg:leading-[0px] xl:mt-[-12px] xl:text-[64px]">
          {" "}
          In all Its
          <br className="block sm:hidden" /> wonderful forms
        </h1>
      </div>
      <div className="mt-10 hidden justify-center gap-x-5  sm:mb-[50px] sm:mt-[30px] sm:flex  lg:mb-[4rem] lg:mt-[4.25rem] xl:mb-[4.5rem] xl:mt-[6.25rem] ">
        <Link
          href="https://play.google.com/store/apps/details?id=com.kreatr"
          target="_blank"
          rel="noreferrer"
        >
          <div
            className={` flex cursor-pointer items-center rounded-full bg-black text-[1rem]  sm:h-[3.125rem] sm:w-[9.75rem] sm:p-2 md:h-[3.125rem] md:w-[9.75rem] md:p-2 md:px-1 md:py-2 lg:text-[1rem] lg:leading-4 xl:h-82 xl:w-230 xl:p-7 xl:text-20 
                    ${logoPlayActive ? "button-text border border-black bg-transparent text-black" : "career-btn"}`}
            onMouseEnter={handlePlayStoreEnter}
            onMouseLeave={handlePlayStoreLeave}
          >
            {logoPlayActive ? (
              <div>
                {/* <img src="/assets/images/Dark-playstore.svg" alt="" /> */}
                <Image
                  className="ml-[.875rem] sm:h-[1.875rem] sm:w-[1.5rem] md:h-[1.875rem] md:w-[1.5rem] xl:h-44.09 xl:w-38.72"
                  src={DarkPlayStore}
                  alt="Play store"
                />
              </div>
            ) : (
              <div>
                <Image
                  className="ml-[.875rem] sm:h-[1.875rem] sm:w-[1.5rem] md:h-[1.875rem] md:w-[1.5rem] xl:h-44.09 xl:w-38.72"
                  src={LightPlayStore}
                  alt="Play store"
                />
              </div>
            )}
            <p className="button-store ml-[22px] sm:text-[14px] sm:leading-4 md:leading-4 lg:text-[1rem] lg:leading-4 xl:text-20 xl:leading-5 ">
              Get it on Playstore
            </p>
          </div>
        </Link>
        <Link
          href="https://apps.apple.com/in/app/kreatr/id6474967284"
          target="_blank"
          rel="noreferrer"
        >
          <div
            className={` flex cursor-pointer items-center rounded-full bg-black  py-1 text-[1rem] sm:h-[3.125rem] sm:w-[9.75rem] sm:p-2 md:h-[3.125rem] md:w-[9.75rem]  lg:text-[1rem] lg:leading-4 xl:h-82 xl:w-230 xl:p-7 xl:text-20 xl:leading-6 
          ${
            logoAppActive
              ? "button-text border border-black bg-transparent text-black"
              : "career-btn "
          }`}
            onMouseEnter={handleAppStoreEnter}
            onMouseLeave={handleAppStoreLeave}
          >
            {logoAppActive ? (
              <Image
                src={DarkAppStore}
                className="ml-[.5rem] sm:h-[1.875rem] sm:w-[1.5rem] md:h-[1.875rem] md:w-[1.5rem] xl:h-44.09 xl:w-38.72 "
                alt="App store"
              />
            ) : (
              <Image
                src={LightAppStore}
                className="ml-[.5rem] sm:h-[1.875rem] sm:w-[1.5rem] md:h-[1.875rem] md:w-[1.5rem] xl:h-44.09 xl:w-38.72 "
                alt="App store"
              />
            )}
            <p
              className={`button-store sm:text-[14px] sm:leading-4 md:leading-4 lg:text-[1rem] lg:leading-4 xl:text-20 xl:leading-5 ${
                logoAppActive ? "ml-[.625rem]" : "ml-[.625rem] "
              } `}
            >
              Available on
              <br /> App Store
            </p>
          </div>
        </Link>
      </div>
      <div className="mb-[2.25rem] ml-[-12px] mt-[2.5rem] flex justify-center gap-x-4 sm:hidden">
        <Link href="https://play.google.com/store/apps/details?id=com.kreatr">
          <div className=" flex h-[50px] w-[140px] items-center rounded-full border border-black  text-[.875rem] font-medium leading-[14px] text-black">
            <Image
              className="ml-[.9375rem] h-[1.625rem] w-[1.4375rem]"
              src={DarkPlayStore}
              alt="Play store"
            />
            <p className="button-store mx-[10px] tracking-tight">
              Get it on <br />
              Playstore
            </p>
          </div>
        </Link>
        <Link href="https://apps.apple.com/in/app/kreatr/id6474967284">
          <div className="flex h-[50px] w-[140px] items-center rounded-full border border-black  text-[.875rem] font-medium leading-[14px] text-black">
            <Image
              src={DarkAppStore}
              className="ml-[.9375rem] h-[1.625rem] w-[1.4375rem]"
              alt="App store"
            />
            <p className="button-store mx-[10px] tracking-tight">
              Available on
              <br /> App Store
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default JoinKlan;
