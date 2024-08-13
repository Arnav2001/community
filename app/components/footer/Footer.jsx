import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-gray-500">
        <div className="container  mx-auto  ">
          <div className="mt-[20px] grid  grid-cols-1 sm:grid-cols-2 md:mt-[1.5rem] md:grid-cols-2 lg:ml-4 lg:mt-[1.5rem] xl:mt-[2rem] ">
            <div className="ml-0 lg:ml-14">
              <div>
                <div className="hidden items-center justify-start gap-2 sm:flex ">
                  <Link
                    href="https://chat.whatsapp.com/KhEXrhzF4Oj4acJItXEipM"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={
                        "/community/assets/images/home_page/social_media_icons/Whatsapp.svg"
                      }
                      className=" md:h-[28px] md:w-[28px] lg:h-[30px] lg:w-[30px] xl:h-[36px] xl:w-[36px]"
                      alt="Whatsapp"
                      height={36}
                      width={36}
                    />
                  </Link>
                  <Link
                    href="https://www.instagram.com/thekreatr?igsh=Ymdwenl2bmlvanI1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={
                        "/community/assets/images/home_page/social_media_icons/Instagram.svg"
                      }
                      className=" md:h-[28px] md:w-[28px] lg:h-[30px] lg:w-[30px] xl:h-[36px] xl:w-[36px]"
                      alt="Instagram"
                      height={36}
                      width={36}
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/the-kreatr/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={
                        "/community/assets/images/home_page/social_media_icons/LinkedIn.svg"
                      }
                      className=" md:h-[28px] md:w-[28px] lg:h-[30px] lg:w-[30px] xl:h-[36px] xl:w-[36px]"
                      alt="Linkedin"
                      height={36}
                      width={36}
                    />
                  </Link>
                </div>
                <div className=" footer-address footer-section sm-[80%] mt-4 hidden w-[70%] sm:block sm:text-[12px] sm:opacity-[60%] md:text-[12px] lg:w-[60%]  lg:text-[14px] xl:mt-6 xl:w-[52%] xl:text-[18px]">
                  <p>
                    18/1, Shariff Square, 1st Block Koramangala,
                    <br /> Bengaluru, Karnataka (560034)
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center justify-around pb-[14px] pt-2 sm:flex-row sm:justify-end sm:gap-[16px] sm:border-none sm:pt-0 lg:gap-[90px] xl:gap-[90px] ">
                <ul className="footer-ul flex flex-row tracking-tight sm:flex-col sm:tracking-normal ">
                  <li className="footer-section footer-content inline-block  pr-[2rem]  text-[12px] opacity-[70%] sm:pr-0 sm:opacity-[60%] lg:text-[16px] xl:text-[16px]">
                    <Link
                      className="cursor-pointer sm:inline-block sm:hover:italic"
                      href="/blogs"
                    >
                      Blogs
                    </Link>
                  </li>

                  <li className="footer-section footer-content inline-block pr-[2rem]  text-[12px] opacity-[70%] sm:pr-0 sm:opacity-[60%] lg:text-[16px] xl:text-[16px]">
                    <Link
                      className="cursor-pointer sm:inline-block sm:hover:italic"
                      href="/collaboration"
                    >
                      Become a partner
                    </Link>
                  </li>
                  <li className="footer-section footer-content inline-block text-[12px] opacity-[70%] sm:opacity-[60%]  lg:text-[16px] xl:text-[16px]">
                    <Link
                      className="cursor-pointer sm:inline-block sm:hover:italic"
                      href="/careers"
                    >
                      Careers
                    </Link>
                  </li>
                  <li className="footer-section footer-content  hidden  text-[12px] opacity-[70%] sm:inline-block sm:pr-0 sm:opacity-[60%]  lg:text-[16px] xl:text-[16px]">
                    <Link
                      className="cursor-pointer sm:inline-block sm:hover:italic"
                      href="/FAQ"
                    >
                      FAQs
                    </Link>
                  </li>
                </ul>
                <ul className="footer-ul flex flex-row tracking-tight sm:mt-[0px] sm:flex-col sm:tracking-normal md:mt-[0px] lg:mt-[0px] xl:mt-[0px]">
                  <li className="footer-content footer-section inline-block pr-[2rem]  text-[12px] opacity-[70%] sm:hidden sm:pr-0 sm:opacity-[60%]  lg:text-[16px] xl:text-[16px]">
                    <Link
                      className="cursor-pointer sm:inline-block sm:hover:italic"
                      href="/FAQ"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li className="footer-content footer-section inline-block pr-[2rem]  text-[12px] opacity-[70%] sm:pr-0 sm:opacity-[60%]  lg:text-[16px] xl:text-[16px]">
                    <Link
                      className="cursor-pointer sm:inline-block sm:hover:italic"
                      href="/contact"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="footer-content footer-section inline-block text-[12px] opacity-[70%] sm:opacity-[60%]  lg:text-[16px] xl:text-[16px]">
                    <Link
                      className="cursor-pointer sm:inline-block sm:hover:italic"
                      href="/join-our-klan"
                    >
                      Join our Klan
                    </Link>
                  </li>
                  <li className="footer-content footer-section hidden  text-[12px] opacity-[70%] sm:inline-block sm:pr-0  sm:opacity-[60%]  lg:text-[16px] xl:text-[16px]">
                    <Link
                      className="cursor-pointer sm:inline-block sm:hover:italic"
                      href="/legal"
                    >
                      Legal
                    </Link>
                  </li>
                  <li className="footer-content footer-section hidden  text-[12px] opacity-[70%] sm:inline-block sm:pr-0  sm:opacity-[60%]  lg:text-[16px] xl:text-[16px]">
                    <Link
                      target="_blank"
                      rel="noreferrer"
                      href="https://studio-website-eta.vercel.app/"
                      className=" cursor-pointer sm:inline-block sm:hover:italic"
                    >
                      Studio
                    </Link>
                  </li>
                </ul>
                <ul className="flex items-center justify-center gap-4">
                  <li className="footer-section footer-content inline-block pr-8 text-[12px] opacity-[70%] sm:hidden  sm:opacity-[60%]  lg:text-[16px] xl:text-[16px]">
                    <Link
                      className="cursor-pointer sm:inline-block sm:hover:italic"
                      href="/legal"
                    >
                      Legal
                    </Link>
                  </li>
                  <li className="footer-section footer-content inline-block pr-8 text-[12px] opacity-[70%] sm:hidden  sm:opacity-[60%]  lg:text-[16px] xl:text-[16px]">
                    <Link
                      target="_blank"
                      rel="noreferrer"
                      href="https://studio-website-eta.vercel.app/"
                      className=" cursor-pointer sm:inline-block sm:hover:italic"
                    >
                      Studio
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="sm:hidden ">
            <div className="my-3 flex items-center justify-center gap-2 sm:mt-12 sm:flex sm:justify-start">
              <Link
                href="https://chat.whatsapp.com/KhEXrhzF4Oj4acJItXEipM"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={
                    "/community/assets/images/home_page/social_media_icons/Whatsapp.svg"
                  }
                  className="h-[20px] w-[20px] "
                  alt="Whatsapp"
                  height={31}
                  width={31}
                />
              </Link>
              <Link
                href="https://www.instagram.com/thekreatr?igsh=Ymdwenl2bmlvanI1"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={
                    "/community/assets/images/home_page/social_media_icons/Instagram.svg"
                  }
                  className="h-[20px] w-[20px] "
                  alt="Instagram"
                  height={31}
                  width={31}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/the-kreatr/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={
                    "/community/assets/images/home_page/social_media_icons/LinkedIn.svg"
                  }
                  className="h-[20px] w-[20px] "
                  alt="Linkedin"
                  height={31}
                  width={31}
                />
              </Link>
            </div>
          </div>
          <div>
            <div className="footer-section footer-address mx-auto flex w-[70%] justify-center text-center text-[12px] leading-4 opacity-[70%] sm:hidden sm:opacity-[60%]">
              <p>
                18/1, Shariff Square, 1st Block Koramangala,
                <br />
                <span> Bengaluru, Karnataka (560034)</span>
              </p>
            </div>
          </div>
          <div className="flex justify-center px-10 py-5 text-center sm:px-0 md:pb-5 md:pt-0">
            <p className="content-neue footer-section text-[12px] opacity-[70%] sm:opacity-[60%] md:text-[12px] xl:text-20 ">
              Copyright © 2024 Kreatrminds Pvt. Ltd.|{" "}
              <Link
                href="/bug-report"
                className="content-neue text-blue-800 underline"
              >
                Report bug
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
