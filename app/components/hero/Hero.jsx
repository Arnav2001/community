"use client";

import LeftSection from "./leftSection/LeftSection";
import RightSection from "./rightSection/RightSection";

const Hero = () => {
  
  return (
    <section>
      <div className="container mx-auto lg:py-0 lg:px-[160px] md:py-[50px] lg:pt-[0px] sm:h-[100vh]">
        <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-1 grid-cols-1 xl:pb-[0px] lg:pb-[0px]   xl:pt-[50px] sm:ml-0  pb-10">
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </section>
  );
};

export default Hero;
