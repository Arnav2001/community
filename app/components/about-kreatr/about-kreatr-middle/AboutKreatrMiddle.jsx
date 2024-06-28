import React from "react";
import Image from "next/image";

const AboutKreatrMiddle = () => {
  return (
    <div>
      <div className="mb-[60px] flex flex-col items-center justify-center sm:mb-0">
        <div className="relative flex h-[50px] w-[350px]  items-center justify-center mt-[74px] sm:mt-0 sm:mb-[40px] lg:mb-[40px] xl:mb-[72px]  sm:w-[700px] ">
          <div className="flex items-center justify-center  sm:h-0">
            <Image
              className=" absolute bottom-[120%] left-[33%] h-[65px] w-[122px]  sm:left-[2%] sm:top-[22%] sm:h-[90px] sm:w-[300px] lg:left-[-10%] lg:top-[-9%] lg:h-[100px] lg:w-[390px] xl:left-[-16%] xl:top-[-12%] xl:h-[135px] xl:w-[329px]"
              src={"/assets/images/about-kreatr/connect-kreatr.svg"}
              alt="connect image"
              height={105}
              width={310}
            />
            <Image
              className=" absolute right-[29%] top-[-50%] h-[65px] w-[145px]  sm:left-[32%] sm:top-[24%] sm:h-[90px] sm:w-[300px] lg:left-[23%] lg:top-[-5%] lg:h-[100px] lg:w-[390px] xl:left-[18%] xl:h-[135px] xl:w-[478px]"
              src={"/assets/images/about-kreatr/collaborate-kreatr.svg"}
              alt="collaborate image"
              height={100}
              width={350}
            />
            <Image
              className="absolute top-[50%] h-[65px] w-[103px]  sm:left-[59%] sm:top-[-32%] sm:h-[90px] sm:w-[300px] lg:left-[54%] lg:top-[-10%] lg:h-[100px] lg:w-[390px] xl:left-[71%]  xl:top-[-7%] xl:h-[135px] xl:w-[328px]"
              src={"/assets/images/about-kreatr/create-kreatr.svg"}
              alt="create image"
              height={105}
              width={320}
            />
          </div>
        </div>
      </div>
      <div className="lg:mt-[72px] lg:mb-[72px] sm:my-[40px] my-[24px] flex items-center justify-center">
        <div className="h-[0.5px] w-[323px] bg-[#2A2A2A] sm:w-[750px] lg:w-[1070px] xl:w-[1125px]"></div>
      </div>
      <div className="mt-[0px] flex flex-col justify-center">
        <div className="kreatr-container container mx-auto flex flex-col justify-center">
          <div className="relative mt-[164px] grid-cols-2 sm:mt-[0px] sm:grid">
            <div className="kreatr-box1 h-[264px] w-[317px] px-[52px] pt-[90px] sm:ml-[-28px] sm:h-[280px] sm:w-[400px] sm:p-[50px] lg:ml-[80px] lg:h-[280px] lg:w-[575px] lg:p-[50px] xl:ml-[150px] xl:h-[295px] xl:w-[584px] xl:p-[45px]">
              <h1 className="page-heading text-center text-[40px]  leading-[35px] sm:text-start sm:text-[60px] lg:text-[70px] lg:leading-[56px] xl:text-[80px] xl:leading-[67px]">
                DIRECTION
              </h1>
              <p className="content-neue mt-[15px] text-center text-[16px] leading-[18px]  sm:mt-[28px] sm:text-start sm:text-[20px]  sm:leading-[20px] lg:text-[22px] lg:leading-[24px] xl:text-[24px] xl:leading-[32px]">
                To ignite a revolution in the design industry through
                cross-industry collaborations that raise the bar and to
                establish a global standard for creativity.
              </p>
            </div>
            <div className="absolute left-[9%] top-[-55%] sm:left-[56%] sm:top-0 lg:left-[56%] xl:left-[54%]">
              <Image
                className="h-[219px] w-[255px] rounded-[15px] object-cover object-center sm:h-[280px] sm:w-[320px] lg:h-[280px] lg:w-[460px] xl:h-[295px] xl:w-[511px]"
                src={"/assets/images/about-kreatr/kreatr-img1.jpg"}
                alt="Kreatr image"
                height={340}
                width={550}
              />
            </div>
          </div>
          <div className="relative mt-[186px] justify-end sm:mt-[30px] sm:flex sm:gap-[68px]  lg:mt-[30px]  xl:mt-[25px]  xl:gap-[100px]">
            <div className="absolute left-[9%] top-[-55%] sm:left-[-4%] sm:top-0 lg:left-[7%] xl:left-[10%]">
              <Image
                className="h-[219px] w-[255px] rounded-[15px]  object-cover object-center sm:h-[280px] sm:w-[350px] lg:h-[280px] lg:w-[480px] xl:h-[295px] xl:w-[511px]"
                src={"/assets/images/about-kreatr/kreatr-img2.jpg"}
                alt="Kreatr image"
                height={650}
                width={340}
              />
            </div>
            <div className="kreatr-box2 h-[264px] w-[317px] px-[30px] pt-[90px] sm:mr-[-15px] sm:h-[280px]  sm:w-[370px] sm:p-[50px] lg:mr-[80px] lg:h-[280px] lg:w-[554px] lg:p-[50px] xl:mr-[140px] xl:h-[295px] xl:w-[584px] xl:p-[45px]">
              <h1 className="page-heading text-center text-[40px]  leading-[35px] sm:text-start sm:text-[60px] lg:text-[70px] lg:leading-[56px] xl:text-[80px] xl:leading-[67px]">
                DESTINY
              </h1>
              <p className="content-neue mt-[15px] list-disc text-center text-[16px] leading-[18px]  sm:mt-[28px] sm:text-start sm:text-[20px] sm:leading-[20px] lg:text-[22px] lg:leading-[24px] xl:text-[24px] xl:leading-[32px]">
                To create a unique digital ecosystem for high-spirited creatives
                where they can unleash their imagination, grow their skills, and
                share their talents with other creatives.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-[40px] lg:mt-[64px] lg:mb-[20px] xl:mt-[72px] flex items-center justify-center">
        <div className="h-[0.5px] w-[323px] bg-[#2A2A2A] sm:w-[750px] lg:w-[1070px] xl:w-[1125px]"></div>
      </div>
    </div>
  );
};

export default AboutKreatrMiddle;
