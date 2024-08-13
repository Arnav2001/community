"use client";
import React, { useState } from "react";
import { Tabs } from "@mantine/core";
import { speakers } from "@/constants/constants";
import { sponsors } from "@/constants/constants";
import { spaces } from "@/constants/constants";
import { sellers } from "@/constants/constants";
import CollabrationForm from "../collabration-form/CollabrationForm";
import styles from "./CollabrationSection.module.css";

const CollabrationSection = () => {
  const [tab, setTab] = useState("speakers");

  return (
    <div>
      <div>
        <Tabs variant="pills" radius="xl" defaultValue="speakers">
          <div className="mt-[50px] flex flex-col items-center justify-center sm:mt-[80px]">
            <div
              className={`flex w-full flex-nowrap justify-start overflow-x-auto sm:justify-center ${styles.scrollbarHide}`}
            >
              <Tabs.List className={` ${styles.noWrap}`}>
                <Tabs.Tab
                  className={`${styles.notActiveTab} ${tab === "speakers" && styles.activeTab}`}
                  onClick={() => setTab("speakers")}
                  value="speakers"
                >
                  Speakers
                </Tabs.Tab>
                <Tabs.Tab
                  className={`${styles.notActiveTab} ${tab === "sponsors" && styles.activeTab}`}
                  onClick={() => setTab("sponsors")}
                  value="sponsors"
                >
                  Sponsors
                </Tabs.Tab>
                <Tabs.Tab
                  className={`${styles.notActiveTab} ${tab === "spaces" && styles.activeTab}`}
                  onClick={() => setTab("spaces")}
                  value="spaces"
                >
                  Spaces
                </Tabs.Tab>
                <Tabs.Tab
                  className={`${styles.notActiveTab} ${tab === "sellers" && styles.activeTab}`}
                  onClick={() => setTab("sellers")}
                  value="sellers"
                >
                  Sellers
                </Tabs.Tab>
              </Tabs.List>
            </div>

            <Tabs.Panel value="speakers">
              <div className="mt-[35px] lg:mt-[50px]">
                <div>
                  <h1 className="page-subhead partner-text mb-[20px] text-center text-[20px] leading-[25px] sm:mb-0 sm:text-[26px] sm:leading-[30px] lg:mt-[65px] lg:text-[32px] lg:leading-[0px] xl:mt-[65px] xl:text-[34px]">
                    Do you love spreading knowledge
                    <br className="sm:hidden" /> and igniting minds as a
                    speaker?
                  </h1>
                  <p className="content-neue-medium text-center text-[14px] italic text-[#2A2A2A] sm:mt-[20px] sm:text-[16px] lg:mt-[33px] lg:text-[18px] xl:mt-[40px] xl:text-[22px]">
                    {`Here's what happens when you collaborate with us!`}
                  </p>
                </div>
              </div>
              <div className="items-start justify-center sm:my-[40px] sm:flex lg:mx-[40px] lg:mb-[100px] lg:mt-[60px]">
                <div className="border-[#2A2A2A] px-[20px] sm:w-[50%] sm:border-r sm:px-[10px] lg:px-[50px]">
                  {speakers.map((item, index) => (
                    <div key={index}>
                      <div className="page-subhead text-center text-[18px] sm:text-start sm:text-[22px] lg:text-[26px] xl:text-[28px]">
                        <div className="partner-text mb-[10px] mt-6 ">
                          {item.title}
                        </div>
                      </div>
                      <p className="content-neue text-center text-[16px] leading-[17px] text-[#2A2A2A] sm:text-start sm:text-[16px] sm:leading-[20px] lg:text-[18px] lg:leading-[22px] xl:text-[22px] xl:leading-[26px]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="lg:w-[50%]">
                  <CollabrationForm />
                </div>
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="sponsors">
              <div className="mt-[35px] lg:mt-[50px]">
                <div>
                  <h1 className="page-subhead partner-text mb-[20px] text-center text-[20px] leading-[25px] sm:mb-0 sm:text-[24px] sm:leading-[30px] lg:text-[32px] xl:text-[34px]">
                    {`Turbocharge your brand's`}
                    <br className="sm:hidden" /> visibility through sponsorship!
                  </h1>
                  <p className="content-neue-medium text-center text-[14px] italic text-[#2A2A2A] sm:mt-[20px] sm:text-[16px] lg:mt-[18px] lg:text-[18px] xl:mt-[24px] xl:text-[22px]">
                    {`Here's what happens when you collaborate with us!`}
                  </p>
                </div>
              </div>
              <div className="items-start justify-center sm:my-[40px] sm:flex lg:mx-[40px] lg:mb-[100px] lg:mt-[60px]">
                <div className="border-[#2A2A2A] px-[20px] sm:w-[50%] sm:border-r sm:px-[10px] lg:px-[50px]">
                  {sponsors.map((item, index) => (
                    <div key={index}>
                      <ul className="page-subhead text-center text-[18px] sm:text-start sm:text-[22px] lg:text-[26px] xl:text-[28px]">
                        <div className="partner-text mb-2 mt-6 ">
                          {item.title}
                        </div>
                      </ul>
                      <p className="content-neue text-center text-[16px] leading-[17px] text-[#2A2A2A] sm:text-start sm:text-[16px] sm:leading-[20px] lg:text-[18px] lg:leading-[22px] xl:text-[22px] xl:leading-[26px]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="lg:w-[50%]">
                  <CollabrationForm />
                </div>
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="spaces">
              <div className="mt-[35px] lg:mt-[50px]">
                <div>
                  <h1 className="page-subhead partner-text mb-[20px] text-center text-[20px] leading-[25px] sm:mb-0  sm:text-[24px] sm:leading-[30px] lg:text-[32px] xl:text-[34px]">
                    Got a great space to offer?
                  </h1>
                  <p className="content-neue-medium text-center text-[14px] italic text-[#2A2A2A] sm:mt-[20px] sm:text-[16px] lg:mt-[18px]  lg:text-[18px] xl:mt-[24px] xl:text-[22px]">
                    {`Here's what happens when you collaborate with us!`}
                  </p>
                </div>
              </div>
              <div className="items-start justify-center sm:my-[40px] sm:flex lg:mx-[40px] lg:mb-[100px] lg:mt-[60px]">
                <div className="border-[#2A2A2A] px-[20px] sm:w-[50%] sm:border-r sm:px-[10px] lg:px-[50px]">
                  {spaces.map((item, index) => (
                    <div key={index}>
                      <ul className="page-subhead text-center text-[18px] sm:text-start sm:text-[22px] lg:text-[26px] xl:text-[28px]">
                        <div className="partner-text mb-2 mt-6 ">
                          {item.title}
                        </div>
                      </ul>
                      <p className="content-neue text-center text-[16px] leading-[17px] text-[#2A2A2A] sm:text-start sm:text-[16px] sm:leading-[20px] lg:text-[18px] lg:leading-[22px] xl:text-[22px] xl:leading-[26px]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="lg:w-[50%]">
                  <CollabrationForm />
                </div>
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="sellers">
              <div className="mt-[35px] lg:mt-[50px]">
                <div>
                  <h1 className="page-subhead partner-text mb-[20px] text-center text-[20px] leading-[25px] sm:mb-0 sm:text-[24px] sm:leading-[30px] lg:text-[32px] xl:text-[34px]">
                    Wish to sell your products
                    <br className="sm:hidden" /> or services as a seller?
                  </h1>
                  <p className="content-neue-medium text-center text-[14px] italic text-[#2A2A2A] sm:mt-[20px] sm:text-[16px] lg:mt-[18px] lg:text-[18px] xl:mt-[24px] xl:text-[22px]">
                    {`Here's what happens when you collaborate with us!`}
                  </p>
                </div>
              </div>
              <div className="items-start justify-center sm:my-[40px] sm:flex lg:mx-[40px] lg:mb-[100px] lg:mt-[60px]">
                <div className="border-[#2A2A2A] px-[20px] sm:w-[50%] sm:border-r sm:px-[10px] lg:px-[50px]">
                  {sellers.map((item, index) => (
                    <div key={index}>
                      <ul className="page-subhead text-center text-[18px] sm:text-start sm:text-[22px] lg:text-[26px] xl:text-[28px]">
                        <div className="partner-text mb-2 mt-6 ">
                          {item.title}
                        </div>
                      </ul>
                      <p className="content-neue text-center text-[16px] leading-[17px] text-[#2A2A2A] sm:text-start sm:text-[16px] sm:leading-[20px] lg:text-[18px] lg:leading-[22px] xl:text-[22px] xl:leading-[26px]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="lg:w-[50%]">
                  <CollabrationForm />
                </div>
              </div>
            </Tabs.Panel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default CollabrationSection;
