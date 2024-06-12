"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const AboutKreatrHeader = () => {
  const [showWhatWeAre, setShowWhatWeAre] = useState(false);
  const [showHowDidWeStart, setShowHowDidWeStart] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const whatWeAreElement = document.getElementById("what-we-are");
      const howDidWeStartElement = document.getElementById("how-did-we-start");

      if (whatWeAreElement.getBoundingClientRect().top < window.innerHeight) {
        setShowWhatWeAre(true);
      }
      if (howDidWeStartElement.getBoundingClientRect().top < window.innerHeight) {
        setShowHowDidWeStart(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const createWordAnimation = (text, isVisible) => {
    return text.split(" ").map((word, index) => (
      <span
        key={index}
        className={isVisible ? "show" : ""}
        style={{ "--delay": `${index * 0.2}s` }}
      >
        {word}&nbsp;
      </span>
    ));
  };

  return (
    <div className="mt-[30px] sm:mt-0 lg:mt-[30px]">
      <div className="mb-[30px] sm:mb-0">
        <h1 className="page-heading text-center text-[40px] leading-[40px] text-[#2A2A2A] sm:text-[74px] lg:text-[94px] xl:text-[110px]">
          Let’s Understand
          <br className="sm:hidden" /> Kreatr
        </h1>
      </div>
      <div className="flex justify-center items-center sm:mt-[40px] lg:mt-[80px] mt-[20px]">
        <Image
          className="xl:h-[632px] xl:w-[1125px] lg:h-[450px] h-[178px] w-[317px] sm:h-[400px] sm:w-[700px] rounded-[15px] object-cover object-center lg:w-[968px]"
          src="/assets/images/about-kreatr/about-kreatr-gif.gif"
          alt="kreatr gif"
          height={632}
          width={1125}
        />
      </div>
      <div className="flex flex-col justify-center sm:mt-[40px] mt-[20px]">
        <div id="what-we-are" className="items-center justify-center sm:ml-[25px] sm:flex">
          <h1 className="page-heading mb-[8px] text-center text-[24px] leading-[28px] text-[#2A2A2A] sm:mb-[15px] sm:mr-[5px] lg:mr-[32px] sm:text-[34px] sm:leading-[38px] lg:text-[40px] lg:leading-[48px] xl:mr-[46px] xl:text-[48px] xl:leading-[52px]">
            <span className="word-animation">
              {createWordAnimation("What we are?", showWhatWeAre)}
            </span>
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center sm:mx-[60px] sm:items-end">
          <div className="content-neue px-6 text-[14px] leading-[18px] text-[#2A2A2A] sm:w-[60%] lg:text-[18px] lg:leading-[27px] xl:text-[24px]">
            <p className="text-center sm:text-start">
              We are a digital ecosystem that encourages cross-industry
              collaboration and empowers creators like you.
            </p>
          </div>
        </div>
        <br />
        <div id="how-did-we-start" className="items-center justify-center sm:ml-[60px] sm:flex">
          <h1 className="page-heading mb-[8px] sm:ml-[12px] lg:ml-0 text-center text-[24px] leading-[28px] text-[#2A2A2A] sm:mb-[15px] sm:text-[34px] sm:leading-[38px] lg:text-[40px] lg:leading-[48px] xl:text-[48px] xl:leading-[52px]">
            <span className="word-animation">
              {createWordAnimation("How Did We Start?", showHowDidWeStart)}
            </span>
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center sm:mx-[60px] sm:items-end">
          <div className="content-neue px-6 text-[14px] leading-[18px] text-[#2A2A2A] sm:w-[60%] lg:text-[18px] lg:leading-[27px] xl:text-[22px]">
            <p className="text-center sm:text-start">
              It all started when we, Megha and Abdul—the co-founders of
              Kreatr—sought a creative community that matched our vibe. 
            </p>
            <br />
            <p className="text-center sm:text-start">
              Eager to connect with like-minded individuals across diverse
              design fields, we struggled to find a space that celebrated the
              joy of creation. So, we took a leap of faith and launched Kreatr
              with a vision to unite a klan of similar-minded creatives. 
            </p>
            <br />
            <p className="text-center sm:text-start">
              {`Our mission goes beyond borders; we're committed to spotlighting
              Indian designers globally and acknowledging their talent and
              contributions. Through Kreatr, we've built a digital ecosystem
              where creatives from all backgrounds can learn, collaborate, and
              inspire each other.`}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[20px] flex justify-center sm:mt-[50px]">
        <Link href="/join-our-klan">
          <div className="page-subhead kreatr-btn flex h-[32px] w-[114px] items-center justify-center rounded-[40px] bg-[#2A2A2A] text-center text-[12px] hover:text-[#2A2A2A] sm:h-[45px] sm:w-[180px] sm:text-[16px] sm:hover:border sm:hover:border-black sm:hover:bg-transparent lg:mr-0 lg:h-[58px] lg:w-[251px] lg:text-[18px] xl:text-[24px]">
            Join Our Initiative
          </div>
        </Link>
      </div>
      <div className="mt-[50px] flex items-center justify-center">
        <div className="h-[0.5px] w-[323px] bg-[#2A2A2A] sm:w-[750px] lg:w-[1070px] xl:w-[1125px]"></div>
      </div>
    </div>
  );
};

export default AboutKreatrHeader;
