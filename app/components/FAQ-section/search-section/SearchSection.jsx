import React from "react";
import Image from "next/image";

const SearchSection = () => {
  return (
    <div>
      <div className="mb-[50px] mt-[10px] flex flex-col items-center justify-center sm:mb-0 sm:mt-[60px] lg:mb-[3.5rem] lg:mt-[54px] xl:mb-[7rem] xl:mt-[115px]">
        <h1 className="page-heading relative mt-[45px] text-center text-[40px] leading-4 text-[#2A2A2A] sm:mb-[45px] sm:mt-[45px] sm:text-[73px] lg:text-[94px] xl:text-[110px]">
          Frequently Asked
          <span className="block sm:hidden">
            <br />
          </span>{" "}
          QuestIons
          <span className="absolute bottom-[-90%] right-[22%] sm:right-[-10%] sm:top-[150%] lg:right-[-12%] lg:top-[168%] xl:right-[-7%] xl:top-[246%]">
            <Image
              className="h-[41.17px] w-[109.81px] sm:h-[55px] sm:w-[160px] lg:h-[65px] lg:w-[185px] xl:h-[72.27px] xl:w-[192.74px]"
              src="/assets/images/FAQ_page/FAQ-sticker.svg"
              alt="FAQ Sticker"
              height={0}
              width={0}
            />
          </span>
        </h1>
      </div>
    </div>
  );
};

export default SearchSection;
