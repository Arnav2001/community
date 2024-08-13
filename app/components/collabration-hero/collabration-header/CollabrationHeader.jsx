import React from "react";
import Image from "next/image";


const CollabrationHeader = () => {
  return (
    <div className="relative mt-[34px] flex flex-col items-center justify-center sm:mt-[60px] lg:mt-[35px] xl:mt-[80px]">
      <h1 className="page-heading text-[40px] text-[#2A2A2A] sm:text-[74px] lg:text-[94px] xl:text-[110px]">
        Partner WIth Us
      </h1>
      <Image
        src="/community/assets/images/collabration_page/collabration-img.svg"
        className="absolute top-[72%] h-[34.5px] w-[143.75px] sm:h-[60px] sm:w-[300px] lg:h-[70px] lg:w-[330px] xl:h-[84.57px] xl:w-[352.37px]"
        alt="partner with us"
        height={0}
        width={0}
        sizes="100vw"
      />
    </div>
  );
};

export default CollabrationHeader;
