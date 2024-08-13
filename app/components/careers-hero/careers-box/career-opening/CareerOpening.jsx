import React from "react";
import styles from "./CareersOpening.module.css";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import careersSlice from "@/app/redux/careersSlice";

const CareerOpening = () => {
  const careersData = useSelector((state) => state.careers.careersData);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-[6px] flex flex-col items-center justify-center  sm:mb-0">
        <div className="relative mb-[46px] mt-[34px] sm:mt-[60px] lg:mb-[54px] lg:mt-[38px] xl:mb-[64px]  xl:mt-[82px] ">
          <h1 className="page-heading text-[40px] text-[#2A2A2A] sm:text-[80px] lg:text-[90px] xl:text-[110px]">
            Careers
          </h1>
          <div className="absolute right-[-54%] top-[6%] rotate-[10deg] sm:right-[-66px] sm:top-[30px] lg:right-[-98px] lg:top-[24px] xl:right-[-35%] xl:top-[22%]">
            <Image
              className="h-[66.47px] w-[66.47px] sm:h-[76px] sm:w-[76px] lg:h-[110px] lg:w-[110px] xl:h-[120px] xl:w-[120px]"
              src="/assets/images/careers_page/careers-img.svg"
              alt="careers image"
              height={0}
              width={0}
            />
          </div>
        </div>
      </div>
      <div className="flex  items-center justify-start sm:w-[100%] lg:w-[90%] ">
        <div className="flex flex-wrap items-center justify-start lg:ml-[46px] lg:justify-start xl:ml-[50px]">
          {careersData.map((item, index) => (
            <Link
              href={`/careers/${item.id}`}
              key={index}
              className={`${styles.jobBox} m-[10px] flex h-auto w-[320px] cursor-pointer flex-col justify-around rounded-[10px] border border-[#2A2A2A] p-[10px] sm:m-[25px] sm:h-[180px] sm:w-[250px] sm:rounded-[15px] sm:p-[30px] lg:h-[230px] lg:w-[280px] lg:p-[36px] xl:h-[277px] xl:w-[345px] xl:p-[30px]`}
            >
              <div className="items-center justify-between sm:flex">
                <h4 className="careers-box text-[18px] sm:text-[26px] sm:leading-[25px] lg:text-[30px] lg:leading-[30px] xl:text-[40px] xl:leading-[40px]">
                  {item.title}
                </h4>
              </div>
              {/* <div className="block sm:hidden">
                <p className="content-neue text-[10px]">{item.description}</p>
              </div> */}
              <div className="mt-3 flex flex-row items-center justify-between sm:flex">
                <div className="flex flex-row items-center sm:mt-[24px] sm:flex sm:gap-x-[6px] lg:mt-[38px] lg:gap-x-[10px] xl:mt-[50px]">
                  <div
                    className={`${styles.subBox} content-neue mr-2 h-[19px] w-[57px] rounded-[24px] border border-[#2A2A2A] text-center text-[10px] sm:mr-0 sm:h-[22px] sm:w-[70px] sm:text-[14px] lg:h-[28px] lg:w-[96px] lg:text-[16px] xl:h-[34px] xl:w-[106px] xl:text-[20px]`}
                  >
                    {item.type}
                  </div>
                  <div
                    className={`${styles.subBox} content-neue h-[19px] w-[57px] rounded-[24px] border border-[#2A2A2A] text-center text-[10px]  sm:h-[22px] sm:w-[70px] sm:text-[14px]  lg:h-[28px] lg:w-[96px] lg:text-[16px] xl:h-[34px] xl:w-[106px] xl:text-[20px]`}
                  >
                    {item.location}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="content-neue my-[14px] text-[11px] sm:mb-[30px] sm:mt-[30px] sm:text-[16px] lg:mb-[64px] lg:text-[20px] xl:mb-[72px] xl:text-[28px]">
        <p className="text-center">
          Can’t find any suitable vacancy? Drop us a line at{" "}
          <Link className="text-blue-700" href="mailto:hr@thekreatr.com">
            hr@thekreatr.com
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default CareerOpening;
