import React from "react";
import Image from "next/image";

const AboutKreatrMiddle = () => {
  return (
    <div>
      <div className="container  px-0 sm:w-[750px] lg:w-[1070px] xl:w-[1125px] ">
        <div className="flex flex-col flex-wrap items-center justify-center sm:relative sm:my-[80px] sm:flex-row lg:my-[128px] xl:my-[144px]">
          <Image
            className="z-10 w-[calc(33.333%-25px)] sm:absolute sm:left-[3%] sm:w-[calc(33.333%-25px)] lg:left-[3%] lg:w-[calc(33.333%-50px)] xl:left-[3%]"
            src={"/community/assets/images/about-kreatr/connect-kreatr.svg"}
            alt="connect image"
            height={0}
            width={0}
            sizes="100vw"
          />
          <Image
            className="z-20 w-[calc(33.333%+30px)] sm:absolute sm:w-[calc(33.333%+50px)] lg:w-[calc(33.333%+70px)]"
            src={"/community/assets/images/about-kreatr/collaborate-kreatr.svg"}
            alt="collaborate image"
            height={0}
            width={0}
            sizes="100vw"
          />
          <Image
            className="z-40 w-[calc(33.333%-35px)] sm:absolute  sm:right-[6%] sm:w-[calc(33.333%-60px)] lg:right-[6%] lg:w-[calc(33.333%-90px)] xl:right-[6%]"
            src={"/community/assets/images/about-kreatr/create-kreatr.svg"}
            alt="create image"
            height={0}
            width={0}
            sizes="100vw"
          />
        </div>
      </div>
      <div className="my-[24px] flex items-center justify-center sm:my-[40px] lg:mb-[72px] lg:mt-[72px]">
        <div className="h-[0.5px] w-[323px] bg-[#2A2A2A] sm:w-[750px] lg:w-[1070px] xl:w-[1125px]"></div>
      </div>
      <div className="flex items-center justify-center">
        <div className=" flex items-center justify-center sm:w-[750px] lg:w-[1070px] xl:w-[1125px] ">
          <div className="flex flex-col">
            <div className="relative mt-[164px] grid-cols-2 sm:static sm:mt-[0px] sm:grid sm:gap-[98px] lg:gap-[144px] xl:gap-[98px]">
              <div className="kreatr-box1 h-[264px] w-[317px] px-[52px] pt-[90px]  sm:h-[280px] sm:w-[400px] sm:p-[50px]  lg:h-[280px] lg:w-[575px] lg:p-[50px]  xl:h-[295px] xl:w-[584px] xl:p-[45px]">
                <h1 className="page-heading text-center text-[40px]  leading-[35px] sm:text-start sm:text-[60px] lg:text-[70px] lg:leading-[56px] xl:text-[80px] xl:leading-[67px]">
                  DIRECTION
                </h1>
                <p className="content-neue mt-[15px] text-center text-[16px] leading-[18px]  sm:mt-[28px] sm:text-start sm:text-[20px]  sm:leading-[20px] lg:text-[18px] lg:leading-[22px] xl:text-[22px] xl:leading-[26px]">
                  To ignite a revolution in the design industry through
                  cross-industry collaborations that raise the bar and to
                  establish a global standard for creativity.
                </p>
              </div>
              <div className="absolute left-[9%] top-[-55%] sm:static">
                <Image
                  className="h-[219px] w-[255px] rounded-[15px] object-cover object-center sm:h-[280px] sm:w-[320px] lg:h-[280px] lg:w-[460px] xl:h-[295px] xl:w-[511px]"
                  src={"/community/assets/images/about-kreatr/kreatr-img1.jpg"}
                  alt="Kreatr image"
                  height={340}
                  width={550}
                />
              </div>
            </div>
            <div className="relative mt-[186px] justify-end sm:static sm:mt-[30px] sm:flex sm:gap-[30px]  lg:mt-[35px]  xl:mt-[25px]  xl:gap-[30px]">
              <div className="absolute left-[9%] top-[-55%] sm:static">
                <Image
                  className="h-[219px] w-[255px] rounded-[15px]  object-cover object-center sm:h-[280px] sm:w-[350px] lg:h-[280px] lg:w-[480px] xl:h-[295px] xl:w-[511px]"
                  src={"/community/assets/images/about-kreatr/kreatr-img2.jpg"}
                  alt="Kreatr image"
                  height={650}
                  width={340}
                />
              </div>
              <div className="kreatr-box2 h-[264px] w-[317px] px-[30px] pt-[90px]  sm:h-[280px]  sm:w-[370px] sm:p-[50px]  lg:h-[280px] lg:w-[554px] lg:p-[50px]  xl:h-[295px] xl:w-[584px] xl:p-[45px]">
                <h1 className="page-heading text-center text-[40px]  leading-[35px] sm:text-start sm:text-[60px] lg:text-[70px] lg:leading-[56px] xl:text-[80px] xl:leading-[67px]">
                  DESTINY
                </h1>
                <p className="content-neue mt-[15px] list-disc text-center text-[16px] leading-[18px]  sm:mt-[28px] sm:text-start sm:text-[20px] sm:leading-[20px] lg:text-[18px] lg:leading-[22px] xl:text-[22px] xl:leading-[26px]">
                  To create a unique digital ecosystem for high-spirited
                  creatives where they can unleash their imagination, grow their
                  skills, and share their talents with other creatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-[40px] flex items-center justify-center lg:mb-[20px] lg:mt-[64px] xl:mt-[72px]">
        <div className="h-[0.5px] w-[323px] bg-[#2A2A2A] sm:w-[750px] lg:w-[1070px] xl:w-[1125px]"></div>
      </div>
    </div>
  );
};

export default AboutKreatrMiddle;

<div className="mt-[0px] flex flex-col justify-center sm:w-[700px] lg:w-[968px] xl:w-[1125px]">
  <div className="kreatr-container   flex flex-col justify-center"></div>
</div>;
