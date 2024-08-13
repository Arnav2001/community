"use client";

import React, { useState, useRef, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  useForm,
  isEmail,
  hasLength,
  matches,
  isNotEmpty,
} from "@mantine/form";
import { Button, TextInput } from "@mantine/core";
import styles from "./UpcomingHero.module.css";
import { Carousel } from "@mantine/carousel";
import PaymentSuccess from "@/app/payment-success/page";
import PaymentFailure from "@/app/payment-failure/page";

const UpcomingHero = ({ upcomingData, setHasUnsavedChanges }) => {
  const BBACKEND_EVENT_INFO_URI =
    process.env.NEXT_PUBLIC_BACKEND_EVENT_INFO_URI;
  const { id } = useParams();
  const router = useRouter();
  const targetRef = useRef(null);
  const nameRefs = useRef([]);
  const phoneRefs = useRef([]);
  const emailRefs = useRef([]);

  const form = useForm({
    mode: "controlled",
    initialValues: {
      forms: [{ name: "", phoneNo: "", email: "" }],
    },
    validate: {
      forms: {
        name: hasLength({ min: 2, max: 20 }, "Please write your name", {
          isNotEmpty: true,
        }),
        phoneNo: matches(
          /^(\+\d{1,3}[-.\s]??)?\d{10}$/,
          "Please enter a valid phone number",
          { isNotEmpty: true },
        ),
        email: isEmail("Please enter a valid email", {
          isNotEmpty: true,
        }),
      },
    },
  });

  const addForm = () => {
    if (form.values.forms.length < 10) {
      form.setFieldValue("forms", [
        ...form.values.forms,
        { name: "", phoneNo: "", email: "" },
      ]);
    }
  };

  const removeForm = () => {
    if (form.values.forms.length > 1) {
      form.setFieldValue("forms", form.values.forms.slice(0, -1));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validation = form.validate();
    // Validation check added here
    if (validation.hasErrors) {
      // Find the first field with an error and scroll to it
      for (let i = 0; i < form.values.forms.length; i++) {
        if (validation.errors[`forms.${i}.name`]) {
          window.scrollTo({
            top:
              nameRefs.current[i].getBoundingClientRect().top +
              window.scrollY -
              200,
            behavior: "smooth",
          });
          break;
        } else if (validation.errors[`forms.${i}.phoneNo`]) {
          window.scrollTo({
            top:
              phoneRefs.current[i].getBoundingClientRect().top +
              window.scrollY -
              200,
            behavior: "smooth",
          });
          break;
        } else if (validation.errors[`forms.${i}.email`]) {
          window.scrollTo({
            top:
              emailRefs.current[i].getBoundingClientRect().top +
              window.scrollY -
              200,
            behavior: "smooth",
          });
          break;
        }
      }
      return; // Exit the function early
    }

    if (!validation.hasErrors) {
      console.log(form.values.forms);
      try {
        const res = await fetch(`${BBACKEND_EVENT_INFO_URI}/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            newFormInfoList: form.values.forms.map((formInstance) => ({
              name: formInstance.name,
              phoneNo: formInstance.phoneNo,
              email: formInstance.email,
            })),
          }),
        });

        // Handle the response correctly
        if (res.ok) {
          console.log("Data sent successfully");
          form.reset();
          router.push("/payment-success");
        } else {
          throw new Error("Failed to update event information");
        }
      } catch (error) {
        console.error("Error updating event information:", error);
        router.push("/payment-failure");
      }
    }
    setHasUnsavedChanges(false);
  };

  const scrollToDiv = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Check if any form instance has data filled
    const anyFormFilled = form.values.forms.some(
      (formInstance) =>
        formInstance.name !== "" ||
        formInstance.phoneNo !== "" ||
        formInstance.email !== "",
    );

    setHasUnsavedChanges(anyFormFilled);
  }, [form.values.forms, setHasUnsavedChanges]);

  const isDataAvailable =
    upcomingData &&
    upcomingData.heading &&
    upcomingData.sessionType &&
    upcomingData.duration &&
    upcomingData.speakerName &&
    upcomingData.date &&
    upcomingData.coverImg &&
    upcomingData.location &&
    upcomingData.price &&
    upcomingData.description &&
    Array.isArray(upcomingData.images);

  if (!isDataAvailable) {
    return <div>No Data Available</div>;
  }

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="mt-[44px] sm:mt-[60px] lg:mt-[74px]  lg:w-[990px] xl:mt-[120px] xl:w-[1125px]">
            <h1 className="page-subhead text-[22px] leading-[24px] text-[#2A2A2A] sm:text-[48px] lg:text-[54px] lg:leading-[55px] xl:text-[64px]">
              {upcomingData.heading}
            </h1>
            <div className="mt-[24px] flex sm:mt-[28px] lg:mt-[36px] xl:mt-[44px] ">
              <div className="content-neue mr-2  flex h-[24px] w-fit items-center justify-center rounded-[24px] border border-[#2A2A2A] px-[8.5px] text-center text-[14px] text-[#2A2A2A] sm:mr-3 sm:h-[24px] sm:px-[20px] sm:text-[15px] lg:h-[28px] lg:text-[18px] xl:h-[34px] xl:text-[24px]">
                {upcomingData.sessionType}
              </div>
              <div className="content-neue mr-2 flex h-[24px] w-fit items-center justify-center rounded-[24px] border border-[#2A2A2A] px-[8.5px] text-center text-[14px] text-[#2A2A2A] sm:mr-3 sm:h-[24px] sm:px-[20px]  sm:text-[15px] lg:h-[28px]  lg:text-[18px] xl:h-[34px]  xl:text-[24px]">
                {upcomingData.duration}
              </div>
              <div className="content-neue mr-2 flex h-[24px] w-fit items-center justify-center rounded-[24px] border border-[#2A2A2A] px-[8.5px] text-center text-[14px] text-[#2A2A2A] sm:mr-3 sm:h-[24px] sm:px-[30px]  sm:text-[15px] lg:h-[28px]  lg:text-[18px] xl:h-[34px]  xl:text-[24px]">
                Speaker: {upcomingData.speakerName}
              </div>
            </div>
            <div className="mt-[44px] flex items-center justify-center sm:mt-[48px] lg:mt-[58px] xl:mt-[72px]">
              <img
                className="h-auto max-w-[100%] object-cover object-center lg:w-[990px] xl:w-[1125px] "
                src={upcomingData.coverImg}
                alt="main-img"
              />
            </div>
            <div className="content-neue-medium mt-[10px] flex items-center  justify-center gap-[4px] text-[13px] text-[#2A2A2A] sm:mt-[18px] sm:gap-[18px] sm:text-[16px] lg:gap-[18px] lg:text-[18px] xl:text-[22px]">
              <div>{upcomingData.date}</div>
              <div className="h-[20px] border-r border-[#2A2A2A] sm:h-[35px]"></div>
              <div>{upcomingData.location}</div>
              <div className="h-[20px] border-r border-[#2A2A2A] sm:h-[35px]"></div>
              <div>{`₹  ${upcomingData.price}`}</div>
              <div className="h-[20px] sm:h-[35px] sm:border-r  sm:border-[#2A2A2A]"></div>
              <div
                onClick={scrollToDiv}
                className=" upcoming-btn hidden h-[24.52px] w-[128.12px]  cursor-pointer items-center  justify-center rounded-[40px] text-center text-[14px] hover:border hover:border-[#2A2A2A] hover:bg-transparent hover:text-[#2A2A2A]  sm:flex sm:h-[30px] sm:w-[200px] sm:text-[16px] lg:h-[38px] lg:w-[221px] lg:rounded-[80px] lg:text-[18px] xl:h-[45px] xl:w-[251px] xl:text-[22px]"
              >
                Book Now
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div
                onClick={scrollToDiv}
                className=" upcoming-btn mt-[20px] flex h-[24.52px] w-[128.12px] cursor-pointer items-center justify-center rounded-[40px] text-center text-[13px] sm:hidden sm:h-[38px] sm:w-[241px] sm:text-[20px] lg:h-[48px] lg:w-[261px] lg:rounded-[80px] lg:text-[22px] xl:h-[54px] xl:w-[281px] xl:text-[30px]"
              >
                Book Now
              </div>
            </div>
            <div className="mx-[0px] mt-[25px] text-[#2A2A2A]  lg:mt-[60px] lg:w-[990px]  xl:mt-[72px]  xl:w-[1125px]">
              <h3 className="content-neue-medium mb-[14px] text-center text-[16px] sm:text-start sm:text-[24px] lg:text-[30px] xl:text-[34px]">
                About
              </h3>
              <br />
              <div className="content-neue whitespace-pre-line text-start text-[16px] leading-[20px] sm:text-start sm:text-[20px] lg:text-[18px] lg:leading-[22px] xl:text-[22px] xl:leading-[26px]">
                <p>{upcomingData.description}</p>
              </div>
            </div>
          </div>

          <div className="mt-[20px] lg:mt-[50px] xl:mt-[72px]">
            <div className="flex items-center justify-center">
              <h1 className="content-neue-medium text-[16px] text-[#2A2A2A]  sm:text-[20px] lg:text-[28px] xl:text-[34px]">
                Explore more events
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
                {upcomingData.images.map((item, index) => (
                  <Carousel.Slide key={index}>
                    <img
                      className={` h-auto w-full object-cover object-center  sm:h-[250px] sm:w-[250px] lg:h-[310px] lg:w-[310px] xl:h-[354px] xl:w-[354px]`}
                      src={item}
                      alt="events img"
                    />
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
                {upcomingData.images.map((item, index) => (
                  <Carousel.Slide key={index}>
                    <img
                      className={` h-auto w-full object-cover object-center  sm:h-[250px] sm:w-[250px] lg:h-[310px] lg:w-[310px] xl:h-[354px] xl:w-[354px]`}
                      src={item}
                      alt="events img"
                    />
                  </Carousel.Slide>
                ))}
              </Carousel>
            </div>
          </div>
          <div
            ref={targetRef}
            id="target-section"
            className="mt-[30px] sm:mt-[50px]"
          >
            <h1 className="content-neue-medium text-center text-[16px] text-[#2A2A2A] sm:text-[22px] lg:text-[30px] xl:text-[34px]">
              Fill in the details
            </h1>
            <form onSubmit={handleSubmit} className="mt-[10px] sm:mt-[20px]">
              {form.values.forms.map((formInstance, index) => (
                <div key={index}>
                  <p className="page-subhead mt-[30px] text-[12px] text-[#2A2A2A] sm:mt-[50px] sm:text-[16px] lg:text-[20px] xl:text-[24px]">
                    {`Person  ${index + 1}`}
                  </p>
                  <div className={`${styles.formWrap} w-full`}>
                    <TextInput
                      label="Name"
                      mt={10}
                      radius={50}
                      placeholder="Bob Ross"
                      classNames={{
                        input: styles.transparentInput,
                        label: styles.inputLabel,
                        error: styles.inputError,
                      }}
                      withAsterisk
                      {...form.getInputProps(`forms.${index}.name`)}
                      ref={(element) => (nameRefs.current[index] = element)}
                    />
                    <br className="hidden sm:block" />
                    <TextInput
                      label="Phone Number"
                      mt={10}
                      radius={50}
                      placeholder="+00 1234567890"
                      classNames={{
                        input: styles.transparentInput,
                        label: styles.inputLabel,
                        error: styles.inputError,
                      }}
                      withAsterisk
                      inputMode="numeric"
                      {...form.getInputProps(`forms.${index}.phoneNo`)}
                      ref={(element) => (phoneRefs.current[index] = element)}
                    />
                    <br className="hidden sm:block" />
                    <TextInput
                      label="Email"
                      mt={10}
                      radius={50}
                      placeholder="happyaccidents@gmail.com"
                      classNames={{
                        input: styles.transparentInput,
                        label: styles.inputLabel,
                        error: styles.inputError,
                      }}
                      withAsterisk
                      {...form.getInputProps(`forms.${index}.email`)}
                      ref={(element) => (emailRefs.current[index] = element)}
                    />
                  </div>
                </div>
              ))}
              <div className="mt-[20px] flex items-center justify-center">
                <button
                  className={`flex h-[20px] w-[20px] items-center justify-center rounded-full pb-[3px] text-center text-[20px] sm:h-[22px] sm:w-[22px] lg:h-[28px] lg:w-[28px] xl:h-[32px] xl:w-[32px] ${
                    form.values.forms.length <= 1
                      ? "border border-gray-400 text-gray-400"
                      : "border border-[#2A2A2A]"
                  }`}
                  onClick={form.values.forms.length > 1 ? removeForm : null}
                  type="button"
                  disabled={form.values.forms.length <= 1}
                >
                  -
                </button>
                <div className="content-neue-medium flex h-[30px] w-[30px] flex-col items-center justify-center text-[12px] sm:mx-[10px] lg:text-[24px] xl:text-[28px]">
                  {form.values.forms.length}
                </div>
                <button
                  className={`flex h-[20px] w-[20px] items-center justify-center rounded-full pb-[3px] text-center text-[20px] sm:h-[22px] sm:w-[22px] lg:h-[28px] lg:w-[28px] xl:h-[32px] xl:w-[32px] ${
                    form.values.forms.length >= 10
                      ? "border border-gray-400 text-gray-400"
                      : "border border-[#2A2A2A]"
                  }`}
                  onClick={form.values.forms.length < 10 ? addForm : null}
                  type="button"
                  disabled={form.values.forms.length >= 10}
                >
                  +
                </button>
              </div>
              <div className="mt-[10px] sm:mx-[150px] sm:mt-[40px]">
                <div>
                  <p className="content-neue text-center text-[14px] leading-[20px] text-[#2A2A2A] sm:text-[16px] lg:text-[18px] lg:leading-[22px] xl:text-[22px] xl:leading-[26px]">
                    By clicking on proceed, I agree that I have read and
                    <br />
                    accepted{" "}
                    <a href="/legal" className=" text-blue-700">
                      T&C
                    </a>{" "}
                    and{" "}
                    <a href="/legal" className=" text-blue-700">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
              <div className="mt-[20px] sm:mt-[30px]">
                <h1 className="content-neue-medium text-center text-[12px] text-[#2A2A2A] sm:text-[16px] lg:text-[20px] xl:text-[24px]">
                  Total Amount :{" "}
                  <span className="page-subhead text-[10px] text-[#2A2A2A] sm:text-[16px] lg:text-[20px] xl:text-[24px]">
                    INR {form.values.forms.length * upcomingData.price}.00
                  </span>
                </h1>
              </div>
              <div className="content-neue mb-[60px] mt-[20px] items-center justify-center text-center sm:mb-[65px] sm:mt-[28px] sm:flex lg:mt-[36px]  lg:gap-3 xl:mt-[44px] xl:gap-5">
                <Button
                  className={styles.formButton}
                  radius={50}
                  type="submit"
                  mt="sm"
                >
                  Proceed to Pay
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingHero;
