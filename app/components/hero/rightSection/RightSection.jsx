import React from "react";
import Image from "next/image";
import Link from "next/link";

const RightSection = () => {
  return (
    <>
      <div className="relative mx-auto  grid h-[200px] w-[320px] max-w-[100%] grid-cols-2 gap-0 sm:grid-cols-2  md:grid-cols-2 lg:mr-[100px]">
        <Link href="/events">
          <Image
            src="/assets/images/home_page/menu_stickers/events-withshadow.svg"
            className="absolute left-[9%] top-[66%] h-[3.1525rem] w-[8.2613rem] rotate-[-14deg]  hover:scale-105 sm:left-[44%] sm:top-[78%] sm:h-[38px] sm:w-[145px] sm:rotate-0 md:right-[5%]  md:top-[91%] md:h-[50px] md:w-[9.875rem] lg:left-[47%] lg:top-[114%] lg:h-[60px] lg:w-[200px] xl:left-[44%] xl:top-[152%] xl:h-[6.6037rem] xl:w-[17.3044rem] "
            alt="events"
            height={60}
            loading="lazy"
            width={200}
          />
        </Link>
        <Link
          href="https://www.thekreatr.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/assets/images/home_page/menu_stickers/studio.svg"
            alt="app"
            height={120}
            width={200}
            loading="lazy"
            className=" absolute left-[40%] top-[18%] h-[92px] w-[76px] rotate-[-6deg] hover:scale-105 sm:left-[47%] sm:top-[17%] sm:h-[70px] sm:w-[125px] sm:rotate-[0deg] md:left-[42%] md:top-[18%] md:h-[90px]  md:w-[155px] lg:left-[46%] lg:top-[22%] lg:h-[120px] lg:w-[12.5rem] lg:rotate-[2deg] xl:left-[34%] xl:top-[30%] xl:h-[10.885rem] xl:w-[16.8319rem] "
          />
        </Link>

        <Link href="/contact">
          <Image
            loading="lazy"
            src="/assets/images/home_page/menu_stickers/contact-withshadow.svg"
            className="absolute right-[7%] top-[16%] h-[108px] w-[88px] hover:scale-105 sm:right-[48%] sm:top-[58%] sm:h-[100px] sm:w-[80px] md:right-[48%] md:top-[65%] md:h-[120px] md:w-[95px] lg:left-[18%] lg:top-[80%]  lg:h-[160px] lg:w-[120px] xl:left-[0] xl:top-[112%] xl:h-[12.0538rem] xl:w-[9.3825rem]"
            alt="contact"
            height={160}
            width={120}
          />
        </Link>
        <Link href="/about-community">
          <Image
            src="/assets/images/home_page/menu_stickers/community-withshadow.svg"
            className="absolute right-[14%] top-[63%]  h-[3.1938rem] w-[8.4269rem] rotate-[12deg] hover:scale-105 sm:right-[5%] sm:top-[50%] sm:h-[60px] sm:w-[160px] sm:rotate-0 md:right-[1%] md:top-[56%] md:h-[75px] md:w-[180px] lg:left-[46%] lg:top-[73%] lg:h-[90px]  lg:w-[230px] xl:left-[35%] xl:top-[102%] xl:h-[7.1969rem] xl:w-[18.9906rem]"
            alt="know community"
            height={90}
            loading="lazy"
            width={230}
          />
        </Link>
        <Link href="/about-kreatr">
          <Image
            src="/assets/images/home_page/menu_stickers/about kreatr.svg"
            className=" absolute left-[3%] top-[8%] h-[120px] w-[120px] hover:scale-105 sm:left-[16%] sm:top-[8%] sm:h-[120px] sm:w-[120px] md:left-[12%] md:top-[6%] md:h-[140px] md:w-[140px] lg:left-[4%] lg:top-[3%] lg:h-[180px] lg:w-[180px] xl:left-[-12%] xl:top-[13%] xl:h-[210px] xl:w-[210px]"
            alt="about kreatr"
            height={190}
            loading="lazy"
            width={190}
          />
        </Link>
        <Image
          className="absolute hidden sm:left-[42%] sm:top-[100%] sm:block sm:h-[126px] sm:w-[5.6875rem] sm:rotate-[20deg] md:left-[37%] md:top-[112%] md:h-[10.375rem] md:w-[6.6875rem] lg:left-[40%] lg:top-[132%] lg:h-[16rem] lg:w-[7.625rem] xl:left-[26%] xl:top-[212%] xl:h-[11.7169rem] xl:w-[8.8463rem] "
          alt="arrow image"
          src="/assets/images/home_page/menu_stickers/Arrow.svg"
          height={256}
          loading="lazy"
          width={122}
        />
        <Image
          className="absolute right-[14%] top-[-8%] h-[2.8806rem] w-[2.5381rem] sm:hidden "
          alt="arrow image"
          src="/assets/images/home_page/menu_stickers/mobile-arrow.svg"
          height={46}
          width={40}
          loading="lazy"
        />
        <Image
          src="/assets/images/home_page/menu_stickers/menu-withshadow.svg"
          className=" absolute right-[0] top-[-37%] h-[3.3306rem] w-[5.5594rem] sm:right-[14%] sm:top-[128%] sm:h-[40px] sm:w-[80px] md:right-[9%] md:top-[142%] md:h-[60px] md:w-[90px] lg:left-[66%] lg:top-[174%] lg:h-[5.25rem] lg:w-[7.75rem] xl:left-[52%] xl:top-[236%] xl:h-[6.5769rem] xl:w-[10.98rem]"
          alt="menu"
          height={84}
          width={124}
          loading="lazy"
        />
        <Image
          src="/assets/images/home_page/menu_stickers/explorer-withshadow.svg"
          className="absolute right-[-4%] top-[-18%] h-[29.72px] w-[56.16px] sm:left-[207px] sm:top-[144%] sm:h-[30px] sm:w-[70px] md:left-[76%] md:top-[164%] md:h-[40px] md:w-[80px] lg:left-[84%] lg:top-[204%] lg:h-[50px] lg:w-[100px] xl:left-[76%] xl:top-[275%] xl:h-[3.6688rem] xl:w-[6.9325rem]"
          alt="explore"
          height={50}
          width={100}
          loading="lazy"
        />
      </div>
      <div className="mb-1 ml-[-12px] flex justify-center gap-x-4 sm:hidden">
        <Link href="https://play.google.com/store/apps/details?id=com.kreatr">
          <div className=" flex h-[50px] w-[140px] items-center rounded-full border border-[#2A2A2A]  text-[.875rem] font-medium leading-[14px] text-[#2A2A2A]">
            <Image
              className="ml-[.9375rem] h-[1.625rem] w-[1.4375rem]"
              src="/assets/images/home_page/Dark-playstore.svg"
              alt="Play store"
              height={26}
              loading="lazy"
              width={23}
            />
            <p className="button-store mx-[10px] tracking-tight">
              Get it on <br />
              Playstore
            </p>
          </div>
        </Link>
        <Link href="https://apps.apple.com/in/app/kreatr/id6474967284">
          <div className="flex h-[50px] w-[140px] items-center rounded-full border border-[#2A2A2A]  text-[.875rem] font-medium leading-[14px] text-[#2A2A2A]">
            <Image
              src="/assets/images/home_page/Dark-applestore.svg"
              className="ml-[.9375rem] h-[1.625rem] w-[1.4375rem]"
              alt="App store"
              height={26}
              loading="lazy"
              width={23}
            />
            <p className="button-store mx-[10px] tracking-tight">
              Available on
              <br /> App Store
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default RightSection;
