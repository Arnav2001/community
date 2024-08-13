import React from "react";
import Link from "next/link";

const LeftImageSection = () => {
  return (
    <div className="relative col-span-3 flex  min-h-[100%] items-center sm:ml-0 lg:mr-[85px] lg:mt-[-32px] xl:mr-0">
      <div className="page-heading absolute hidden text-[50px] text-[#2A2A2A]  sm:left-[-46px] sm:top-[58px] sm:block sm:text-[74px] lg:left-[5.5%] lg:top-[15%] lg:text-[94px] xl:left-[3.4%] xl:top-[10%] xl:text-[110px]">
        <h1>Get In Touch-</h1>
      </div>
      <div className="page-heading absolute left-[8%] top-[32%]  block text-[62px]  text-[#2A2A2A]  sm:hidden ">
        <h1>Get In Touch</h1>
      </div>
      <div className="sm:grid sm:grid-cols-5 lg:mt-[60px] lg:gap-10 xl:gap-12  ">
        <div className="content-neue col-span-2 hidden sm:ml-[-45px] sm:mt-[60px] sm:block lg:ml-[34px] lg:mt-[40px] xl:ml-[9%] xl:mt-[20%]">
          <p className=" contact-text text-[16px] leading-5 sm:text-[14px] lg:text-[18px] lg:leading-[22px] xl:text-[22px] xl:leading-[26px]">
            For all your ‘I have a doubt!’, ‘Can I…’, ‘What if…’, or simply want
            to grab a coffee…?
          </p>
          <ul>
            <li>
              <Link
                href="mailto:community@thekreatr.com"
                className="flex items-center  sm:mt-[10px] sm:text-[13px] lg:mt-[24px] lg:text-[16px] xl:mt-[20px] xl:text-[18px]"
              >
                <img
                  className="mr-1 sm:h-[15px] sm:w-[15px] lg:h-[20px] lg:w-[20px] xl:h-[20px] xl:w-[20px]"
                  src="/assets/images/contact_page/Email-form.svg"
                  alt="Email"
                />
                community@thekreatr.com
              </Link>
            </li>
            <li>
              <Link
                href="tel:+91 72040 04953"
                className="flex  items-center sm:mt-[0px] sm:text-[13px] lg:mt-0 lg:text-[16px] xl:text-[18px]"
              >
                <img
                  className="mr-1 sm:h-[15px] sm:w-[15px] lg:h-[20px] lg:w-[20px] xl:h-[20px] xl:w-[20px]"
                  src="/assets/images/contact_page/Phone-form.svg"
                  alt="Phone"
                />
                +91 72040 04953
              </Link>
            </li>
          </ul>
        </div>
        <div className="sm:col-span-3 ">
          <img
            className="h-[137px] w-[19.625rem] rounded-xl object-cover object-center sm:h-[171px] sm:w-[400px] lg:h-[171px] lg:w-[400px] xl:h-[191px] xl:w-[418px]"
            src="/assets/images/contact_page/contact-img.jpg"
            alt="form img"
          />
        </div>
        <div className="content-neue mt-[50px] flex flex-col items-center justify-center sm:hidden ">
          <p className=" contact-text  text-center text-[16px] leading-5">
            For all your ‘I have a doubt!’,
            <br /> ‘Can I…’, ‘What if…’, or simply want to
            <br /> grab a coffee…?
          </p>
          <ul>
            <li>
              <Link
                href="mailto:marketing@thekreatr.com"
                className="mt-[15px] flex items-center  gap-1 text-[14px]"
              >
                <img
                  className="mr-1 xl:h-[15px] xl:w-[15px]"
                  src="/assets/images/contact_page/Email-form.svg"
                  alt="Email"
                />
                marketing@thekreatr.com
              </Link>
            </li>
            <li>
              <Link
                href="tel:+91 72040 04953"
                className="mt-[5px] flex  items-center justify-center text-[14px]"
              >
                <img
                  className="mr-1 xl:h-[15px] xl:w-[15px]"
                  src="/assets/images/contact_page/Phone-form.svg"
                  alt="Phone"
                />
                +91 72040 04953
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftImageSection;
