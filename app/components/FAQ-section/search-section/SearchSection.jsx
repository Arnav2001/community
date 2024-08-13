import React from "react";
import Image from "next/image";

const SearchSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center sm:mb-0 mb-[50px] justify-center mt-[10px] sm:mt-[60px] lg:mt-[54px] lg:mb-[3.5rem] xl:mt-[115px] xl:mb-[7rem]">
        <h1 className="page-heading leading-4 sm:mt-[45px] sm:mb-[45px] mt-[45px] relative text-center sm:text-[73px] lg:text-[94px] xl:text-[110px] text-[#2A2A2A] text-[40px]">
          Frequently Asked<span className="sm:hidden block"><br /></span> QuestIons
          <span className="absolute xl:top-[246%] xl:right-[-7%] lg:top-[168%] lg:right-[-12%] sm:top-[150%] sm:right-[-10%] right-[22%] bottom-[-90%]">
            <Image
            className="xl:w-[192.74px] xl:h-[72.27px] lg:w-[185px] lg:h-[65px] sm:w-[160px] sm:h-[55px] w-[109.81px] h-[41.17px]"
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
