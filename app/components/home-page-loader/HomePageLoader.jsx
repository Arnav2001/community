import React from "react";
import Image from "next/image";

const HomePageLoader = () => {
  return (
    <div className="h-[100vh]">
      <div className="mt-[400px] sm:mt-[500px] lg:mt-[200px] xl:mt-[400px]">
        <div className="relative flex justify-center">
          <Image
            src="/assets/images/new clock.svg"
            alt="clock image"
            height={157}
            loading="eager"
            width={128}
            className="absolute left-[11%] top-[-260%] z-20 h-[92px] w-[75px] sm:left-[28%] sm:top-[-100%] lg:left-[27%] lg:top-[-204%] lg:h-[157px] lg:w-[128px]"
          />
          <h2 className="content-neue-medium text-center text-[20px] leading-[44px] lg:text-[40px]">
            Hey Creative,
          </h2>
          <Image
            src="/assets/images/weird boy.svg"
            alt="bulb image"
            loading="eager"
            height={135}
            width={110}
            className="absolute right-[11%] top-[-116%] z-20 h-[82px] w-[67px] sm:right-[30%] sm:top-[-100%] lg:right-[34%] lg:top-[-101%] lg:h-[135px] lg:w-[110px]"
          />
        </div>
        <div className="relative mt-[40px] flex justify-center">
          <Image
            src="/assets/images/pantone.svg"
            alt="clock image"
            loading="eager"
            height={79}
            width={148}
            sizes="100vw"
            className="absolute left-[5%] top-[136%] z-20 h-[56px] w-[114px] sm:left-[18%] sm:top-[150%] lg:left-[27%] lg:top-[108%] lg:h-[79px] lg:w-[148px]"
          />
          <h2 className="content-neue-medium text-center text-[20px] leading-[24px] lg:text-[40px] lg:leading-[44px]">
            Welcome to India’s First
            <br className="sm:hidden" /> and Most Happening
            <br />{" "}
            <span className="border-b border-[#0000D9]">
              Creative Community!
            </span>
          </h2>
          <Image
            src="/assets/images/Welo.svg"
            alt="bulb image"
            loading="eager"
            height={132}
            width={139}
            className="absolute right-[16%] top-[150%] z-20 h-[102px] w-[97px] sm:right-[24%] lg:right-[27%] lg:top-[78%] lg:h-[132px] lg:w-[139px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePageLoader;
