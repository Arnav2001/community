"use client";
import Image from "next/image";
import { useState } from "react";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
} from "@mantine/core";
import classes from "./Testimonials.module.css";
import "@mantine/carousel/styles.css";

const formFeild = () => {
  <div>
    <Text className={classes.category} size="xs">
      {category}
    </Text>
    <Title order={3} className={classes.title}>
      {title}
    </Title>
  </div>;
};

function Card({ title, person }) {
  return (
    <Paper shadow="md" className={classes.card}>
      <div className="relative flex max-h-[80px] flex-col items-center justify-center">
        <div className="mt-[-25px] flex flex-col items-center justify-center sm:mt-[-50px] lg:mx-[120px] lg:mt-[-60px] xl:mx-[150px] xl:mt-[-60px]">
          <Image
            src="/community/assets/images/events_page/star-img.svg"
            height={150}
            width={150}
            className="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] lg:h-[120px] lg:w-[120px] xl:h-[150px] xl:w-[150px]"
            alt="star image"
          />
        </div>
        <div className="content-neue mt-[-20px] text-wrap px-[10px] text-center text-[14px] leading-[20px] text-[#2A2A2A] sm:text-[16px] lg:mt-[-25px] lg:px-[15px] lg:text-[18px] lg:leading-[22px] xl:mt-[-35px] xl:text-[22px] xl:leading-[26px]">
          {title}
        </div>
        <div className="content-neue px-[10px]lg:px-[15px] mt-[10px] text-wrap text-center text-[12px] text-[#2A2A2A] sm:text-[14px] lg:text-[16px] xl:text-[20px]">
          {person}
        </div>
        <div className="absolute  right-[20px] top-[120px] sm:right-[20px] sm:top-[122px] lg:right-[25px] lg:top-[110px] xl:top-[118px]">
          <Image
            src="/community/assets/images/events_page/inverted-commas.svg"
            className="h-[40px] w-[35px] sm:h-[50px] sm:w-[50px] lg:h-[70px] lg:w-[60px] xl:h-[110px] xl:w-[70px] "
            width={50}
            height={50}
            alt="comma image"
          />
        </div>
      </div>
    </Paper>
  );
}

export default function CustomCarousel({ testimonials }) {
  console.log(testimonials);
  const theme = useMantineTheme();
  const xlScreen = useMediaQuery(`(max-width: ${theme.breakpoints.xl}px)`);
  const totalSlides = testimonials.length;
  const [activeIndex, setActiveIndex] = useState(1);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  const handlePrevSlide = () => {
    setActiveIndex(activeIndex === 0 ? totalSlides - 1 : activeIndex - 1);
  };

  const handleNextSlide = () => {
    setActiveIndex(activeIndex === totalSlides - 1 ? 0 : activeIndex + 1);
  };

  const slides = testimonials.map((item, index) => (
    <Carousel.Slide
      key={index}
      className={`${
        activeIndex === index ? classes.activeSlide : classes.slide
      }`}
    >
      <Card title={item.title} person={item.person} />
    </Carousel.Slide>
  ));

  return (
    <div className="relative">
      <Carousel
        slideSize="33.3%"
        align="center"
        slidesToScroll={1}
        className="col-span-5 grid h-[270px] sm:h-[290px] lg:h-[300px] xl:h-[400px]"
        onSlideChange={handleSlideChange}
        initialSlide={activeIndex}
      >
        {slides}
      </Carousel>
    </div>
  );
}
