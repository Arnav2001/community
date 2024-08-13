"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const AboutKreatrBottom = () => {
  const [flippedIndex, setFlippedIndex] = useState(null); // State to track which card is flipped

  const peopleData = [
    {
      name: "Abdul RahIman",
      description: "Traveller | Change Visualiser | Astrophile | Free Spirited",
      image: "/assets/images/about-kreatr/ABDUL FINAL-01.svg",
    },
    {
      name: "Megha SatIsh",
      description: "Conceptualiser | Detail Freak | Leader | Gym Rat",
      image: "/assets/images/about-kreatr/MEGHA FINAL-01.svg",
    },
    {
      name: "JevIn Mary",
      description: "Colours | Cats | Quills | Cine ",
      image: "/assets/images/about-kreatr/JEVIN FINAL.svg",
    },
    {
      name: "Chanchal Verma",
      description:
        "Maximalist | Fashion Enthusiast | Coffee Expert | Sanrio Curator",
      image: "/assets/images/about-kreatr/chanchal-01.svg",
    },
    {
      name: "Aava Anna WIlson ",
      description: "Dogs | Books | Cakes | Creative",
      image: "/assets/images/about-kreatr/aava-01.svg",
    },
    {
      name: "PrIthvI Charan R",
      description: "Gym Rat | Sports Junkie | Biophilic | Kind",
      image: "/assets/images/about-kreatr/Prithvi.svg",
    },
    {
      name: "Arnav Kulshrestha ",
      description: "Scintillating | Quick-Witted | Coder | Driven",
      image: "/assets/images/about-kreatr/Arnav.svg",
    },
    {
      name: "ShaIkha Farsana TK",
      description: "Code Enthusiast | Film Buff | Wanderlust | Foodie ",
      image: "/assets/images/about-kreatr/shaikha-01.svg",
    },
  ];

  const handleCardFlip = (index) => {
    setFlippedIndex(index); // Flip the card
    if(flippedIndex !== null){
      setFlippedIndex(null);
    }
    // Automatically flip back after 1.5 seconds
    setTimeout(() => {
      setFlippedIndex(null);
    }, 1500);
  };

  return (
    <div className="mb-[40px] mt-[40px] sm:mb-[50px] lg:mt-0 xl:mt-[72px]">
      <div className="xl:mb-[42px]">
        <h1 className="page-heading text-center text-[40px] text-[#2A2A2A] lg:text-[86px] xl:text-[96px]">
          Meet the Humans of
        </h1>
        <div className="relative h-[50px]">
          <Image
            className="absolute right-[36%] top-[-32%] h-[37px] w-[114px] rotate-[-4deg] sm:left-[44%] lg:left-[41%] lg:top-[-65%] lg:h-[70px] lg:w-[238px] xl:left-[41%] xl:h-[80px] xl:w-[248px]"
            src={"/assets/images/about-kreatr/Kreatr_About.svg"}
            alt="about kreatr image"
            width={238}
            height={70}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 gap-[15px] sm:grid-cols-3 sm:gap-[10px] lg:grid-cols-4 lg:gap-[35px]">
          {peopleData.map((people, index) => (
            <div key={index} onClick={() => handleCardFlip(index)}>
              {flippedIndex === index ? (
                <div className="card flipped">
                  <div className="card-content">
                    <h2 className="card-title page-heading">{people.name}</h2>
                    <p className="sm:block hidden card-description content-neue">
                      {people.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="image-box">
                  <Image
                    className="h-[133px] w-[148px] sm:h-[190px] sm:w-[200px] lg:h-[210px] lg:w-[230px] xl:h-[227px] xl:w-[257px]"
                    src={people.image}
                    alt={people.name}
                    height={227}
                    width={257}
                  />
                </div>
              )}
            </div>
          ))}
          <div
            className="you-image"
            onClick={() => handleCardFlip(peopleData.length)}
          >
            {flippedIndex === peopleData.length ? (
              <div className="card flipped">
                <div className="card-content">
                  <h2 className="card-title page-heading">THIS COULD BE YOU</h2>
                  <Link href="/careers" ><div className="page-subhead xl:text-[12px] lg:text-[12px] bg-[#E2DFD3] text-[#2A2A2A] rounded-[18px] sm:text-[12px] text-[10px] px-[5px] sm:px-0 py-[8px]">Join our team</div></Link>
                </div>
              </div>
            ) : (
              <div className="image-box">
                <Image
                  alt="you image"
                  src="/assets/images/about-kreatr/YOU FINAL-01.svg"
                  className="h-[133px] w-[148px] sm:h-[190px] sm:w-[200px] lg:h-[210px] lg:w-[230px] xl:h-[227px] xl:w-[257px]"
                  height={227}
                  width={257}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="content-neue hidden flex-col items-center justify-center text-[14px] leading-[18px] text-[#2A2A2A] sm:my-[40px] sm:flex lg:my-[64px] lg:mt-[64px] lg:text-[18px] lg:leading-[22px] xl:mb-[72px] xl:mt-[72px] xl:text-[22px] xl:leading-[26px]">
        <p className="text-center">
          {`PS: Can't figure out what their descriptions mean?`}
          <br /> {`Here's a link to the`}{" "}
          <Link
            className="text-blue-800 underline"
            href="https://www.dictionary.com/"
            target="_blank"
            rel="noreferrer"
          >
            dictionary!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AboutKreatrBottom;
