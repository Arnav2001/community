import React from "react";
import Image from "next/image";
import Link from "next/link";

const CareersEmpty = () => {
  return (
    <div className="mt-[30px] sm:mt-[20px] lg:h-[100vh]">
      <div>
        <h1 className="page-heading text-center text-[40px] text-[#2A2A2A] sm:text-[80px] lg:text-[90px] xl:text-[110px]">
          Careers
        </h1>
      </div>
      <div className="mt-[50px] flex flex-col items-center justify-center sm:mt-[60px] xl:mt-[80px]">
        <Image
          className="h-[54px] w-[54px] xl:h-[95px] xl:w-[95px]"
          src={"/assets/images/careers_page/smile-careers.svg"}
          width={80}
          height={80}
          alt="smile emoji"
        />
        <div className="content-neue-medium mt-[0px] text-center text-[20px] leading-[22px] text-[#4854D6] sm:mt-[0px] lg:text-[30px] lg:leading-[36px] xl:text-[40px] xl:leading-[42px]">
          <h3>Oops!</h3>
          <h3>It looks like our tables are full!</h3>
        </div>
        <div>
          <p className="content-neue mt-[10px] text-center text-[14px] text-[#2A2A2A] text-opacity-50 lg:text-[20px] xl:text-[24px]">
            Thank you for your interest. Stay tuned for future opportunities!
          </p>
        </div>
        <div className="my-[40px] lg:mt-[50px]">
          <p className="content-neue text-[14px] lg:text-[22px] xl:text-[28px]">
            Drop us a line at{" "}
            <Link className="careers-link" href="mailto:hr@thekreatr.com">
              hr@thekreatr.com
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersEmpty;
