import React from "react";
import Testimonials from "../testimonials/Testimonials";
import { Carousel } from "@mantine/carousel";

const PastHero = ({ pastData }) => {
  console.log(pastData);

  const isDataAvailable =
    pastData &&
    pastData.heading &&
    pastData.sessionType &&
    pastData.duration &&
    pastData.speakerName &&
    pastData.date &&
    pastData.coverImg &&
    pastData.location &&
    pastData.description &&
    Array.isArray(pastData.images) &&
    Array.isArray(pastData.testimonials);

  const isVideo = (url) => {
    return url.match(/\.(mp4|webm|ogg)$/i);
  };

  if (!pastData) {
    return <div>No Data Available</div>;
  }

  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="mt-[44px] sm:mt-[60px] lg:mx-[140px] lg:mt-[74px] lg:w-[990px] xl:mx-[140px] xl:mt-[120px] xl:w-[1125px]">
              <h1 className="page-subhead text-[22px] leading-[24px] text-[#2A2A2A] sm:text-[48px] lg:text-[54px] lg:leading-[55px] xl:text-[64px]">
                {pastData.heading}
              </h1>
              <div className="mt-[24px] flex sm:mt-[28px] lg:mt-[36px] xl:mt-[44px]">
                <div className="content-neue mr-2  flex h-[24px] w-fit items-center justify-center rounded-[24px] border border-[#2A2A2A] px-[8.5px] text-center text-[14px] text-[#2A2A2A] sm:mr-3 sm:h-[24px] sm:px-[20px] sm:text-[15px] lg:h-[28px] lg:text-[18px] xl:h-[34px] xl:text-[24px]">
                  {pastData.sessionType}
                </div>
                <div className="content-neue mr-2 flex h-[24px] w-fit items-center justify-center rounded-[24px] border border-[#2A2A2A] px-[8.5px] text-center text-[14px] text-[#2A2A2A] sm:mr-3 sm:h-[24px] sm:px-[20px]  sm:text-[15px] lg:h-[28px]  lg:text-[18px] xl:h-[34px]  xl:text-[24px]">
                  {pastData.duration}
                </div>
                <div className="content-neue mr-2 flex h-[24px] w-fit items-center justify-center rounded-[24px] border border-[#2A2A2A] px-[8.5px] text-center text-[14px] text-[#2A2A2A] sm:mr-3 sm:h-[24px] sm:px-[30px]  sm:text-[15px] lg:h-[28px]  lg:text-[18px] xl:h-[34px]  xl:text-[24px]">
                  Speaker: {pastData.speakerName}
                </div>
              </div>
              <div className=" mt-[44px] flex items-center justify-center sm:mt-[48px] lg:mt-[58px] xl:mt-[72px] ">
                <img
                  className="h-[398px] max-w-[100%] object-cover object-center lg:w-[990px] xl:w-[1125px]"
                  src={pastData.coverImg}
                  alt="main-img"
                />
              </div>
              <div className="content-neue-medium mt-[10px] flex items-center justify-center gap-[4px] text-[12px] text-[#2A2A2A] sm:mt-[18px] sm:text-[16px] lg:mt-[24px] lg:gap-[18px] lg:text-[18px] xl:text-[22px]">
                <div>{pastData.date}</div>

                {/* pastData location section */}
                {pastData.location === !null ||
                  (pastData.location.length > 0 && (
                    <>
                      <div className="h-[20px] border-r border-[#2A2A2A] sm:h-[35px] "></div>
                      <div>{pastData.location}</div>
                    </>
                  ))}
              </div>

              {/* about section */}
              <div className="mx-[0px] mt-[25px] lg:mt-[60px] lg:w-[990px] xl:mt-[72px]  xl:w-[1125px]">
                <h3 className="content-neue-medium mb-[14px]  text-center text-[16px] text-[#2A2A2A] sm:mb-[24px] sm:text-start sm:text-[24px] lg:text-[30px] xl:text-[34px]">
                  About
                </h3>

                <div className="content-neue mb-[20px] whitespace-pre-line text-start text-[16px] leading-[20px] text-[#2A2A2A] sm:mb-[30px] sm:text-start sm:text-[16px] lg:text-[18px] lg:leading-[22px] xl:text-[22px] xl:leading-[26px]">
                  <p>{pastData.description}</p>
                </div>
              </div>
            </div>

            {/*past event images section */}
            {pastData.images.length > 0 && (
              <div className="mb-[20px] mt-[20px] sm:mb-[30px] sm:mt-[50px] xl:mt-[72px] ">
                <div className="flex items-center justify-center">
                  <h1 className="content-neue-medium mr-[20px] text-[17px]  text-[#2A2A2A] sm:text-[20px] lg:text-[30px] xl:text-[34px] ">
                    Behold, Snapshots!
                  </h1>
                </div>
                <div className="mt-[28px] hidden justify-center sm:mt-[40px] sm:flex lg:mx-[120px] xl:mx-[190px] ">
                  <Carousel
                    withIndicators={false}
                    slideSize="33.333333%"
                    slideGap="md"
                    align="start"
                    slidesToScroll={1}
                  >
                    {pastData.images
                      .filter((item) => item !== "")
                      .map((item, index) => (
                        <Carousel.Slide key={index}>
                          {isVideo(item) ? (
                            <video
                              className="h-auto w-full object-cover object-center sm:h-[250px] sm:w-[250px] lg:h-[310px] lg:w-[310px] xl:h-[354px] xl:w-[354px]"
                              controls={false}
                              autoPlay
                              playsInline
                              loop
                              muted
                            >
                              <source src={item} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          ) : (
                            <img
                              className="h-auto w-full object-cover object-center sm:h-[250px] sm:w-[250px] lg:h-[310px] lg:w-[310px] xl:h-[354px] xl:w-[354px]"
                              src={item}
                              alt="events img"
                            />
                          )}
                        </Carousel.Slide>
                      ))}
                  </Carousel>
                </div>

                <div className="mt-[28px] flex justify-center sm:mt-[40px] sm:hidden lg:mx-[120px] ">
                  <Carousel
                    withIndicators={false}
                    align="start"
                    slideSize="100%"
                    height={250}
                    slideGap="xs"
                  >
                    {pastData.images
                      .filter((item) => item !== "")
                      .map((item, index) => (
                        <Carousel.Slide key={index}>
                          {isVideo(item) ? (
                            <video
                              className="h-auto w-full object-cover object-center sm:h-[250px] sm:w-[250px] lg:h-[310px] lg:w-[310px] xl:h-[354px] xl:w-[354px]"
                              controls={false}
                              autoPlay
                              playsInline
                              loop
                              muted
                            >
                              <source src={item} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          ) : (
                            <img
                              className="h-auto w-full object-cover object-center sm:h-[250px] sm:w-[250px] lg:h-[310px] lg:w-[310px] xl:h-[354px] xl:w-[354px]"
                              src={item}
                              alt="events img"
                            />
                          )}
                        </Carousel.Slide>
                      ))}
                  </Carousel>
                </div>
              </div>
            )}

            {/* testimonials section */}
            {pastData.testimonials.length > 0 && (
              <div className="my-[25px] w-full sm:my-[50px] xl:mt-[72px] ">
                <h1 className="content-neue-medium text-center text-[17px] text-[#2A2A2A] sm:text-[24px] lg:text-[30px] xl:text-[36px]">
                  {`Happy Folks' Words!`}
                </h1>
                <div className="content-neue mt-[30px] text-[#2A2A2A] lg:mx-[50px]">
                  <Testimonials testimonials={pastData.testimonials} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PastHero;
