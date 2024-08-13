"use client";
import React, { useEffect, useState } from "react";
import { Tabs } from "@mantine/core";
import Link from "next/link";
import styles from "./EventsHero.module.css";
import Spinner from "../../spinner/Spinner";

const EventsHero = () => {
  const [loading, setLoading] = useState(true);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [hoveredEventId, setHoveredEventId] = useState(null);

  const BACKEND_EVENT_INFO_URI = process.env.NEXT_PUBLIC_BACKEND_EVENT_INFO_URI;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(BACKEND_EVENT_INFO_URI);
        const data = await response.json();

        const upcoming = data.filter((event) => event.eventType === "upcoming");
        const past = data.filter((event) => event.eventType === "past");

        setUpcomingEvents(upcoming);
        setPastEvents(past);
      } catch (error) {
        console.error("Error fetching events data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);
  const [tab, setTab] = useState("past");

  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div>
          <Tabs variant="pills" radius="xl" defaultValue="past">
            {/* heading section */}
            {/* upcoming heading section */}

            <Tabs.Panel value="upcoming">
              <div className="page-heading relative mt-[48px] text-center sm:mt-[100px] lg:mt-[105px] xl:mt-[166px]">
                <h1 className="text-center text-[40px] leading-[32px] text-[#2A2A2A] sm:text-[74px] sm:leading-[0px] lg:text-[94px] xl:text-[110px] ">
                  Kreatr’s
                  <br className="sm:hidden" /> very own
                </h1>
                <div className="relative sm:h-[50px]">
                  <h1 className="absolute right-[27%] top-[90%] rotate-[-1deg] text-center text-[48px] leading-[38px] text-blue-600 sm:left-[1%] sm:right-0 sm:top-[95%] sm:text-[74px] sm:leading-[0px]  lg:right-[2%] lg:top-[124%] lg:text-[94px] xl:right-[2%] xl:top-[148%] xl:text-[110px]">
                    events and
                    <br className="block sm:hidden" /> Workshops
                  </h1>
                </div>
              </div>
            </Tabs.Panel>
            {/* past heading section */}
            <Tabs.Panel value="past">
              <div className="page-heading relative mb-[-40px] mt-[48px] sm:mb-0 sm:mt-[100px] sm:h-[50px] lg:mt-[105px] xl:mt-[166px] ">
                <h1 className="text-center text-[40px] leading-[33px] text-[#2A2A2A] sm:text-[74px] sm:leading-[0px] lg:text-[94px] xl:text-[110px] ">
                  Take a look
                  <br className="sm:hidden" /> at our
                </h1>
                <h1 className="absolute right-[25%] top-[64%] rotate-[-1deg] text-center text-[48px] text-blue-600 sm:right-[28%] sm:top-[-5%] sm:text-[74px] lg:right-[35%] lg:top-[-15%] lg:text-[94px] xl:right-[34%] xl:top-[-18%] xl:text-[110px]">
                  past Events
                </h1>
              </div>
            </Tabs.Panel>

            {/* toggle section */}
            <div className="mb-[34px] mt-[105px] flex justify-center sm:mb-[0px]  lg:mt-[120px] xl:mt-[140px]">
              <Tabs.List>
                <Tabs.Tab
                  className={`${styles.notActiveTab} ${tab === "upcoming" && styles.activeTab}`}
                  onClick={() => setTab("upcoming")}
                  value="upcoming"
                >
                  Upcoming
                </Tabs.Tab>
                <Tabs.Tab
                  className={`${styles.notActiveTab} ${tab === "past" && styles.activeTab}`}
                  onClick={() => setTab("past")}
                  value="past"
                >
                  Past
                </Tabs.Tab>
              </Tabs.List>
            </div>

            {/* hero section */}

            {/* upcoming hero section */}
            {upcomingEvents.length === 0 && tab !== "past" ? (
              <div className="page-subhead my-[35px] text-center text-[30px] text-[#2A2A2A]">
                No upcoming events
              </div>
            ) : (
              <Tabs.Panel value="upcoming">
                <div className="mb-[44px] flex flex-col items-center justify-center sm:mb-0">
                  <div className="grid grid-cols-1 gap-8 sm:my-[60px] sm:ml-0 sm:grid-cols-2  sm:gap-[30px] lg:grid-cols-3">
                    {upcomingEvents.map((event) => (
                      <Link
                        href={`/events-upcoming/${event.id}`}
                        key={event.id}
                      >
                        <div
                          className={`upcoming-box  mb-[30px] h-[357px] w-[290px] rounded-[15px] border border-[#2A2A2A] p-[15px] lg:h-[400px] lg:w-[321px] lg:p-[18px] xl:h-[521px] xl:w-[381px] xl:p-5`}
                          onMouseEnter={() => {
                            if (window.innerWidth >= 640) {
                              setHoveredEventId(event.id);
                            }
                          }}
                          onMouseLeave={() => {
                            if (window.innerWidth >= 640) {
                              setHoveredEventId(null);
                            }
                          }}
                          style={{
                            backgroundColor:
                              hoveredEventId === event.id
                                ? event.hoverColor
                                : "transparent",
                          }}
                        >
                          <img
                            className="h-[225.63px] w-[261.18px] rounded-[15px] object-cover object-center lg:h-[250px] lg:w-[280px] xl:h-[319.77px] xl:w-[348px]"
                            src={event.thumbnail}
                            alt="upcoming img"
                          />
                          <div className="my-[12px] flex items-start justify-between lg:mb-[20px] lg:mt-[10px] lg:min-h-[56px] xl:my-[25px] xl:min-h-[68px]">
                            <p className="page-subhead text-[24px] leading-[21px] text-[#2A2A2A] sm:text-[26px] sm:leading-[25px] lg:text-[28px] lg:leading-[28px] xl:text-[32px] xl:leading-[35px]">
                              {event.heading}
                            </p>
                          </div>
                          <div className="upcoming-sub content-neue-medium my-[14px] flex h-[28.34px] w-[100px] items-center justify-center rounded-[30px] border border-[#2A2A2A]  text-center text-[12px] text-[#2A2A2A] sm:my-0 sm:px-0 sm:text-[13px] lg:my-[16px] lg:mt-[-8px] lg:h-[38.16px] lg:w-[123.87px] lg:text-[15px] xl:h-[40.16px] xl:w-[133.87px] xl:text-[16px]">
                            Register now
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </Tabs.Panel>
            )}

            {/* past hero section */}
            <Tabs.Panel value="past">
              <div className="mb-[44px] flex flex-col items-center justify-center sm:mb-0">
                <div className="grid grid-cols-1 gap-8 sm:my-[60px] sm:ml-0 sm:grid-cols-2  sm:gap-[30px] lg:grid-cols-3">
                  {pastEvents.map((event) => (
                    <Link href={`/events-past/${event.id}`} key={event.id}>
                      <div
                        className="past-box mb-[30px] h-[357px] w-[290px] rounded-[15px] border border-[#2A2A2A] p-[15px] sm:mb-[30px] lg:h-[400px] lg:w-[321px] lg:p-[18px] xl:h-[521px] xl:w-[381px] xl:p-5"
                        onMouseEnter={() => {
                          if (window.innerWidth >= 640) {
                            setHoveredEventId(event.id);
                          }
                        }}
                        onMouseLeave={() => {
                          if (window.innerWidth >= 640) {
                            setHoveredEventId(null);
                          }
                        }}
                        style={{
                          backgroundColor:
                            hoveredEventId === event.id
                              ? event.hoverColor
                              : "transparent",
                        }}
                      >
                        <img
                          className="h-[225.63px] w-[261.18px] rounded-[15px] object-cover object-center lg:h-[250px] lg:w-[280px] xl:h-[319.77px] xl:w-[348px]"
                          src={event.thumbnail}
                          alt="past img"
                        />
                        <div className="my-[12px] flex items-start justify-between lg:mb-[-4px] lg:mt-[9px] lg:min-h-[56px] xl:my-[20px] xl:min-h-[68px]">
                          <p className="page-subhead text-[24px] leading-[21px] text-[#2A2A2A] sm:text-[26px] sm:leading-[25px] lg:text-[28px] lg:leading-[28px] xl:text-[32px] xl:leading-[35px]">
                            {event.heading}
                          </p>
                        </div>
                        <div className="past-sub content-neue-medium my-[14px] flex h-[28px] w-[124px] items-center justify-center rounded-[30px] border border-[#2A2A2A]  text-center  text-[12px] text-[#2A2A2A] sm:my-0 sm:px-0 sm:text-[13px] lg:my-[16px] lg:h-[40.16px] lg:w-[162px] lg:text-[15px] xl:text-[16px]">
                          Explore the event
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Tabs.Panel>
          </Tabs>
        </div>
      )}
    </>
  );
};

export default EventsHero;
