import React from "react";
import Image from "next/image";


const HomePageLoader = () => {
  return (
    <div className="h-[100vh]" >
      <div className="mt-[400px] sm:mt-[500px] lg:mt-[200px] xl:mt-[400px]">
        <div className="relative flex justify-center">
          <Image
            src="/community/assets/images/new clock.svg"
            alt="clock image"
            height={157}
            width={128}
            className="absolute lg:left-[27%] lg:top-[-204%] sm:top-[-100%] sm:left-[28%] top-[-260%] left-[11%] lg:h-[157px] lg:w-[128px] h-[92px] w-[75px] z-20"
          />
          <h2 className="content-neue-medium text-center lg:text-[40px] text-[20px] leading-[44px]">
            Hey Creative,
          </h2>
          <Image
            src="/community/assets/images/weird boy.svg"
            alt="bulb image"
            height={135}
            width={110}
            className="absolute lg:right-[34%] lg:top-[-101%] sm:top-[-100%] sm:right-[30%] top-[-116%] right-[11%] lg:h-[135px] lg:w-[110px] h-[82px] w-[67px] z-20"
          />
        </div>
        <div className="relative mt-[40px] flex justify-center">
          <Image
            src="/community/assets/images/pantone.svg"
            alt="clock image"
            height={79}
            width={148}
            sizes="100vw"
            className="absolute lg:left-[27%] sm:top-[150%] sm:left-[18%] lg:top-[108%] top-[136%] left-[5%] lg:h-[79px] lg:w-[148px] h-[56px] w-[114px] z-20"
          />
          <h2 className="content-neue-medium text-center lg:text-[40px] text-[20px] leading-[24px] lg:leading-[44px]">
            Welcome to India’s First<br className="sm:hidden" /> and Most Happening
            <br />{" "}
            <span className="border-b border-[#0000D9]">
              Creative Community!
            </span>
          </h2>
          <Image
            src="/community/assets/images/Welo.svg"
            alt="bulb image"
            height={132}
            width={139}
            className="absolute lg:right-[27%] sm:right-[24%] lg:top-[78%] lg:h-[132px] top-[150%] right-[16%] lg:w-[139px] h-[102px] w-[97px] z-20"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePageLoader;
