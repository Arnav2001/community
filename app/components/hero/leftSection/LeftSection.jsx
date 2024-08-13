"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Transition } from "@mantine/core";

const LeftSection = () => {
  const [happyActive, setHappyActive] = useState(true);
  const [sadActive, setSadActive] = useState(false);
  const [soundActive, setSoundActive] = useState(false);
  const [logoPlayActive, setLogoPlayActive] = useState(false);
  const [logoAppActive, setLogoAppActive] = useState(false);
  const autoplay = Autoplay({ delay: 4000 });

  const audioRef = useRef(null);

  useEffect(() => {
    if (typeof Audio !== "undefined") {
      audioRef.current = new Audio("/community/assets/audio/kreatr-audio.mp3");
    }
    if (audioRef.current.pause()) {
      setSoundActive(false);
    }
  }, [audioRef]);

  const handleSoundClick = () => {
    if (soundActive) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setSoundActive(false);
    } else {
      audioRef.current.play();
      setSoundActive(true);
    }
  };

  useEffect(() => {
    const handleAudioEnd = () => {
      setSoundActive(false);
    };

    const audio = audioRef.current;
    audio.addEventListener("ended", handleAudioEnd);

    return () => {
      audio.removeEventListener("ended", handleAudioEnd);
    };
  }, []);

  const toggleHappy = () => {
    if (!happyActive) {
      setHappyActive(true);
      setSadActive(false);
    }
  };

  const toggleSad = () => {
    if (!sadActive) {
      setSadActive(true);
      setHappyActive(false);
    }
  };

  const handlePlayStoreEnter = () => {
    setLogoPlayActive(!logoPlayActive);
  };

  const handlePlayStoreLeave = () => {
    setLogoPlayActive(!logoPlayActive);
  };

  const handleAppStoreEnter = () => {
    setLogoAppActive(!logoAppActive);
  };

  const handleAppStoreLeave = () => {
    setLogoAppActive(!logoAppActive);
  };

  return (
    <div>
      <h1 className="page-heading text-64 text-[#2A2A2A] md:mb-[15px] lg:mb-0 lg:text-[5rem] xl:text-110">
        KReaTR
      </h1>
      <div className="mt-[-15px] flex items-center sm:mt-[-15px] lg:mt-[-0.875rem] xl:mt-[-1.875rem] ">
        <p className="content-neue pr-3 text-17 italic text-[#2A2A2A] lg:text-[1.25rem] xl:text-30 ">
          kree-AY-ter
        </p>
        {soundActive ? (
          <Image
            src="/community/assets/images/home_page/filled-speaker.svg"
            className="h-[19px] w-[19px] cursor-pointer xl:h-[30px] xl:w-[30px]"
            alt="Active speaker"
            height={30}
            width={30}
            onClick={handleSoundClick}
          />
        ) : (
          <Image
            src="/community/assets/images/home_page/outlined-speaker.svg"
            className="h-[19px] w-[19px] cursor-pointer xl:h-[30px] xl:w-[30px]"
            alt="Default speaker"
            height={30}
            width={30}
            onClick={handleSoundClick}
          />
        )}
      </div>
      <div className=" my-[1.75rem] flex w-[103%] sm:mt-[12px] sm:w-[92%] md:w-[80%] lg:w-[64%] xl:w-[67%]">
        <Carousel plugins={[autoplay]} loop withControls={false}>
          <Carousel.Slide>
            <p className="bulding-blocks text-16 italic text-blue-700 lg:text-[1.125rem] xl:text-[22px]">
              noun
            </p>
            <p className="font-neueMonteral carousel text-16 text-[#2A2A2A] md:leading-6 lg:text-[1.125rem] lg:leading-[22px] xl:text-[22px] xl:leading-[26px] ">
              A group of people who encourage creative thinking, promote
              cross-industry collaboration, and work towards creating a diverse
              community.
            </p>
          </Carousel.Slide>
          <Carousel.Slide>
            <p className="bulding-blocks text-16 italic text-blue-700 lg:text-[1.125rem] xl:text-[22px]">
              verb
            </p>
            <p className="font-neueMonteral carousel text-16 text-[#2A2A2A] md:leading-6 lg:text-[1.125rem] lg:leading-[22px] xl:text-[22px] xl:leading-[26px] ">
              A group of like-minded creatives nurturing a community to support
              creatives like you.
            </p>
          </Carousel.Slide>
          <Carousel.Slide>
            <p className="bulding-blocks text-16 italic text-blue-700 lg:text-[1.125rem] xl:text-[22px]">
              adjective(s)
            </p>
            <p className="font-neueMonteral carousel text-16 text-[#2A2A2A] lg:text-[1.125rem] lg:leading-[22px] xl:text-[22px] xl:leading-[26px] ">
              Innovative, creative, dynamic, supportive, knowledge hub,
              inclusive, and lots of fun.
            </p>
          </Carousel.Slide>
        </Carousel>
      </div>
      <div className="my-2 flex items-center gap-2 sm:my-1 md:my-2">
        <Image
          src={
            happyActive
              ? "/community/assets/images/home_page/Filled-happy-emoji.svg"
              : "/community/assets/images/home_page/Outlined-happy-emoji.svg"
          }
          height={0}
          width={0}
          sizes="100vw"
          onClick={toggleHappy}
          className="h-[2.1875rem] w-[2.1875rem] cursor-pointer  sm:h-[1.875rem] sm:w-[1.875rem] md:h-[1.875rem] md:w-[1.875rem] lg:h-[2.1875rem] lg:w-[2.1875rem] xl:h-40 xl:w-40 "
          alt="Happy emoji"
        />
        <Image
          src={
            sadActive
              ? "/community/assets/images/home_page/Filled-sad-emoji.svg"
              : "/community/assets/images/home_page/Outlined-sad-emoji.svg"
          }
          height={0}
          width={0}
          sizes="100vw"
          onClick={toggleSad}
          className="h-[2.1875rem] w-[2.1875rem] cursor-pointer  sm:h-[1.875rem] sm:w-[1.875rem] md:h-[1.875rem] md:w-[1.875rem] lg:h-[2.1875rem] lg:w-[2.1875rem] xl:h-40 xl:w-40"
          alt="Sad emoji"
        />
      </div>
      <div className=" flex  sm:items-center ">
        <div className={happyActive ? "my-2  sm:items-center" : "hidden"}>
          <Transition
            mounted={happyActive}
            transition="slide-left"
            duration={600}
            timingFunction="ease"
          >
            {(transitionStyles) => (
              <div style={transitionStyles} className="flex sm:items-center">
                <div className="sm:w-[4.625rem] sm:pb-2 xl:w-[8.125rem] ">
                  <p className="emoji-content mt-[-5px] text-[1rem] text-blue-700 sm:mt-0 xl:text-28 ">
                    We are:
                  </p>
                </div>

                <div className="ml-2 flex w-2/4 flex-wrap sm:w-full sm:flex-nowrap sm:pl-0">
                  <div className="mb-2  mr-2 h-fit rounded-3xl border border-[#2A2A2A] px-[.625rem]  py-0 text-[.75rem] text-[#2A2A2A] sm:px-[.625rem] sm:py-0 xl:text-18">
                    <p className="emoji-content">Community</p>
                  </div>
                  <div className="mb-2  mr-2 h-fit rounded-3xl border border-[#2A2A2A] px-[.625rem]  py-0 text-[.75rem] text-[#2A2A2A] sm:px-[.625rem] sm:py-0 xl:text-18">
                    <p className="emoji-content">Klan</p>
                  </div>
                  <div className="mb-2  mr-2 h-fit rounded-3xl border border-[#2A2A2A]  px-[.625rem] py-0 text-[.75rem] text-[#2A2A2A] sm:px-[.625rem] sm:py-0 xl:text-18">
                    <p className="emoji-content">Collective</p>
                  </div>
                  <div className="mb-2 mr-2 h-fit rounded-3xl border border-[#2A2A2A]  px-[.625rem] py-0 text-[.75rem] text-[#2A2A2A] sm:px-[.625rem] sm:py-0 xl:text-18">
                    <p className="emoji-content">Alliance</p>
                  </div>
                </div>
              </div>
            )}
          </Transition>
        </div>
      </div>
      <div className=" flex  sm:items-center ">
        <div className={sadActive ? "my-2 flex  sm:items-center" : "hidden"}>
          <Transition
            mounted={sadActive}
            transition="slide-left"
            duration={600}
            timingFunction="ease"
          >
            {(transitionStyles) => (
              <div style={transitionStyles} className="flex sm:items-center">
                <div className="sm:w-[6.625rem] sm:pb-2 xl:w-[12.125rem]">
                  <p className="emoji-content mt-[-5px] text-[1rem] text-red-500 sm:mt-0 xl:text-28">
                    We are not:
                  </p>
                </div>
                <div className="ml-2 flex w-[52%] flex-wrap sm:w-full sm:flex-nowrap sm:pl-0">
                  <div className="mb-2  mr-2 h-fit rounded-3xl border border-[#2A2A2A]  px-[.625rem] py-0 text-[.75rem] text-[#2A2A2A] sm:px-[.625rem] sm:py-0 xl:text-18">
                    <p className="emoji-content">Consultancy</p>
                  </div>
                  <div className="mb-2  mr-2 h-fit rounded-3xl border border-[#2A2A2A]  px-[.625rem] py-0 text-[.75rem] text-[#2A2A2A] sm:px-[.625rem] sm:py-0 xl:text-18">
                    <p className="emoji-content">Agency</p>
                  </div>
                  {/* <div className="mb-2  mr-2 h-fit rounded-3xl border text-[#2A2A2A]  border-[#2A2A2A] px-[.625rem] py-0 text-[.75rem] sm:px-[.625rem] sm:py-0 xl:text-18">
                    <p className="emoji-content">Studio</p>
                  </div> */}
                  <div className="mb-2  h-fit rounded-3xl border border-[#2A2A2A] px-[.625rem]  py-0 text-[.75rem] text-[#2A2A2A] sm:px-[.625rem] sm:py-0 xl:text-18">
                    <p className="emoji-content">Evil-Corp</p>
                  </div>
                </div>
              </div>
            )}
          </Transition>
        </div>
      </div>
      <br></br>
      <div className="mt-10 hidden gap-x-5 sm:mb-[16px] sm:mt-[-14px] sm:flex md:mb-4 md:mt-[-12px] lg:mb-[4rem] lg:mt-[0.25rem] xl:mb-6 ">
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://play.google.com/store/apps/details?id=com.kreatr"
        >
          <div
            className={`flex cursor-pointer items-center rounded-full bg-[#2A2A2A] text-[1rem]   sm:h-[3.125rem] sm:w-[9.75rem] sm:p-2 md:h-[60px] md:w-[9.75rem] md:p-2 md:px-1 md:py-2 lg:text-[1rem] lg:leading-4 xl:h-82 xl:w-230 xl:p-7 xl:text-20 
                    ${logoPlayActive ? "button-text border border-[#2A2A2A] bg-transparent text-[#2A2A2A]" : "career-btn"}`}
            onMouseEnter={handlePlayStoreEnter}
            onMouseLeave={handlePlayStoreLeave}
          >
            {logoPlayActive ? (
              <div>
                {/* <img src="/community/assets/images/Dark-playstore.svg" alt="" /> */}
                <Image
                  className="ml-[.875rem] sm:h-[1.875rem] sm:w-[1.5rem] md:h-[1.875rem] md:w-[1.5rem] xl:h-44.09 xl:w-38.72"
                  src="/community/assets/images/home_page/Dark-playstore.svg"
                  alt="Play store"
                  height={0}
                  width={0}
                  sizes="100vw"
                />
              </div>
            ) : (
              <div>
                <Image
                  className="ml-[.875rem] sm:h-[1.875rem] sm:w-[1.5rem] md:h-[1.875rem] md:w-[1.5rem] xl:h-44.09 xl:w-38.72"
                  src="/community/assets/images/home_page/Light-playstore.svg"
                  alt="Play store"
                  height={0}
                  width={0}
                  sizes="100vw"
                />
              </div>
            )}
            <p className="button-store ml-[20%] sm:text-[14px] sm:leading-4 md:leading-4 lg:text-[1rem] lg:leading-4 xl:text-20 xl:leading-5 ">
              Get it on Playstore
            </p>
          </div>
        </Link>

        <Link
          target="_blank"
          rel="noreferrer"
          href="https://apps.apple.com/in/app/kreatr/id6474967284"
        >
          <div
            className={`flex cursor-pointer items-center rounded-full bg-[#2A2A2A]  py-1 text-[1rem] sm:h-[3.125rem] sm:w-[9.75rem] sm:p-2 md:h-[60px] md:w-[9.75rem]  lg:text-[1rem] lg:leading-4 xl:h-82 xl:w-230 xl:p-7 xl:text-20 xl:leading-6 
          ${
            logoAppActive
              ? "button-text border border-[#2A2A2A] bg-transparent text-[#2A2A2A]"
              : "career-btn "
          }`}
            onMouseEnter={handleAppStoreEnter}
            onMouseLeave={handleAppStoreLeave}
          >
            {logoAppActive ? (
              <Image
                src="/community/assets/images/home_page/Dark-applestore.svg"
                className="ml-[.5rem] sm:h-[1.875rem] sm:w-[1.5rem] md:h-[1.875rem] md:w-[1.5rem] xl:h-44.09 xl:w-38.72 "
                alt="App store"
                height={0}
                width={0}
                sizes="100vw"
              />
            ) : (
              <Image
                src="/community/assets/images/home_page/Light-applestore.svg"
                className="ml-[.5rem] sm:h-[1.875rem] sm:w-[1.5rem] md:h-[1.875rem] md:w-[1.5rem] xl:h-44.09 xl:w-38.72 "
                alt="App store"
                height={0}
                width={0}
                sizes="100vw"
              />
            )}
            <p
              className={`button-store sm:text-[14px] sm:leading-4 md:leading-4 lg:text-[1rem] lg:leading-4 xl:text-20 xl:leading-5 ${
                logoAppActive ? "ml-[10%]" : "ml-[10%] "
              } `}
            >
              Available on
              <br /> App Store
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LeftSection;
