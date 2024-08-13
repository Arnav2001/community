import React from "react";
import LeftGifSection from "./leftGif-section/LeftGifSection";
import RightFormSection from "./rightForm-section/RightFormSection";

const ContactHero = () => {
  return (
    <section>
      <div className="container mx-auto sm:h-[100vh] sm:flex justify-center items-center ">
        <div className="py-[50px] sm:mx-4 lg:mx-0 lg:pb-[90px] lg:pt-[60px] xl:pb-[150px]  xl:pt-[50px]">
          <div className="flex flex-col items-center justify-center gap-10 sm:grid sm:grid-cols-5 sm:gap-20 xl:gap-24">
            <LeftGifSection />
            <RightFormSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
