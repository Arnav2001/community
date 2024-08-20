"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const HeaderHome = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = 25;
    const threshold = 16 + offset;
    if (window.scrollY > threshold) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? "bg-[#f7f3e6e8] " : "bg-transparent"}`}
      >
        <div className="relative flex h-[90px] items-center justify-center border-b border-gray-500 p-2 sm:h-[120px] lg:h-[90px] xl:h-[140px]">
          <Link href="/">
            <Image
              className="my-3 h-[25px] w-124 sm:h-[30px] sm:w-[8rem] lg:h-[30px] lg:w-[10rem] xl:h-[40px] xl:w-[181px]"
              src={"/assets/images/home_page/logo/Kreatr-logo.svg"}
              alt="Kreatr Logo"
              height={27}
              width={160}
              loading="eager"
            />
          </Link>
        </div>
      </header>
    </>
  );
};

export default HeaderHome;
