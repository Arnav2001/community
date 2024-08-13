import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutKreatrHeader = () => {
  return (
    <div className="mt-[30px] sm:mt-0 lg:mt-[30px]">
      <div className="mb-[30px] sm:mb-0">
        <h1 className="page-heading mt-[44px] text-center  text-[40px] leading-[35px] text-[#2A2A2A] sm:mt-[70px]  sm:text-[74px] lg:mt-[90px] lg:text-[94px] xl:mt-[150px] xl:text-[110px]">
          Let’s Understand
          <br className="sm:hidden" /> Kreatr
        </h1>
      </div>
      <div className="mt-[24px] flex  items-center justify-center sm:mt-[40px] lg:mt-[64px] xl:mt-[72px] ">
        <Image
          className="h-[178px] w-[317px] rounded-[15px] object-cover object-center sm:h-[400px] sm:w-[700px]  lg:h-[450px] lg:w-[968px] xl:h-[632px] xl:w-[1125px]"
          src="/community/assets/images/about-kreatr/about-kreatr-balloon-img.jpg"
          alt="balloon image"
          height={632}
          width={1125}
        />
      </div>
      <div className="mt-[44px] flex flex-col items-center justify-center sm:mt-[48px] lg:mt-[58px] xl:mt-[72px]">
        <div className="flex items-center justify-center sm:w-[700px] lg:w-[968px] xl:w-[1125px]">
          <div className="mx-[50px] flex flex-col items-center justify-start sm:mx-0 sm:w-[100%] sm:items-start">
            <div>
              <h4 className="page-heading mb-[12px] text-center text-[24px] leading-[28px] text-[#2A2A2A] sm:mb-[24px] sm:text-start  sm:text-[34px] sm:leading-[38px]  lg:text-[40px] lg:leading-[45px]  xl:text-[48px] xl:leading-[52px]">
                Who are we?
              </h4>
              <p className="content-neue text-center text-[16px] leading-[18px] text-[#2A2A2A] sm:mb-[24px] sm:text-start  lg:text-[18px] lg:leading-[22px] xl:text-[22px] xl:leading-[26px]">
                We are a digital ecosystem that encourages cross-industry
                collaboration and empowers creators like you.
              </p>
            </div>
            <div>
              <h4 className="page-heading mb-[12px] text-center text-[24px] leading-[28px] text-[#2A2A2A] sm:mb-[24px] sm:text-start sm:text-[34px] sm:leading-[38px]  lg:text-[40px] lg:leading-[45px] xl:text-[48px] xl:leading-[52px]">
                HOW DID WE START?
              </h4>
              <p className="content-neue text-center text-[16px] leading-[18px]  text-[#2A2A2A] sm:mb-[24px] sm:text-start  lg:text-[18px] lg:leading-[22px] xl:text-[22px] xl:leading-[26px]">
                It all started when we, Megha and Abdul—the co-founders of
                Kreatr—sought a creative community that matched our vibe. <br />
                <br />
                Eager to connect with like-minded individuals across diverse
                design fields, we struggled to find a space that celebrated the
                joy of creation. So, we took a leap of faith and launched Kreatr
                with a vision to unite a klan of similar-minded creatives.
                <br />
                <br />
                {` Our mission
                goes beyond borders; we're committed to spotlighting Indian
                designers globally and acknowledging their talent and
                contributions.`}
                <br />
                <br />
                {`Through Kreatr, we've built a digital ecosystem
                where creatives from all backgrounds can learn, collaborate, and
                inspire each other.`}
              </p>
            </div>
          </div>
        </div>

        <div className=" mt-[24px] flex items-center justify-center sm:mt-[24px] sm:flex sm:w-[700px] lg:mt-[24px]  lg:w-[968px]  xl:w-[1125px] ">
          <Link
            href="/join-our-klan"
            className="page-subhead kreatr-btn flex h-[32px] w-[140px] cursor-pointer  items-center justify-center rounded-[40px] bg-[#2A2A2A]  text-center text-[14px] sm:h-[45px]  sm:w-[180px] sm:px-0 sm:text-[16px] sm:hover:border sm:hover:border-[#2A2A2A] sm:hover:bg-transparent sm:hover:text-[#2A2A2A]  lg:h-[48px] lg:w-[220px] lg:text-[16px] xl:h-[58px] xl:w-[251px] xl:text-[20px]"
          >
            Join Our Initiative
          </Link>
        </div>
      </div>

      <div className="my-[24px] flex items-center justify-center sm:my-[40px] lg:my-[64px] xl:mb-[72px] xl:mt-[72px]">
        <div className="h-[0.5px] w-[323px] bg-[#2A2A2A] sm:w-[750px] lg:w-[1070px] xl:w-[1125px]"></div>
      </div>
    </div>
  );
};

export default AboutKreatrHeader;
