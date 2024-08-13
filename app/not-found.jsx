import React from "react";
import Header from "./components/header/Header";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <main className="bg-img fixed h-[100%] bg-contain pt-[6.25rem] ">
        <Header />
        <div className="container mx-auto mb-[6.25rem]  sm:mt-[100px] lg:mt-[60px]">
          <div className=" mt-[3rem] grid grid-cols-1 sm:grid-cols-5 md:grid-cols-5 lg:ml-4">
            <div className="order-2 mt-[4.125rem] flex flex-col items-center justify-center sm:order-1 sm:col-span-1 sm:mb-[70px] sm:ml-[20px] sm:mt-[196px] sm:items-start md:mb-[4.75rem] md:ml-[3.125rem]  md:mr-[-4.6875rem] md:mt-[11.75rem] lg:mr-[-4.6875rem] lg:ml-[8.125rem] xl:ml-[6.125rem] lg:mt-[220px] xl:mt-[25.3125rem]">
              <h1 className="error-page mx-auto sm:text-start text-center flex flex-col items-center text-[1.25rem] font-semibold  leading-[20px] sm:mx-0 sm:mr-[-55px]  sm:block sm:leading-5 md:leading-5 lg:text-[30px] lg:leading-8 xl:text-[2.5rem] xl:leading-[2.8125rem]">
                Sometimes things<br className="sm:block hidden" /> go missing<br />
                and that’s okay :)
              </h1>
              <Link
                className="back-home pointer-events-auto mb-[4.1875rem] mt-[2.1875rem] sm:my-0 sm:mt-[25px] md:mt-[1.5625rem] xl:mt-[25px] "
                href="/"
              >
                <button className=" error-page h-[2.5rem] w-[9.1875rem] text-[1.125rem] md:h-[2.8rem] md:w-[12.1875rem] md:text-[20px]  xl:h-[3.46rem] xl:w-[14rem] xl:text-[1.875rem]">
                  Back to home
                </button>
              </Link>
            </div>
            <div className="static pointer-events-none order-1 sm:relative sm:order-2 sm:col-span-4 sm:mx-0">
              <img
                src="/assets/images/404_page/404.svg "
                className="static mx-auto h-[12.8469rem] w-[20rem] sm:absolute  sm:left-[15px] sm:top-[-75px] sm:h-[400px] sm:w-[450px] md:left-[45px] md:top-[-75px] md:h-[410px] md:w-[500px] lg:left-[170px] lg:top-[-35px] lg:h-[400px] lg:w-[800px] xl:left-[5.375rem] xl:top-[-1.25rem] xl:h-[40.3862rem] xl:w-[62.8719rem]"
                alt="page not found"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
