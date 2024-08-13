"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";

const CustomLink = ({ href, children, closeMenu, menuOpen }) => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === href && menuOpen) {
      closeMenu();
    }
  }, [pathname]);

  return (
    <Link href={href} onClick={closeMenu}>
      {children}
    </Link>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

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
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !event.target.closest(".nav-bar a")
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? "bg-[#f7f3e6e8]" : "bg-transparent"}`}
      >
        <div className="flex h-[90px] items-center justify-center border-b border-gray-500 p-2 sm:h-[120px] lg:h-[90px] xl:h-[120px]">
          <CustomLink href="/" closeMenu={closeMenu} menuOpen={menuOpen}>
            <Image
              className="my-3 h-[25px] w-124 sm:h-[30px] sm:w-[8rem] lg:h-[30px] lg:w-[10rem] xl:h-[40px] xl:w-[181px]"
              src={"/assets/images/home_page/logo/Kreatr-logo.svg"}
              alt="Kreatr Logo"
              height={27}
              width={160}
            />
          </CustomLink>
          <div
            className="nav-bar  pointer-events-auto  absolute right-[5%] cursor-pointer py-[5px] lg:right-[12%]"
            onClick={toggleMenu}
          >
            <div
              className={`nav-line1 mb-[8px] h-[2px] w-[26px] rounded-[20px] bg-[#2A2A2A] transition-transform duration-300 sm:h-[2px] sm:w-[28px] lg:h-[2px] xl:h-[2px] ${menuOpen ? "translate-y-1.5  rotate-45 transform" : "translate-y-0  rotate-0 transform"}`}
            ></div>
            <div
              className={`nav-line2 h-[2px] w-[26px] rounded-[20px] bg-[#2A2A2A] transition-transform duration-300 sm:h-[2px] sm:w-[28px] lg:h-[2px] xl:h-[2px] ${menuOpen ? "-translate-y-1 -rotate-45 transform" : "translate-y-0 rotate-0 transform"}`}
            ></div>
          </div>
        </div>
        <div
          className={`pointer-events-none fixed right-0 top-0 z-50 h-[100%] w-[100%] transition-transform duration-700 lg:h-[630px] lg:w-[500px] xl:h-[800px] xl:w-[668px]  ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          ref={menuRef}
        >
          <div
            className={`pointer-events-auto absolute inset-0 top-[68px] mt-[21px] bg-[rgba(190,181,113,0.14)] p-8 sm:mt-[30px] sm:backdrop-blur-lg lg:mt-[22px] lg:h-[100vh] xl:mt-[50px] ${styles.menuWrap}`}
            style={{
              transition: "opacity 0.7s ease",
              opacity: menuOpen ? 1 : 0,
            }}
          >
            <div className="relative mt-[-4px] flex items-center justify-center sm:mt-[-5px] lg:my-[8px] xl:mt-[50px]">
              <div className="absolute left-[29%] top-[30%] sm:left-[37%] sm:top-[35%] lg:left-[33%] lg:top-[20%] xl:left-[35%] xl:top-[20%]">
                <Image
                  className="h-[68px]  w-[130px] sm:h-[98px] sm:w-[160px] lg:h-[65px] lg:w-[120px] xl:h-[84px] xl:w-[150px]"
                  src={
                    "/assets/images/home_page/menu_stickers/menu-withshadow.svg"
                  }
                  alt="menu image"
                  height={68}
                  width={120}
                />
              </div>
              <div className="absolute left-[46%] top-[38%] sm:top-[44%] lg:left-[47%] lg:top-[31%] xl:left-[47%] xl:top-[31%]">
                <Image
                  className="h-[51px] w-[96px] sm:h-[75px] sm:w-[130px] lg:h-[55px] lg:w-[90px] xl:h-[60px] xl:w-[100px]"
                  src={
                    "/assets/images/home_page/menu_stickers/explorer-withshadow.svg"
                  }
                  alt="explorer image"
                  height={60}
                  width={90}
                />
              </div>
              <div className="pointer-events-auto absolute left-[8%] top-[62%] sm:left-[18%] sm:top-[62%] md:left-[27%] lg:left-[14%] lg:top-[53%] xl:left-[16%] xl:top-[49%]">
                <CustomLink
                  href="/about-kreatr"
                  closeMenu={closeMenu}
                  menuOpen={menuOpen}
                >
                  <Image
                    className="h-[134px] w-[134px] hover:scale-105 sm:h-[181px] sm:w-[181px] lg:h-[131px] lg:w-[141px] xl:h-[175px] xl:w-[181px]"
                    src={
                      "/assets/images/home_page/menu_stickers/about-layerblur.svg"
                    }
                    alt="about image"
                    height={141}
                    width={141}
                  />
                </CustomLink>
              </div>
              <div className="pointer-events-auto absolute left-[38%] top-[65%] sm:left-[46%] sm:top-[63%] md:left-[47%] lg:left-[42%] lg:top-[57%] xl:left-[45%] xl:top-[55%]">
                <CustomLink
                  href="https://www.thekreatr.com/"
                  target="_blank"
                  rel="noreferrer"
                  closeMenu={closeMenu}
                  menuOpen={menuOpen}
                >
                  <Image
                    className="h-[92px] w-[152px] hover:scale-105 sm:h-[130px] sm:w-[185px] lg:h-[85px] lg:w-[160px] xl:h-[110px] xl:w-[185px]"
                    src={
                      "/assets/images/home_page/menu_stickers/studio.svg"
                    }
                    alt="studio image"
                    height={90}
                    width={160}
                  />
                </CustomLink>
              </div>
              <div className="pointer-events-auto absolute left-[6%] top-[87%] sm:left-[22%] sm:top-[84%] md:left-[27%] md:top-[86%] lg:left-[10%] lg:top-[85%] xl:left-[15%] xl:top-[84%]">
                <CustomLink
                  href="/events"
                  closeMenu={closeMenu}
                  menuOpen={menuOpen}
                >
                  <Image
                    className="h-[48px] w-[172px] hover:scale-105 sm:h-[85px] sm:w-[236px] lg:h-[50px] lg:w-[200px] xl:h-[66px] xl:w-[236px]"
                    src={
                      "/assets/images/home_page/menu_stickers/events-withshadow.svg"
                    }
                    alt="events image"
                    height={66}
                    width={200}
                  />
                </CustomLink>
              </div>
              <div className="pointer-events-auto absolute left-[36.5%] top-[79%] sm:left-[41%] sm:top-[76%] md:left-[42%] lg:left-[35%] lg:top-[74%] xl:left-[38%] xl:top-[72%]">
                <CustomLink
                  href="/about-community"
                  closeMenu={closeMenu}
                  menuOpen={menuOpen}
                >
                  <Image
                    className="h-[65px] w-[120px] hover:scale-105 sm:h-[100px] sm:w-[170px] md:w-[190px] lg:h-[60px] lg:w-[150px] xl:h-[75px] xl:w-[170px]"
                    src={
                      "/assets/images/home_page/menu_stickers/community-withshadow.svg"
                    }
                    alt="community image"
                    height={65}
                    width={170}
                  />
                </CustomLink>
              </div>
              <div className="pointer-events-auto absolute left-[69%] top-[76%] sm:left-[61%] lg:left-[65%] lg:top-[70%] xl:left-[64%] xl:top-[67%]">
                <CustomLink
                  href="/contact"
                  closeMenu={closeMenu}
                  menuOpen={menuOpen}
                >
                  <Image
                    className="h-[102px] w-[79px] hover:scale-105 sm:h-[154px] sm:w-[120px] lg:h-[114px] lg:w-[95px] xl:h-[150px] xl:w-[120px]"
                    src={
                      "/assets/images/home_page/menu_stickers/contact-withshadow.svg"
                    }
                    alt="contact image"
                    height={124}
                    width={95}
                  />
                </CustomLink>
              </div>
              <Image
                className="pointer-events-none relative mt-[50px] h-[500px] w-[352px] rotate-[-3deg] sm:mt-[50px] sm:h-[710px] sm:w-[480px] md:w-[496px] lg:mt-0 lg:h-[430px] lg:w-[340px] xl:h-[500px] xl:w-[450px]"
                src={
                  "/assets/images/home_page/logo/ziplock-cover.png"
                }
                alt="Ziplock cover image"
                height={430}
                width={340}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
