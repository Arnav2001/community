
import React from "react";
import Testimonials from "../testimonials/Testimonials";


const PastHero = ({pastData}) => {
  const isDataAvailable = pastData && 
    pastData.heading && 
    pastData.sessionType && 
    pastData.duration && 
    pastData.speakerName && 
    pastData.date && 
    pastData.coverImg &&
    pastData.location && 
    pastData.description && 
    Array.isArray(pastData.images);

  if (!isDataAvailable) {
    return <div>No Data Available</div>;
  }
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="lg:mt-[80px] mt-[44px] sm:mt-[60px] xl:mt-[100px]">
              <h1 className="page-subhead text-[22px] leading-[24px] lg:leading-[55px] sm:text-[48px] lg:text-[54px] xl:text-[64px]">
                {pastData.heading}
              </h1>
              <div className="sm:mb-[20px] sm:mt-[20px] my-[10px] flex">
                <div className="content-neue flex justify-center items-center mr-3 rounded-[24px] border border-black text-center text-[10px] sm:text-[15px] h-[14px] w-[46px] sm:h-[24px] sm:w-[66px] lg:h-[28px] lg:w-[80px] lg:text-[18px] xl:h-[34px] xl:w-[112px] xl:text-[24px] ">
                  {pastData.sessionType}
                </div>
                <div className="content-neue flex justify-center items-center mr-3 rounded-[24px] border border-black text-center text-[10px] sm:text-[15px] h-[14px] w-[36px] sm:h-[24px] sm:w-[50px] lg:h-[28px] lg:w-[60px] lg:text-[18px] xl:h-[34px] xl:w-[87px] xl:text-[24px] ">
                  {pastData.duration}
                </div>
                <div className="content-neue flex justify-center items-center mr-3 rounded-[24px] border border-black text-center text-[10px] sm:text-[15px] h-[14px] w-[110px] sm:h-[24px] sm:w-[180px] lg:h-[28px] lg:w-[200px] lg:text-[18px] xl:h-[34px] xl:w-[264px] xl:text-[24px]">
                  Speaker: {pastData.speakerName}
                </div>
              </div>
              <div className="flex justify-center items-center">
              <img
                className="h-auto max-w-[100%] object-cover object-center lg:w-[990px] xl:w-[1125px]"
                src={pastData.coverImg}
                alt="main-img"
              />
              </div>
              <div className="content-neue-medium lg:gap-[18px] gap-[5px] sm:mt-[18px] mt-[10px] flex items-center justify-center text-[13px] sm:text-[18px] lg:text-[22px] xl:text-[30px]">
                <div >
                  {pastData.date}
                </div>
                <div className="border-r border-black sm:h-[35px] h-[20px]"></div>
                <div>{pastData.location}</div>
              </div>
            </div>
            <div className="xl:mx-[166px] lg:mx-[126px] lg:mt-[60px] mt-[25px] mx-[20px]">
              <h3 className="content-neue-medium sm:text-start text-center text-[16px] sm:text-[24px] lg:text-[26px] xl:text-[34px]">
                About
              </h3>
              <br />
              <div className="content-neue sm:text-start text-center text-[14px] leading-[20px] sm:text-[18px] lg:text-[22px] lg:leading-[24px] xl:text-[28px] xl:leading-[33px]">
                <p>
                  {pastData.description}
                </p>
              </div>
            </div>
            <div className="sm:mt-[50px] mt-[20px]">
              <div className="flex items-center justify-center">
                <h1 className="page-subhead mr-[20px] text-[17px] sm:text-[24px] lg:text-[30px] xl:text-[36px]">
                  Behold, Snapshots!
                </h1>
              </div>
              <div className="mt-[20px] flex items-center justify-center sm:mt-[40px]">
              {pastData.images.map((item,index)=>(
                <img
                key={index}
                className="mr-1 h-[106px] object-cover object-center w-[106px] sm:h-[250px] sm:w-[250px] sm:mr-4 lg:h-[310px] lg:w-[310px] xl:h-[354px] xl:w-[354px]"
                src={item}
                alt="events img"
              />
              ))}
            </div>
            </div>
            <div className="w-full sm:my-[40px] my-[25px] ">
              <h1 className="page-subhead text-center text-[17px] sm:text-[24px] lg:text-[30px] xl:text-[36px]">
                {`Happy Folks' Words!`}
              </h1>
              <div className="lg:mx-[50px] mt-[30px]">
              <Testimonials />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PastHero;
