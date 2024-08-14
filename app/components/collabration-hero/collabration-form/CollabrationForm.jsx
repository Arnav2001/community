"use client";
import React, { useState } from "react";
import {
  useForm,
  isEmail,
  hasLength,
  matches,
  isNotEmpty,
} from "@mantine/form";
import { Select, Button, TextInput } from "@mantine/core";
import styles from "./CollabrationForm.module.css";

const CollabrationForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      phoneNumber: "",
      email: "",
      collaborationType: "",
    },

    validate: {
      name: hasLength({ min: 2, max: 20 }, "Please write your name"),
      phoneNumber: matches(
        /^(\+\d{1,3}[-.\s]??)?\d{10}$/,
        "Please enter a valid phone number",
      ),
      email: isEmail("Please enter a valid email"),
      collaborationType: isNotEmpty("Please select any type"),
    },
  });

  const BACKEND_COLLABORATION_URI =
    process.env.NEXT_PUBLIC_BACKEND_COLLABORATION_URI;

  const sendFormData = async (data) => {
    console.log(data);
    if (BACKEND_COLLABORATION_URI) {
      try {
        const response = await fetch(BACKEND_COLLABORATION_URI, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          console.log("Data sent successfully");
          setSubmitted(true);
          form.reset({
            name: "",
            phoneNumber: "",
            email: "",
            collaborationType: "",
          });


          setTimeout(() => {
            setSubmitted(false);
          }, 3000);
        } else {
          throw new Error("Failed to send data");
        }
      } catch (error) {
        console.error("Error sending data:", error);
      }
    } else {
      console.error("BACKEND_COLLABORATION_URI is not defined");
    }
  };

  return (
    <div className="px-[30px] py-[35px] lg:px-[95px] lg:py-[50px]">
      <div className="lg:mt-[-24px]">
        <h1 className="content-neue-medium text-center text-[18px] sm:text-start sm:text-[24px] lg:text-[28px] xl:text-[34px]">
          Fill in the details
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center sm:block"></div>
      <div className="flex items-center justify-center sm:block">
        <form
          className={`${styles.formWrap} w-full`}
          onSubmit={form.onSubmit((values) => {
            sendFormData(values);
          })}
        >
          <div className="mt-[20px] w-[100%] sm:mt-[40px] lg:mb-[22px] lg:w-[50%]">
            <label className="content-neue text-[16px] sm:text-[18px] mb-[10px]">
              Collaboration Type<span className={styles.dropDownStar}> *</span>
            </label>
            <Select
            mt={7}
              radius={50}
              
              // classNames={{
              //   input: styles.dropDown,
              //   error: styles.dropDownError,
              // }}
              classNames={{
                input: styles.dropDown,
                dropdown: styles.selectDropDown,
                option: styles.selectOption,
                error: styles.dropDownError,
              }}
              key={form.key("collaborationType")}
              placeholder="Choose type"
              data={["Speakers", "Sponsors", "Spaces", "Sellers"]}
              {...form.getInputProps("collaborationType")}
            />
          </div>
          <TextInput
            label="Name"
            radius={50}
            placeholder="Bob Ross"
            classNames={{
              input: styles.transparentInput,
              label: styles.inputLabel,
              error: styles.inputError,
            }}
            withAsterisk
            key={form.key("name")}
            {...form.getInputProps("name")}
          />
          <br className="hidden lg:block" />
          <TextInput
            label="Phone Number"
            radius={50}
            placeholder="+00 1234567890"
            classNames={{
              input: styles.transparentInput,
              label: styles.inputLabel,
              error: styles.inputError,
            }}
            withAsterisk
            key={form.key("phoneNumber")}
            {...form.getInputProps("phoneNumber")}
            inputMode="numeric"
          />
          <br className="hidden lg:block" />
          <TextInput
            label="Email"
            radius={50}
            placeholder="happyaccidents@gmail.com"
            classNames={{
              input: styles.transparentInput,
              label: styles.inputLabel,
              error: styles.inputError,
            }}
            withAsterisk
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
          <br className="hidden lg:block" />
          <div className="mt-[40px] items-center text-center sm:mt-[24px]  sm:flex lg:mt-[18px] lg:gap-3 xl:mt-[24px]  xl:gap-5">
            <Button
              className={styles.formButton}
              radius={50}
              type="submit"
              
            >
              Submit
            </Button>
            {submitted && (
              <p className={styles.sentMessage}>
                Sent! We will reach out to you soon.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CollabrationForm;
